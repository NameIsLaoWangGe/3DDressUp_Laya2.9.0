import { Admin, EventAdmin, TimerAdmin, _LwgPreLoad, _SceneName } from "./Lwg";
import { _MakeClothes } from "./_MakeClothes";
import { _MakeTailor } from "./_MakeTailor";
import { _Res } from "./_PreLoad";
export module _CutInRes {
    // export let MakeClothes = {
    //     scene3D: {
    //         MakeScene: {
    //             url: `_Lwg3D/_Scene/LayaScene_MakeScene/Conventional/MakeClothes.ls`,
    //             Scene: null as Laya.Scene3D,
    //         },
    //     },
    // }
    // export let MakeUp = {
    //     MakeUp: {
    //         url: `_Lwg3D/_Scene/LayaScene_MakeUp/Conventional/MakeUp.ls`,
    //         Scene: null as Laya.Scene3D,
    //     },
    // }
}
export module _PreLoadCutIn {
    export enum _Event {
        animation1 = '_PreLoadCutIn_animation1',
        preLoad = '_PreLoadCutIn_preLoad',
        animation2 = '_PreLoadCutIn_animation2',
    }
    /**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
    export class PreLoadCutIn extends _LwgPreLoad._PreLoadScene {
        lwgOnStart(): void {
            TimerAdmin._frameOnce(50, this, () => {
                EventAdmin._notify(_Event.animation1);
            })
        }
        lwgEvent(): void {
            EventAdmin._register(_Event.animation1, this, () => {
                let time = 0;
                TimerAdmin._frameNumLoop(1, 30, this, () => {
                    time++;
                    this._LabelVar('Schedule').text = `${time}`;
                }, () => {
                    switch (Admin._PreLoadCutIn.openScene) {
                        case 'MakeClothes':
                            Laya.stage.addChildAt(_Res._list.scene3D.MakeClothes.Scene, 0);
                            break;
                        case 'MakeTailor':
                            _MakeTailor._Clothes._ins().ClothesArr = null;
                            _MakeTailor._Clothes._ins().getClothesArr();
                            break;
                        case 'Start':
                            _Res._list.scene3D.MakeClothes.Scene.removeSelf();
                            break;
                        default:
                            break;
                    }
                    EventAdmin._notify(_LwgPreLoad._Event.importList, [{}]);
                })
            })
        }
        // lwgOpenAniAfter(): void {
        // }
        lwgStepComplete(): void {
        }
        lwgAllComplete(): number {
            this._LabelVar('Schedule').text = `100`;
            return 500;
        }
    }
};
export default _PreLoadCutIn.PreLoadCutIn;



