import ADManager from "../TJ/Admanager";
import { Admin, Click, Dialogue, EventAdmin, Tools } from "./Lwg";
import OldEffects from "./OldEffects";
import { _Game } from "./_Game";
import _GameBlinkItem from "./_GameBlinkItem";

export module _Compound {
    export let Skin1: string;
    export let Skin2: string;
    export class Compound extends Admin._SceneBase {
        lwgOnAwake(): void {
            if (Skin1 == 'colours') {
                Skin1 = _Game._ColoursPencils._pitchName;
                this.ImgVar('Pencil1').skin = `Game/UI/GameScene/Pencils/ColoursPencils/${Skin1}.png`;
            } else {
                this.ImgVar('Pencil1').skin = `Game/UI/GameScene/Pencils/Single/${Skin1}.png`;
            }
            this.ImgVar('Pencil1').sizeGrid = '112,0,17,0';

            if (Skin2 == 'colours') {
                Skin2 = _Game._ColoursPencils._pitchName;
                this.ImgVar('Pencil2').skin = `Game/UI/GameScene/Pencils/ColoursPencils/${Skin2}.png`;
            } else {
                this.ImgVar('Pencil2').skin = `Game/UI/GameScene/Pencils/Single/${Skin2}.png`;
            }
            this.ImgVar('Pencil2').sizeGrid = '112,0,17,0';

            this.getCompound.setPro(Tools.randomOneHalf());
        }
        getCompound = {
            setPro: (p: number) => {
                console.log(p);
                if (p == 1) {
                    this.getCompound.name = _Game._BlinkPencils._randomNoHaveOne();
                    if (this.getCompound.name == null) {
                        this.btnVar('BtnNo').visible = this.btnVar('BtnGet').visible = false;
                        this.btnVar('BtnConfirm').visible = true;
                        this.ImgVar('GetPic').skin = `Game/UI/GameScene/Pencils/Single/${this.getCompound.name}.png`;
                    } else {
                        this.btnVar('BtnNo').visible = this.btnVar('BtnGet').visible = true;
                        this.btnVar('BtnConfirm').visible = false;
                        this.ImgVar('GetPic').skin = `Game/UI/GameScene/Pencils/Blink/${this.getCompound.name}.png`;
                    }
                } else {
                    this.getCompound.name = _Game._GeneralPencils._randomOne();
                    this.btnVar('BtnNo').visible = this.btnVar('BtnGet').visible = false;
                    this.btnVar('BtnConfirm').visible = true;
                    this.ImgVar('GetPic').skin = `Game/UI/GameScene/Pencils/Single/${this.getCompound.name}.png`;
                }
                this['_pro'] = p;
            },
            name: null as string,
        }

        lwgOnEnable(): void {
            _Game._activate = false;
            this.AniVar('ani1').play(0, false);
            this.AniVar('ani1').on(Laya.Event.LABEL, this, () => {
                OldEffects.createFireworks(Laya.stage, 40, 430, 200);
                OldEffects.createFireworks(Laya.stage, 40, 109, 200);
                OldEffects.createLeftOrRightJet(Laya.stage, 'right', 40, 720, 300);
                OldEffects.createLeftOrRightJet(Laya.stage, 'left', 40, 0, 300);
            })
        }
        lwgOpenAni(): number {
            return 100;
        }
        lwgBtnClick(): void {
            var close = () => {
                _Game._activate = true;
                this.lwgCloseScene();
            }
            Click._on(Click._Type.largen, this.btnVar('BtnConfirm'), this, null, null, (e: Laya.Event) => {
                _Game._GeneralPencils._pitchName = this.getCompound.name;
                EventAdmin._notify(_Game._Event.turnLeft);
                close();
            });

            Click._on(Click._Type.largen, this.btnVar('BtnGet'), this, null, null, (e: Laya.Event) => {
                ADManager.ShowReward(() => {
                    EventAdmin._notify(_Game._Event.turnRight);
                    _Game._BlinkPencils._pitchName = this.getCompound.name;
                    _Game._BlinkPencils._addPencil(this.getCompound.name);
                    Dialogue.createHint_Middle(`恭喜获得一只新的闪光画笔！`);
                    close();
                });
            });
            Click._on(Click._Type.largen, this.btnVar('BtnNo'), this, null, null, (e: Laya.Event) => {
                EventAdmin._notify(_Game._Event.turnLeft);
                close();
            });
        }
    }
}
export default _Compound.Compound;
