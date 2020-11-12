import { Admin, DrawCard, Click, Tools, EventAdmin, Animation2D, Effects, Share, _Gold, TimerAdmin, Setting, Backpack, PalyAudio, _SceneName } from "./Lwg";
import ADManager from "../TJ/Admanager";
import RecordManager from "../TJ/RecordManager";
import { _Guide } from "./_Guide";


export default class UIDrawCard extends DrawCard.DrawCardScene {
    /** @prop {name:Card, tips:"选项卡预制体", type:Prefab}*/
    public Card: Laya.Prefab;

    lwgOnAwake(): void {
    }

    lwgOnEnable(): void {
    }

    lwgOpenAniAfter(): void {
    }

    lwgEvent_register(): void {
        // 引导的时候，用两个遮罩盖住按钮的点击

        // 开始一个一个翻牌
        EventAdmin._register('flop', this, () => {
            if (!this.Owner['cardIndex']) {
                this.Owner['cardIndex'] = 0;
            }
            let Card = this.Owner['CardParent'].getChildByName('Card' + this.Owner['cardIndex']) as Laya.Sprite;
            if (!Card) {
                this.Owner['cardIndex'] = null;
                Laya.timer.once(500, this, () => {
                    RecordManager.stopAutoRecord();
                    Admin._openScene(_SceneName.Share, null, () => { Share._fromWhich = _SceneName.DrawCard });
                })
                return;
            }
            var func = () => {
                this.Owner['cardIndex']++;
                EventAdmin._notify('flop');
            }
            PalyAudio.playSound('Game/Voice/fanpai.wav');
            Animation2D.cardRotateX_OneFace(Card, () => {
                (Card.getChildByName('Pic') as Laya.Image).visible = true;
                if (!Card['objData']['repetitionCard']) {
                    let New = Card.getChildByName('New') as Laya.Sprite;
                    New.visible = true;
                    Animation2D.bombs_Appear(New, 0, 1, 1.1, 5, 100, 200, 250);
                }
            }, 100, 50, () => {
                //     // console.log(Card['objData'][Game3D.CardProperty.quality]);
                //     if (Card['objData'][Game3D.CardProperty.quality] == Game3D.Quality.SR || Card['objData'][Game3D.CardProperty.quality] == Game3D.Quality.SSR) {

                //         Card.zOrder = (this.Owner['cardIndex'] + 1) * 10;
                //         let x = Card.x;
                //         let y = Card.y;
                //         let ReflectPic = Card.getChildByName('Reflect') as Laya.Image;

                //         TimerAdmin._frameRandomLoop(15, 35, this, () => {
                //             for (let index = 0; index < 1; index++) {
                //                 Laya.timer.once(index * 200, this, () => {
                //                     Effects.aureole_Continuous(Card, new Laya.Point(Card.width / 2, Card.height / 2), 41.5, 55, null, ['Frame/Effects/ui_square_guang2.png'], 0.1, 0.002);
                //                 })
                //             }
                //         }, true)
                //         Animation2D.leftRight_Shake(Card, 20, 100, 300, () => {
                //             PalyAudio.playSound('Game/Voice/xiyoukazhanshi.wav');
                //             Animation2D.rotate_Scale(Card, 0, 1, 1, 720, 3, 3, 400, 200, () => {
                //                 Animation2D.move_Simple(ReflectPic.getChildByName('LiuGuang'), -21, -9, 131, 180, 500, 400, () => {
                //                     Animation2D.fadeOut(ReflectPic.getChildByName('Guang'), 0, 1, 250, 0, () => {
                //                         Animation2D.fadeOut(ReflectPic.getChildByName('Guang'), 1, 0, 200, 0);
                //                     });
                //                 }, Laya.Ease.expoIn);
                //                 for (let index = 0; index < 5; index++) {
                //                     let pointAarr = Tools.point_RandomPointByCenter(new Laya.Point(globalPos.x, globalPos.y), 200, 100);
                //                     Laya.timer.once(300 * index, this, () => {
                //                         Effects.createExplosion_Rotate(this.Owner['CardParent'], 25, pointAarr[0].x, pointAarr[0].y, 'star', 10, 10);
                //                     });
                //                 }
                //                 Animation2D.move_Scale(Card, 3, Card.x, Card.y, x, y, 1, 200, 2000, null, () => {
                //                     func();
                //                 });
                //             });
                //             Animation2D.move_Simple(Card, x, y, globalPos.x, globalPos.y, 250, 100);
                //         });
                //     } else {
                //         func();
                //     }
            });
        })

        // 关闭分享界面，我都要按钮出现
        EventAdmin._register(_SceneName.Share + _SceneName.DrawCard, this, () => {
            this.Owner['BtnTake'].visible = true;
            EventAdmin._notify(_Guide._Event.onStep);
        })
    }

