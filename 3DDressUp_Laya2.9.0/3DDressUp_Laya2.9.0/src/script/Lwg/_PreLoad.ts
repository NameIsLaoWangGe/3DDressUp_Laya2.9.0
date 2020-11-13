import ADManager, { TaT } from "../TJ/Admanager";
import { Admin, EventAdmin, _LwgPreLoad, _SceneName } from "./Lwg";
export module _Res {
    export let _list = {
        scene3D: {
            MakeScene: {
                url: `_Lwg3D/_Scene/LayaScene_MakeScene/Conventional/MakeScene.ls`,
                Scene: null as Laya.Scene3D,
            },
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
        // prefab2D: {
        //     LwgGold: {
        //         url: 'Prefab/LwgGold.json',
        //         prefab: new Laya.Prefab,
        //     },
        //     PencilsList: {
        //         url: 'Prefab/PencilsList.json',
        //         prefab: new Laya.Prefab,
        //     },
        //     StepSwitch: {
        //         url: 'Prefab/StepSwitch.json',
        //         prefab: new Laya.Prefab,
        //     },
        //     BtnCompelet: {
        //         url: 'Prefab/BtnCompelet.json',
        //         prefab: new Laya.Prefab,
        //     },
        //     BtnTurnLeft: {
        //         url: 'Prefab/BtnTurnLeft.json',
        //         prefab: new Laya.Prefab,
        //     },
        //     BtnTurnRight: {
        //         url: 'Prefab/BtnTurnRight.json',
        //         prefab: new Laya.Prefab,
        //     },
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
        scene2D: {
            Start: `Scene/${_SceneName.Start}.json`,
            Guide: `Scene/${_SceneName.Guide}.json`,
            PreLoadStep: `Scene/${_SceneName.PreLoadStep}.json`,
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


