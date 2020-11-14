import { Admin, Click, _LwgInit, _LwgInitScene } from "./Lwg";
import { _Game } from "./_Game";
import { _Guide } from "./_Guide";
import { _Tailor } from "./_Tailor";
import { _PreLoad } from "./_PreLoad";
import { _PreLoadStep } from "./_PreLoadStep";
import { _Start } from "./_Start";
export default class LwgInit extends _LwgInitScene {
    lwgOnAwake(): void {
        _LwgInit._pkgInfo = [
            // { name: "sp1", root: "res" },
            // { name: "sp2", root: "3DScene" },
            // { name: "sp3", root: "3DPrefab" },
        ];
        Admin._platform.ues = Admin._platform.tpye.Research;
        Admin._sceneAnimation.use = Admin._sceneAnimation.type.stickIn.random;
        Click._Effect.use = Click._Effect.type.largen;
        Admin._moudel = {
            _PreLoad: _PreLoad,
            _Guide: _Guide,
            _Start: _Start,
            _Game: _Game,
            _PreLoadStep: _PreLoadStep,
            _Tailor: _Tailor,
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


