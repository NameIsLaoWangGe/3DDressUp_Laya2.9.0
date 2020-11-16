import { Admin } from "./Lwg";
import { lwg3D } from "./Lwg3D";
import { _Res } from "./_PreLoad";

export module _MakeClothes {

    export class MakeClothes extends Admin._SceneBase {
        lwgOnAwake(): void {
            // Laya.stage.addChildAt(_Res._list.scene3D.MakeScene.Scene, this._Owner.zOrder - 1);
        }
    }

    export class MakeClothes3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {

        }
    }
}
export default _MakeClothes.MakeClothes;