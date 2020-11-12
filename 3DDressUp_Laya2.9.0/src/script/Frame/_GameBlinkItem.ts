import ADManager, { TaT } from "../TJ/Admanager";
import { Admin, Animation2D, Click, Dialogue, TimerAdmin, Tools, _SceneName } from "./Lwg";
import { _Game } from "./_Game";
import { _PropTry } from "./_PropTry";

/**画笔脚本*/
export default class _GameBlinkItem extends Admin._Object {
    lwgBtnClick(): void {
        var func = (e: Laya.Event) => {
            e.stopPropagation();
        }
        Click._on(Click._Type.noEffect, this.Owner, this,
            func,
            func,
            (e: Laya.Event) => {
                e.stopPropagation();
                if (this.Owner['_dataSource']['have']) {
                    _Game._BlinkPencils._pitchName = this.Owner['_dataSource']['name'];
                } else {
                    Dialogue.createHint_Middle('尚未获得！');
                }
            },
            func
        );
    }
}
