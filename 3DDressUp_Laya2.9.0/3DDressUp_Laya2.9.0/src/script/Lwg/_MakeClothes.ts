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
            this._adaWidth([this._ImgVar('BtnRRotate'), this._ImgVar('BtnLRotate')]);
        }
        lwgOpenAni(): number {
            return 100;
        }
        lwgOnStart(): void {
            _Scene3D = _Res._list.scene3D.MakeClothes.Scene;
            if (!_Scene3D.getComponent(MakeClothes3D)) {
                _Scene3D.addComponent(MakeClothes3D);
            } else {
                _Scene3D.getComponent(MakeClothes3D).lwgOnStart();
            }
            this.Tex.dir = this.Tex.dirType.Reverse;
            EventAdmin._notify(_Event.addTexture2D, [this.Tex.dirType.Reverse, this.Tex.getTex().bitmap]);
            this.Tex.dir = this.Tex.dirType.Front;
            EventAdmin._notify(_Event.addTexture2D, [this.Tex.dirType.Front, this.Tex.getTex().bitmap]);
        }
        lwgEventRegister(): void {
        }
        /**图片移动控制*/
        Tex = {
            Img: null as Laya.Image,
            DisImg: null as Laya.Image,
            touchP: null as Laya.Point,
            diffP: null as Laya.Point,
            state: 'none',
            dir: 'Front',
            dirType: {
                Front: 'Front',
                Reverse: 'Reverse',
            },
            stateType: {
                none: 'none',
                move: 'move',
                scale: 'scale',
                rotate: 'rotate',
                addTex: 'addTex',
            },
            createImg: (element: Laya.Image) => {
                if (this.Tex.DisImg) {
                    this.Tex.DisImg.destroy();
                }
                this.Tex.Img = Tools._Node.simpleCopyImg(element);
                this.Tex.Img.skin = `${element.skin.substr(0, element.skin.length - 7)}.png`;
                // this._SpriteVar(this.Tex.dir).addChild(this.Tex.Img);
                let lPoint = Tools._Point.getOtherLocal(element, this._SpriteVar('Ultimately'));
                // this.Tex.Img.pos(lPoint.x, lPoint.y);
                this.Tex.DisImg = Tools._Node.simpleCopyImg(element);
                this.Tex.DisImg.skin = `${element.skin.substr(0, element.skin.length - 7)}.png`;
                this.Tex.DisImg.pos(lPoint.x, lPoint.y);
                this._SpriteVar('Dispaly').addChild(this.Tex.DisImg);

                this.Tex.Img.width = this.Tex.DisImg.width = 128;
                this.Tex.Img.height = this.Tex.DisImg.height = 128;
                this.Tex.Img.pivotX = this.Tex.Img.pivotY = this.Tex.DisImg.pivotX = this.Tex.DisImg.pivotY = 64;

                this._SpriteVar('Dispaly').visible = true;
                this.Tex.restore();
            },
            getTex: (): Laya.Texture => {
                let Img = this._ImgVar(this.Tex.dir);
                return Img.drawToTexture(Img.width, Img.height, Img.x, Img.y + Img.height) as Laya.Texture;
            },
            setImgPos: (out: Laya.HitResult) => {
                if (!_Hanger) {
                    return;
                }
                if ((0 <= Math.abs(_Hanger.transform.localRotationEulerY) && Math.abs(_Hanger.transform.localRotationEulerY) < 90) || (270 < Math.abs(_Hanger.transform.localRotationEulerY) && Math.abs(_Hanger.transform.localRotationEulerY) <= 360)) {
                    this.Tex.dir = this.Tex.dirType.Front;
                } else {
                    this.Tex.dir = this.Tex.dirType.Reverse;
                }
                this._SpriteVar(this.Tex.dir).addChild(this.Tex.Img);
                console.log(out.collider.owner.name);
                let _width = this._ImgVar(this.Tex.dir).width;
                let _height = this._ImgVar(this.Tex.dir).height;
                //通过xz的角度计算x 
                let angleY = Tools._Point.pointByAngle(_Hanger.transform.position.x - out.point.x, _Hanger.transform.position.z - out.point.z);
                let _angleY = angleY + 90 + _Hanger.transform.localRotationEulerY;
                if (this.Tex.dir == this.Tex.dirType.Front) {
                    this.Tex.Img.x = _width - _width / 180 * (_angleY);
                } else {
                    this.Tex.Img.x = _width / 180 * (_angleY);
                }

                // 通过xy计算y
                let Dir = _Hanger.getChildByName(this.Tex.dir) as Laya.MeshSprite3D;
                let outY = out.point.y;
                let p1 = _Hanger.transform.position.y;
                let _DirHeight = Dir.transform.localScaleY + _Hanger.transform.position.y;

                if (outY > p1) {
                    this.Tex.Img.y = (_DirHeight / 2 - outY) / _DirHeight * _height;
                } else {
                    this.Tex.Img.y = outY / _DirHeight * _height;
                }
                console.log(this.Tex.Img.x, this.Tex.Img.y);
            },
            getOut: (): any => {
                let x = this._ImgVar('Frame').x;
                let y = this._ImgVar('Frame').y;
                let _width = this._ImgVar('Frame').width;
                let _height = this._ImgVar('Frame').height;
                let p1 = [_width * 1 / 4, _height * 1 / 4];
                let p2 = [_width * 1 / 4, _height * 3 / 4];
                let p3 = [_width * 3 / 4, _height * 1 / 4];
                let p4 = [_width * 3 / 4, _height * 3 / 4];
                let p5 = [0, 0];
                let p6 = [x + _width, y];
                let p7 = [x, y + _height];
                let p8 = [x + _width / 2, y + _height / 2];
                let p9 = [x + _width, y + _height];
                let posArr = [p5];
                let bool: boolean = false;
                for (let index = 0; index < posArr.length; index++) {
                    const element = posArr[index];
                    let gPoint = this._SpriteVar('Wireframe').localToGlobal(new Laya.Point(posArr[index][0], posArr[index][1]));
                    let out = Tools._3D.rayScanning(_MainCamara, _Scene3D, new Laya.Vector2(gPoint.x + x, gPoint.y + y), [this.Tex.dirType.Front, this.Tex.dirType.Reverse]) as Laya.HitResult;
                    if (out) {
                        return out;
                    }
                }
                return bool;
            },
            move: (e: Laya.Event) => {
                this.Tex.DisImg.x += this.Tex.diffP.x;
                this.Tex.DisImg.y += this.Tex.diffP.y;
                let gPoint = this._SpriteVar('Dispaly').localToGlobal(new Laya.Point(this.Tex.DisImg.x, this.Tex.DisImg.y))
                this._ImgVar('Wireframe').pos(gPoint.x, gPoint.y);
                if (this.Tex.touchP && this.Tex.Img) {
                    let out = this.Tex.getOut();
                    if (out) {
                        this.Tex.setImgPos(out);
                        this._ImgVar('Wireframe').visible = true;
                        this.Tex.state = this.Tex.stateType.addTex;
                        this._SpriteVar('Dispaly').visible = false;
                        return;
                    }
                }
            },
            addTex: (e: Laya.Event) => {
                this.Tex.Img.x += this.Tex.diffP.x;
                this.Tex.Img.y += this.Tex.diffP.y;
                this.Tex.DisImg.x += this.Tex.diffP.x;
                this.Tex.DisImg.y += this.Tex.diffP.y;
                let gPoint = this._SpriteVar('Dispaly').localToGlobal(new Laya.Point(this.Tex.DisImg.x, this.Tex.DisImg.y))
                this._ImgVar('Wireframe').pos(gPoint.x, gPoint.y);
                if (!this.Tex.getOut()) {
                    this._ImgVar('Wireframe').visible = false;
                    this.Tex.state = this.Tex.stateType.move;
                    this.Tex.Img.x = Laya.stage.width;
                    this._SpriteVar('Dispaly').visible = true;
                }

                EventAdmin._notify(_Event.addTexture2D, [this.Tex.dir, this.Tex.getTex().bitmap]);
            },
            scale: (e: Laya.Event): void => {
                let lPoint = this._ImgVar('Wireframe').globalToLocal(new Laya.Point(e.stageX, e.stageY));
                this._ImgVar('WConversion').pos(lPoint.x, lPoint.y);
                this._ImgVar('Frame').width = lPoint.x;
                this._ImgVar('Frame').height = Math.abs(lPoint.y);

                let gPoint = this._Owner.localToGlobal(new Laya.Point(this._ImgVar('Wireframe').x, this._ImgVar('Wireframe').y));

                this.Tex.Img.rotation = this.Tex.DisImg.rotation = this._ImgVar('Wireframe').rotation = Tools._Point.pointByAngle(e.stageX - gPoint.x, e.stageY - gPoint.y) + 45;

                let scaleWidth = this._ImgVar('Frame').width - this._ImgVar('Wireframe').width;
                let scaleheight = this._ImgVar('Frame').height - this._ImgVar('Wireframe').height;

                this.Tex.DisImg.width = this.Tex.Img.width = 128 + scaleWidth;
                this.Tex.DisImg.height = this.Tex.Img.height = 128 + scaleheight;

                Tools._Node.changePivot(this._ImgVar('Wireframe'), this._ImgVar('Frame').width / 2, this._ImgVar('Frame').height / 2);
                Tools._Node.changePivotCenter(this.Tex.Img);
                Tools._Node.changePivotCenter(this.Tex.DisImg);

                EventAdmin._notify(_Event.addTexture2D, [this.Tex.dir, this.Tex.getTex().bitmap]);
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
                if (this.Tex.DisImg) {
                    this.Tex.DisImg.destroy();
                }
                if (this.Tex.Img) {
                    this.Tex.Img.destroy();
                }
                this.Tex.state = this.Tex.stateType.none;
                this.Tex.touchP = null;
                EventAdmin._notify(_Event.addTexture2D, [this.Tex.dir, this.Tex.getTex().bitmap]);
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
                })
                this._btnUp(this._ImgVar('WClose'), (e: Laya.Event) => {
                    this.Tex.close();
                })
                this._btnDown(this._ImgVar('BtnLRotate'), (e: Laya.Event) => {
                    this._ImgVar('Wireframe').visible = false;
                    this.Tex.state = this.Tex.stateType.rotate;
                })
                this._btnDown(this._ImgVar('BtnRRotate'), (e: Laya.Event) => {
                    this._ImgVar('Wireframe').visible = false;
                    this.Tex.state = this.Tex.stateType.rotate;
                })
            }
        }
        lwgBtnRegister(): void {
            this.Tex.btn();
            this._btnUp(this._ImgVar('BtnNext'), () => {
                this._openScene('MakeUp', true, true);
            })
        }
        onStageMouseDown(e: Laya.Event): void {
            if (_Scene3D) {
                let out = Tools._3D.rayScanning(_MainCamara, _Scene3D, new Laya.Vector2(e.stageX, e.stageY)['Screen'])
                console.log(out);
            }
            this.Tex.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        onStageMouseMove(e: Laya.Event) {
            this.Tex.operation(e);
        }
        onStageMouseUp() {
            if (!this.Tex.getOut()) {
                this.Tex.close();
            }
        }

    }

    class Frame extends lwg3D._Object3D {
        onTriggerEnter(): void {
            console.log('碰撞检测！');
        }
    }

    export let _Scene3D: Laya.Scene3D;
    export let _MainCamara: Laya.Camera;
    export let _Frame: Laya.MeshSprite3D;
    export let _Screen: Laya.MeshSprite3D;
    /**模型的角度*/
    export let _Hanger: Laya.MeshSprite3D;
    export class MakeClothes3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {
            _Hanger = this._Child('Hanger');
            _Frame = this._Child('Frame');
            _Frame.addComponent(Frame);
            _Screen = this._Child('Screen');
            _MainCamara = this._MainCamera;
        }
        lwgReset(): void {
        }
        lwgOnStart(): void {
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.addTexture2D, this, (name: string, Text2D: Laya.Texture2D) => {
                let bMaterial = this._findMRenderer(name).material as Laya.BlinnPhongMaterial;
                bMaterial.albedoTexture.destroy();
                bMaterial.albedoTexture = Text2D;
            })

            EventAdmin._register(_Event.rotateHanger, this, (num: number) => {
                if (num == 1) {
                    this._childTrans('Hanger').localRotationEulerY++;
                } else {
                    this._childTrans('Hanger').localRotationEulerY--;
                }
                this._childTrans('Hanger').localRotationEulerY %= 360;
                let ChildF = _Hanger.getChildByName('CubeF') as Laya.MeshSprite3D;
                let ChildR = _Hanger.getChildByName('CubeR') as Laya.MeshSprite3D;
                // if (ChildF.transform.position.z < ChildR.transform.position.z) {
                //     console.log('Front', this._childTrans('Hanger').localRotationEulerY)
                // } else {
                //     console.log('Reverse', this._childTrans('Hanger').localRotationEulerY)
                // }
            })
        }
    }
}
export default _MakeClothes.MakeClothes;