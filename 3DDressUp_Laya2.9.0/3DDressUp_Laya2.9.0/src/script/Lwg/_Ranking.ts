import { Admin } from "./Lwg";

export module _Ranking {
    export class Ranking extends Admin._SceneBase {
        lwgButton(): void {
            this._btnUp(this._ImgVar('BtnClose'), () => {
                this._closeScene();
            })
        }
    }
}

export default _Ranking.Ranking;