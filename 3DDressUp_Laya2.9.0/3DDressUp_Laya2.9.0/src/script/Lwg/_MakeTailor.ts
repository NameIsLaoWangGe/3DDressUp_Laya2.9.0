import lwg, { Admin, Animation2D, DataAdmin, EventAdmin, TimerAdmin, Tools, _SceneName } from "./Lwg";
import { _Res } from "./_PreLoad";

export module _MakeTailor {
    export enum _Event {
        trigger = '_MakeTailor_trigger',
        playAni = '_MakeTailor_playAni',
        scissorPlay = '_MakeTailor_scissorPlay',
        scissorStop = '_MakeTailor_scissorStop',
    }

    /**虚线控制*/
    export class DottedLine extends DataAdmin._Table {
        Root: Laya.Image;
        LineParent: Laya.Image;
        BtnCompelet: Laya.Image;
        OwnerScene: Laya.Scene;
        constructor(Root: Laya.Image, LineParent: Laya.Image, OwnerScene: Laya.Scene) {
            super();
            this.Root = Root;
            this.LineParent = LineParent;
            this.OwnerScene = OwnerScene;
            for (let index = 0; index < this.LineParent.numChildren; index++) {
                const Line = this.LineParent.getChildAt(index) as Laya.Image;
                if (Line.numChildren > 0) {
                    let data = {};
                    data['Line'] = Line;
                    data[this._property.name] = Line.name;
                    data[this._property.conditionNum] = Line.numChildren;
                    data[this._property.degreeNum] = 0;
                    this._arr.push(data);
                }
            }
        }
        /**移除布料*/
        removeCloth(name: string): void {
            let Cloth = this.Root.getChildByName(`Cloth${name.substr(4)}`) as Laya.Image;
            if (Cloth) {
                let ani = this.OwnerScene[`ani${name.substr(4)}`] as Laya.Animation
                ani.play(0, false);
                ani.on(Laya.Event.COMPLETE, this, () => {
                    Cloth.removeSelf();
                    console.log('删除节点！');
                })
                // EventAdmin._notify(_Event.playAni, [name.substr(4)]);
            } else {
                console.log('当前虚线上没有可以裁剪布料，请检查');
            }
        }
    }

    /**剪刀*/
    export class Scissor extends Admin._ObjectBase {

