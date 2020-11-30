import { TaT } from "../TJ/Admanager";
import { Admin, EventAdmin, TimerAdmin, Tools } from "./Lwg";
import { lwg3D } from "./Lwg3D";
import { _MakeUp } from "./_MakeUp";
import { _Res } from "./_PreLoad";
export module _MakeClothes {
    export enum _Event {
        addTexture2D = '_MakeClothes_addTexture2D',
        rotateHanger = '_MakeClothes_rotateHanger',
        moveUltimately = '_MakeClothes_moveUltimately',
        resetTex = '_MakeClothes_resetTex',
        changeDir = '_MakeClothes_resetTex',
    }
    export class MakeClothes extends Admin._SceneBase {
        lwgOnAwake(): void {
        }

        lwgAdaptive(): void {
            // this._adaptiveCenter([this._SpriteVar('Ultimately'), this._SpriteVar('Dispaly')]);
            this._adaWidth([this._ImgVar('BtnR'), this._ImgVar('BtnL')]);
        }
    
        lwgOnStart(): void {
            // console.log(Laya.stage['_children'])
            _Scene3D = _Res._list.scene3D.MakeClothes.Scene;
            if (!_Scene3D.getComponent(MakeClothes3D)) {
                _Scene3D.addComponent(MakeClothes3D);
            } else {
                _Scene3D.getComponent(MakeClothes3D).lwgOnStart();
            }
            EventAdmin._notify(_Event.addTexture2D, this.Tex.getTex());
        }
        lwgEvent(): void {
        }
        /**图片移动控制*/
        Tex = {
            Img: null as Laya.Image,
            DisImg: null as Laya.Image,
            imgWH: [128, 128],
            touchP: null as Laya.Point,
            diffP: null as Laya.Point,
            dir: 'Front',
            dirType: {
                Front: 'Front',
                Reverse: 'Reverse',
            },
            state: 'none',
            stateType: {
                none: 'none',
                move: 'move',
                scale: 'scale',
                rotate: 'rotate',
                addTex: 'addTex',
            },
            createImg: (element: Laya.Image) => {
                this.Tex.DisImg && this.Tex.DisImg.destroy();
                this.Tex.Img = Tools._Node.simpleCopyImg(element);
                let lPoint = Tools._Point.getOtherLocal(element, this._SpriteVar('Ultimately'));
                this.Tex.DisImg = Tools._Node.simpleCopyImg(element);
                this._SpriteVar('Dispaly').addChild(this.Tex.DisImg);

                this.Tex.Img.skin = this.Tex.DisImg.skin = `${element.skin.substr(0, element.skin.length - 7)}.png`;
                this.Tex.Img.x = this.Tex.DisImg.x = lPoint.x;
                this.Tex.Img.y = this.Tex.DisImg.y = lPoint.y;
                this.Tex.Img.width = this.Tex.DisImg.width = this.Tex.imgWH[0];
                this.Tex.Img.height = this.Tex.DisImg.height = this.Tex.imgWH[1];
                this.Tex.Img.pivotX = this.Tex.Img.pivotY = this.Tex.DisImg.pivotX = this.Tex.DisImg.pivotY = 64;
                this._SpriteVar('Dispaly').visible = true;
                this.Tex.restore();
            },
            getTex: (): Array<Laya.Texture> => {
                let ImgF = this._ImgVar(this.Tex.dirType.Front);
                let ImgR = this._ImgVar(this.Tex.dirType.Reverse);
                let arr = [
                    ImgF.drawToTexture(ImgF.width, ImgF.height, ImgF.x, ImgF.y + ImgF.height) as Laya.Texture,
                    ImgR.drawToTexture(ImgR.width, ImgR.height, ImgR.x, ImgR.y + ImgR.height) as Laya.Texture
                ]
                return arr;
            },
            checkDir: () => {
                if (0 <= _HangerSimRY && _HangerSimRY < 180) {
                    this.Tex.dir = this.Tex.dirType.Front;
                } else {
                    this.Tex.dir = this.Tex.dirType.Reverse;
                }
            },
            setImgPos: (): boolean => {
                let posArr = this.Tex.setPosArr();
                let indexArr: Array<Laya.Point> = [];
                let fOutArr: Array<Laya.HitResult> = [];
                let rOutArr: Array<Laya.HitResult> = [];
                for (let index = 0; index < posArr.length; index++) {
                    let gPoint = this._SpriteVar('Wireframe').localToGlobal(new Laya.Point(posArr[index].x, posArr[index].y));
                    let _outF = Tools._3D.rayScanning(_MainCamara, _Scene3D, new Laya.Vector2(gPoint.x, gPoint.y), this.Tex.dirType.Front);
                    _outF && fOutArr.push(_outF)
                    let _outR = Tools._3D.rayScanning(_MainCamara, _Scene3D, new Laya.Vector2(gPoint.x, gPoint.y), this.Tex.dirType.Reverse);
                    _outR && rOutArr.push(_outR)
                    if (_outF || _outR) {
                        indexArr.push(posArr[index]);
                        // let Img = this._Owner.getChildByName(`Img${index}`) as Laya.Image;
                        // if (!Img) {
                        //     let Img = new Laya.Image;
                        //     Img.skin = `Lwg/UI/ui_circle_003.png`;
                        //     this._Owner.addChild(Img);
                        //     Img.name = `Img${index}`;
                        //     Img.width = 40;
                        //     Img.height = 40;
                        //     Img.pivotX = Img.width / 2;
                        //     Img.pivotY = Img.height / 2;
                        // } else {
                        //     Img.pos(gPoint.x, gPoint.y);
                        // }
                    }
                }
                if (indexArr.length !== 0) {
                    let out: Laya.HitResult;
                    if (fOutArr.length == rOutArr.length) {
                        // console.log('两个都碰到了！');
                        this.Tex.checkDir();
                    } else if (fOutArr.length > rOutArr.length) {
                        // console.log('正面')
                        this.Tex.dir = this.Tex.dirType.Front;
                    } else if (fOutArr.length < rOutArr.length) {
                        // console.log('反面')
                        this.Tex.dir = this.Tex.dirType.Reverse;
                    }
                    if (this.Tex.dir == this.Tex.dirType.Front) {
                        out = fOutArr[fOutArr.length - 1]
                    } else {
                        out = rOutArr[rOutArr.length - 1]
                    }
                    this._SpriteVar(this.Tex.dir).addChild(this.Tex.Img);
                    Tools._Node.changePivot(this.Tex.Img, indexArr[indexArr.length - 1].x, indexArr[indexArr.length - 1].y);
                    let _width = this._ImgVar(this.Tex.dir).width;
                    let _height = this._ImgVar(this.Tex.dir).height;
                    //通过xz的角度计算x的比例，俯视
                    let angleXZ = Tools._Point.pointByAngle(_HangerP.transform.position.x - out.point.x, _HangerP.transform.position.z - out.point.z);
                    let _angleY: number;
                    if (this.Tex.dir == this.Tex.dirType.Front) {
                        _angleY = angleXZ + _HangerSimRY;
                    } else {
                        _angleY = angleXZ + _HangerSimRY - 180;
                    }
                    this.Tex.Img.x = _width - _width / 180 * (_angleY);

                    // 通过xy计算y
                    let pH = out.point.y - _HangerP.transform.position.y;//扫描点位置
                    let _DirHeight = Tools._3D.getMeshSize(_Hanger.getChildByName(this.Tex.dir) as Laya.MeshSprite3D).y;
                    let ratio = 1 - pH / _DirHeight;//比例
                    this.Tex.Img.y = ratio * _height;
                    return true;
                } else {
                    return false;
                }
            },
            setPosArr: (): Array<Laya.Point> => {
                let x = this._ImgVar('Frame').x;
                let y = this._ImgVar('Frame').y;
                let _width = this._ImgVar('Frame').width;
                let _height = this._ImgVar('Frame').height;
                return [
                    new Laya.Point(x, y),
                    new Laya.Point(x + _width, y),
                    new Laya.Point(_width * 1 / 4, _height * 3 / 4),
                    new Laya.Point(_width * 3 / 4, _height * 1 / 4),
                    new Laya.Point(x + _width / 2, y + _height / 2),
                    new Laya.Point(_width * 1 / 4, _height * 1 / 4),
                    new Laya.Point(_width * 3 / 4, _height * 3 / 4),
                    new Laya.Point(x, y + _height),
                    new Laya.Point(x + _width, y + _height),
                ];
            },
            crashType: {
                setImgPos: 'setImgPos',
                enter: 'enter',
                inside: 'inside',
            },
            /**
             * 检测是不是在模型中
             * */
            chekInside: (): any => {
                this.Tex.checkDir();
                let posArr = this.Tex.setPosArr()
                let fOutArr: Array<Laya.HitResult> = [];
                let rOutArr: Array<Laya.HitResult> = [];
                for (let index = 0; index < posArr.length; index++) {
                    let gPoint = this._SpriteVar('Wireframe').localToGlobal(new Laya.Point(posArr[index].x, posArr[index].y));
                    let _outF = Tools._3D.rayScanning(_MainCamara, _Scene3D, new Laya.Vector2(gPoint.x, gPoint.y), this.Tex.dirType.Front);
                    _outF && fOutArr.push(_outF)
                    let _outR = Tools._3D.rayScanning(_MainCamara, _Scene3D, new Laya.Vector2(gPoint.x, gPoint.y), this.Tex.dirType.Reverse);
                    _outR && rOutArr.push(_outR)
                }
                if (fOutArr.length !== 0 || rOutArr.length !== 0) {
                    return true;
                } else {
                    return false;
                }
            },
            disMove: () => {
                this.Tex.DisImg.x += this.Tex.diffP.x;
                this.Tex.DisImg.y += this.Tex.diffP.y;
                let gPoint = this._SpriteVar('Dispaly').localToGlobal(new Laya.Point(this.Tex.DisImg.x, this.Tex.DisImg.y))
                this._ImgVar('Wireframe').pos(gPoint.x, gPoint.y);
            },
            move: (e: Laya.Event) => {
                this.Tex.disMove();
                this._ImgVar('Wireframe').visible = false;
                if (this.Tex.chekInside()) {
                    this.Tex.setImgPos();
                    this._ImgVar('Wireframe').visible = true;
                    this.Tex.state = this.Tex.stateType.addTex;
                    this._SpriteVar('Dispaly').visible = false;
                }
            },
            addTex: (e: Laya.Event) => {
                this.Tex.disMove();
                let out = this.Tex.setImgPos();
                if (!out) {
                    this._ImgVar('Wireframe').visible = false;
                    this.Tex.state = this.Tex.stateType.move;
                    this.Tex.Img.x = Laya.stage.width;
                    this._SpriteVar('Dispaly').visible = true;
                }
                EventAdmin._notify(_Event.addTexture2D, this.Tex.getTex());
            },
            scale: (e: Laya.Event): void => {
                let lPoint = this._ImgVar('Wireframe').globalToLocal(new Laya.Point(e.stageX, e.stageY));
                this._ImgVar('Frame').width = this._ImgVar('WConversion').x = lPoint.x;
                this._ImgVar('Frame').height = this._ImgVar('WConversion').y = lPoint.y;

                let gPoint = this._Owner.localToGlobal(new Laya.Point(this._ImgVar('Wireframe').x, this._ImgVar('Wireframe').y));
                this.Tex.Img.rotation = this.Tex.DisImg.rotation = this._ImgVar('Wireframe').rotation = Tools._Point.pointByAngle(e.stageX - gPoint.x, e.stageY - gPoint.y) + 45;

                let scaleWidth = this._ImgVar('Frame').width - this._ImgVar('Wireframe').width;
                let scaleheight = this._ImgVar('Frame').height - this._ImgVar('Wireframe').height;

                this.Tex.DisImg.width = this.Tex.Img.width = this.Tex.imgWH[0] + scaleWidth;
                this.Tex.DisImg.height = this.Tex.Img.height = this.Tex.imgWH[1] + scaleheight;

                Tools._Node.changePivot(this._ImgVar('Wireframe'), this._ImgVar('Frame').width / 2, this._ImgVar('Frame').height / 2);
                Tools._Node.changePivotCenter(this.Tex.Img);
                Tools._Node.changePivotCenter(this.Tex.DisImg);
                this.Tex.setImgPos();
                EventAdmin._notify(_Event.addTexture2D, this.Tex.getTex());
            },
            rotate: (e: Laya.Event) => {
                if (this.Tex.diffP.x > 0) {
                    EventAdmin._notify(_Event.rotateHanger, [1]);
                } else {
                    EventAdmin._notify(_Event.rotateHanger, [0]);
                }
            },
            none: () => {
                return;
            },
            operation: (e: Laya.Event): void => {
                this.Tex.diffP = new Laya.Point(e.stageX - this.Tex.touchP.x, e.stageY - this.Tex.touchP.y);
                this.Tex[this.Tex.state](e);
                this.Tex.touchP = new Laya.Point(e.stageX, e.stageY);
            },
            /**重制方框*/
            restore: () => {
                this._ImgVar('Wireframe').rotation = 0;
                this._ImgVar('Wireframe').pivotX = this._ImgVar('Wireframe').width / 2;
                this._ImgVar('Wireframe').pivotY = this._ImgVar('Wireframe').height / 2;
                this._ImgVar('WConversion').x = this._ImgVar('Frame').width = this._ImgVar('Wireframe').width;
                this._ImgVar('WConversion').y = this._ImgVar('Frame').height = this._ImgVar('Wireframe').height;
                this._ImgVar('Wireframe').visible = false;
            },
            /**关闭方框去掉图片*/
            close: (): void => {
                this.Tex.restore();
                this.Tex.DisImg && this.Tex.DisImg.destroy();
                this.Tex.Img && this.Tex.Img.destroy();
                this.Tex.state = this.Tex.stateType.none;
                this.Tex.touchP = null;
                EventAdmin._notify(_Event.addTexture2D, this.Tex.getTex());
            },
            btn: () => {
                for (let index = 0; index < this._ImgVar('Figure').numChildren; index++) {
                    const element = this._ImgVar('Figure').getChildAt(index) as Laya.Image;
                    this._btnDown(element, (e: Laya.Event) => {
                        this.Tex.state = this.Tex.stateType.move;
                        this.Tex.createImg(element);
                    })
                }
                this._btnFour(this._ImgVar('WConversion'), (e: Laya.Event) => {
                    this.Tex.state = this.Tex.stateType.scale;
                }, null, (e: Laya.Event) => {
                    this.Tex.state = this.Tex.stateType.addTex;
                }, (e: Laya.Event) => {
                    this.Tex.state = this.Tex.stateType.addTex;
                })
                this._btnUp(this._ImgVar('WClose'), (e: Laya.Event) => {
                    this.Tex.close();
                })
                this._btnFour(this._ImgVar('BtnL'), (e: Laya.Event) => {
                    this._ImgVar('Wireframe').visible = false;
                    this.Tex.state = this.Tex.stateType.rotate;
                    TimerAdmin._frameLoop(1, this._ImgVar('BtnL'), () => {
                        EventAdmin._notify(_Event.rotateHanger, [0]);
                    })


                }, null, () => {
                    Laya.timer.clearAll(this._ImgVar('BtnL'));
                }, () => {
                    Laya.timer.clearAll(this._ImgVar('BtnL'));
                })
                this._btnFour(this._ImgVar('BtnR'), (e: Laya.Event) => {
                    // var htmlCanvas1: Laya.HTMLCanvas =_Scene3D.drawToCanvas(Laya.stage.width, Laya.stage.height, 0, 0);
                    // let base641 = htmlCanvas1.toBase64("image/png", 1);
                    // this._ImgVar('TestImg').skin = base641;
                    // console.log(base641);
                    // var htmlCanvas1: Laya.HTMLCanvas = Laya.stage.drawToCanvas(Laya.stage.width, Laya.stage.height, 0, 0);
                    // let base641 = htmlCanvas1.toBase64("image/png", 1);
                    // let tex = _Scene3D.drawToTexture(this._ImgVar('TestSp').x, this._ImgVar('TestSp').y, 0, 0) as Laya.Texture;
                    // this._ImgVar('TestSp').texture = tex;

                    this._ImgVar('Wireframe').visible = false;
                    this.Tex.state = this.Tex.stateType.rotate;
                    TimerAdmin._frameLoop(1, this._ImgVar('BtnR'), () => {
                        EventAdmin._notify(_Event.rotateHanger, [1]);
                    })
                }, null, () => {
                    Laya.timer.clearAll(this._ImgVar('BtnR'));
                }, () => {
                    Laya.timer.clearAll(this._ImgVar('BtnR'));
                })
            }
        }
        lwgButton(): void {
            this.Tex.btn();
            this._btnUp(this._ImgVar('BtnNext'), () => {
                this._openScene('DressingRoom', true, true);
            })
        }
        onStageMouseDown(e: Laya.Event): void {
            this.Tex.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        onStageMouseMove(e: Laya.Event) {
            this.Tex.operation(e);
        }
        onStageMouseUp() {
            !this.Tex.chekInside() && this.Tex.close();
        }
        lwgCloseAni(): number {
            return 10;
        }
    }
    export let _Scene3D: Laya.Scene3D;
    export let _MainCamara: Laya.Camera;
    /**模型的角度*/
    export let _Hanger: Laya.MeshSprite3D;
    export let _HangerP: Laya.MeshSprite3D;
    export let _HangerSimRY = 90;
    export class MakeClothes3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {
            _Hanger = this._Child('Hanger');
            _HangerP = this._Child('HangerP');
            _MainCamara = this._MainCamera;
        }
        lwgEvent(): void {
            EventAdmin._register(_Event.addTexture2D, this, (Text2DF: Laya.Texture2D, Text2DR: Laya.Texture2D) => {
                let bMaterialR = this._findMRenderer('Reverse').material as Laya.BlinnPhongMaterial;
                bMaterialR.albedoTexture.destroy();
                bMaterialR.albedoTexture = Text2DR;

                let bMaterialF = this._findMRenderer('Front').material as Laya.BlinnPhongMaterial;
                bMaterialF.albedoTexture.destroy();
                bMaterialF.albedoTexture = Text2DF;

            })

            EventAdmin._register(_Event.rotateHanger, this, (num: number) => {
                if (num == 1) {
                    this._childTrans('Hanger').localRotationEulerY++;
                    _HangerSimRY++;
                    if (_HangerSimRY > 360) {
                        _HangerSimRY = 0;
                    }
                } else {
                    this._childTrans('Hanger').localRotationEulerY--;
                    _HangerSimRY--;
                    if (_HangerSimRY < 0) {
                        _HangerSimRY = 359;
                    }
                }
            })
        }
    }
}
export default _MakeClothes.MakeClothes;