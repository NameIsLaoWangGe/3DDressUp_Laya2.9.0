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
                    EventAdmin._notify(_Event.addTexture2D, [this._ImgVar('Ultimately').texture.bitmap]);
                    // let Img = this._ImgVar(`Figure${index + 1}`);
                    // let tex = Img.texture;
                    // EventAdmin._notify(_Event.addTexture2D, [tex]);
                })
            }
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
                bMaterial.albedoTexture = Text2D;
            })
        }
    }
}
export default _MakeClothes.MakeClothes;