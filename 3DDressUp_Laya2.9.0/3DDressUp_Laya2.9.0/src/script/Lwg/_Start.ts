import ADManager, { TaT } from "../TJ/Admanager";
import lwg, { Admin, Animation2D, Click, Dialogue, TimerAdmin, Gold, _SceneName } from "./Lwg";
import { _Game } from "./_Game";
import { _Res } from "./_PreLoad";
import { _SelectLevel } from "./_SelectLevel";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module _Start {
    export function _init(): void {

    }
    export class Start extends Admin._SceneBase {
        lwgBtnRegister(): void {
            this._btnUp(this._ImgVar('BtnStart'), () => {
                Laya.stage.addChildAt(_Res._list.scene3D.MakeScene.Scene, 0);
                this._openScene('MakeClothes');
            })
        }
    }
}
export default _Start.Start;