    lwgBtnClick(): void {
        Click._on(Click._Type.largen, this.Owner['BtnFree'], this, null, null, () => {
            if (!_Guide._complete.bool) {
                return;
            }
            ADManager.ShowReward(() => {
                DrawCard._freeAds.num++;
                if (DrawCard._freeAds.num % 3 == 0 && DrawCard._freeAds.num !== 0) {
                    DrawCard._freeAds.num = 0;
                    DrawCard._residueDraw.num++;
                    this.Owner['ResidueNum'].text = DrawCard._residueDraw.num.toString();
                }
                this.Owner['FreeAds'].value = (DrawCard._freeAds.num % 3).toString();
            })
        });

        Click._on(Click._Type.largen, this.Owner['BtnBack'], this, null, null, () => {
            if (!_Guide._complete.bool) {
                if (_Guide._whichStepNum == 5) {
                    // Admin._openScene(_SceneName.UIStart,null, Laya.stage.numChildren - 4);
                    EventAdmin._notify(_Guide._Event.stepComplete);
                }
                return;
            } else {
                // Admin._openScene(_SceneName.UIStart, this.Owner);
            }
        });

        Click._on(Click._Type.noEffect, this.Owner['DrawDisPlay'], this, (e: Laya.Event) => {
            e.stopPropagation();
        });

        Click._on(Click._Type.largen, this.Owner['BtnTake'], this, null, null, (e: Laya.Event) => {
            EventAdmin._notify(_Guide._Event.stepComplete);
            Admin._clickLock.switch = true;
            let arrRepetitionCard = [];
            let arrCard = [];
            for (let index = 0; index < this.Owner['CardParent'].numChildren; index++) {
                let Card = this.Owner['CardParent'].getChildAt(index) as Laya.Sprite;
                if (Card['objData']['repetitionCard']) {
                    arrRepetitionCard.push(Card);
                } else {
                    arrCard.push(Card);
                }
            }
            var anifunc = () => {
                Animation2D.fadeOut(this.Owner['DrawDisPlay'], 1, 0, 200, 0, () => {

                    EventAdmin._notify(_Guide._Event.onStep);
                    this.Owner['DrawDisPlay'].x = -800;
                    this.Owner['DrawDisPlay'].alpha = 1;
                    Admin._clickLock.switch = false;
                })
                Tools.Node.removeAllChildren(this.Owner['CardParent']);
            }
            var arrCardAni = () => {
                for (let i = 0; i < arrCard.length; i++) {
                    const Card = arrCard[i];
                    let globalPos = Card.localToGlobal(new Laya.Point(Card.width / 2, Card.height / 2));
                    Laya.timer.once(i * 150, this, () => {
                        Animation2D.move_Simple(Card, Card.x, globalPos.y, Card.x, -300, 800, 0, () => {
                            if (i == arrCard.length - 1) {
                                anifunc();
                            }
                        }, Laya.Ease.cubicOut)
                    })
                }
            }
            var arrRepetitionCardAni = () => {
                for (let j = 0; j < arrRepetitionCard.length; j++) {
                    const Card = arrRepetitionCard[j];
                    let globalPos = Card.localToGlobal(new Laya.Point(Card.width / 2, Card.height / 2));
                    Laya.timer.once((j + 1) * 150, this, () => {
                        // Effects.createExplosion_Rotate(this.Owner['CardParent'], 25, globalPos.x, globalPos.y, Effects.SkinStyle.dot, 10, 10);
                        Card.visible = false;
                       _Gold._getGoldAni_Heap(Laya.stage, 8, 88, 69, 'Game/UI/Common/jinbi.png', new Laya.Point(globalPos.x, globalPos.y), new Laya.Point(_Gold.GoldNode.x - 80, _Gold.GoldNode.y), null, () => {
                            // Gold.addGold(Card['objData'][Game3D.CardProperty.repetition]);
                            if (j == arrRepetitionCard.length - 1) {
                                if (j == 9) {
                                    anifunc();
                                } else {
                                    arrCardAni();
                                }
                            }
                        });
                    })
                }
            }
            if (arrRepetitionCard.length == 0) {
                arrCardAni();
            } else {
                arrRepetitionCardAni();
            }
        });

        Click._on(Click._Type.noEffect, this.Owner['Surface'], this,
            // 按下
            (e: Laya.Event) => {
                if (!_Guide._complete.bool) {
                    if (_Guide._whichStepNum == 1 || _Guide._whichStepNum == 3) {
                    } else {
                        return;
                    }
                }
                RecordManager.startAutoRecord();
                EventAdmin._notify(_Guide._Event.stepComplete);
                // 初始化一个绘制节点
                if (!this.Owner.getChildByName('DrawSp')) {
                    this.Owner['Drawlength'] = 0;
                    let DrawSp = new Laya.Sprite();
                    this.Owner.addChild(DrawSp);
                    DrawSp.name = 'DrawSp';
                    DrawSp.pos(0, 0);
                    this.Owner['DrawSp'] = DrawSp;
                }
                // 初始化初始位置
                this.Owner['DrawPosArr'] = new Laya.Point(e.stageX, e.stageY);
                this['middleOff'] = true;
            },
            // 移动
            (e: Laya.Event) => {
                // 范围控制
                let Img = this.Owner['Surface'] as Laya.Sprite;
                let globalPos = Img.localToGlobal(new Laya.Point(Img.width / 2, Img.height / 2));
                if (new Laya.Point(e.stageX, e.stageY).distance(globalPos.x, globalPos.y) > Img.width / 2) {
                    this.Owner['DrawPosArr'] = null;
                    return;
                }
                // 画线
                if (this.Owner['DrawPosArr']) {
                    this.Owner['DrawSp'].graphics.drawLine(this.Owner['DrawPosArr'].x, this.Owner['DrawPosArr'].y, e.stageX, e.stageY, "#000000", 8);

                    this.Owner['DrawSp'].graphics.drawCircle(e.stageX, e.stageY, 4, "#000000");

                    this.Owner['Drawlength'] += (this.Owner['DrawPosArr'] as Laya.Point).distance(e.stageX, e.stageY);
                    this.Owner['DrawPosArr'] = new Laya.Point(e.stageX, e.stageY);
                }
            },
            // 抬起
            () => {
                if (this.Owner.getChildByName('DrawSp')) {
                    this.Owner.getChildByName('DrawSp').removeSelf();
                } else {
                    return;
                }
                EventAdmin._notify('drawCardEvent');
                this.Owner['DrawPosArr'] = null;
                this['middleOff'] = false;
            },
            // 出图片
            () => {
                if (this.Owner.getChildByName('DrawSp')) {
                    this.Owner.getChildByName('DrawSp').removeSelf();
                } else {
                    return;
                }
                EventAdmin._notify('drawCardEvent');
                this.Owner['DrawPosArr'] = null;
                this['middleOff'] = false;
            });
    }
    lwgBeforeVanishAni() {
        // Game3D.Scene3D.active = true;
    };
    lwgOnDisable(): void {
        Setting.setBtnAppear();
    }
}