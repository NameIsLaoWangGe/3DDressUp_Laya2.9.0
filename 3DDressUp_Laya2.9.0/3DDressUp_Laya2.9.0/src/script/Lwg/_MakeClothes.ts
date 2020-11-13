import { Admin, _SceneName } from "./Lwg";

export module _MakeClothes {
    export class Scissor extends Admin._Object {

    }
    export class MakeClothes extends Admin._SceneBase {
        lwgBtnRegister(): void {
            this._btnUp(this._ImgVar('BtnBack'), () => {
                this._openScene(_SceneName.Start);
            })

            this._btnAll(this._ImgVar('Scissor'),
                () => {
                },
                () => {
                },
                () => {
                },
                () => {
                })
        }
        Cutting = {
            Scissor: null as Laya.Image,
            fP: null as Laya.Point,
            diffP: null as Laya.Point,

        }
        onStageMouseDown(e: Laya.Event) {
            if (!this.Cutting.fP) {
                this.Cutting.fP.x = e.stageX;
                this.Cutting.fP.y = e.stageY;
            }
        }
        onStageMouseMove(e: Laya.Event) {
            if (this.Cutting.fP) {
                // this.Cutting.diffP.x = e.stageX - this.Cutting.fP.x;
                // this.Cutting.diffP.y = e.stageY - this.Cutting.fP.y;
                // this.Cutting.Scissor.x = this._roomX + this.diffX;
                // this.Cutting.Scissor.y = this._roomY + this.diffY;
            }
        }
        onStageMouseUp() {
            // this.selfScene['UIMain'].currentRoom = null;
            // this._roomMove = false;
            // this._roomX = null;
            // this._roomY = null;
            // this._stageX = null;
            // this._stageY = null;
            // this.diffX = null;
            // this.diffY = null;
        }
    }
}