import ADManager, { TaT } from "../TJ/Admanager";
import RecordManager from "../TJ/RecordManager";
import { Admin, Click, _Gold, Tools, Dialogue, _SceneName, EventAdmin } from "./Lwg";
import { _Game } from "./_Game";
import { _PreloadUrl } from "./_PreLoad";
export module _Share {
    export class _Data {
        static _photo = {
            _base64: null as string,
            _width: 400,
            _height: 400,
        };
    }
    export enum _Event {
    }
    export function _init(): void {
    }
    /**通用类，进行通用初始化，这里有两个作用，第一个是不同游戏通用，另一个是同一个游戏中拥有相同部分的基类*/
    export class ShareBase extends Admin._SceneBase {
        moduleOnAwake(): void {
            ADManager.TAPoint(TaT.PageShow, 'sharepage');
            ADManager.TAPoint(TaT.BtnShow, 'share_share');
        }
    }
    /**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
    export class Share extends _Share.ShareBase {
        lwgOnAwake(): void {
            this.ImgVar('Photo').width = Laya.stage.width;
            this.ImgVar('Photo').height = Laya.stage.height;
            if (_Data._photo._base64) {
                this.ImgVar('Photo').skin = _Data._photo._base64;
                this.ImgVar('Photo').scale(0.8, 0.8);
            }
        }
        lwgBtnClick(): void {
            var func = () => {
                EventAdmin._notify(_Game._Event.victory);
                this.lwgOpenScene(_SceneName.Victory);
            }
            Click._on(Click._Type.noEffect, this.btnVar('BtnShareBg'), this, null, null, () => {
                RecordManager._share('noAward', () => {
                    ADManager.TAPoint(TaT.BtnClick, 'share_share');
                    func();
                });
            });
            Click._on(Click._Type.largen, this.btnVar('BtnContinue'), this, null, null, () => {
                func();
            });
            Click._on(Click._Type.largen, this.btnVar('BtnShare'), this, null, null, () => {
                RecordManager._share('noAward', () => {
                    ADManager.TAPoint(TaT.BtnClick, 'share_share');
                    func();
                });
            });
        }
        lwgOnDisable(): void {
            ADManager.TAPoint(TaT.PageLeave, 'sharepage');
        }
    }
}
export default _Share.Share;


