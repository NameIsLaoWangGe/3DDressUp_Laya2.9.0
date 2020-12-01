import lwg, { Admin, Animation2D, DataAdmin, Effects, EventAdmin, TimerAdmin, Tools, _SceneName } from "./Lwg";
import { _Res } from "./_PreLoad";

export module _MakeTailor {
    export enum _Event {
        trigger = '_MakeTailor_trigger',
        completeAni = '_MakeTailor_completeAni',
        scissorPlay = '_MakeTailor_scissorPlay',
        scissorStop = '_MakeTailor_scissorStop',
        scissorRotation = '_MakeTailor_scissorRotation',
        scissorSitu = '_MakeTailor_scissorSitu',
    }

    /**虚线控制*/
    export class DottedLine extends DataAdmin._Table {
        LineParent: Laya.Image;
        OwnerScene: Laya.Scene;
        constructor(LineParent: Laya.Image, OwnerScene: Laya.Scene) {
            super();
            this.LineParent = LineParent;
            this.OwnerScene = OwnerScene;
            for (let index = 0; index < this.LineParent.numChildren; index++) {
                const Line = this.LineParent.getChildAt(index) as Laya.Image;
                if (Line.numChildren > 0) {
                    let data = {};
                    data['Line'] = Line;
                    data[this._property.name] = Line.name;
                    data[this._property.conditionNum] = Line.numChildren;
                    data[this._property.degreeNum] = 0;
                    this._arr.push(data);
                }
            }
        }
    }

    /**服装数据*/
    export class _Data extends DataAdmin._Table {
        private static ins: _Data;
        static _Ins() {
            if (!this.ins) {
                this.ins = new _Data('DIY_Data', _Res._list.json.Clothes.url);
            }
            return this.ins;
        }
    }

    /**剪刀*/
    class _Scissor extends Admin._ObjectBase {
        state: string = 'none';//约束当前每次裁剪只裁剪一个线条
        /**动画控制*/
        Ani = {
            shearSpeed: 4,
            range: 40,
            dir: 'up',
            dirType: {
                up: 'up',
                down: 'down',
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
                this._evReg(_Event.scissorPlay, () => {
                    this.Ani.paly();
                })
                this._evReg(_Event.scissorStop, () => {
                    this.Ani.stop();
                })
                this._evReg(_Event.scissorSitu, () => {
                    Animation2D.move_rotate(this._Owner, this._fRotation + 360, this._fPoint, 600, 0, () => {
                        this._evNotify(_Event.completeAni);
                    });
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
            }, null)
        }
    }
    export class MakeTailor extends Admin._SceneBase {
        DLineControl: DottedLine;
        lwgOnAwake(): void {
            this.DLineControl = new DottedLine(this._ImgVar('LineParent'), this._Owner);
            this._ImgVar('Scissor').addComponent(_Scissor);

            _Data._Ins()._List = this._ListVar('List');
            _Data._Ins()._List.selectEnable = true;
            _Data._Ins()._List.vScrollBarSkin = "";
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
            this._ImgVar('Navigation').x = Laya.stage.width - 500;
            this._ImgVar('BtnChoose').visible = false;
            this._ImgVar('BtnComplete').visible = false;
        }
        // lwgOpenAni(): number {
        //     return 100;
        // }
        lwgOpenAniAfter(): void {

        }

        NavAni = {
            chooseAppear: () => {
                let time = 200;
                Animation2D.move(this._ImgVar('Navigation'), Laya.stage.width - this._ImgVar('Navigation').width - 50, 0, time, () => {
                    Animation2D.move(this._ImgVar('Navigation'), Laya.stage.width - this._ImgVar('Navigation').width, 0, time / 3, () => {
                        // Animation2D.bombs_Appear()
                    })
                })
            },
            vinish: () => {

            }
        }

        lwgEvent(): void {
            this._evReg(_Event.completeAni, () => {
                this.completeAni.ani3();
            })

            this._evReg(_Event.trigger, (Dotted: Laya.Image) => {
                let value = this.DLineControl._checkCondition(Dotted.parent.name);
                Dotted.visible = false;
                if (value) {
                    // 删除布料
                    let Cloth = this._ImgVar('Root').getChildByName(`Cloth${Dotted.parent.name.substr(4)}`) as Laya.Image;
                    let ani = this._Owner[`ani${Dotted.parent.name.substr(4)}`] as Laya.Animation;
                    ani.play(0, false);
                    ani.on(Laya.Event.COMPLETE, this, () => {
                        Cloth.removeSelf();
                    })
                    // 检测是否全部完成
                    if (this.DLineControl._checkAllCompelet()) {
                        Tools._Node.removeAllChildren(this._ImgVar('LineParent'));
                        this._evNotify(_Event.scissorSitu);
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
        }

        lwgButton(): void {
            this._btnUp(this._ImgVar('BtnComplete'), () => {
                this._openScene('MakeClothes', true, true);
            })
        }

        completeAni = {
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
                            Effects._Particle._fallingVertical(Img, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
                        } else {
                            Effects._Particle._fallingVertical_Reverse(Img, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [Effects._SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [-100, -200], [-0.8, -1.5], [-0.05, -0.1])
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