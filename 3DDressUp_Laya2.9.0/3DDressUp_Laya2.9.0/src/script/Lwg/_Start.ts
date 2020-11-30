import ADManager, { TaT } from "../TJ/Admanager";
import lwg, { Admin, Animation2D, Click, Dialogue, TimerAdmin, Gold, _SceneName, SceneAnimation, Tools, Effects } from "./Lwg";
import { _Game } from "./_Game";
import { _Res } from "./_PreLoad";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module _Start {
    export function _init(): void {

    }
    export class Start extends Admin._SceneBase {

        // lwgOnEnable(): void {

        // }

        lwgOnStart(): void {
           

            // let Img2 = new Laya.Image;
            // Img2.width = Laya.stage.height;
            // Img2.height = Laya.stage.width;
            // Img2.skin = `Lwg/UI/ui_l_orthogon_orange.png`;
            // Img2.pos(Laya.stage.width, Laya.stage.height);
            // Tools._Node.changePivot(Img2, 0, Img1.height / 2);
            // Img2.rotation = -140;
            // Laya.stage.addChild(Img2);
            // Img2.zOrder = 100;         
            // console.log(Admin._sceneControl)
            // console.log(Laya.stage['_children'])
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


