import lwg, { Admin, Animation2D, DataAdmin, Effects, EventAdmin, TimerAdmin, Tools, _SceneName } from "./Lwg";
import { _Res } from "./_PreLoad";

export module _MakeTailor {
    export enum _Event {
        trigger = '_MakeTailor_trigger',
        completeEffc = '_MakeTailor_completeAni',
        changeClothes = '_MakeTailor_changeClothes',
        scissorAppear = '_MakeTailor_scissorAppear',
        scissorPlay = '_MakeTailor_scissorPlay',
        scissorStop = '_MakeTailor_scissorStop',
        scissorRotation = '_MakeTailor_scissorRotation',
        scissorSitu = '_MakeTailor_scissorSitu',
    }

    /**服装数据*/
    export class _Data extends DataAdmin._Table {
        private static ins: _Data;
        static _Ins() {
            if (!this.ins) {
                this.ins = new _Data('DIY_Data', _Res._list.json.Clothes.url);
                this.ins._pitchClassify = this.ins._classify.Dress
            }
            return this.ins;
        }
        _classify = {
            Dress: 'Dress',
            Top: 'Top',
            Bottoms: 'Bottoms',
        }
    }

    /**剪刀*/
    class _Scissor extends Admin._ObjectBase {
        lwgOnAwake(): void {
            this._Owner.x = Laya.stage.width + 500;
        }
        /**动画控制*/
        Ani = {
            shearSpeed: 4,
            range: 40,
            dir: 'up',
            dirType: {
                up: 'up',
                down: 'down',
            },
            appear: () => {
                let time = 500;
                Animation2D.move_rotate(this._Owner, 720, this._fPoint, time, 0, () => {
                    this._Owner.rotation = 0;
                })
            },
            paly: () => {
                TimerAdmin._clearAll([this.Ani]);
                Animation2D._clearAll([this.Ani]);
                TimerAdmin._frameLoop(1, this.Ani, () => {
                    if (this._SceneImg('S2').rotation > this.Ani.range) {
                        this.Ani.dir = 'up';
                    } else if (this._SceneImg('S2').rotation <= 0) {
                        this.Ani.dir = 'down';
                    }
                    if (this.Ani.dir == 'up') {
                        this._SceneImg('S2').rotation -= this.Ani.shearSpeed * 2;
                        this._SceneImg('S1').rotation += this.Ani.shearSpeed * 2;
                    } else if (this.Ani.dir == 'down') {
                        this._SceneImg('S2').rotation += this.Ani.shearSpeed;
                        this._SceneImg('S1').rotation -= this.Ani.shearSpeed;
                    }
                });
            },
            stop: () => {
                TimerAdmin._frameOnce(30, this.Ani, () => {
                    let time = 100;
                    TimerAdmin._clearAll([this.Ani]);
                    Animation2D._clearAll([this.Ani]);
                    Animation2D.rotate(this._SceneImg('S1'), -this.Ani.range / 3, time)
                    Animation2D.rotate(this._SceneImg('S2'), this.Ani.range / 3, time)
                })
            },

            event: () => {
                this._evReg(_Event.scissorAppear, () => {
                    this.Ani.appear();
                })
                this._evReg(_Event.scissorPlay, () => {
                    this.Ani.paly();
                })
                this._evReg(_Event.scissorStop, () => {
                    this.Ani.stop();
                })
                this._evReg(_Event.scissorSitu, () => {
                    Animation2D.move_rotate(this._Owner, this._fRotation + 360, this._fPoint, 600, 0);
                })
                this._evReg(_Event.scissorRotation, (rotate: number) => {
                    TimerAdmin._clearAll([this._Owner]);
                    let time = 10;
                    let angle: number;
                    if (Math.abs(rotate - this._Owner.rotation) < 180) {
                        angle = rotate - this._Owner.rotation;
                    } else {
                        angle = -(360 - (rotate - this._Owner.rotation));
                    }
                    let unit = angle / time;
                    TimerAdmin._frameNumLoop(1, time, this._Owner, () => {
                        this._Owner.rotation += unit;
                    })
                })
            },
        }
        lwgEvent(): void {
            this.Ani.event();
        }
        Move = {
            touchP: null as Laya.Point,
            diffP: null as Laya.Point,
        }
        lwgButton(): void {
            this._btnFour(this._SceneImg('ScissorsMobile'),
                (e: Laya.Event) => {
                    this._evNotify(_Event.scissorPlay);
                    this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
                },
                (e: Laya.Event) => {
                    if (this.Move.touchP) {
                        this.Move.diffP = new Laya.Point(e.stageX - this.Move.touchP.x, e.stageY - this.Move.touchP.y);
                        this._Owner.x += this.Move.diffP.x;
                        this._Owner.y += this.Move.diffP.y;
                        this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
                        this._evNotify(_Event.scissorPlay);
                    }
                },
                (e: Laya.Event) => {
                    this._evNotify(_Event.scissorStop);
                    this.Move.touchP = null;
                })
        }

