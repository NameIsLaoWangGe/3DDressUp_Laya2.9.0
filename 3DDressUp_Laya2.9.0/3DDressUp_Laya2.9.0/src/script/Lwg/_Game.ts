import ADManager, { TaT } from "../TJ/Admanager";
import RecordManager from "../TJ/RecordManager";
import { Admin, Animation2D, Click, Color, EventAdmin, Share, TimerAdmin, Tools, _Gold, _SceneName } from "./Lwg";
import _GameBlinkItem from "./_GameBlinkItem";
import { _GameItem } from "./_GameItem";
import { _PreloadUrl } from "./_PreLoad";
import { _PropTry } from "./_PropTry";
import { _SelectLevel } from "./_SelectLevel";
import { _Share } from "./_Share";
/**游戏场景模块*/
export module _Game {
    export enum _Event {
        start = '_Game_start',
        showStepBtn = '_Game_showStepBtn',
        lastStep = '_Game_lastStep',
        nextStep = '_Game_nextStep',
        compelet = '_Game_compelet',
        playAni1 = '_Game_playAni1',
        playAni2 = '_Game_playAni2',
        restoreZOder = '_Game_restoreZoder',
        colseScene = '_Game_colseScene',
        victory = '_Game_victory',
        Photo = '_Game_Photo',
        turnRight = '_Game_turnRight',
        turnLeft = '_Game_turnLeft',
        generalRefresh = '_Game_generalRefresh',
    }
    /**动画名称*/
    export enum _Animation {
        action1 = 'action1',
        action2 = 'action2',
    }
    /**需要绘画的名称顺序*/
    export let _stepOrderImg: Array<Laya.Image> = [];
    /**当前最高绘制到哪一步*/
    export let _stepMaskIndex: number = 0;
    export let _activate: boolean = true;
    export let _stepIndex = {
        get present(): number {
            return this['presentIndex'] ? this['presentIndex'] : 0;
        },
        set present(val: number) {
            this['presentIndex'] = val;
            if (this['presentIndex'] > _stepIndex.max) {
                _stepIndex.max = this['presentIndex'];
            }
        },
        get max(): number {
            return this['maxIndex'] ? this['maxIndex'] : 0;
        },
        set max(val: number) {
            this['maxIndex'] = val;
        },
    }

    /**通用画笔套装*/
    export class _GeneralPencils {
        static _effectType = {
            general: 'general',
            colours: 'colours',
            blink: 'blink',
            eraser: 'eraser',
        };
        static _property = {
            _dataSource: '_dataSource',
            index: 'index',
            name: 'name',
            color: 'color',
            pitch: 'pitch',
            serial: 'serial',
            have: 'have',
        };

        static _init(): void {
            this._data = Tools.objArray_Copy(_PreloadUrl._list.json.General.data);
            this._pitchName = this._data[0][this._property.name];
        }
        /**是否处于合成状态*/
        static _compoundName: string;
        /**当前选中画笔的颜色*/
        static _pitchColor: string = '';
        /**数据表*/
        static _data: Array<any> = [];

        static get _pitchName(): string {
            return this['pitchName'] ? this['pitchName'] : this._data[0][this._property.name];
        }
        static set _pitchName(name: string) {
            for (let index = 0; index < this._data.length; index++) {
                if (name == this._data[index][this._property.name]) {
                    this._data[index][this._property.pitch] = true;
                    this['pitchName'] = name;
                    this._pitchColor = this._data[index][this._property.color];
                } else {
                    this._data[index][this._property.pitch] = false;
                }
                EventAdmin._notify(_Event.generalRefresh);
            }
        }
        /**随机选出一个画笔的名称,排除彩色画笔和橡皮*/
        static _randomOne(): string {
            let name = Tools.arrayRandomGetOne(this._data)['name'];
            if (name == 'colours' || name == 'eraser') {
                name = this._data[0]['name'];
            }
            return name;
        }
    }

    /**彩色画笔套装*/
    export class _ColoursPencils extends _GeneralPencils {
        /**第二次点击才会变色*/
        static _clickNum = 0;
        /**是否打开了彩色画笔*/
        static _switch: boolean = false;
        /**次数*/
        static _drawTime: number = 0;
        /**两种画多少次后，进入另外两个颜色区间*/
        static _drawInterval: number = 30;
        /**当前输出颜色*/
        static get _outputColor(): string {
            let str: string;
            this._drawTime++;
            let R: number;
            let G: number;
            let B: number;
            if (1 <= this._drawTime && this._drawTime <= this._drawInterval) {
                R = this._presentColorArr[0][0] + (this._presentColorArr[1][0] - this._presentColorArr[0][0]) * this._drawTime / this._drawInterval;
                G = this._presentColorArr[0][1] + (this._presentColorArr[1][1] - this._presentColorArr[0][1]) * this._drawTime / this._drawInterval;
                B = this._presentColorArr[0][2] + (this._presentColorArr[1][2] - this._presentColorArr[0][2]) * this._drawTime / this._drawInterval;

            } else if (this._drawInterval < this._drawTime && this._drawTime <= this._drawInterval * 2) {
                R = this._presentColorArr[1][0] + (this._presentColorArr[2][0] - this._presentColorArr[1][0]) * (this._drawTime - this._drawInterval) / this._drawInterval;
                G = this._presentColorArr[1][1] + (this._presentColorArr[2][1] - this._presentColorArr[1][1]) * (this._drawTime - this._drawInterval) / this._drawInterval;
                B = this._presentColorArr[1][2] + (this._presentColorArr[2][2] - this._presentColorArr[1][2]) * (this._drawTime - this._drawInterval) / this._drawInterval;

            } else if (this._drawInterval * 2 < this._drawTime && this._drawTime < this._drawInterval * 3) {
                R = this._presentColorArr[2][0] + (this._presentColorArr[0][0] - this._presentColorArr[2][0]) * (this._drawTime - this._drawInterval * 2) / this._drawInterval;;
                G = this._presentColorArr[2][1] + (this._presentColorArr[0][1] - this._presentColorArr[2][1]) * (this._drawTime - this._drawInterval * 2) / this._drawInterval;
                B = this._presentColorArr[2][2] + (this._presentColorArr[0][2] - this._presentColorArr[2][2]) * (this._drawTime - this._drawInterval * 2) / this._drawInterval;
            } else if (this._drawInterval * 3 - 1 < this._drawTime) {
                this._drawTime = 0;
                R = this._presentColorArr[0][0];
                G = this._presentColorArr[0][1];
                B = this._presentColorArr[0][2];
            }
            R = Math.round(R), G = Math.round(G), B = Math.round(B);
            str = Color.RGBToHexString(R, G, B);
            return str;
        };

