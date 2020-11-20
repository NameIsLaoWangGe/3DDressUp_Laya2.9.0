import ADManager, { TaT } from "../TJ/Admanager";
import { Admin, EventAdmin, _LwgPreLoad, _SceneName } from "./Lwg";
export module _Res {
    export let _list = {
        scene3D: {
            MakeClothes: {
                url: `_Lwg3D/_Scene/LayaScene_MakeClothes/Conventional/MakeClothes.ls`,
                Scene: null as Laya.Scene3D,
            },
            MakeUp: {
                url: `_Lwg3D/_Scene/LayaScene_MakeUp/Conventional/MakeUp.ls`,
                Scene: null as Laya.Scene3D,
            }
        },
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
        prefab2D: {
            // LwgGold: {
            //     url: 'Prefab/LwgGold.json',
            //     prefab: new Laya.Prefab,
            // },
            BtnCompelet: {
                url: 'Prefab/BtnCompelet.json',
                prefab: null as Laya.Prefab,
            },
        },
        texture: {
            // glasses: {
            //     url: `/_Lwg3D/_Scene/LayaScene_MakeUp/Conventional/Assets/Reference/Texture2D/common_s.png`,
            //     texture: null as Laya.Texture,
            // },
        },
        texture2D: {
            Figure1: {
                url: `_Lwg3D/_Scene/LayaScene_MakeClothes/Conventional/Assets/13213/qunzi1.jpg`,
                texture2D: null as Laya.Texture2D,
            },
            Figure2: {
                url: `_Lwg3D/_Scene/LayaScene_MakeUp/Conventional/Assets/Reference/Sprite/repeat_pattern_04 _9681.jpg`,
                texture2D: null as Laya.Texture2D,
            },
            // Figure3: {
            //     url: 'Game/UI/MakeClothes/figure_03.png',
            //     texture2D: null as Laya.Texture2D,
            // },
        },
        /**通过直接获取场景的显示和打开，和scene关联，实现，先加载，然后直接切换*/
        scene2D: {
            Start: `Scene/${_SceneName.Start}.json`,
            Guide: `Scene/${_SceneName.Guide}.json`,
            PreLoadStep: `Scene/${_SceneName.PreLoadCutIn}.json`,
            // AdsHint: `Scene/${_SceneName.AdsHint}.json`,
            // Special: `Scene/${_SceneName.Special}.json`,
            // Victory: `Scene/${_SceneName.Victory}.json`,
            // SelectLevel: `Scene/${_SceneName.SelectLevel}.json`,
            // Settle: `Scene/${_SceneName.Settle}.json`,
            // PropTry: `Scene/${_SceneName.PropTry}.json`,
            // Share: `Scene/${_SceneName.Share}.json`,
        },
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

export module _PreLoad {
    export class PreLoad extends _LwgPreLoad._PreLoadScene {
        lwgOnStart(): void {
            EventAdmin._notify(_LwgPreLoad._Event.importList, (_Res._list));
            // ADManager.TAPoint(TaT.PageShow, 'loadpage');
            // this._AniVar('ani1').play(0, false);
            // this._AniVar('ani1').on(Laya.Event.LABEL, this, () => {
            //     EventAdmin._notify(_LwgPreLoad._Event.importList, (_PreloadUrl._list));
            // })
        }
        lwgOpenAni(): number { return 1; }
        lwgStepComplete(): void {
        }
        lwgAllComplete(): number {
            return 1000;
        }
        lwgOnDisable(): void {
            // ADManager.TAPoint(TaT.PageLeave, 'loadpage');
        }
    }

}
export default PreLoad;


