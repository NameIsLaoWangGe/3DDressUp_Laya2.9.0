import ADManager, { TaT } from "../TJ/Admanager";
import lwg, { Admin, Animation2D, Click, Dialogue, TimerAdmin, _Gold, _SceneName } from "./Lwg";
import { _Game } from "./_Game";
import { _SelectLevel } from "./_SelectLevel";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module _Start {
    export function _init(): void {
    }
    /**通用类，进行通用初始化，可在每个游戏中重复使用重复*/
    export class _StartScene extends Admin._SceneBase {
        moduleOnAwake(): void {
            ADManager.TAPoint(TaT.PageShow, 'mainpage');
            ADManager.TAPoint(TaT.BtnShow, 'start_main');
            _Gold.createGoldNode(38, 68);
        }
    }
    export class Start extends _StartScene {
        lwgOnAwake(): void {

        }
        lwgOnStart(): void {
            Admin._sceneAnimation.presentAni = Admin._sceneAnimation.type.stickIn.upLeftDownLeft;
        }
        lwgOpenAniAfter(): void {
            TimerAdmin._loop(2000, this, () => {
                Animation2D.bomb_LeftRight(this.ImgVar('BtnStart'), 1.22, 250);
            }, true);
        }
        lwgBtnClick(): void {
            Click._on(Click._Type.largen, this.btnVar('BtnStart'), this, null, null, () => {
                ADManager.TAPoint(TaT.BtnClick, 'start_main');
                _SelectLevel._Data._pich.classify = _SelectLevel._Data._classify.animal;
                this.lwgOpenScene(_SceneName.SelectLevel);
            })
            Click._on(Click._Type.largen, this.btnVar('BtnLimit'), this, null, null, () => {
                _SelectLevel._Data._pich.classify = _SelectLevel._Data._classify.limit;
                this.lwgOpenScene(_SceneName.SelectLevel);
            })
            Click._on(Click._Type.largen, this.btnVar('BtnConversion'), this, null, null, () => {
                Dialogue.createHint_Middle('敬请期待！');
            })
            Click._on(Click._Type.noEffect, this.btnVar('BtnSpecial'), this, null, null, () => {
                Dialogue.createHint_Middle('敬请期待！');
            })
        }

        lwgOnDisable(): void {
            ADManager.TAPoint(TaT.PageLeave, 'mainpage');
        }
    }
}
export default _Start.Start;