        static get _presentColorArr(): Array<number> {
            return this['_presentColorArr0'] ? this['_presentColorArr0'] : [this._data[0][this._property.color + 1], this._data[0][this._property.color + 2], this._data[0][this._property.color + 3]];
        }
        static _setPresentColorArr() {
            for (let index = 0; index < this._data.length; index++) {
                const element = this._data[index];
                if (element[this._property.name] == this._pitchName) {
                    this['_presentColorArr0'] = [];
                    this['_presentColorArr0'].push(element[this._property.color + 1]);
                    this['_presentColorArr0'].push(element[this._property.color + 2]);
                    this['_presentColorArr0'].push(element[this._property.color + 3]);
                    return;
                }
            }
        }
        static _init(): void {
            this._data = Tools.objArray_Copy(_PreloadUrl._list.json.Colours.data);
            this._pitchName = this._data[0][this._property.name];
        }
    };
    /**星星画笔套装*/
    export class _BlinkPencils extends _GeneralPencils {
        /**是否打开了星星画笔*/
        static _switch: boolean = false;
        /**随机出一个还没有获得的画笔,如果为null,说明没有了*/
        static _randomNoHaveOne(): string {
            let noArr = [];
            for (let index = 0; index < this._data.length; index++) {
                const element = this._data[index];
                if (!element['have']) {
                    noArr.push(element);
                }
            }
            if (noArr.length > 0) {
                let random = Tools.arrayRandomGetOne(noArr);
                return random['name'];
            } else {
                return null;
            }
        }
        static _addPencil(name: string): void {
            for (let index = 0; index < this._data.length; index++) {
                const element = this._data[index];
                if (element['name'] == name) {
                    element['have'] = true;
                    Laya.LocalStorage.setJSON('_Game_Blink', JSON.stringify(this._data));
                    if (_BlinkList) {
                        _BlinkList.refresh();
                    }
                    return;
                }
            }
        }
        static checkHave(name: string): boolean {
            let bool: boolean = false;
            for (let index = 0; index < this._data.length; index++) {
                const element = this._data[index];
                if (element['name'] == name) {
                    if (element['have']) {
                        bool = true;
                    }
                }
            }
            return bool;
        }
        static _init(): void {
            this._data = Tools.jsonCompare(_PreloadUrl._list.json.Blink.url, '_Game_Blink', this._property.name);
        }
    };
    /**画板属性*/
    export enum _drawBoardProperty {
        /**原来的层级*/
        originalZOder = 'originalZOder',
        /**当前部件是否通关*/
        whetherPass = 'whetherPass',
    }
    export function _init(): void {
        Admin._game.loopLevel = 12;
        _GeneralPencils._init();
        _BlinkPencils._init();
        _ColoursPencils._init();
    }
    /**画笔列表*/
    export let _GeneralList1: Laya.Image;
    export let _BlinkList: Laya.List;