        state: string = 'none';//约束当前每次裁剪只裁剪一个线条
        onTriggerEnter(other: Laya.CircleCollider, _Owner: Laya.CircleCollider): void {
            if (this.state == 'none' || this.state == other.owner.parent.name) {
                if (!other['cut']) {
                    other['cut'] = true;
                    this._evNotify(_Event.scissorPlay);
                    this._evNotify(_Event.scissorStop);
                    this.state = other.owner.parent.name;
                    EventAdmin._notify(_Event.trigger, [other.owner]);
                }
            }
        }
        onTriggerExit(other: Laya.CircleCollider, _Owner: Laya.CircleCollider): void {
            if (this.state == other.owner.parent.name) {
                this.state = 'none';
            }
        }
    }

    class _Item extends Admin._ObjectBase {
        lwgButton(): void {
            this._btnUp(this._Owner, () => {
                _Data._Ins()._setPitch(this._Owner['_dataSource'][_Data._Ins()._property.name]);
                this._evNotify(_Event.changeClothes)
            }, null)
        }
    }

    export class MakeTailor extends Admin._SceneBase {
        /**服装控制*/
        DLine = {
            Data: new DataAdmin._Table(),
            getClothesArr: () => {
                if (!this[`DLCloArr`]) {
                    this[`DLCloArr`] = [];
                    let classArr = _Data._Ins()._arr;
                    for (let index = 0; index < classArr.length; index++) {
                        let clo = Tools._Node.createPrefab(_Res._list.prefab2D[`${classArr[index]['name']}`]['prefab']);
                        this[`DLCloArr`].push(clo);
                    }
                }
                return this[`DLCloArr`];
            },
            Clothes: null as Laya.Box,
            LineParent: null as Laya.Image,
            setData: () => {
                this.DLine.Data._arr = [];
                for (let index = 0; index < this.DLine.LineParent.numChildren; index++) {
                    const Line = this.DLine.LineParent.getChildAt(index) as Laya.Image;
                    if (Line.numChildren > 0) {
                        let data = {};
                        data['Line'] = Line;
                        data[this.DLine.Data._property.name] = Line.name;
                        data[this.DLine.Data._property.conditionNum] = Line.numChildren;
                        data[this.DLine.Data._property.degreeNum] = 0;
                        this.DLine.Data._arr.push(data);
                    }
                }
            },
            changeClothes: () => {
                let clothesArr = this.DLine.getClothesArr();
                let name = _Data._Ins()._pitchName ? _Data._Ins()._pitchName : clothesArr[0]['name'];
                for (let index = 0; index < clothesArr.length; index++) {
                    const element = clothesArr[index] as Laya.Box;
                    if (element.name == name) {
                        this._Owner.addChild(element);
                        this.DLine.Clothes = element;
                        element.zOrder = 20;
                        this.DLine.LineParent = element.getChildByName('LineParent') as Laya.Image;
                        this.DLine.setData();
                        return;
                    } else {
                        element.removeSelf();
                    }
                }
            },
        };

