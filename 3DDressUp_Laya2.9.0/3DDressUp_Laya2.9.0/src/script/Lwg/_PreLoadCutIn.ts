import { Admin, EventAdmin, TimerAdmin, _LwgPreLoad, _SceneName } from "./Lwg";
import { _Res } from "./_PreLoad";
export module _CutInRes {
    export let _MakeClothes = {
        // scene3D: {
        //     MakeScene: {
        //         url: `_Lwg3D/_Scene/LayaScene_MakeScene/Conventional/MakeScene.ls`,
        //         Scene: null as Laya.Scene3D,
        //     },
        // },
        // prefab3D: {
        //     Level1: {
        //         url: '_Lwg3D/_Prefab/LayaScene_GameMain/Conventional/CardContainer.lh',
        //         Prefab: null as Laya.Sprite3D,
        //     }
        // },
        // pic2D: {
        //     // "res/atlas/Frame/Effects.png",
        //     // "res/atlas/Frame/UI.png",
        //     // "res/atlas/Game/UI/UISkinQualified.png",
        //     // "res/atlas/Game/UI/UIDrawCard/Card.png",
        // },
        // mesh3D: {},
        // material: {},
        // prefab2D: {
        // LwgGold: {
        //     url: 'Prefab/LwgGold.json',
        //     prefab: new Laya.Prefab,
        // },
        // BtnCompelet: {
        //     url: 'Prefab/BtnCompelet.json',
        //     prefab: new Laya.Prefab,
        // },
        // },
        // texture: {
        //     bishua1: {
        //         url: 'Game/UI/GameScene/bishua1.png',
        //         texture: new Laya.Texture,
        //     },
        //     bishua2: {
        //         url: 'Game/UI/GameScene/bishua2.png',
        //         texture: new Laya.Texture,
        //     },
        //     bishua3: {
        //         url: 'Game/UI/GameScene/bishua3.png',
        //         texture: new Laya.Texture,
        //     },
        //     bishua4: {
        //         url: 'Game/UI/GameScene/bishua4.png',
        //         texture: new Laya.Texture,
        //     },
        //     bishua5: {
        //         url: 'Game/UI/GameScene/bishua5.png',
        //         texture: new Laya.Texture,
        //     },
        //     bishua6: {
        //         url: 'Game/UI/GameScene/bishua6.png',
        //         texture: new Laya.Texture,
        //     },
        //     blink1: {
        //         url: 'Game/UI/GameScene/blink1.png',
        //         texture: new Laya.Texture,
        //     },
        //     blink2: {
        //         url: 'Game/UI/GameScene/blink2.png',
        //         texture: new Laya.Texture,
        //     },
        //     blink3: {
        //         url: 'Game/UI/GameScene/blink3.png',
        //         texture: new Laya.Texture,
        //     },
        //     blink4: {
        //         url: 'Game/UI/GameScene/blink4.png',
        //         texture: new Laya.Texture,
        //     },
        // },
        // texture2D: {
        //     star1: {
        //         url: 'Frame/Effects/hua4.png',
        //         texture: Laya.Texture2D,
        //     },
        // },
        /**通过直接获取场景的显示和打开，和scene关联，实现，先加载，然后直接切换*/
        // scene2D: {
        // Start: `Scene/${_SceneName.Start}.json`,
        // Guide: `Scene/${_SceneName.Guide}.json`,
        // PreLoadStep: `Scene/${_SceneName.PreLoadCutIn}.json`,
        // AdsHint: `Scene/${_SceneName.AdsHint}.json`,
        // Special: `Scene/${_SceneName.Special}.json`,
        // Victory: `Scene/${_SceneName.Victory}.json`,
        // SelectLevel: `Scene/${_SceneName.SelectLevel}.json`,
        // Settle: `Scene/${_SceneName.Settle}.json`,
        // PropTry: `Scene/${_SceneName.PropTry}.json`,
        // Share: `Scene/${_SceneName.Share}.json`,
        // },
        // json: {
        //     General: {
        //         url: "_LwgData" + "/_Game/General" + ".json",
        //         data: new Array,
        //     },
        //     Colours: {
        //         url: "_LwgData" + "/_Game/Colours" + ".json",
        //         data: new Array,
        //     },
        //     Blink: {
        //         url: "_LwgData" + "/_Game/Blink" + ".json",
        //         data: new Array,
        //     },
        //     SelectLevel1: {
        //         url: "_LwgData" + "/_SelectLevel/SelectLevel1" + ".json",
        //         data: new Array,
        //     }
        // },
        // skeleton: {
        //     test: {
        //         url: 'Game/Skeleton/test.sk',
        //         templet: new Laya.Templet,
        //     },
        // }
    }
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
            EventAdmin._notify(_Event.animation1);
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.animation1, this, () => {
                let time = 0;
                TimerAdmin._frameNumLoop(1, 30, this, () => {
                    time++;
                    this._LabelVar('Schedule').text = `${time}`;
                }, () => {
                    switch (Admin._preLoadOpenSceneLater.openName) {
                        case 'MakeClothes':
                            Laya.stage.addChildAt(_Res._list.scene3D.MakeClothes.Scene, 0);
                            this._Owner.zOrder = 1;
                            break;
                        case 'MakeUp':
                            _Res._list.scene3D.MakeClothes.Scene.removeSelf();
                            Laya.stage.addChildAt(_Res._list.scene3D.MakeUp.Scene, 0);
                            this._Owner.zOrder = 1;
                            break;
                        case 'Start':
                            _Res._list.scene3D.MakeUp.Scene.removeSelf();
                            this._Owner.zOrder = 1;
                            break;
                            
                        default:
                            break;
                    }


                    EventAdmin._notify(_LwgPreLoad._Event.importList, ([_CutInRes[`_${Admin._preLoadOpenSceneLater.openName}`]]));
                })
            })
        }
        lwgOpenAni(): number {
            return 100;
        }
        lwgStepComplete(): void {
        }
        lwgAllComplete(): number {
            this._LabelVar('Schedule').text = `100`;
            return 500;
        }
    }
};
export default _PreLoadCutIn.PreLoadCutIn;



