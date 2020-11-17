import { Adaptive, Admin, Click, _LwgInit, _LwgInitScene } from "./Lwg";
import { _Game } from "./_Game";
import { _Guide } from "./_Guide";
import { _Tailor } from "./_Tailor";
import { _PreLoad } from "./_PreLoad";
import { _PreLoadCutIn } from "./_PreLoadCutIn";
import { _Start } from "./_Start";
import { _MakeClothes } from "./_MakeClothes";
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
        Adaptive._desigheight = 720;
        Adaptive._designWidth = 1280;
        Admin._moudel = {
            _PreLoad: _PreLoad,
            _PreLoadCutIn: _PreLoadCutIn,
            _Guide: _Guide,
            _Start: _Start,
            _Game: _Game,
            _Tailor: _Tailor,
            _MakeClothes: _MakeClothes,
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


