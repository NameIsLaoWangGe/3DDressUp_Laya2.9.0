import { Admin, EventAdmin, TimerAdmin, Tools } from "./Lwg";
import { lwg3D } from "./Lwg3D";
import { _Res } from "./_PreLoad";

export module _MakeClothes {
    export enum _Event {
        addTexture2D = '_MakeClothes_addTexture2D',
    }
    export class MakeClothes extends Admin._SceneBase {
        lwgOnAwake(): void {
            _Scene3D = _Res._list.scene3D.MakeScene.Scene;
            if (!_Scene3D.getComponent(MakeClothes3D)) {
                _Scene3D.addComponent(MakeClothes3D);
            }
        }
        lwgOnStart(): void {
        }

        lwgAdaptive(): void {
            this._SpriteVar('Ultimately');
        }

        /**图片移动控制*/
        Move = {
            Img: null as Laya.Image,
            touchP: null as Laya.Point,
            diffP: null as Laya.Point,
            createImg: (element: Laya.Image) => {
                this.Move.Img = new Laya.Image;
                this.Move.Img.skin = `${element.skin.substr(0, element.skin.length - 7)}.png`;
                this.Move.Img.width = 128;
                this.Move.Img.height = 128;
                // this.Move.Img.visible = false;
                this._SpriteVar('Ultimately').addChild(this.Move.Img);
                let Parent = element.parent as Laya.Image;
                let gPoint = Parent.localToGlobal(new Laya.Point(element.x, element.y));
                let lPoint = this._ImgVar('Ultimately').globalToLocal(gPoint);
                this.Move.Img.pos(lPoint.x, lPoint.y);

            }
        }
        lwgBtnRegister(): void {
            for (let index = 0; index < this._ImgVar('Figure').numChildren; index++) {
                const element = this._ImgVar('Figure').getChildAt(index) as Laya.Image;
                this._btnDown(element, (e: Laya.Event) => {
                    if (!this[`FigureParentelement${index}`]) {
                        this[`FigureParentelement${index}`] = true;
                    }
                    this.Move.createImg(element);
                    this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
                })
            }
        }
        onStageMouseDown(e: Laya.Event) {
            this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        onStageMouseMove(e: Laya.Event) {
            if (this.Move.touchP && this.Move.Img) {
                this.Move.diffP = new Laya.Point(e.stageX - this.Move.touchP.x, e.stageY - this.Move.touchP.y);
                this.Move.Img.x += this.Move.diffP.x;
                this.Move.Img.y += this.Move.diffP.y;
                this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
                let tex: Laya.Texture = this._ImgVar('Ultimately').drawToTexture(this._ImgVar('Ultimately').width, this._ImgVar('Ultimately').height, this._ImgVar('Ultimately').x, this._ImgVar('Ultimately').y) as Laya.Texture;
                EventAdmin._notify(_Event.addTexture2D, [tex.bitmap]);
            }
        }
        onStageMouseUp() {
            this.Move.touchP = null;
        }
    }
    export let _Scene3D: Laya.Scene3D;
    export let mt: Laya.UnlitMaterial;
    export class MakeClothes3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.addTexture2D, this, (Text2D: Laya.Texture2D) => {
                let bMaterial = this._child('Hanger').meshRenderer.material as Laya.BlinnPhongMaterial;
                bMaterial.albedoTexture.destroy();
                bMaterial.albedoTexture = Text2D;
            })
        }
    }
}
export default _MakeClothes.MakeClothes;