        lwgOnAwake(): void {
            this._ImgVar('Scissor').addComponent(_Scissor);

            _Data._Ins()._List = this._ListVar('List');
            _Data._Ins()._List.selectEnable = true;
            _Data._Ins()._List.vScrollBarSkin = "";
            _Data._Ins()._arr = _Data._Ins()._getArrByClassify(_Data._Ins()._classify.Dress);
            _Data._Ins()._List.array = _Data._Ins()._arr;
            _Data._Ins()._List.renderHandler = new Laya.Handler(this, (Cell: Laya.Box, index: number) => {
                let data = Cell.dataSource;
                let Icon = Cell.getChildByName('Icon') as Laya.Image;
                Icon.skin = `Game/UI/Clothes/Icon/${data['name']}.png`;
                let Board = Cell.getChildByName('Board') as Laya.Image;
                Board.skin = `Lwg/UI/ui_orthogon_green.png`;
                if (data[_Data._Ins()._property.pitch]) {
                    Board.skin = `Lwg/UI/ui_l_orthogon_green.png`;
                } else {
                    Board.skin = `Lwg/UI/ui_orthogon_grass.png`;
                }
                if (!Cell.getComponent(_Item)) {
                    Cell.addComponent(_Item)
                }
            });
        }

        lwgAdaptive(): void {
            this._ImgVar('Navigation').x = Laya.stage.width + 500;
            this._ImgVar('BtnChoose').visible = false;
        }
        // lwgOpenAni(): number {
        //     return 200;
        // }
        lwgOpenAniAfter(): void {
            this.Navigation.appear();
        }

        lwgOnStart(): void {
            this.DLine.changeClothes();
        }

        lwgEvent(): void {
            this._evReg(_Event.changeClothes, () => {
                this.DLine.changeClothes();
            })

            this._evReg(_Event.trigger, (Dotted: Laya.Image) => {
                let value = this.DLine.Data._checkCondition(Dotted.parent.name);
                Dotted.visible = false;
                if (value) {
                    // 删除布料
                    let Cloth = this.DLine.Clothes.getChildByName(`Cloth${Dotted.parent.name.substr(4, 1)}`) as Laya.Image;
                    // let ani = this._Owner[`ani${Dotted.parent.name.substr(4)}`] as Laya.Animation;
                    // ani.play(0, false);
                    // ani.on(Laya.Event.COMPLETE, this, () => {
                    Cloth.removeSelf();
                    // })
                    // 检测是否全部完成
                    if (this.DLine.Data._checkAllCompelet()) {
                        Tools._Node.removeAllChildren(this.DLine.LineParent);
                        this._evNotify(_Event.scissorSitu);
                        TimerAdmin._frameOnce(60, this, () => {
                            this._evNotify(_Event.completeEffc);
                        })
                        TimerAdmin._frameOnce(240, this, () => {
                            this._openScene('MakeClothes', true, true);
                        })
                    }
                }
                // 剪刀转向
                let gPos = (Dotted.parent as Laya.Image).localToGlobal(new Laya.Point(Dotted.x, Dotted.y));
                if (Dotted.name == 'A') {
                    if (this._ImgVar('Scissor').x <= gPos.x) {
                        this._evNotify(_Event.scissorRotation, [Dotted.rotation])
                    } else {
                        this._evNotify(_Event.scissorRotation, [180 + Dotted.rotation])
                    }
                } else {
                    if (this._ImgVar('Scissor').y >= gPos.y) {
                        this._evNotify(_Event.scissorRotation, [Dotted.rotation])
                    } else {
                        this._evNotify(_Event.scissorRotation, [180 + Dotted.rotation])
                    }
                }
            })

            this._evReg(_Event.completeEffc, () => {
                this.completeEffc.ani3();
            })
        }

        lwgButton(): void {
            this.Navigation.btn();
        }

