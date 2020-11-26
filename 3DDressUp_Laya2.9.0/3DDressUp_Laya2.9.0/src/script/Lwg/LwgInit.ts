import { Adaptive, Admin, Click, Platform, SceneAnimation, _LwgInit, _LwgInitScene } from "./Lwg";
import { _Game } from "./_Game";
import { _Guide } from "./_Guide";
import { _PreLoad } from "./_PreLoad";
import { _PreLoadCutIn } from "./_PreLoadCutIn";
import { _Start } from "./_Start";
import { _MakeClothes } from "./_MakeClothes";
import { _MakeUp } from "./_MakeUp";
import { _MakeTailor } from "./_MakeTailor";
export default class LwgInit extends _LwgInitScene {
    lwgOnAwake(): void {
        _LwgInit._pkgInfo = [
            // { name: "sp1", root: "res" },
            // { name: "sp2", root: "3DScene" },
            // { name: "sp3", root: "3DPrefab" },
        ];
        Platform._Ues.value = Platform._Tpye.Research;
        SceneAnimation._Use.value = SceneAnimation._Type.stickIn.random;
        Click._Use.value = Click._Type.largen;
        Adaptive._Use.value = [1280, 720];
        Admin._Moudel = {
            _PreLoad: _PreLoad,
            _PreLoadCutIn: _PreLoadCutIn,
            _Guide: _Guide,
            _Start: _Start,
            _Game: _Game,
            _MakeTailor: _MakeTailor,
            _MakeClothes: _MakeClothes,
            _MakeUp: _MakeUp,
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


