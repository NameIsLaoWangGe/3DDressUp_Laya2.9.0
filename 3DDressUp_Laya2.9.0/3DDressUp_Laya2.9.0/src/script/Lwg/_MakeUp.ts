import { Admin, TimerAdmin, Tools } from "./Lwg";
import { lwg3D } from "./Lwg3D";
import { _Res } from "./_PreLoad";
export module _MakeUp {
    export enum _Event {
        posCalibration = 'posCalibration',
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
                console.log(p1, p2);
                this._ImgVar('Glasses1').pos(p1.x, p1.y);
                this._ImgVar('Glasses2').pos(p2.x, p2.y);
            })
        }
        MakeControl = {
            touchP: null as Laya.Point,
            DrawSp: null as Laya.Sprite,
            present: null as string,
            color: null as string,
        }
        lwgBtnRegister(): void {
            for (let index = 0; index < this._ImgVar('Case').numChildren; index++) {
                const element = this._ImgVar('Case').getChildAt(index);
                this._btnUp(element, (e: Laya.Stage) => {
                    this.MakeControl.color = (element.getChildAt(0) as Laya.Label).text;
                })
            }
        }
        onStageMouseDown(e: Laya.Event): void {
            this.MakeControl.touchP = new Laya.Point(e.stageX, e.stageY);
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
    }
}
export default _MakeUp.MakeUp3D;