        state: string = 'none';//约束当前每次裁剪只裁剪一个线条
        /**动画控制*/
        Ani = {
            switch: true,
            shearSpeed: 5,
            range: 40,
            dir: 'up',
            dirType: {
                up: 'up',
                down: 'down',
            },
            paly: () => {
                // TimerAdmin._clearAll([this.Ani])
                TimerAdmin._frameLoop(1, this.Ani, () => {
                    if (this._SceneImg('S2').rotation > this.Ani.range) {
                        this.Ani.dir = 'up';
                    } else if (this._SceneImg('S2').rotation <= 0) {
                        this.Ani.dir = 'down';
                    }
                    if (this.Ani.dir == 'up') {
                        this._SceneImg('S2').rotation -= this.Ani.shearSpeed;
                        this._SceneImg('S1').rotation += this.Ani.shearSpeed;
                    } else if (this.Ani.dir == 'down') {
                        this._SceneImg('S2').rotation += this.Ani.shearSpeed;
                        this._SceneImg('S1').rotation -= this.Ani.shearSpeed;
                    }
                });
                // Laya.Tween.clearAll(this._SceneImg('S1'))
                // Laya.Tween.clearAll(this._SceneImg('S2'))
            },
            stop: () => {
                TimerAdmin._frameOnce(60, this.Ani, () => {
                    // TimerAdmin._clearAll([this.Ani]);
                    // Laya.Tween.clearAll(this._SceneImg('S1'))
                    // Laya.Tween.clearAll(this._SceneImg('S2'))
                    this.Ani.switch = false;
                    Animation2D.simple_Rotate(this._SceneImg('S2'), this._SceneImg('S2').rotation, this.Ani.range / 3, 200);
                    Animation2D.simple_Rotate(this._SceneImg('S1'), this._SceneImg('S1').rotation, -this.Ani.range / 3, 200);
                })
            },
            event: () => {
                this._evReg(_Event.scissorPlay, () => {
                    this.Ani.paly();
                })
                this._evReg(_Event.scissorStop, () => {
                    this.Ani.stop();
                })
            }
        }
        lwgEvent(): void {
            this.Ani.event();
        }
        Move = {
            touchP: null as Laya.Point,
            diffP: null as Laya.Point,
        }
        lwgOnStageDown(e: Laya.Event) {
            this._evNotify(_Event.scissorPlay);
            this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        lwgOnStageMove(e: Laya.Event) {
            if (this.Move.touchP) {
                this.Move.diffP = new Laya.Point(e.stageX - this.Move.touchP.x, e.stageY - this.Move.touchP.y);
                this._Owner.x += this.Move.diffP.x;
                this._Owner.y += this.Move.diffP.y;
                this.Move.touchP = new Laya.Point(e.stageX, e.stageY);
                this._evNotify(_Event.scissorPlay);
            }
        }
        lwgOnStageUp() {
            this._evNotify(_Event.scissorStop);
            this.Move.touchP = null;
        }

        onTriggerEnter(other: Laya.CircleCollider, _Owner: Laya.CircleCollider): void {
            if (this.state == 'none' || this.state == other.owner.parent.name) {
                if (!other['cut']) {
                    this._evNotify(_Event.scissorPlay);
                    this._evNotify(_Event.scissorStop);
                    this.state = other.owner.parent.name;
                    console.log('裁剪！');
                    other['cut'] = true;
                    EventAdmin._notify(_Event.trigger, [other.owner]);
                }
            }
        }
        onTriggerExit(other: Laya.CircleCollider, _Owner: Laya.CircleCollider): void {
            if (this.state == other.owner.parent.name) {
                this.state = 'none';
            }
        }
    }
    export class MakeTailor extends Admin._SceneBase {
        DottedLineControl: DottedLine;
        lwgOnAwake(): void {
            this.DottedLineControl = new DottedLine(this._ImgVar('Root'), this._ImgVar('LineParent'), this._Owner);

            this.DottedLineControl.BtnCompelet = Tools._Node.createPrefab(_Res._list.prefab2D.BtnCompelet.prefab) as Laya.Image;
            this._Owner.addChild(this.DottedLineControl.BtnCompelet);
            this.DottedLineControl.BtnCompelet.pos(Laya.stage.width - 100, 150);
            this.DottedLineControl.BtnCompelet.visible = false;
            this._ImgVar('Scissor').addComponent(Scissor);
        }
        lwgAdaptive(): void {
            // this._Owner.x += 100;
        }
        lwgOpenAni(): number {
            return 100;
        }
        lwgEvent(): void {
            this._evReg(_Event.trigger, (Dotted: Laya.Image) => {
                let value = this.DottedLineControl._checkCondition(Dotted.parent.name);
                Dotted.visible = false;
                if (value) {
                    this.DottedLineControl.removeCloth(Dotted.parent.name);
                    if (this.DottedLineControl._checkAllCompelet()) {
                        this.DottedLineControl.BtnCompelet.visible = true;
                    }
                }
                let Parent = Dotted.parent as Laya.Image;
                let gPos = Parent.localToGlobal(new Laya.Point(Dotted.x, Dotted.y));
                if (Dotted.name == 'A') {
                    if (this._ImgVar('Scissor').x <= gPos.x) {
                        this._ImgVar('Scissor').rotation = Dotted.rotation;
                    } else {
                        this._ImgVar('Scissor').rotation = 180 + Dotted.rotation;
                    }
                } else {
                    if (this._ImgVar('Scissor').y >= gPos.y) {
                        this._ImgVar('Scissor').rotation = Dotted.rotation;
                    } else {
                        this._ImgVar('Scissor').rotation = 180 + Dotted.rotation;
                    }
                }
            })
        }
        lwgButton(): void {
            this._btnUp(this._ImgVar('BtnNext'), () => {
                this._openScene('MakeClothes', true, true);
            })
            this._btnUp(this.DottedLineControl.BtnCompelet, () => {
                this._openScene('MakeClothes', true, true);
            })
        }
    }
}