        Navigation = {
            appear: () => {
                let time = 500;
                let delay = 800;
                Animation2D.move(this._ImgVar('Navigation'), Laya.stage.width - this._ImgVar('Navigation').width - 80, 0, time, () => {
                    Animation2D.move(this._ImgVar('Navigation'), Laya.stage.width - this._ImgVar('Navigation').width, 0, time / 3, () => {
                        this._ImgVar('BtnChoose').visible = true;
                        Animation2D.bombs_Appear(this._ImgVar('BtnChoose'), 0, 1, 1.1, 0, time / 5, time / 5 / 2)
                    })
                }, delay)
            },
            vinish: () => {
                let time = 400;
                let delay = 100;
                Animation2D.bombs_Vanish(this._ImgVar('BtnChoose'), 0, 0, 0, time / 2, delay, () => {
                    this._evNotify(_Event.scissorAppear);
                    Animation2D.move(this._ImgVar('Navigation'), Laya.stage.width + 500, 0, time);
                })
            },
            btn: () => {
                this._btnUp(this._ImgVar('BtnChoose'), () => {
                    this.Navigation.vinish();
                })
            }
        }


        completeEffc = {
            ani1: () => {
                this._AniVar('complete').play(0, false);
                let _caller = {};
                TimerAdmin._frameLoop(1, _caller, () => {
                    let gP = (this._ImgVar('EFlower').parent as Laya.Image).localToGlobal(new Laya.Point(this._ImgVar('EFlower').x, this._ImgVar('EFlower').y))
                    Effects._Particle._fallingVertical(this._Owner, new Laya.Point(gP.x, gP.y - 40), [0, 0], null, null, [0, 360], [Effects._SkinUrl.花2], [[255, 222, 0, 1], [255, 222, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])

                    Effects._Particle._fallingVertical(this._Owner, new Laya.Point(gP.x, gP.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
                })
                this._AniVar('complete').on(Laya.Event.COMPLETE, this, () => {
                    TimerAdmin._clearAll([_caller]);
                })
            },
            ani2: () => {
                let num = 6;
                let spcaing = 20;
                for (let index = 0; index < num; index++) {
                    let moveY = 7 * index + 5;
                    let p1 = new Laya.Point(-200, Laya.stage.height);
                    let _caller = {};
                    let funcL = () => {
                        p1.x += spcaing;
                        if (p1.x > Laya.stage.width) {
                            Laya.timer.clearAll(_caller);
                        }
                        p1.y -= moveY;
                        Effects._Particle._fallingVertical(this._Owner, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
                    }
                    TimerAdmin._frameLoop(2, _caller, () => {
                        funcL();
                    })

                    let p2 = new Laya.Point(Laya.stage.width + 200, Laya.stage.height);
                    let _callerR = {};
                    let funcR = () => {
                        p2.x -= spcaing;
                        if (p2.x < 0) {
                            Laya.timer.clearAll(_callerR);
                        }
                        p2.y -= moveY;
                        Effects._Particle._fallingVertical(this._Owner, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
                    }
                    TimerAdmin._frameLoop(2, _callerR, () => {
                        funcR();
                    })
                }
            },
            ani3: () => {
                let len = Laya.stage.width;
                let _height = Laya.stage.height * 2.5;

                let Img = new Laya.Image;
                Img.width = 100;
                Img.height = _height;
                Img.rotation = 40;
                Tools._Node.changePivot(Img, 0, _height / 2);
                Img.pos(0, 0);
                Laya.stage.addChild(Img);

                Img.zOrder = 1000;

                let num = 20;
                let spcaing = 40;
                for (let index = 0; index < num; index++) {
                    let p1 = new Laya.Point(0, Img.height / num * index);
                    let p2 = new Laya.Point(Laya.stage.width, Img.height / num * index);
                    let _caller = {};
                    let func = () => {
                        p1.x += spcaing;
                        if (p1.x > len) {
                            Laya.timer.clearAll(_caller);
                        }
                        p2.x -= spcaing;
                        if (p2.x > len) {
                            Laya.timer.clearAll(_caller);
                        }
                        if (index % 2 == 0) {
                            Effects._Particle._fallingVertical(Img, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.星星8], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
                        } else {
                            Effects._Particle._fallingVertical_Reverse(Img, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.星星8], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [-100, -200], [-0.8, -1.5], [-0.05, -0.1])
                        }
                    }
                    TimerAdmin._frameNumLoop(2, 50, _caller, () => {
                        func();
                    })
                }
            }
        }
    }
}