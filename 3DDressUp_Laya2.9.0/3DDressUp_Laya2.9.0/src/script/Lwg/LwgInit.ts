import { Admin, _LwgInit, _LwgInitScene } from "./Lwg";

export enum SceneName {
}
export default class LwgInit extends _LwgInitScene {
    lwgOnAwake(): void {
        _LwgInit._pkgInfo = [
            // { name: "sp1", root: "res" },
            // { name: "sp2", root: "3DScene" },
            // { name: "sp3", root: "3DPrefab" },
        ];
        Admin._platform.name = Admin._platform.tpye.Bytedance;
        Admin._sceneAnimation.presentAni = Admin._sceneAnimation.type.stickIn.random;
        Admin._moudel = {
            // _PreLoad: _PreLoad,
            // _Guide: _Guide,
            // _Start: _Start,
            // _Game: _Game,
            // _Task: _Task,
            // _PreLoadStep: _PreLoadStep,
            // _SelectLevel: _SelectLevel,
            // _Settle: _Settle,
            // _Victory: _Victory,
            // _Share: _Share,
            // _Special: _Special,
            // _PropTry: _PropTry,
            // _AdsHint: _AdsHint,
            // _Compound: _Compound,
        };
        // new ZJADMgr();
    }
}