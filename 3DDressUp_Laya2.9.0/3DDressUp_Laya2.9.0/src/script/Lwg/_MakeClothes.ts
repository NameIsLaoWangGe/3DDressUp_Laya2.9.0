import lwg, { Admin, Animation2D, DataAdmin, EventAdmin, _SceneName } from "./Lwg";

export module _MakeClothes {

    export enum _Event {
        trigger = '_MakeClothes_trigger',
    }

    /**虚线控制*/
    export class DottedLine extends DataAdmin._Table {
        Root: Laya.Image;
        LineParent: Laya.Image;
        constructor(Root: Laya.Image, LineParent: Laya.Image) {
            super();
            this.Root = Root;
            this.LineParent = LineParent;
            for (let index = 0; index < this.LineParent.numChildren; index++) {
                const element = this.LineParent.getChildAt(index) as Laya.Image;
                if (element.getComponents(Laya.BoxCollider)) {
                    let data = {};
                    data['Img'] = element;
                    data[this._property.name] = element.name;
                    data[this._property.conditionNum] = element.getComponents(Laya.BoxCollider).length;
                    data[this._property.degreeNum] = 0;
                    this._arr.push(data);
                }
            }
        }
        /**移除布料*/
        removeCloth(name: string): void {
            this.LineParent.getChildByName(name).removeSelf();
            let Cloth = this.Root.getChildByName(`Cloth${name.substr(4)}`) as Laya.Image;
            if (Cloth) {
                Animation2D.rotate_Scale
                Cloth.removeSelf();
            } else {
                console.log('当前虚线上没有可以裁剪布料，请查看')
            }
        }
    }

    /**剪刀*/
    export class Scissor extends Admin._ObjectBase {
        onTriggerEnter(other: Laya.CircleCollider, self: Laya.CircleCollider): void {
            if (!other['cut']) {
                other['cut'] = true;
                EventAdmin._notify(_Event.trigger, [other.owner.name]);
                other.destroy();
            }
        }
    }

    export class MakeClothes extends Admin._SceneBase {
        DottedLineControl: DottedLine;
        lwgOnAwake(): void {
            this.DottedLineControl = new DottedLine(this._ImgVar('Root'), this._ImgVar('LineParent'));
            this._ImgVar('Scissor').addComponent(Scissor);
            this._ImgVar('LineParent').cacheAs = "bitmap";
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.trigger, this, (name: string) => {
                let value = this.DottedLineControl._checkCondition(name);
                if (value) {
                    this.DottedLineControl.removeCloth(name);
                }
            })
        }
        lwgBtnRegister(): void {
            this._btnUp(this._ImgVar('BtnBack'), () => {
                this._openScene(_SceneName.Start);
            })
        }

        /**裁剪控制*/
        Cutting = {
            Scissor: () => {
                return this._ImgVar('Scissor');
            },
            touchP: new Laya.Point(),
            maxSpeed: 30,
            get diffP(): Laya.Point {
                return this['_diffP'] ? this['_diffP'] : new Laya.Point();
            },
            set diffP(p: Laya.Point) {
                p.x = p.x > this['maxSpeed'] ? this['maxSpeed'] : p.x;
                p.x = p.x < -  this['maxSpeed'] ? -this['maxSpeed'] : p.x;
                p.y = p.y > this['maxSpeed'] ? this['maxSpeed'] : p.y;
                p.y = p.y < - this['maxSpeed'] ? -this['maxSpeed'] : p.y;
                this['_diffP'] = p;
            },
            EraserSp: (): Laya.Sprite => {
                if (!this._ImgVar('LineParent').getChildByName('EraserSp')) {
                    let Sp = new Laya.Sprite();
                    Sp.name = 'EraserSp';
                    Sp.blendMode = "destination-out";
                    this._ImgVar('LineParent').addChild(Sp);
                    return Sp;
                } else {
                    return this._ImgVar('LineParent').getChildByName('EraserSp') as Laya.Sprite;
                }
            },
            EraserSize: 34,
            erasureLine: () => {
                let gPos = (this.Cutting.Scissor().parent as Laya.Sprite).localToGlobal(new Laya.Point(this._ImgVar('Scissor').x, this._ImgVar('Scissor').y));
                let localPos = this.Cutting.EraserSp().globalToLocal(gPos);
                this.Cutting.EraserSp().graphics.drawCircle(localPos.x, localPos.y, this.Cutting.EraserSize / 2, "#000000");
            }
        }
        onStageMouseDown(e: Laya.Event) {
            this.Cutting.touchP = new Laya.Point(e.stageX, e.stageY);
        }
        onStageMouseMove(e: Laya.Event) {
            if (this.Cutting.touchP) {
                this.Cutting.diffP = new Laya.Point(e.stageX - this.Cutting.touchP.x, e.stageY - this.Cutting.touchP.y);
                this.Cutting.Scissor().x += this.Cutting.diffP.x;
                this.Cutting.Scissor().y += this.Cutting.diffP.y;
                this.Cutting.erasureLine();
                this.Cutting.touchP = new Laya.Point(e.stageX, e.stageY);
            }
        }
        onStageMouseUp() {
            this.Cutting.touchP = null;
        }
    }
}