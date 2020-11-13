import { Admin, _SceneName } from "./Lwg";

export module _MakeClothes {
    export class Scissor extends Admin._Object {
        onTriggerEnter(): void {

        }
    }
    export class MakeClothes extends Admin._SceneBase {
        lwgBtnRegister(): void {
            this._btnUp(this._ImgVar('BtnBack'), () => {
                this._openScene(_SceneName.Start);
            })
        }

        /**裁剪控制*/ 
        Cutting = {
            Scissor: () => {
                return this._ImgVar('Scissor');
            },
            touchP: new Laya.Point(),
            diffP: new Laya.Point(),
            EraserSp: (): Laya.Sprite => {
                if (!this._ImgVar('LineParent').getChildByName('EraserSp')) {
                    let Sp = new Laya.Sprite();
                    Sp.name = 'EraserSp';
                    Sp.blendMode = "destination-out";
                    this._ImgVar('LineParent').addChild(Sp);
                    this._ImgVar('LineParent').cacheAs = "bitmap";
                    return Sp;
                } else {
                    return this._ImgVar('LineParent').getChildByName('EraserSp') as Laya.Sprite;
                }
            },
            EraserSize: 60,
            erasureLine: () => {
                let gPos = (this.Cutting.Scissor().parent as Laya.Sprite).localToGlobal(new Laya.Point(this._ImgVar('Scissor').x, this._ImgVar('Scissor').y));
                let localPos = this.Cutting.EraserSp().globalToLocal(gPos);
                this.Cutting.EraserSp().graphics.drawCircle(localPos.x, localPos.y, this.Cutting.EraserSize / 2, "#000000");
                // this.Cutting.EraserSp.graphics.drawLine(this.Cutting.touchP.x, this.Cutting.touchP.y, localPos.x, localPos.y, "#000000", this.Cutting.EraserSize);
            }
        }
        onStageMouseDown(e: Laya.Event) {
            this.Cutting.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        onStageMouseMove(e: Laya.Event) {
            if (this.Cutting.touchP) {
                this.Cutting.diffP.x = e.stageX - this.Cutting.touchP.x;
                this.Cutting.diffP.y = e.stageY - this.Cutting.touchP.y;
                this.Cutting.Scissor().x += this.Cutting.diffP.x;
                this.Cutting.Scissor().y += this.Cutting.diffP.y;
                this.Cutting.erasureLine();
                this.Cutting.touchP = new Laya.Point(e.stageX, e.stageY);
            }
        }
        onStageMouseUp() {
            this.Cutting.touchP = null;
        }
    }
}