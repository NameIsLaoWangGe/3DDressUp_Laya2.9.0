import { Admin, TimerAdmin, Tools } from "./Lwg";
import { lwg3D } from "./Lwg3D";
import { _Res } from "./_PreLoad";
export module _MakeUp {
    export enum _Event {
        posCalibration = 'posCalibration',
        addTexture2D = 'addTexture2D',
    }
    export class MakeUp extends Admin._SceneBase {
        lwgOnAwake(): void {
            _Scene3D = _Res._list.scene3D.MakeUp.Scene;
            if (!_Scene3D.getComponent(MakeUp3D)) {
                _Scene3D.addComponent(MakeUp3D);
            }
        }
        lwgOnStart(): void {
        }
        lwgOpenAni(): number {
            return 100;
        }
        lwgAdaptive(): void {
        }
        lwgEventRegister(): void {
            this._EvReg(_Event.posCalibration, (p1: Laya.Point, p2: Laya.Point,) => {
                // this._ImgVar('Glasses1').pos(p1.x - this._ImgVar('Glasses1').width / 2, p1.y - this._ImgVar('Glasses1').height / 2);
                // this._ImgVar('Glasses2').pos(p2.x - this._ImgVar('Glasses2').width / 2, p2.y - this._ImgVar('Glasses2').height / 2);
            })
        }
        Make = {
            switch: true,
            frontPos: null as Laya.Point,
            endPos: null as Laya.Point,
            DrawSp: null as Laya.Sprite,
            present: null as Laya.Image,
            color: null as string,
            size: 20,
            draw: (Sp: Laya.Sprite, x?: number, y?: number, tex?: Laya.Texture, color?: string) => {

            },
            getTex: (element: Laya.Image): Laya.Texture => {
                return element.drawToTexture(element.width, element.height, element.x, element.y) as Laya.Texture;
            },
        }
        lwgBtnRegister(): void {
            for (let index = 0; index < this._ImgVar('Case').numChildren; index++) {
                const element = this._ImgVar('Case').getChildAt(index) as Laya.Image;
                this._btnUp(element, (e: Laya.Stage) => {
                    this.Make.color = (element.getChildAt(0) as Laya.Label).text;
                    this.Make.switch = true;
                })
            }
            for (let index = 0; index < this._ImgVar('Glasses').numChildren; index++) {
                const element = this._ImgVar('Glasses').getChildAt(index) as Laya.Image;
                this._btnFour(element,
                    (e: Laya.Event) => {
                        if (this.Make.switch) {
                            this.Make.frontPos = element.globalToLocal(new Laya.Point(e.stageX, e.stageY))
                            this.Make.present = element;
                            this.Make.DrawSp = new Laya.Sprite;
                            element.addChild(this.Make.DrawSp);
                        }
                    },
                    (e: Laya.Event) => {
                        console.log('正在画画！')
                        if (this.Make.DrawSp && this.Make.present == element) {
                            this.Make.endPos = element.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                            this.Make.DrawSp.graphics.drawCircle(this.Make.endPos.x, this.Make.endPos.y, this.Make.size / 2, this.Make.color);

                            this.Make.DrawSp.graphics.drawLine(this.Make.frontPos.x, this.Make.frontPos.y, this.Make.endPos.x, this.Make.endPos.y, this.Make.color, this.Make.size);

                            this.Make.frontPos = this.Make.endPos;

                            this._EvNotify(_Event.addTexture2D, [element.name, this.Make.getTex(element).bitmap]);
                        }
                    },
                    (e: Laya.Event) => {

                    },
                    (e: Laya.Event) => {
                    }, null);
            }
        }
        onStageMouseDown(e: Laya.Event): void {
            this.Make.switch = true;
            if (this.Make.color) {

            }
        }
        onStageMouseMove(e: Laya.Event) {
        }
        onStageMouseUp() {
        }
    }
    export let _Scene3D: Laya.Scene3D;
    export class MakeUp3D extends lwg3D._Scene3DBase {
        lwgOnAwake(): void {
        }
        lwgOnStart(): void {
            let p1 = Tools._3D.posToScreen(this._child('Glasses1').transform.position, this._MainCamera);
            let p2 = Tools._3D.posToScreen(this._child('Glasses2').transform.position, this._MainCamera);
            this._EvNotify(_Event.posCalibration, [p1, p2]);
        }

        lwgEventRegister(): void {
            this._EvReg(_Event.addTexture2D, (name: string, Text2D: Laya.Texture2D) => {
                let bMaterial = this._child(name).meshRenderer.material as Laya.BlinnPhongMaterial;
                bMaterial.albedoTexture.destroy();
                bMaterial.albedoTexture = Text2D;
            })
        }
    }
}
export default _MakeUp.MakeUp3D;