    export class Game extends Admin._SceneBase {
        lwgOnAwake(): void {
            ADManager.TAPoint(TaT.PageShow, 'playpage');
            ADManager.TAPoint(TaT.LevelStart, `level_${this.Owner.name}`);
            _Gold.goldVinish(100);
            _BlinkPencils._switch = false;
            _stepIndex.present = 0;
            _stepIndex.present = 0;
            _stepIndex.max = 0;
            _GeneralList1 = this.ImgVar('GeneralList1');
            _GeneralList1.pos(Laya.stage.width / 2, Laya.stage.height * 0.835);

            // // _GeneralList.pos(Laya.stage.width / 2, Laya.stage.height * 0.835);
            // _GeneralList.array = _GeneralPencils._data;

            // _GeneralList.selectEnable = true;
            // //  _GeneralList.vScrollBarSkin = "";
            // // this._ShopList.scrollBar.elasticBackTime = 0;//设置橡皮筋回弹时间。单位为毫秒。
            // // this._ShopList.scrollBar.elasticDistance = 500;//设置橡皮筋极限距离。
            // _GeneralList.selectHandler = new Laya.Handler(this, (index: number) => {
            //     // console.log(index)
            // });
            // _GeneralList.renderHandler = new Laya.Handler(this, (cell: Laya.Box, index: number) => {
            //     let _dataSource = cell.dataSource;
            //     let Pic = cell.getChildByName('Pic') as Laya.Image;
            //     switch (_dataSource['name']) {
            //         case 'colours':
            //             Pic.skin = `Game/UI/GameScene/Pencils/ColoursPencils/${_ColoursPencils._pitchName}.png`;
            //             break;
            //         default:
            //             Pic.skin = `Game/UI/GameScene/Pencils/Single/${_dataSource['name']}.png`;
            //             break;
            //     }

            //     if (_dataSource[_GeneralPencils._property.pitch]) {
            //         Pic.scale(1.2, 1.2);
            //     } else {
            //         Pic.scale(1, 1);
            //     }
            // });

            _stepOrderImg = [];
            let index = 1;
            while (this.Owner['Draw' + index]) {
                let Img = this.Owner['Draw' + index] as Laya.Image;
                _stepOrderImg.push(Img);
                Img[_drawBoardProperty.originalZOder] = Img.zOrder;
                let parent = Img.parent as Laya.Image;
                if (parent != this.ImgVar('DrawRoot')) {
                    parent[_drawBoardProperty.originalZOder] = parent.zOrder;
                    parent[_drawBoardProperty.whetherPass] = false;
                }
                // 创建画板
                let DrawBoard = Img.addChild((new Laya.Sprite()).pos(0, 0)) as Laya.Sprite;
                DrawBoard.cacheAs = "bitmap";
                DrawBoard.name = 'DrawBoard';
                DrawBoard.width = Img.width;
                DrawBoard.height = Img.height;
                this.Owner['Draw' + index].skin = null;
                index++;
            }
        }
        lwgOpenAni(): number {
            this.ImgVar('DrawingBoard').zOrder = 100;
            this.ImgVar('DrawingBoard').width = Laya.stage.width;
            this.ImgVar('DrawingBoard').height = Laya.stage.height;
            let fX = this.ImgVar('DrawingBoard').x = -Laya.stage.width / 2;
            let fY = this.ImgVar('DrawingBoard').y = -500;
            let fR = this.ImgVar('DrawingBoard').rotation = 75;
            let time = 600;
            let delay = 150;
            Animation2D.simple_Rotate(this.ImgVar('DrawingBoard'), fR, 0, time, delay);
            Animation2D.move_Simple(this.ImgVar('DrawingBoard'), fX, fY, 0, 0, time, delay, () => {
                TimerAdmin._frameOnce(30, this, () => {
                    RecordManager.startAutoRecord();
                    this.Step.cutFocus();
                })
            });

            let Shadow = new Laya.Image();
            this.Owner.addChild(Shadow);
            Shadow.zOrder = this.ImgVar('DrawingBoard').zOrder - 1;
            Shadow.skin = `Frame/UI/ui_orthogon_black.png`;
            Shadow.sizeGrid = '14,16,23,12';
            Shadow.width = this.ImgVar('DrawingBoard').width;
            Shadow.height = this.ImgVar('DrawingBoard').height;
            Shadow.x = this.ImgVar('DrawingBoard').x + 100;
            Shadow.y = this.ImgVar('DrawingBoard').y + 100;
            Shadow.rotation = this.ImgVar('DrawingBoard').rotation;
            Animation2D.scale_Alpha(Shadow, 0.2, 1.2, 1.3, 1, 1, 0.4, time);
            Animation2D.simple_Rotate(Shadow, fR - 20, 0, time, delay);
            Animation2D.move_Simple(Shadow, fX, fY, 0, 0, time, delay, () => {
            });

            return time + delay;
        }
        /**步骤控制*/
        Step = {
            firstRootP: null as Laya.Point,
            firstRootScaleX: null as number,
            firstRootScaleY: null as number,
            BtnNext: null as Laya.Image,
            BtnLast: null as Laya.Image,
            BtnTurnLeft: null as Laya.Image,
            BtnTurnRight: null as Laya.Image,
            btnSwitch: true,
            automaticNext: false,
            /**自动进入下一关*/
            setAutomaticNext: () => {
                Laya.timer.frameOnce(120, this.Step, () => {
                    if (this.Step.automaticNext) {
                        EventAdmin._notify(_Event.nextStep);
                        this.Step.automaticNext = false;
                    }
                })
            },
            BtnCompelet: null as Laya.Image,
            /**按钮点击控制*/
            needCut: false as boolean,
            /**焦点切换*/
            cutFocus: (func?: Function) => {
                this.Draw.len.count = 0;
                let Img = _stepOrderImg[_stepIndex.present];
                let Parent = Img.parent as Laya.Image;
                if (!this.Step.needCut) {
                    return;
                }
                if (Parent.name == 'Head' || Parent.name == 'Body') {
                    let oriPovitX = Parent.pivotX;
                    let oriPovitY = Parent.pivotY;
                    if (this.Owner.name !== 'Game_wugui') {
                        Tools.Node.changePovit(Parent, Parent.width / 2, Parent.height / 2, true);
                    }
                    let point = (Parent.parent as Laya.Image).localToGlobal(new Laya.Point(Parent.x, Parent.y));
                    let diffPoint = new Laya.Point(Laya.stage.width / 2 - point.x, Laya.stage.width * 3 / 5 - point.y);
                    // console.log(point);
                    Animation2D.move_Simple(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y, this.ImgVar('DrawRoot').x + diffPoint.x, this.ImgVar('DrawRoot').y + diffPoint.y, 400, 0, () => {
                        if (this.Owner.name !== 'Game_wugui') {
                            Tools.Node.changePovit(Parent, oriPovitX, oriPovitY, true);
                        }
                        if (func) {
                            func();
                        }
                    });
                }
            },
            /**完成时候的焦点切换*/
            compeletCutFocus: (func?: Function) => {
                Animation2D.move_Simple(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y, this.Step.firstRootP.x, this.Step.firstRootP.y, 300, 0, () => {
                    if (func) {
                        func();
                    }
                });
            },
            init: () => {
                // console.log(this.ImgVar('DrawRoot').y);
                this.ImgVar('DrawRoot').y = this.ImgVar('DrawRoot').y / 1280 * Laya.stage.height;
                let Picture = this.ImgVar('DrawRoot').getChildAt(0) as Laya.Image;
                let num = 0;
                for (let index = 0; index < Picture.numChildren; index++) {
                    const element = Picture.getChildAt(index);
                    if (element.name == 'Head' || element.name == 'Body') {
                        num++;
                    }
                }
                if (num == 2) {
                    this.Step.needCut = true;
                } else {
                    this.Step.needCut = false;
                }
                this.Step.firstRootP = new Laya.Point(this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y);
                this.Step.firstRootScaleX = this.ImgVar('DrawRoot').scaleX;
                this.Step.firstRootScaleY = this.ImgVar('DrawRoot').scaleY;
                let StepSwitch = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.StepSwitch.prefab) as Laya.Image;
                this.Owner.addChild(StepSwitch)['pos'](Laya.stage.width / 2, Laya.stage.height * 0.641);
                this.Step.BtnNext = StepSwitch.getChildByName('BtnNextStep') as Laya.Image;
                this.Step.BtnLast = StepSwitch.getChildByName('BtnLastStep') as Laya.Image;
                this.Step.BtnNext.visible = false;
                this.Step.BtnLast.visible = false;
                this.Step.BtnCompelet = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.BtnCompelet.prefab) as Laya.Image;
                this.Owner.addChild(this.Step.BtnCompelet)['pos'](563, Laya.stage.height * 0.641);
                this.Step.BtnCompelet.visible = false;
                this.Step.BtnTurnLeft = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.BtnTurnLeft.prefab) as Laya.Image;
                this.Owner.addChild(this.Step.BtnTurnLeft)['pos'](37, Laya.stage.height * 0.838);
                this.Step.BtnTurnRight = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.BtnTurnRight.prefab) as Laya.Image;
                this.Owner.addChild(this.Step.BtnTurnRight)['pos'](687, Laya.stage.height * 0.838);
            }
        }
        lwgOnEnable(): void {
            _BlinkList = this.ListVar('BlinkList');
            _BlinkList.pos(Laya.stage.width / 2 + Laya.stage.width, Laya.stage.height * 0.835);
            _BlinkList.array = _BlinkPencils._data;
            _BlinkList.selectEnable = true;
            _BlinkList.renderHandler = new Laya.Handler(this, (cell: Laya.Box, index: number) => {
                let _dataSource = cell.dataSource;
                let Pic = cell.getChildByName('Pic') as Laya.Image;
                Pic.skin = `Game/UI/GameScene/Pencils/Blink/${_dataSource['name']}.png`;
                if (_dataSource['have']) {
                    Pic.gray = false;
                } else {
                    Pic.gray = true;
                }
                if (_dataSource[_GeneralPencils._property.pitch] && _dataSource[_GeneralPencils._property.have]) {
                    Pic.scale(1.2, 1.2);
                } else {
                    Pic.scale(1, 1);
                }
            });
            this.Step.init();
        }
        lwgOnStart(): void {
            EventAdmin._notify(_Event.generalRefresh);
            EventAdmin._notify(_Event.start);
        }
        lwgEventRegister(): void {
            EventAdmin._register(_Event.generalRefresh, this, () => {
                for (let index = 0; index < _GeneralList1.numChildren; index++) {
                    const cell = _GeneralList1.getChildAt(index) as Laya.Image;
                    let _dataSource = cell['_dataSource'] = _GeneralPencils._data[index];
                    if (!cell.getComponent(_GameItem)) {
                        cell.addComponent(_GameItem);
                    }
                    let Pic = cell.getChildByName('Pic') as Laya.Image;
                    switch (_dataSource['name']) {
                        case 'colours':
                            Pic.skin = `Game/UI/GameScene/Pencils/ColoursPencils/${_ColoursPencils._pitchName}.png`;
                            break;
                        default:
                            Pic.skin = `Game/UI/GameScene/Pencils/Single/${_dataSource['name']}.png`;
                            break;
                    }

                    if (_dataSource[_GeneralPencils._property.pitch]) {
                        Pic.scale(1.2, 1.2);
                    } else {
                        Pic.scale(1, 1);
                    }
                }
            })

            EventAdmin._register(_Event.Photo, this, () => {
                this.AniVar(_Animation.action1).play();
                this.AniVar(_Animation.action1).stop();
                var htmlCanvas: Laya.HTMLCanvas = this.Owner.drawToCanvas(this.Owner.width, this.Owner.height, 0, 0);
                _Share._Data._photo._base64 = htmlCanvas.toBase64("image/png", 1)
            })

            EventAdmin._register(_Event.colseScene, this, () => {
                Tools.Node.changePovit(this.ImgVar('DrawRoot'), 0, 0);
                this.ImgVar('DrawRoot').x = 0;
                this.ImgVar('DrawRoot').y = 0;
                let Image = this.ImgVar('DrawRoot').getChildAt(0) as Laya.Image;
                Tools.Node.changePovit(Image, 0, 0);
                Image.scale(Image.scaleX - 0.2, Image.scaleY - 0.2);
                if (this.Owner.name == 'Game_dinglaotai' || this.Owner.name == 'Game_dinglaotou' || this.Owner.name == 'Game_zhangyugege') {
                    Image.x = 130;
                } else if (this.Owner.name == 'Game_xiaohonghua') {
                    Image.x = 85;
                } else if (this.Owner.name == 'Game_xiaoqiche') {
                    Image.x = 130;
                } else if (this.Owner.name == 'Game_wanshengnangua') {
                    Image.x = 80;
                } else if (this.Owner.name == 'Game_xiaonainiu') {
                    Image.x = 55;
                } else if (this.Owner.name == 'Game_maotouying') {
                    Image.x = 85;
                } else {
                    Image.x = 50;
                }
                if (this.Owner.name == 'Game_wugui' || this.Owner.name == 'Game_haitun' || this.Owner.name == 'Game_wanshengnangua') {
                    Image.y = 120;
                } else if (this.Owner.name == 'Game_xiaonainiu') {
                    Image.y = 90;
                } else {
                    Image.y = 100;
                }
                var htmlCanvas: Laya.HTMLCanvas = this.Owner.drawToCanvas(this.Owner.width, this.Owner.height, 0, 0);
                _SelectLevel._Data._setHaveBeenDrawn(htmlCanvas.toBase64("image/png", 1));
                this.lwgCloseScene();
            })
            EventAdmin._register(_Event.victory, this, () => {
                this.AniVar(_Animation.action1).stop();
                Tools.Node.changePovit(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').width / 2, this.ImgVar('DrawRoot').height / 2);
                Animation2D.move_Scale(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').scaleX, this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y, this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y + 150, this.ImgVar('DrawRoot').scaleX / 2, 500, 500);
                _Gold.goldAppear(100);
            })

            EventAdmin._register(_Event.playAni1, this, (loop?: boolean) => {
                this.AniVar(_Animation.action1).play(null, loop == undefined ? false : loop);
            })

            EventAdmin._register(_Event.start, this, () => {
                this.Draw.switch = true;
                for (let index = 0; index < _stepOrderImg.length; index++) {
                    if (_stepIndex.present >= index) {
                        _stepOrderImg[index].visible = true;
                    } else {
                        _stepOrderImg[index].visible = false;
                    }
                }
                let Img = _stepOrderImg[_stepIndex.present];
                let ImgParent = Img.parent as Laya.Image;
                if (ImgParent != this.ImgVar('DrawRoot')) {
                    ImgParent.zOrder = 200;
                }
                Img.zOrder = 200;
            });

            EventAdmin._register(_Event.showStepBtn, this, () => {
                if (_stepIndex.present == 0) {
                    this.Step.BtnNext.visible = true;
                    Animation2D.fadeOut(this.Step.BtnNext, 0, 1, 300);
                } else {
                    if (!this.Step.BtnNext.visible) {
                        this.Step.BtnNext.visible = true;
                        Animation2D.fadeOut(this.Step.BtnNext, 0, 1, 300);
                    }
                    if (!this.Step.BtnLast.visible) {
                        this.Step.BtnLast.visible = true;
                        Animation2D.fadeOut(this.Step.BtnLast, 0, 1, 300);
                    }
                }
            });

            EventAdmin._register(_Event.lastStep, this, () => {
                if (!this.Step.btnSwitch) {
                    return;
                } else {
                    this.Step.btnSwitch = false;
                }
                this.Draw.restoration();
                if (_stepIndex.present - 1 >= 0) {
                    let Img0 = _stepOrderImg[_stepIndex.present - 1];
                    let Img0Parent = Img0.parent as Laya.Image;
                    Animation2D.fadeOut(Img0.getChildByName('Pic'), 0, 1, 300, 0, () => {
                        let Img = _stepOrderImg[_stepIndex.present];
                        Animation2D.fadeOut(Img.getChildByName('Pic'), 1, 0, 300, 0, () => {
                            _stepIndex.present--;
                            this.Step.cutFocus();
                            if (_stepIndex.present < _stepIndex.max) {
                                this.Step.BtnNext.visible = true;
                            }
                            if (_stepIndex.present == 0) {
                                this.Step.BtnLast.visible = false;
                            }
                            // console.log(_stepIndex,_stepIndex.max);
                            EventAdmin._notify(_Event.restoreZOder);
                            if (Img0Parent != this.ImgVar('DrawRoot')) {
                                Img0Parent.zOrder = 200;
                            }
                            Img0.zOrder = 200;
                            this.Step.btnSwitch = true;
                            this.Draw.switch = true;
                        })
                    });
                }
            })

            EventAdmin._register(_Event.nextStep, this, () => {
                if (!this.Step.btnSwitch) {
                    return;
                } else {
                    this.Step.btnSwitch = false;
                }
                if (!this.Step.BtnLast.visible) {
                    Animation2D.fadeOut(this.Step.BtnLast, 0, 1, 300, null, () => {
                        this.Step.BtnLast.visible = true;
                    });
                }
                EventAdmin._notify(_Event.restoreZOder);
                this.Draw.restoration();
                if (_stepIndex.present >= _stepOrderImg.length - 1) {
                    EventAdmin._notify(_Event.compelet);
                    Animation2D.fadeOut(_stepOrderImg[_stepIndex.present].getChildByName('Pic'), 1, 0, 300, 0);
                } else {
                    let Img = _stepOrderImg[_stepIndex.present];
                    Img.zOrder = Img[_drawBoardProperty.originalZOder];
                    Animation2D.fadeOut(Img.getChildByName('Pic'), 1, 0, 300, 0, () => {
                        let Img0 = _stepOrderImg[_stepIndex.present + 1];
                        Img0.visible = true;
                        Animation2D.fadeOut(Img0.getChildByName('Pic'), 0, 1, 300, 0, () => {
                            let Img0Parent = Img0.parent as Laya.Image;
                            _stepIndex.present++;
                            this.Step.cutFocus();
                            if (!_stepOrderImg[_stepIndex.present][_drawBoardProperty.whetherPass]) {
                                this.Step.BtnNext.visible = false;
                            }
                            if (Img0Parent != this.ImgVar('DrawRoot')) {
                                Img0Parent.zOrder = 200;
                            }
                            // console.log(_stepIndex,_stepIndex.max);
                            Img0.zOrder = 200;
                            this.Step.btnSwitch = true;
                            this.Draw.switch = true;
                        })
                    });
                }
            })

            EventAdmin._register(_Event.restoreZOder, this, () => {
                for (let index = 0; index < _stepOrderImg.length; index++) {
                    const element = _stepOrderImg[index] as Laya.Image;
                    if (element) {
                        element.zOrder = _stepOrderImg[index][_drawBoardProperty.originalZOder];
                        let parent = element.parent as Laya.Image;
                        if (parent != this.ImgVar('DrawRoot')) {
                            parent.zOrder = parent[_drawBoardProperty.originalZOder];
                        }
                    }
                }
            });

            EventAdmin._register(_Event.compelet, this, () => {
                this.Draw.switch = false;
                this.Step.compeletCutFocus(() => {
                    this.Step.BtnNext.visible = false;
                    this.Step.BtnLast.visible = false;
                    this.Step.BtnTurnLeft.visible = false;
                    this.Step.BtnTurnRight.visible = false;
                    this.Step.BtnCompelet.visible = true;
                    Animation2D.fadeOut(_GeneralList1, 1, 0, 200);
                    Animation2D.fadeOut(_BlinkList, 1, 0, 200);
                });
                EventAdmin._notify(_Event.restoreZOder);
            })

            EventAdmin._register(_Event.turnRight, this, () => {
                this.Step.btnSwitch = false;
                Animation2D.move_Simple(_GeneralList1, _GeneralList1.x, _GeneralList1.y, Laya.stage.width / 2 - Laya.stage.width, _GeneralList1.y, 250, 0, () => {
                    Animation2D.move_Simple(_BlinkList, _BlinkList.x, _BlinkList.y, Laya.stage.width / 2, _BlinkList.y, 250, 0, () => {
                        this.Step.btnSwitch = true;
                        _BlinkPencils._switch = true;
                    });
                });
            })

            EventAdmin._register(_Event.turnLeft, this, () => {
                this.Step.btnSwitch = false;
                Animation2D.move_Simple(_BlinkList, _BlinkList.x, _BlinkList.y, Laya.stage.width / 2 + Laya.stage.width, _BlinkList.y, 250, 0, () => {
                    Animation2D.move_Simple(_GeneralList1, _GeneralList1.x, _GeneralList1.y, Laya.stage.width / 2, _GeneralList1.y, 250, 0, () => {
                        this.Step.btnSwitch = true;
                        _BlinkPencils._switch = false;
                    });
                });
            })
        }

        /**绘画控制*/
        Draw = {
            switch: false,
            DrawRoot: null as Laya.Image,
            DrawBoard: null as Laya.Image,
            EraserSp: null as Laya.Sprite,
            DrawSp: null as Laya.Sprite,
            BlinkSp: null as Laya.Sprite,
            frontPos: null as Laya.Point,
            endPos: null as Laya.Point,
            getTex: (): Laya.Texture => {
                return _PreloadUrl._list.texture[`bishua${1 + Math.floor(Math.random() * 4)
                    }`]['texture'];
            },
            getBlinkTex: (): Laya.Texture => {
                return _PreloadUrl._list.texture.blink1.texture;
            },
            getColor: (): string => {
                let color: string;
                if (_BlinkPencils._switch) {
                    color = _BlinkPencils._pitchColor;
                } else {
                    switch (_GeneralPencils._pitchName) {
                        case _GeneralPencils._effectType.eraser:
                            color = '#000000';
                            break;
                        case _GeneralPencils._effectType.colours:
                            color = _ColoursPencils._outputColor;
                            break;
                        default:
                            color = _GeneralPencils._pitchColor;
                            break;
                    }
                }
                return color;
            },
            getRadius: (): number => {
                if (this.Owner.name == 'Game_dinglaotai' || this.Owner.name == 'Game_dinglaotou' || this.Owner.name == 'Game_zhangyugege') {
                    return 25;
                } else {
                    return 50;
                }
            },
            draw: (Sp: Laya.Sprite, x?: number, y?: number, tex?: Laya.Texture, color?: string) => {
                Sp.graphics.drawTexture(tex ? tex : this.Draw.getTex(), x ? x : this.Draw.frontPos.x - this.Draw.getRadius() / 2, y ? y : this.Draw.frontPos.y - this.Draw.getRadius() / 2, this.Draw.getRadius(), this.Draw.getRadius(), null, 1, color ? color : this.Draw.getColor(), null);
            },
            drawBlink: (x?: number, y?: number) => {
                if (!_BlinkPencils.checkHave(_BlinkPencils._pitchName)) {
                    return;
                }
                this.Draw.BlinkSp.graphics.drawTexture(this.Draw.getBlinkTex(), x ? x : this.Draw.frontPos.x - this.Draw.getRadius() / 2, y ? y : this.Draw.frontPos.y - this.Draw.getRadius() / 2, this.Draw.getRadius(), this.Draw.getRadius(), null, 1, null, null);
            },
            getSpace: () => {
                if (this.Owner.name == 'Game_dinglaotai' || this.Owner.name == 'Game_dinglaotou' || this.Owner.name == 'Game_zhangyugege') {
                    return 5;
                } else {
                    return 10;
                }
            },
            len: {
                get count(): number {
                    return this['lenCount'] ? this['lenCount'] : 0;
                },
                set count(val: number) {
                    // console.log(val);
                    if (_stepIndex.present == _stepIndex.max) {
                        this['lenCount'] = val;
                        if (this['lenCount'] >= 50 && !_stepOrderImg[_stepIndex.present][_drawBoardProperty.whetherPass]) {
                            EventAdmin._notify(_Event.showStepBtn);
                            _stepOrderImg[_stepIndex.present][_drawBoardProperty.whetherPass] = true;
                            this['lenCount'] = 0;
                        }
                    }
                },
            },
            /**重制*/
            restoration: () => {
                this.Draw.switch = false;
                this.Draw.frontPos = null;
                this.Draw.endPos = null;
                this.Draw.DrawSp = null;
                this.Draw.EraserSp = null;
            },
        }

        onStageMouseDown(e: Laya.Event): void {
            Laya.timer.clearAll(this.Step);
            if (this.Draw.switch && _Game._activate) {
                this.Draw.DrawRoot = _stepOrderImg[_stepIndex.present];
                this.Draw.DrawBoard = this.Draw.DrawRoot.getChildByName('DrawBoard') as Laya.Image;
                this.Draw.frontPos = this.Draw.DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                let Sp: Laya.Sprite;
                let DrawBoard = this.Draw.DrawRoot.getChildByName('DrawBoard') as Laya.Sprite;
                this.Draw.frontPos = DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                if (_BlinkPencils._switch) {
                    switch (_BlinkPencils._pitchName) {
                        case _BlinkPencils._effectType.eraser:
                            Sp = this.Draw.EraserSp = new Laya.Sprite();
                            this.Draw.EraserSp.blendMode = "destination-out";
                            break;
                        default:
                            Sp = this.Draw.DrawSp = new Laya.Sprite();
                            this.Draw.DrawSp.blendMode = "none";
                            this.Draw.BlinkSp = new Laya.Sprite();
                            break;
                    }
                } else {
                    switch (_GeneralPencils._pitchName) {
                        case _GeneralPencils._effectType.eraser:
                            Sp = this.Draw.EraserSp = new Laya.Sprite();
                            this.Draw.EraserSp.blendMode = "destination-out";
                            break;
                        case _GeneralPencils._effectType.colours:
                            Sp = this.Draw.DrawSp = new Laya.Sprite();
                            this.Draw.DrawSp.blendMode = "none";
                            break;
                        default:
                            Sp = this.Draw.DrawSp = new Laya.Sprite();
                            this.Draw.DrawSp.blendMode = "none";
                            break;
                    }
                }
                DrawBoard.addChild(Sp)['pos'](0, 0);
                Sp.zOrder = DrawBoard.numChildren;
                this.Draw.draw(Sp);
                if (_BlinkPencils._switch && _BlinkPencils._pitchName !== _BlinkPencils._effectType.eraser) {
                    DrawBoard.addChild(this.Draw.BlinkSp)['pos'](0, 0);
                    this.Draw.BlinkSp.zOrder = Sp.zOrder + 1;
                    this.Draw.drawBlink();
                }
            }
        }
        onStageMouseMove(e: Laya.Event): void {
            if (this.Draw.frontPos && this.Draw.switch && _Game._activate) {
                let endPos = this.Draw.DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                let Sp: Laya.Sprite;
                if (_BlinkPencils._switch) {
                    switch (_BlinkPencils._pitchName) {
                        case _BlinkPencils._effectType.eraser:
                            Sp = this.Draw.EraserSp;
                            break;
                        default:
                            Sp = this.Draw.DrawSp;
                            break;
                    }
                } else {
                    switch (_GeneralPencils._pitchName) {
                        case _GeneralPencils._effectType.eraser:
                            Sp = this.Draw.EraserSp;
                            break;
                        case _GeneralPencils._effectType.colours:
                            Sp = this.Draw.DrawSp;
                            break;
                        default:
                            Sp = this.Draw.DrawSp;
                            break;
                    }
                }
                if (!Sp) {
                    return;
                }
                this.Draw.draw(Sp);
                if (_BlinkPencils._switch && _BlinkPencils._pitchName !== _BlinkPencils._effectType.eraser) {
                    this.Draw.drawBlink();
                }
                let destance = this.Draw.frontPos.distance(endPos.x, endPos.y);
                if (destance > this.Draw.getSpace()) {
                    let num = destance / this.Draw.getSpace();
                    let pointArr = Tools.Point.getPArrBetweenTwoP(this.Draw.frontPos, endPos, num);
                    for (let index = 0; index < pointArr.length; index++) {
                        this.Draw.draw(Sp, pointArr[index].x - this.Draw.getRadius() / 2, pointArr[index].y - this.Draw.getRadius() / 2);
                        if (_BlinkPencils._switch && _BlinkPencils._pitchName !== _BlinkPencils._effectType.eraser) {
                            this.Draw.drawBlink(pointArr[index].x - this.Draw.getRadius() / 2, pointArr[index].y - this.Draw.getRadius() / 2);
                        }
                    }
                }
                this.Draw.frontPos = endPos;
            }
        }
        onStageMouseUp(): void {
            if (this.Draw.len.count > 0 && _Game._activate) {
                this.Step.setAutomaticNext();
            }
            this.Draw.frontPos = null;
            // 画板内绘制节点过多时，则将图像绘制到新的画板上，删掉旧的画板
            if (this.Draw.DrawBoard && this.Draw.DrawBoard.numChildren > 40) {
                // console.log('合并！');
                let NewBoard = this.Draw.DrawRoot.addChild((new Laya.Sprite()).pos(0, 0)) as Laya.Sprite;
                NewBoard.width = this.Draw.DrawRoot.width;
                NewBoard.height = this.Draw.DrawRoot.height;
                NewBoard.cacheAs = "bitmap";
                NewBoard.name = 'DrawBoard';
                NewBoard.texture = this.Draw.DrawBoard.drawToTexture(this.Draw.DrawBoard.width, this.Draw.DrawBoard.height, this.Draw.DrawBoard.x, this.Draw.DrawBoard.y) as Laya.Texture;
                this.Draw.DrawBoard.removeSelf();
            }
        }

        lwgBtnClick(): void {
            for (let index = 0; index < _stepOrderImg.length; index++) {
                const element = _stepOrderImg[index];
                var func = () => {
                    if (index == _stepIndex.present) {
                        this.Step.automaticNext = true;
                    }
                }
                Click._on(Click._Type.noEffect, _stepOrderImg[index], this,
                    (e: Laya.Event) => {
                        if (this.Draw.switch && index == _stepIndex.present) {
                            this.Draw.len.count += 1;
                        }
                    },
                    (e: Laya.Event) => {
                        if (this.Draw.frontPos && this.Draw.switch && index == _stepIndex.present) {
                            let endPos = this.Draw.DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                            if (_GeneralPencils._pitchName != _GeneralPencils._effectType.eraser) {
                                this.Draw.len.count += (this.Draw.frontPos as Laya.Point).distance(endPos.x, endPos.y);
                            }
                        }
                    }, func, func)
            }

            var stop = (e: Laya.Event) => {
                e.stopPropagation();
            }
            Click._on(Click._Type.largen, this.Step.BtnLast, this, stop, stop, (e: Laya.Event) => {
                e.stopPropagation();
                Laya.timer.clearAll(this.Step);
                this.Draw.frontPos = null;
                EventAdmin._notify(_Event.lastStep);
                this.Draw.len.count = 0;
            });
            Click._on(Click._Type.largen, this.Step.BtnNext, this, stop, stop, (e: Laya.Event) => {
                e.stopPropagation();
                Laya.timer.clearAll(this.Step);
                this.Draw.frontPos = null;
                EventAdmin._notify(_Event.nextStep);
                this.Draw.len.count = 0;
            });
            Click._on(Click._Type.largen, this.Step.BtnTurnLeft, this, stop, stop, (e: Laya.Event) => {
                e.stopPropagation();
                EventAdmin._notify(_Event.turnLeft);
            });
            Click._on(Click._Type.largen, this.Step.BtnTurnRight, this, stop, stop, (e: Laya.Event) => {
                e.stopPropagation();
                EventAdmin._notify(_Event.turnRight);
            });
            Click._on(Click._Type.largen, this.Step.BtnCompelet, this, stop, stop, () => {
                this.lwgOpenScene(_SceneName.Settle, false, () => {
                    this.Step.BtnCompelet.visible = false;
                });
            });
        }
        lwgOnDisable(): void {
            _ColoursPencils._switch = false;
            ADManager.TAPoint(TaT.PageShow, 'playpage');
            ADManager.TAPoint(TaT.LevelFinish, `level_${this.Owner.name} `);
        }
    }
}
export default _Game.Game;

