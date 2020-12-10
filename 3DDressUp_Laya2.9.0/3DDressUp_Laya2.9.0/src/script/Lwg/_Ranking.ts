import { Admin } from "./Lwg";

export module _Ranking {
    /**从哪里进来*/
    export let _whereFrom: string = 'Start';
    export class Ranking extends Admin._SceneBase {
        lwgOnAwake(): void {
          
        }

        lwgOnStart():void{
            if (_whereFrom === 'MakePattern') {

            }
            _whereFrom = 'Start';
        }

        lwgButton(): void {
            this._btnUp(this._ImgVar('BtnClose'), () => {
                this._closeScene();
            })
        }
    }
}

export default _Ranking.Ranking;