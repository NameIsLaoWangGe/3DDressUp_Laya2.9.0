import ADManager, { TaT } from "../TJ/Admanager";
import lwg, { Admin, Animation2D, Click, Dialogue, TimerAdmin, Gold, _SceneName, SceneAnimation, Tools, Effects } from "./Lwg";
import { _Game } from "./_Game";
import { _MakeTailor } from "./_MakeTailor";
import { _Res } from "./_PreLoad";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export module _Start {
    export function _init(): void {

    }
    export class Start extends Admin._SceneBase {
        lwgButton(): void {
            const Clothes = _MakeTailor._DIYClothes._ins();
            this._btnUp(this._ImgVar('BtnTop'), () => {
                Clothes._pitchClassify = Clothes._classify.Top;
                this._openScene('MakeTailor', true, true);
            })
            this._btnUp(this._ImgVar('BtnDress'), () => {
                Clothes._pitchClassify = Clothes._classify.Dress;
                this._openScene('MakeTailor', true, true);
            })
            this._btnUp(this._ImgVar('BtnBottoms'), () => {
                Clothes._pitchClassify = Clothes._classify.Bottoms;
                this._openScene('MakeTailor', true, true);
            })

            this._btnUp(this._ImgVar('BtnPersonalInfo'), () => {
                Clothes._pitchClassify = Clothes._classify.Bottoms;
                this._openScene('PersonalInfo', false);
            })
            this._btnUp(this._ImgVar('BtnRanking'), () => {
                Clothes._pitchClassify = Clothes._classify.Bottoms;
                this._openScene('Ranking', false);
            })
            this._btnUp(this._ImgVar('BtnDressingRoom'), () => {
                Clothes._pitchClassify = Clothes._classify.Bottoms;
                this._openScene('DressingRoom', true, true);
            })
        }
    }
}
export default _Start.Start;


