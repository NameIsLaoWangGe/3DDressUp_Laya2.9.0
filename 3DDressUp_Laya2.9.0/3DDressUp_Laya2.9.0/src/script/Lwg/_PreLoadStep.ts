import { Admin, EventAdmin, _LwgPreLoad, _SceneName } from "./Lwg";
export module _PreLoadStepUrl {
    export let _game = {
        //     scene3D: {
        //         // "_Lwg3D/_Scene/LayaScene_GameMain/Conventional/GameMain.ls"
        //     },
        //     prefab3D: {
        //         // "_Lwg3D/_Prefab/LayaScene_GameMain/Conventional/CardContainer.lh"
        //     },
        //     pic2D: {
        //         // "res/atlas/Frame/Effects.png",
        //         // "res/atlas/Frame/UI.png",
        //         // "res/atlas/Game/UI/UISkinQualified.png",
        //         // "res/atlas/Game/UI/UIDrawCard/Card.png",
        //     },
        //     scene2D: {
        //         UIStart: "Scene/" + _SceneName.UIStart + '.json',
        //         GameScene: "Scene/" + _SceneName.GameScene + '.json',
        //         UIPreLoad: "Scene/" + _SceneName.UIPreLoad + '.json',
        //     },
        //     json: {
        //         SingleColor: "_LwgData" + "/_Game/SingleColor" + ".json",
        //         Colours: "_LwgData" + "/_Game/Colours" + ".json",
        //     },
        //     prefab2D: {},
        //     mesh3D: {},
        //     material: {},
        //     texture2D: {},
    }
}
export module _PreLoadStep {
    /**可以手动挂在脚本中的类，全脚本唯一的默认导出，也可动态添加，动态添加写在模块内更方便*/
    export class PreLoadStep extends _LwgPreLoad._PreLoadScene {
        lwgOnStart(): void {
            switch (Admin._preLoadOpenSceneLater.openSceneName) {
                case _SceneName.Game:
                    EventAdmin._notify(_LwgPreLoad._Event.importList, ([_PreLoadStepUrl._game]));
                    break;
                default:
                    break;
            }
        }
    }
};
export default _PreLoadStep.PreLoadStep;



