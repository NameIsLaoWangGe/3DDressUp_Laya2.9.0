import { Admin, EventAdmin, TimerAdmin, Tools } from "./Lwg";
import { lwg3D } from "./Lwg3D";
import { _Res } from "./_PreLoad";
export module _MakeClothes {
    export enum _Event {
        addTexture2D = '_MakeClothes_addTexture2D',
        rotateHanger = '_MakeClothes_rotateHanger',
        moveUltimately = '_MakeClothes_moveUltimately',
    }
    export class MakeClothes extends Admin._SceneBase {
        lwgOnAwake(): void {
            _Scene3D = _Res._list.scene3D.MakeClothes.Scene;
            if (!_Scene3D.getComponent(MakeClothes3D)) {
                _Scene3D.addComponent(MakeClothes3D);
            }
        }
        lwgAdaptive(): void {
            this._adaptiveCenter([this._SpriteVar('UltimatelyParent'), this._SpriteVar('Dispaly')]);
            this._adaptiveWidth([this._ImgVar('BtnRRotate'), this._ImgVar('BtnLRotate')]);
        }
        lwgOpenAni(): number {
            return 100;
        }
        lwgEventRegister(): void {
            let ultimatelyParentOriX = this._SpriteVar('UltimatelyParent').x;
            let figureOriX = this._ImgVar('Figure').x;
            EventAdmin._register(_Event.moveUltimately, this, (angle: number) => {
                this._SpriteVar('Dispaly').x = this._SpriteVar('UltimatelyParent').x = ultimatelyParentOriX - angle % 360;
                this._Owner.x = 0 + angle % 360;
                this._Owner.width = Laya.stage.width - angle % 360;
                this._ImgVar('Figure').x = figureOriX - angle % 360;
            })
        }
        /**图片移动控制*/
        TexControl = {
            Img: null as Laya.Image,
            DisplayImg: null as Laya.Image,
            touchP: null as Laya.Point,
            diffP: null as Laya.Point,
            state: 'none',
            stateType: {
                none: 'none',
                move: 'move',
                scale: 'scale',
                rotate: 'rotate',
            },
            createImg: (element: Laya.Image) => {
                this.TexControl.Img = Tools._Node.simpleCopyImg(element);
                this.TexControl.Img.skin = `${element.skin.substr(0, element.skin.length - 7)}.png`;
                this._SpriteVar('Ultimately').addChild(this.TexControl.Img);
                let lPoint = Tools._Point.getOtherLocal(element, this._SpriteVar('UltimatelyParent'));
                this.TexControl.Img.pos(lPoint.x, lPoint.y);

                this.TexControl.DisplayImg = Tools._Node.simpleCopyImg(element);
                this.TexControl.DisplayImg.skin = `${element.skin.substr(0, element.skin.length - 7)}.png`;
                this.TexControl.DisplayImg.pos(lPoint.x, lPoint.y);
                this._SpriteVar('Dispaly').addChild(this.TexControl.DisplayImg);

                this.TexControl.Img.width = this.TexControl.DisplayImg.width = 128;
                this.TexControl.Img.height = this.TexControl.DisplayImg.height = 128;
                this.TexControl.restore();
            },
            getTex: (): Laya.Texture => {
                return this._ImgVar('Ultimately').drawToTexture(this._ImgVar('Ultimately').width, this._ImgVar('Ultimately').height, this._ImgVar('Ultimately').x, this._ImgVar('Ultimately').y + this._ImgVar('Ultimately').height) as Laya.Texture;
            },
            move: (e: Laya.Event) => {
                if (this.TexControl.touchP && this.TexControl.Img) {
                    this.TexControl.Img.x += this.TexControl.diffP.x;
                    this.TexControl.Img.y += this.TexControl.diffP.y;
                    this.TexControl.DisplayImg.x += this.TexControl.diffP.x;
                    this.TexControl.DisplayImg.y += this.TexControl.diffP.y;
                    this.TexControl.touchP = new Laya.Point(e.stageX, e.stageY);

                    let gPoint = this._SpriteVar('Dispaly').localToGlobal(new Laya.Point(this.TexControl.DisplayImg.x, this.TexControl.DisplayImg.y))
                    this._ImgVar('Wireframe').pos(gPoint.x, gPoint.y);
                }
            },
            scale: (e: Laya.Event): void => {
                let lPoint = this._ImgVar('Wireframe').globalToLocal(new Laya.Point(e.stageX, e.stageY));
                this._ImgVar('WConversion').pos(lPoint.x, lPoint.y);
                this._ImgVar('Frame').width = lPoint.x;
                this._ImgVar('Frame').height = Math.abs(lPoint.y);

                let gPoint = this._Owner.localToGlobal(new Laya.Point(this._ImgVar('Wireframe').x, this._ImgVar('Wireframe').y));
                let diffP = new Laya.Point(e.stageX - gPoint.x, e.stageY - gPoint.y);
                this.TexControl.Img.rotation = this.TexControl.DisplayImg.rotation = this._ImgVar('Wireframe').rotation = Tools._Point.pointByAngle(diffP.x, diffP.y) + 45;

                let scaleWidth = this._ImgVar('Frame').width - this._ImgVar('Wireframe').width;
                let scaleheight = this._ImgVar('Frame').height - this._ImgVar('Wireframe').height;

                this.TexControl.DisplayImg.width = this.TexControl.Img.width = 128 + scaleWidth;
                this.TexControl.DisplayImg.height = this.TexControl.Img.height = 128 + scaleheight;

                Tools._Node.changePovit(this.TexControl.Img, this.TexControl.Img.width / 2, this.TexControl.Img.height / 2);
                Tools._Node.changePovit(this.TexControl.DisplayImg, this.TexControl.DisplayImg.width / 2, this.TexControl.DisplayImg.height / 2);
            },
            rotate: (e: Laya.Event) => {
                this._ImgVar('Wireframe').visible = false;
                if (this.TexControl.diffP.x > 0) {
                    EventAdmin._notify(_Event.rotateHanger, [1]);
                } else {
                    EventAdmin._notify(_Event.rotateHanger, [0]);
                }
            },
            none: () => {
                return;
            },
            checkDisplay: (e: Laya.Event): void => {
                if (this.TexControl.state != this.TexControl.stateType.move) {
                    return;
                }
                if (this.TexControl.DisplayImg.x > - this.TexControl.DisplayImg.width && this.TexControl.DisplayImg.x < this._SpriteVar('Dispaly').width) {
                    this.TexControl.DisplayImg.visible = false;
                } else {
                    if (this.TexControl.DisplayImg.y > - this.TexControl.DisplayImg.height && this.TexControl.DisplayImg.y < this._SpriteVar('Dispaly').height) {
                        this.TexControl.DisplayImg.visible = true;
                    } else {
                        this.TexControl.DisplayImg.visible = true;
                    }
                }
                this._ImgVar('Wireframe').visible = !this.TexControl.DisplayImg.visible;
            },
            operation: (e: Laya.Event): void => {
                this.TexControl.diffP = new Laya.Point(e.stageX - this.TexControl.touchP.x, e.stageY - this.TexControl.touchP.y);
                this.TexControl[this.TexControl.state](e);
                this.TexControl.checkDisplay(e);
                EventAdmin._notify(_Event.addTexture2D, [this.TexControl.getTex().bitmap]);
            },
            restore: () => {
                this._ImgVar('Wireframe').rotation = 0;
                this._ImgVar('Wireframe').pivotX = this._ImgVar('Wireframe').width / 2;
                this._ImgVar('Wireframe').pivotY = this._ImgVar('Wireframe').height / 2;
                this._ImgVar('WConversion').x = this._ImgVar('Frame').width = this._ImgVar('Wireframe').width;
                this._ImgVar('WConversion').y = this._ImgVar('Frame').height = this._ImgVar('Wireframe').height;
                this._ImgVar('Wireframe').visible = false;
            },
            close: (): void => {
                this.TexControl.DisplayImg.destroy();
                this.TexControl.Img.destroy();
                this.TexControl.restore();
                this.TexControl.state = this.TexControl.stateType.none;
                EventAdmin._notify(_Event.addTexture2D, [this.TexControl.getTex().bitmap]);
            },
            btn: () => {
                for (let index = 0; index < this._ImgVar('Figure').numChildren; index++) {
                    const element = this._ImgVar('Figure').getChildAt(index) as Laya.Image;
                    this._btnDown(element, (e: Laya.Event) => {
                        if (!this[`FigureParentelement${index}`]) {
                            this[`FigureParentelement${index}`] = true;
                        }
                        this.TexControl.state = this.TexControl.stateType.move;
                        this.TexControl.createImg(element);
                    })
                }
                this._btnFour(this._ImgVar('WConversion'), (e: Laya.Event) => {
                    this.TexControl.state = this.TexControl.stateType.scale;
                }, null, (e: Laya.Event) => {
                    this.TexControl.state = this.TexControl.stateType.move;
                })
                this._btnUp(this._ImgVar('WClose'), (e: Laya.Event) => {
                    this.TexControl.close();
                })
                this._btnDown(this._ImgVar('BtnLRotate'), (e: Laya.Event) => {
                    this.TexControl.state = this.TexControl.stateType.rotate;
                })
                this._btnDown(this._ImgVar('BtnRRotate'), (e: Laya.Event) => {
                    this.TexControl.state = this.TexControl.stateType.rotate;
                })
            }
        }
        lwgBtnRegister(): void {
            this.TexControl.btn();
            this._btnUp(this._ImgVar('BtnNext'), () => {
                this._openScene('MakeUp', true, true);
            })
        }
        onStageMouseDown(e: Laya.Event): void {
            this.TexControl.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        onStageMouseMove(e: Laya.Event) {
            this.TexControl.operation(e);
        }
        onStageMouseUp() {
            this.TexControl.touchP = null;
        }
    }
    export let _Scene3D: Laya.Scene3D;
    export let _HangerTrans: Laya.Transform3D;
    export class MakeClothes3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {
            _HangerTrans = this._childTrans('Hanger');
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.addTexture2D, this, (Text2D: Laya.Texture2D) => {
                let bMaterial = this._child('Hanger').meshRenderer.material as Laya.BlinnPhongMaterial;
                bMaterial.albedoTexture.destroy();
                bMaterial.albedoTexture = Text2D;
            })

            EventAdmin._register(_Event.rotateHanger, this, (num: number) => {
                if (num == 1) {
                    this._childTrans('Hanger').localRotationEulerY++;
                } else {
                    this._childTrans('Hanger').localRotationEulerY--;
                }
                EventAdmin._notify(_Event.moveUltimately, this._childTrans('Hanger').localRotationEulerY)

                // let out = Tools._3D.d3_rayScanning(this._MainCamera, this._Owner, new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2), 'Hanger');
                // console.log(out);
            })
        }
    }
}
export default _MakeClothes.MakeClothes;