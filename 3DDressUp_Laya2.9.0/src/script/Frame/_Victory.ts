import ADManager, { TaT } from "../TJ/Admanager";
import RecordManager from "../TJ/RecordManager";
import lwg, { Admin, Click, _Gold, Tools, Dialogue, _SceneName, EventAdmin, DateAdmin, PalyAudio, Effects } from "./Lwg";
import OldEffects from "./OldEffects";
import { _Game } from "./_Game";
import { _PreloadUrl } from "./_PreLoad";
import { _Share } from "./_Share";
import { _Special } from "./_Special";
export module _Victory {
    export enum _Event {
        _Settle_CloseScene = '_Settle_CloseScene',
    }
    export function _init(): void {
    }
    export class VictoryBase extends Admin._SceneBase {
        lwgOnAwake(): void {
            ADManager.TAPoint(TaT.PageShow, 'endpage');
            ADManager.TAPoint(TaT.BtnShow, 'ADrewardbt_end');
            ADManager.TAPoint(TaT.BtnShow, 'close_end');
        }
    }
    export class Victory extends _Victory.VictoryBase {
        lwgOnAwake(): void {
            RecordManager.stopAutoRecord();
            if (_Share._Data._photo._base64) {
                this.ImgVar('Photo').skin = _Share._Data._photo._base64;
                this.ImgVar('Photo').scale(0.75, 0.75);
            }
            if (_Game._ColoursPencils._switch && _Special._data._lastDate
                !== DateAdmin._date.date) {
                this.ImgVar('Evaluate').skin = 'Game/UI/Victory/sbml.png';
            } else {
                if (_Game._GeneralPencils._pitchName == 'colours') {
                    this.ImgVar('Evaluate').skin = 'Game/UI/Victory/jmjl.png';
                } else {
                    this.ImgVar('Evaluate').skin = 'Game/UI/Victory/pptt.png';
                }
            }
        }
        lwgOpenAniAfter(): void {
            this.AniVar('NoAni_Remark').play(0, false);
            this.AniVar('NoAni_Remark').on(Laya.Event.LABEL, this, (e: Laya.Event) => {
                PalyAudio.playVictorySound();
                OldEffects.createFireworks(Laya.stage, 40, 430, 200);
                OldEffects.createFireworks(Laya.stage, 40, 109, 200);
                OldEffects.createLeftOrRightJet(Laya.stage, 'right', 40, 720, 300);
                OldEffects.createLeftOrRightJet(Laya.stage, 'left', 40, 0, 300);
                console.log(_Game._GeneralPencils._pitchName, _Special._data._lastDate);
                if (_Game._ColoursPencils._switch && _Special._data._lastDate
                    !== DateAdmin._date.date) {
                    _Special._data._lastDate = DateAdmin._date.date;
                    this.ImgVar('Evaluate').skin = 'Game/UI/Victory/sbml.png';
                    this.lwgOpenScene(_SceneName.Special, false);
                } else {
                    if (_Game._GeneralPencils._pitchName == 'colours') {
                        this.ImgVar('Evaluate').skin = 'Game/UI/Victory/jmjl.png';
                    } else {
                        this.ImgVar('Evaluate').skin = 'Game/UI/Victory/pptt.png';
                    }
                }
                let num = 25;
                Click._on(Click._Type.largen, this.btnVar('BtnNext'), this, null, null, () => {
                    if (this['BtnNextSwitch']) {
                        return;
                    } else {
                        this['BtnNextSwitch'] = true;
                    }
                    _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`, null, null, null, () => {
                        ADManager.TAPoint(TaT.BtnClick, 'close_end');
                        _Gold._addGold(num);
                        EventAdmin._notify(_Game._Event.colseScene);
                        this.lwgOpenScene(_SceneName.Start);
                    });
                });
                Click._on(Click._Type.largen, this.btnVar('BtnThreeGet'), this, null, null, () => {
                    if (this['BtnThreeGetSwitch']) {
                        return;
                    } else {
                        this['BtnThreeGetSwitch'] = true;
                    }
                    ADManager.ShowReward(() => {
                        ADManager.TAPoint(TaT.BtnClick, 'ADrewardbt_end');
                        _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`, null, null, null, () => {
                            _Gold._addGold(num * 3);
                            EventAdmin._notify(_Game._Event.colseScene);
                            this.lwgOpenScene(_SceneName.Start);
                        });
                    });
                });
            })
        }

        lwgOnDisable(): void {
            ADManager.TAPoint(TaT.PageLeave, 'endpage');
        }
    }
}
export default _Victory.Victory;


