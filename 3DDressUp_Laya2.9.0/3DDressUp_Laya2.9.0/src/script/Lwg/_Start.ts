import ADManager, { TaT } from "../TJ/Admanager";
import lwg, { Admin, Animation2D, Click, Dialogue, TimerAdmin, Gold, _SceneName, SceneAnimation } from "./Lwg";
import { _Game } from "./_Game";
import { _Res } from "./_PreLoad";
import { _SelectLevel } from "./_SelectLevel";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module _Start {
    export function _init(): void {

    }
    export class Start extends Admin._SceneBase {

        // lwgOnEnable(): void {

        // }

        lwgOnStart(): void {
            console.log('fff');
            // let tex = Laya.stage.drawToTexture(this._Owner.width, this._Owner.height, 0, 0) as Laya.Texture;
            // let sp1 = new Laya.Sprite;
            // let sp2 = new Laya.Sprite;
            // Laya.stage.addChild(sp1);
            // Laya.stage.addChild(sp2);
            // sp1.width = sp1.height = 300;
            // sp2.width = sp2.height = 300;
            // sp1.pos(0, 0);
            // sp2.pos(Laya.stage.width / 2, 0);
            // sp1.texture = sp2.texture = tex;
            // sp1.zOrder = sp2.zOrder = 100;
            // SceneAnimation._shutters(this._Owner, null);
        }
        lwgButton(): void {
            this._btnUp(this._ImgVar('BtnStart'), () => {
                this._openScene('MakeTailor');
            })
        }
    }
}
export default _Start.Start;


