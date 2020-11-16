import { Admin, EventAdmin, TimerAdmin } from "./Lwg";
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
        lwgBtnRegister(): void {
            for (let index = 0; index < this._ImgVar('FigureParent').numChildren; index++) {
                const element = this._ImgVar('FigureParent').getChildAt(index);
                this._btnUp(element, () => {
                    let tex = this._ImgVar(`Figure${index + 1}`).texture;
                    let pix = tex.getPixels(100, 100, 128, 128);
                    let tex2d = new Laya.Texture2D();
                    tex2d.setPixels(pix);
                    EventAdmin._notify(_Event.addTexture2D, [index + 1]);
                })
            }
        }
    }
    export let _Scene3D: Laya.Scene3D;
    export let mt: Laya.UnlitMaterial;
    export class MakeClothes3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {
            // let base64 = "你的base64字符串";
            // let image: HTMLImageElement = document.createElement("img");
            // let onImageLoaded: EventListenerOrEventListenerObject = () => {
            //     image.removeEventListener("load", onImageLoaded);
            //     let texture: Laya.Texture2D = new Laya.Texture2D();
            //     // texture.setPixels(null, image,);
            // }
            let mt = new Laya.BlinnPhongMaterial;
            // mt.albedoTexture = new Laya.Texture2D();
            // console.log((this._child('Hanger').meshRenderer.material as Laya.UnlitMaterial).albedoTexture)
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.addTexture2D, this, (index) => {
                let bMaterial = this._child('Hanger').meshRenderer.material as Laya.BlinnPhongMaterial;
                bMaterial.albedoTexture = _Res._list.texture2D[`Figure${index}`];
                // bMaterial.albedoTexture
                // bMaterial.albedoTexture = Text2D;

                // TimerAdmin._frameLoop(1,this,()=>{
                //     bMaterial.
                // })
            })
        }
    }
}
export default _MakeClothes.MakeClothes;