(function () {
    'use strict';

    var lwg;
    (function (lwg) {
        let Pause;
        (function (Pause) {
            function _createBtnPause(parent) {
                let sp;
                Laya.loader.load('prefab/BtnPause.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    parent.addChild(sp);
                    sp.pos(645, 167);
                    sp.zOrder = 0;
                    Pause.BtnPauseNode = sp;
                    Pause.BtnPauseNode.name = 'BtnPauseNode';
                    Click._on(Click._Type.largen, sp, null, null, btnPauseUp, null);
                }));
            }
            Pause._createBtnPause = _createBtnPause;
            function btnPauseUp(event) {
                event.stopPropagation();
                event.currentTarget.scale(1, 1);
                lwg.Admin._openScene('UIPause', null, null, null);
            }
            Pause.btnPauseUp = btnPauseUp;
        })(Pause = lwg.Pause || (lwg.Pause = {}));
        let Elect;
        (function (Elect) {
            function _createP201_01(parent) {
                let sp;
                Laya.loader.load('prefab/P201.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('P201', _prefab.create, _prefab);
                    parent.addChild(sp);
                    sp.pos(80, 290);
                    sp.zOrder = 65;
                }));
            }
            Elect._createP201_01 = _createP201_01;
        })(Elect = lwg.Elect || (lwg.Elect = {}));
        let Dialogue;
        (function (Dialogue) {
            let HintContent;
            (function (HintContent) {
                HintContent[HintContent["\u91D1\u5E01\u4E0D\u591F\u4E86\uFF01"] = 0] = "\u91D1\u5E01\u4E0D\u591F\u4E86\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u76AE\u80A4\u4E86\uFF01"] = 1] = "\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u76AE\u80A4\u4E86\uFF01";
                HintContent[HintContent["\u6682\u65F6\u6CA1\u6709\u5E7F\u544A\uFF0C\u8FC7\u4F1A\u513F\u518D\u8BD5\u8BD5\u5427\uFF01"] = 2] = "\u6682\u65F6\u6CA1\u6709\u5E7F\u544A\uFF0C\u8FC7\u4F1A\u513F\u518D\u8BD5\u8BD5\u5427\uFF01";
                HintContent[HintContent["\u6682\u65E0\u76AE\u80A4!"] = 3] = "\u6682\u65E0\u76AE\u80A4!";
                HintContent[HintContent["\u6682\u65E0\u5206\u4EAB!"] = 4] = "\u6682\u65E0\u5206\u4EAB!";
                HintContent[HintContent["\u6682\u65E0\u63D0\u793A\u673A\u4F1A!"] = 5] = "\u6682\u65E0\u63D0\u793A\u673A\u4F1A!";
                HintContent[HintContent["\u89C2\u770B\u5B8C\u6574\u5E7F\u544A\u624D\u80FD\u83B7\u53D6\u5956\u52B1\u54E6\uFF01"] = 6] = "\u89C2\u770B\u5B8C\u6574\u5E7F\u544A\u624D\u80FD\u83B7\u53D6\u5956\u52B1\u54E6\uFF01";
                HintContent[HintContent["\u901A\u5173\u4E0A\u4E00\u5173\u624D\u80FD\u89E3\u9501\u672C\u5173\uFF01"] = 7] = "\u901A\u5173\u4E0A\u4E00\u5173\u624D\u80FD\u89E3\u9501\u672C\u5173\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F\u540E\u624D\u80FD\u83B7\u53D6\u5956\u52B1\uFF01"] = 8] = "\u5206\u4EAB\u6210\u529F\u540E\u624D\u80FD\u83B7\u53D6\u5956\u52B1\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F!"] = 9] = "\u5206\u4EAB\u6210\u529F!";
                HintContent[HintContent["\u6682\u65E0\u89C6\u9891\uFF0C\u73A9\u4E00\u5C40\u6E38\u620F\u4E4B\u540E\u5206\u4EAB\uFF01"] = 10] = "\u6682\u65E0\u89C6\u9891\uFF0C\u73A9\u4E00\u5C40\u6E38\u620F\u4E4B\u540E\u5206\u4EAB\uFF01";
                HintContent[HintContent["\u6D88\u80172\u70B9\u4F53\u529B\uFF01"] = 11] = "\u6D88\u80172\u70B9\u4F53\u529B\uFF01";
                HintContent[HintContent["\u4ECA\u65E5\u4F53\u529B\u798F\u5229\u5DF2\u9886\u53D6\uFF01"] = 12] = "\u4ECA\u65E5\u4F53\u529B\u798F\u5229\u5DF2\u9886\u53D6\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F97125\u91D1\u5E01\uFF01"] = 13] = "\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F97125\u91D1\u5E01\uFF01";
                HintContent[HintContent["\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F9750\u91D1\u5E01\uFF01"] = 14] = "\u5206\u4EAB\u6210\u529F\uFF0C\u83B7\u5F9750\u91D1\u5E01\uFF01";
                HintContent[HintContent["\u9650\u5B9A\u76AE\u80A4\u5DF2\u7ECF\u83B7\u5F97\uFF0C\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u67E5\u770B\u3002"] = 15] = "\u9650\u5B9A\u76AE\u80A4\u5DF2\u7ECF\u83B7\u5F97\uFF0C\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u67E5\u770B\u3002";
                HintContent[HintContent["\u5206\u4EAB\u5931\u8D25\uFF01"] = 16] = "\u5206\u4EAB\u5931\u8D25\uFF01";
                HintContent[HintContent["\u5151\u6362\u7801\u9519\u8BEF\uFF01"] = 17] = "\u5151\u6362\u7801\u9519\u8BEF\uFF01";
                HintContent[HintContent["\u5C1A\u672A\u83B7\u5F97\u8BE5\u5546\u54C1!"] = 18] = "\u5C1A\u672A\u83B7\u5F97\u8BE5\u5546\u54C1!";
                HintContent[HintContent["\u606D\u559C\u83B7\u5F97\u65B0\u76AE\u80A4!"] = 19] = "\u606D\u559C\u83B7\u5F97\u65B0\u76AE\u80A4!";
                HintContent[HintContent["\u8BF7\u524D\u5F80\u76AE\u80A4\u9650\u5B9A\u754C\u9762\u83B7\u53D6!"] = 20] = "\u8BF7\u524D\u5F80\u76AE\u80A4\u9650\u5B9A\u754C\u9762\u83B7\u53D6!";
                HintContent[HintContent["\u901A\u8FC7\u76F8\u5E94\u7684\u5173\u5361\u6570\u8FBE\u5230\u5C31\u53EF\u4EE5\u5F97\u5230\u4E86!"] = 21] = "\u901A\u8FC7\u76F8\u5E94\u7684\u5173\u5361\u6570\u8FBE\u5230\u5C31\u53EF\u4EE5\u5F97\u5230\u4E86!";
                HintContent[HintContent["\u70B9\u51FB\u91D1\u5E01\u62BD\u5956\u6309\u94AE\u8D2D\u4E70!"] = 22] = "\u70B9\u51FB\u91D1\u5E01\u62BD\u5956\u6309\u94AE\u8D2D\u4E70!";
                HintContent[HintContent["\u6CA1\u6709\u9886\u53D6\u6B21\u6570\u4E86\uFF01"] = 23] = "\u6CA1\u6709\u9886\u53D6\u6B21\u6570\u4E86\uFF01";
                HintContent[HintContent["\u589E\u52A0\u4E09\u6B21\u5F00\u542F\u5B9D\u7BB1\u6B21\u6570\uFF01"] = 24] = "\u589E\u52A0\u4E09\u6B21\u5F00\u542F\u5B9D\u7BB1\u6B21\u6570\uFF01";
                HintContent[HintContent["\u89C2\u770B\u5E7F\u544A\u53EF\u4EE5\u83B7\u5F97\u4E09\u6B21\u5F00\u5B9D\u7BB1\u6B21\u6570\uFF01"] = 25] = "\u89C2\u770B\u5E7F\u544A\u53EF\u4EE5\u83B7\u5F97\u4E09\u6B21\u5F00\u5B9D\u7BB1\u6B21\u6570\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u5B9D\u7BB1\u9886\u53EF\u4EE5\u9886\u4E86\uFF01"] = 26] = "\u6CA1\u6709\u5B9D\u7BB1\u9886\u53EF\u4EE5\u9886\u4E86\uFF01";
                HintContent[HintContent["\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u8D2D\u4E70\uFF01"] = 27] = "\u8BF7\u524D\u5F80\u76AE\u80A4\u754C\u9762\u8D2D\u4E70\uFF01";
                HintContent[HintContent["\u4ECA\u5929\u5DF2\u7ECF\u7B7E\u5230\u8FC7\u4E86\uFF01"] = 28] = "\u4ECA\u5929\u5DF2\u7ECF\u7B7E\u5230\u8FC7\u4E86\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u62BD\u5956\u6B21\u6570\u4E86\uFF0C\u8BF7\u901A\u8FC7\u89C2\u770B\u5E7F\u544A\u83B7\u53D6\uFF01"] = 29] = "\u6CA1\u6709\u62BD\u5956\u6B21\u6570\u4E86\uFF0C\u8BF7\u901A\u8FC7\u89C2\u770B\u5E7F\u544A\u83B7\u53D6\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u5E93\u5B58\u4E86\uFF01"] = 30] = "\u6CA1\u6709\u5E93\u5B58\u4E86\uFF01";
                HintContent[HintContent["\u724C\u6570\u592A\u5C11\uFF0C\u65E0\u6CD5\u4F7F\u7528\u9053\u5177\uFF01"] = 31] = "\u724C\u6570\u592A\u5C11\uFF0C\u65E0\u6CD5\u4F7F\u7528\u9053\u5177\uFF01";
                HintContent[HintContent["\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u5361\u724C\u4E86\uFF01"] = 32] = "\u6CA1\u6709\u53EF\u4EE5\u8D2D\u4E70\u7684\u5361\u724C\u4E86\uFF01";
                HintContent[HintContent["\u656C\u8BF7\u671F\u5F85!"] = 33] = "\u656C\u8BF7\u671F\u5F85!";
                HintContent[HintContent["\u5C1A\u672A\u83B7\u5F97!"] = 34] = "\u5C1A\u672A\u83B7\u5F97!";
            })(HintContent = Dialogue.HintContent || (Dialogue.HintContent = {}));
            let Skin;
            (function (Skin) {
                Skin["blackBord"] = "Frame/UI/ui_orthogon_black.png";
            })(Skin || (Skin = {}));
            function createHint_Middle(describe) {
                let Hint_M = Laya.Pool.getItemByClass('Hint_M', Laya.Sprite);
                Hint_M.name = 'Hint_M';
                Laya.stage.addChild(Hint_M);
                Hint_M.width = Laya.stage.width;
                Hint_M.height = 100;
                Hint_M.pivotY = Hint_M.height / 2;
                Hint_M.pivotX = Laya.stage.width / 2;
                Hint_M.x = Laya.stage.width / 2;
                Hint_M.y = Laya.stage.height / 2;
                Hint_M.zOrder = 100;
                let Pic = new Laya.Image();
                Hint_M.addChild(Pic);
                Pic.skin = Skin.blackBord;
                Pic.width = Laya.stage.width;
                Pic.pivotX = Laya.stage.width / 2;
                Pic.height = 100;
                Pic.pivotY = Pic.height / 2;
                Pic.y = Hint_M.height / 2;
                Pic.x = Laya.stage.width / 2;
                Pic.alpha = 0.6;
                let Dec = new Laya.Label();
                Hint_M.addChild(Dec);
                Dec.width = Laya.stage.width;
                Dec.text = describe;
                Dec.pivotX = Laya.stage.width / 2;
                Dec.x = Laya.stage.width / 2;
                Dec.height = 100;
                Dec.pivotY = 50;
                Dec.y = Hint_M.height / 2;
                Dec.bold = true;
                Dec.fontSize = 35;
                Dec.color = '#ffffff';
                Dec.align = 'center';
                Dec.valign = 'middle';
                Dec.alpha = 0;
                Animation2D.scale_Alpha(Hint_M, 0, 1, 0, 1, 1, 1, 200, 0, f => {
                    Animation2D.fadeOut(Dec, 0, 1, 150, 0, f => {
                        Animation2D.fadeOut(Dec, 1, 0, 200, 800, f => {
                            Animation2D.scale_Alpha(Hint_M, 1, 1, 1, 1, 0, 0, 200, 0, f => {
                                Hint_M.removeSelf();
                            });
                        });
                    });
                });
            }
            Dialogue.createHint_Middle = createHint_Middle;
            Dialogue._dialogContent = {
                get Array() {
                    return Laya.loader.getRes("GameData/Dialogue/Dialogue.json")['RECORDS'] !== null ? Laya.loader.getRes("GameData/Dialogue/Dialogue.json")['RECORDS'] : [];
                },
            };
            function getDialogContent(useWhere, name) {
                let dia;
                for (let index = 0; index < Dialogue._dialogContent.Array.length; index++) {
                    const element = Dialogue._dialogContent.Array[index];
                    if (element['useWhere'] == useWhere && element['name'] == name) {
                        dia = element;
                        break;
                    }
                }
                let arr = [];
                for (const key in dia) {
                    if (dia.hasOwnProperty(key)) {
                        const value = dia[key];
                        if (key.substring(0, 7) == 'content' || value !== -1) {
                            arr.push(value);
                        }
                    }
                }
                return arr;
            }
            Dialogue.getDialogContent = getDialogContent;
            function getDialogContent_Random(useWhere) {
                let contentArr = [];
                let whereArr = getUseWhere(useWhere);
                let index = Math.floor(Math.random() * whereArr.length);
                for (const key in whereArr[index]) {
                    if (whereArr[index].hasOwnProperty(key)) {
                        const value = whereArr[index][key];
                        if (key.substring(0, 7) == 'content' && value !== "-1") {
                            contentArr.push(value);
                        }
                    }
                }
                return contentArr;
            }
            Dialogue.getDialogContent_Random = getDialogContent_Random;
            function getUseWhere(useWhere) {
                let arr = [];
                for (let index = 0; index < Dialogue._dialogContent.Array.length; index++) {
                    const element = Dialogue._dialogContent.Array[index];
                    if (element['useWhere'] == useWhere) {
                        arr.push(element);
                    }
                }
                return arr;
            }
            Dialogue.getUseWhere = getUseWhere;
            let UseWhere;
            (function (UseWhere) {
                UseWhere["scene1"] = "scene1";
                UseWhere["scene2"] = "scene2";
                UseWhere["scene3"] = "scene3";
            })(UseWhere = Dialogue.UseWhere || (Dialogue.UseWhere = {}));
            let DialogProperty;
            (function (DialogProperty) {
                DialogProperty["name"] = "name";
                DialogProperty["useWhere"] = "useWhere";
                DialogProperty["content"] = "content";
                DialogProperty["max"] = "max";
            })(DialogProperty = Dialogue.DialogProperty || (Dialogue.DialogProperty = {}));
            let PlayMode;
            (function (PlayMode) {
                PlayMode["voluntarily"] = "voluntarily";
                PlayMode["manual"] = "manual";
                PlayMode["clickContent"] = "clickContent";
            })(PlayMode = Dialogue.PlayMode || (Dialogue.PlayMode = {}));
            function createVoluntarilyDialogue(x, y, useWhere, startDelayed, delayed, parent, content) {
                if (startDelayed == undefined) {
                    startDelayed = 0;
                }
                Laya.timer.once(startDelayed, this, () => {
                    let Pre_Dialogue;
                    Laya.loader.load('Prefab/Dialogue_Common.json', Laya.Handler.create(this, function (prefab) {
                        let _prefab = new Laya.Prefab();
                        _prefab.json = prefab;
                        Pre_Dialogue = Laya.Pool.getItemByCreateFun('Pre_Dialogue', _prefab.create, _prefab);
                        if (parent) {
                            parent.addChild(Pre_Dialogue);
                        }
                        else {
                            Laya.stage.addChild(Pre_Dialogue);
                        }
                        Pre_Dialogue.x = x;
                        Pre_Dialogue.y = y;
                        let ContentLabel = Pre_Dialogue.getChildByName('Content');
                        let contentArr;
                        if (content !== undefined) {
                            ContentLabel.text = content[0];
                        }
                        else {
                            contentArr = getDialogContent_Random(useWhere);
                            ContentLabel.text = contentArr[0];
                        }
                        Pre_Dialogue.zOrder = 100;
                        if (delayed == undefined) {
                            delayed = 1000;
                        }
                        Animation2D.scale_Alpha(Pre_Dialogue, 0, 0, 0, 1, 1, 1, 150, 1000, () => {
                            for (let index = 0; index < contentArr.length; index++) {
                                Laya.timer.once(index * delayed, this, () => {
                                    ContentLabel.text = contentArr[index];
                                    if (index == contentArr.length - 1) {
                                        Laya.timer.once(delayed, this, () => {
                                            Animation2D.scale_Alpha(Pre_Dialogue, 1, 1, 1, 0, 0, 0, 150, 1000, () => {
                                                Pre_Dialogue.removeSelf();
                                            });
                                        });
                                    }
                                });
                            }
                        });
                        Dialogue.DialogueNode = Pre_Dialogue;
                    }));
                });
            }
            Dialogue.createVoluntarilyDialogue = createVoluntarilyDialogue;
            function createCommonDialog(parent, x, y, content) {
                let Dialogue_Common;
                Laya.loader.load('Prefab/Dialogue_Common.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    Dialogue_Common = Laya.Pool.getItemByCreateFun('Dialogue_Common', _prefab.create, _prefab);
                    parent.addChild(Dialogue_Common);
                    Dialogue_Common.pos(x, y);
                    let Content = Dialogue_Common.getChildByName('Dialogue_Common');
                    Content.text = content;
                }));
            }
            Dialogue.createCommonDialog = createCommonDialog;
        })(Dialogue = lwg.Dialogue || (lwg.Dialogue = {}));
        let Execution;
        (function (Execution) {
            Execution._execution = {
                get value() {
                    return Laya.LocalStorage.getItem('_execution') ? Number(Laya.LocalStorage.getItem('_execution')) : 15;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_execution', val.toString());
                }
            };
            function _createExecutionNum(parent) {
                let sp;
                Laya.loader.load('prefab/ExecutionNum.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    parent.addChild(sp);
                    let num = sp.getChildByName('Num');
                    sp.pos(297, 90);
                    sp.zOrder = 50;
                    Execution.ExecutionNumNode = sp;
                    Execution.ExecutionNumNode.name = 'ExecutionNumNode';
                }));
            }
            Execution._createExecutionNum = _createExecutionNum;
            function _createAddExecution(x, y, func) {
                let sp;
                Laya.loader.load('prefab/execution.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                    Laya.stage.addChild(sp);
                    sp.x = Laya.stage.width / 2;
                    sp.y = Laya.stage.height / 2;
                    sp.zOrder = 50;
                    if (Execution.ExecutionNumNode) {
                        Animation2D.move_Simple(sp, sp.x, sp.y, Execution.ExecutionNumNode.x, Execution.ExecutionNumNode.y, 800, 100, f => {
                            Animation2D.fadeOut(sp, 1, 0, 200, 0, f => {
                                lwg.Animation2D.upDwon_Shake(Execution.ExecutionNumNode, 10, 80, 0, null);
                                if (func) {
                                    func();
                                }
                            });
                        }, Laya.Ease.expoIn);
                    }
                }));
            }
            Execution._createAddExecution = _createAddExecution;
            function createConsumeEx(subEx) {
                let label = Laya.Pool.getItemByClass('label', Laya.Label);
                label.name = 'label';
                Laya.stage.addChild(label);
                label.text = '-2';
                label.fontSize = 40;
                label.bold = true;
                label.color = '#59245c';
                label.x = Execution.ExecutionNumNode.x + 100;
                label.y = Execution.ExecutionNumNode.y - label.height / 2 + 4;
                label.zOrder = 100;
                lwg.Animation2D.fadeOut(label, 0, 1, 200, 150, f => {
                    lwg.Animation2D.leftRight_Shake(Execution.ExecutionNumNode, 15, 60, 0, null);
                    lwg.Animation2D.fadeOut(label, 1, 0, 600, 400, f => {
                    });
                });
            }
            Execution.createConsumeEx = createConsumeEx;
        })(Execution = lwg.Execution || (lwg.Execution = {}));
        let Gold;
        (function (Gold_1) {
            Gold_1._num = {
                get value() {
                    return Laya.LocalStorage.getItem('_goldNum') ? Number(Laya.LocalStorage.getItem('_goldNum')) : 0;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_goldNum', val.toString());
                }
            };
            function createGoldNode(x, y, parent) {
                if (!parent) {
                    parent = Laya.stage;
                }
                if (Gold_1.GoldNode) {
                    Gold_1.GoldNode.removeSelf();
                }
                let sp;
                Laya.loader.load('Prefab/LwgGold.json', Laya.Handler.create(this, function (prefab) {
                    let _prefab = new Laya.Prefab();
                    _prefab.json = prefab;
                    sp = Laya.Pool.getItemByCreateFun('gold', _prefab.create, _prefab);
                    let Num = sp.getChildByName('Num');
                    Num.text = Tools.format_FormatNumber(Gold_1._num.value);
                    parent.addChild(sp);
                    sp.pos(x, y);
                    sp.zOrder = 100;
                    Gold_1.GoldNode = sp;
                }));
            }
            Gold_1.createGoldNode = createGoldNode;
            function _addGold(number) {
                Gold_1._num.value += Number(number);
                let Num = Gold_1.GoldNode.getChildByName('Num');
                Num.text = Tools.format_FormatNumber(Gold_1._num.value);
            }
            Gold_1._addGold = _addGold;
            function addGoldDisPlay(number) {
                let Num = Gold_1.GoldNode.getChildByName('Num');
                Num.value = (Number(Num.value) + Number(number)).toString();
            }
            Gold_1.addGoldDisPlay = addGoldDisPlay;
            function addGoldNoDisPlay(number) {
                Gold_1._num.value += Number(number);
            }
            Gold_1.addGoldNoDisPlay = addGoldNoDisPlay;
            function goldAppear(delayed, x, y) {
                if (!Gold_1.GoldNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Gold_1.GoldNode, 0, 1, 1, 1, 1, 1, delayed, 0, f => {
                        Gold_1.GoldNode.visible = true;
                    });
                }
                else {
                    Gold_1.GoldNode.visible = true;
                }
                if (x) {
                    Gold_1.GoldNode.x = x;
                }
                if (y) {
                    Gold_1.GoldNode.y = y;
                }
            }
            Gold_1.goldAppear = goldAppear;
            function goldVinish(delayed) {
                if (!Gold_1.GoldNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Gold_1.GoldNode, 1, 1, 1, 1, 1, 0, delayed, 0, f => {
                        Gold_1.GoldNode.visible = false;
                    });
                }
                else {
                    Gold_1.GoldNode.visible = false;
                }
            }
            Gold_1.goldVinish = goldVinish;
            let SkinUrl;
            (function (SkinUrl) {
                SkinUrl[SkinUrl["Frame/Effects/icon_gold.png"] = 0] = "Frame/Effects/icon_gold.png";
            })(SkinUrl || (SkinUrl = {}));
            function createOneGold(width, height, url) {
                let Gold = Laya.Pool.getItemByClass('addGold', Laya.Image);
                Gold.name = 'addGold';
                let num = Math.floor(Math.random() * 12);
                Gold.alpha = 1;
                Gold.zOrder = 60;
                Gold.width = width;
                Gold.height = height;
                Gold.pivotX = width / 2;
                Gold.pivotY = height / 2;
                if (!url) {
                    Gold.skin = SkinUrl[0];
                }
                else {
                    Gold.skin = url;
                }
                if (Gold_1.GoldNode) {
                    Gold.zOrder = Gold_1.GoldNode.zOrder + 10;
                }
                return Gold;
            }
            Gold_1.createOneGold = createOneGold;
            function getGoldAni_Single(parent, number, width, height, url, firstPoint, targetPoint, func1, func2) {
                for (let index = 0; index < number; index++) {
                    Laya.timer.once(index * 30, this, () => {
                        let Gold = createOneGold(width, height, url);
                        parent.addChild(Gold);
                        Animation2D.move_Scale(Gold, 1, firstPoint.x, firstPoint.y, targetPoint.x, targetPoint.y, 1, 350, 0, null, () => {
                            PalyAudio.playSound(PalyAudio.voiceUrl.huodejinbi);
                            if (index === number - 1) {
                                Laya.timer.once(200, this, () => {
                                    if (func2) {
                                        func2();
                                    }
                                });
                            }
                            else {
                                if (func1) {
                                    func1();
                                }
                            }
                            Gold.removeSelf();
                        });
                    });
                }
            }
            Gold_1.getGoldAni_Single = getGoldAni_Single;
            function _getGoldAni_Heap(parent, number, width, height, url, firstPoint, targetPoint, func1, func2) {
                for (let index = 0; index < number; index++) {
                    let Gold = createOneGold(width ? width : 100, height ? height : 100, url ? url : SkinUrl[0]);
                    parent = parent ? parent : Laya.stage;
                    parent.addChild(Gold);
                    firstPoint = firstPoint ? firstPoint : new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2);
                    targetPoint = targetPoint ? targetPoint : new Laya.Point(Gold_1.GoldNode.x, Gold_1.GoldNode.y);
                    let x = Math.floor(Math.random() * 2) == 1 ? firstPoint.x + Math.random() * 100 : firstPoint.x - Math.random() * 100;
                    let y = Math.floor(Math.random() * 2) == 1 ? firstPoint.y + Math.random() * 100 : firstPoint.y - Math.random() * 100;
                    Animation2D.move_Scale(Gold, 0.5, firstPoint.x, firstPoint.y, x, y, 1, 300, Math.random() * 100 + 100, Laya.Ease.expoIn, () => {
                        Animation2D.move_Scale(Gold, 1, Gold.x, Gold.y, targetPoint.x, targetPoint.y, 1, 400, Math.random() * 200 + 100, Laya.Ease.cubicOut, () => {
                            PalyAudio.playSound(PalyAudio.voiceUrl.huodejinbi);
                            if (index === number - 1) {
                                Laya.timer.once(200, this, () => {
                                    if (func2) {
                                        func2();
                                    }
                                });
                            }
                            else {
                                if (func1) {
                                    func1();
                                }
                            }
                            Gold.removeSelf();
                        });
                    });
                }
            }
            Gold_1._getGoldAni_Heap = _getGoldAni_Heap;
            class GoldAniBase extends Laya.Script {
                onAwake() {
                    this.initProperty();
                }
                onEnable() {
                    this.Owner = this.owner;
                    this.selfScene = this.Owner.scene;
                    let calssName = this['__proto__']['constructor'].name;
                    this.Owner[calssName] = this;
                    this.timer = 0;
                    this.lwgInit();
                    this.propertyAssign();
                }
                lwgInit() {
                }
                initProperty() {
                }
                propertyAssign() {
                    if (this.startAlpha) {
                        this.Owner.alpha = this.startAlpha;
                    }
                    if (this.startScale) {
                        this.Owner.scale(this.startScale, this.startScale);
                    }
                    if (this.startRotat) {
                        this.Owner.rotation = this.startRotat;
                    }
                }
                commonSpeedXYByAngle(angle, speed) {
                    this.Owner.x += Tools.Point.SpeedXYByAngle(angle, speed + this.accelerated).x;
                    this.Owner.y += Tools.Point.SpeedXYByAngle(angle, speed + this.accelerated).y;
                }
                moveRules() {
                }
                onUpdate() {
                    this.moveRules();
                }
                onDisable() {
                    Laya.Pool.recover(this.Owner.name, this.Owner);
                    this.destroy();
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                }
            }
            Gold_1.GoldAniBase = GoldAniBase;
            class AddGold extends GoldAniBase {
                lwgInit() {
                    this.Owner.width = 115;
                    this.Owner.height = 111;
                    this.Owner.pivotX = this.Owner.width / 2;
                    this.Owner.pivotY = this.Owner.height / 2;
                }
                initProperty() {
                }
                moveRules() {
                    if (this.moveSwitch) {
                        this.timer++;
                        if (this.timer > 0) {
                            lwg.Animation2D.move_Scale(this.Owner, 1, this.Owner.x, this.Owner.y, this.targetX, this.targetY, 0.35, 250, 0, f => {
                                this.Owner.removeSelf();
                                if (this.func !== null) {
                                    this.func();
                                }
                            });
                            this.moveSwitch = false;
                        }
                    }
                }
            }
            Gold_1.AddGold = AddGold;
        })(Gold = lwg.Gold || (lwg.Gold = {}));
        let EventAdmin;
        (function (EventAdmin) {
            EventAdmin.dispatcher = new Laya.EventDispatcher();
            function _register(type, caller, listener) {
                if (!caller) {
                    console.error("事件的执行域必须存在!");
                }
                EventAdmin.dispatcher.on(type.toString(), caller, listener);
            }
            EventAdmin._register = _register;
            function _registerOnce(type, caller, listener) {
                if (!caller) {
                    console.error("事件的执行域必须存在!");
                }
                EventAdmin.dispatcher.once(type.toString(), caller, listener);
            }
            EventAdmin._registerOnce = _registerOnce;
            function _notify(type, args) {
                EventAdmin.dispatcher.event(type.toString(), args);
            }
            EventAdmin._notify = _notify;
            function _off(type, caller, listener) {
                EventAdmin.dispatcher.off(type.toString(), caller, listener);
            }
            EventAdmin._off = _off;
            function _offAll(type) {
                EventAdmin.dispatcher.offAll(type.toString());
            }
            EventAdmin._offAll = _offAll;
            function _offCaller(caller) {
                EventAdmin.dispatcher.offAllCaller(caller);
            }
            EventAdmin._offCaller = _offCaller;
        })(EventAdmin = lwg.EventAdmin || (lwg.EventAdmin = {}));
        let DateAdmin;
        (function (DateAdmin) {
            DateAdmin._date = {
                get year() {
                    return (new Date()).getFullYear();
                },
                get month() {
                    return (new Date()).getMonth();
                },
                get date() {
                    return (new Date()).getDate();
                },
                get day() {
                    return (new Date()).getDay();
                },
                get hours() {
                    return (new Date()).getHours();
                },
                get minutes() {
                    return (new Date()).getMinutes();
                },
                get seconds() {
                    return (new Date()).getSeconds();
                },
                get milliseconds() {
                    return (new Date()).getMilliseconds();
                },
                get toLocaleDateString() {
                    return (new Date()).toLocaleDateString();
                },
                get toLocaleTimeString() {
                    return (new Date()).toLocaleTimeString();
                }
            };
            DateAdmin._loginDate = {
                get value() {
                    let data;
                    let dataArr = [];
                    let d = new Date();
                    let date1 = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getDay()];
                    try {
                        data = Laya.LocalStorage.getJSON('DateAdmin_loginDate');
                        let dataArr = [];
                        dataArr = JSON.parse(data);
                        let equal = false;
                        for (let index = 0; index < dataArr.length; index++) {
                            if (dataArr[index].toString() == date1.toString()) {
                                equal = true;
                            }
                        }
                        if (!equal) {
                            dataArr.push(date1);
                        }
                    }
                    catch (error) {
                        if (dataArr.length == 0) {
                            dataArr.push(date1);
                        }
                    }
                    Laya.LocalStorage.setJSON('DateAdmin_loginDate', JSON.stringify(dataArr));
                    return dataArr;
                },
            };
            DateAdmin._loginNumber = {
                get value() {
                    return Laya.LocalStorage.getItem('DateAdmin_loginNumber') ? Number(Laya.LocalStorage.getItem('DateAdmin_loginNumber')) : 1;
                },
                set value(val) {
                    Laya.LocalStorage.setItem('DateAdmin_loginNumber', val.toString());
                }
            };
            DateAdmin._last = {
                get date() {
                    return Laya.LocalStorage.getItem('DateAdmin_last') ? Number(Laya.LocalStorage.getItem('DateAdmin_last')) : DateAdmin._date.date;
                },
                setLastDate() {
                    Laya.LocalStorage.setItem('DateAdmin_last', DateAdmin._date.date.toString());
                }
            };
        })(DateAdmin = lwg.DateAdmin || (lwg.DateAdmin = {}));
        let TimerAdmin;
        (function (TimerAdmin) {
            function _frameLoop(delay, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                Laya.timer.frameLoop(delay, caller, () => {
                    method();
                }, args, coverBefore);
            }
            TimerAdmin._frameLoop = _frameLoop;
            function _frameRandomLoop(delay1, delay2, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                var func = () => {
                    let delay = Tools.randomOneInt(delay1, delay2);
                    Laya.timer.frameOnce(delay, caller, () => {
                        method();
                        func();
                    }, args, coverBefore);
                };
                func();
            }
            TimerAdmin._frameRandomLoop = _frameRandomLoop;
            function _frameNumLoop(delay, num, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                let num0 = 0;
                var func = () => {
                    num0++;
                    if (num0 > num) {
                        Laya.timer.clear(caller, func);
                    }
                    else {
                        method();
                    }
                };
                Laya.timer.frameLoop(delay, caller, func, args, coverBefore);
            }
            TimerAdmin._frameNumLoop = _frameNumLoop;
            function _frameOnce(delay, caller, afterMethod, beforeMethod, args, coverBefore) {
                if (beforeMethod) {
                    beforeMethod();
                }
                Laya.timer.frameOnce(delay, caller, () => {
                    afterMethod();
                }, args, coverBefore);
            }
            TimerAdmin._frameOnce = _frameOnce;
            function _loop(delay, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                Laya.timer.loop(delay, caller, () => {
                    method();
                }, args, coverBefore);
            }
            TimerAdmin._loop = _loop;
            function _randomLoop(delay1, delay2, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                var func = () => {
                    let delay = Tools.randomOneInt(delay1, delay2);
                    Laya.timer.once(delay, caller, () => {
                        method();
                        func();
                    }, args, coverBefore);
                };
                func();
            }
            TimerAdmin._randomLoop = _randomLoop;
            function _numLoop(delay, num, caller, method, immediately, args, coverBefore) {
                if (immediately) {
                    method();
                }
                let num0 = 0;
                var func = () => {
                    num0++;
                    if (num0 > num) {
                        Laya.timer.clear(caller, func);
                    }
                    else {
                        method();
                    }
                };
                Laya.timer.loop(delay, caller, func, args, coverBefore);
            }
            TimerAdmin._numLoop = _numLoop;
            function _once(delay, afterMethod, beforeMethod, args, coverBefore) {
                if (beforeMethod) {
                    beforeMethod();
                }
                let caller = {};
                Laya.timer.once(delay, caller, () => {
                    afterMethod();
                }, args, coverBefore);
            }
            TimerAdmin._once = _once;
        })(TimerAdmin = lwg.TimerAdmin || (lwg.TimerAdmin = {}));
        let Admin;
        (function (Admin) {
            Admin._platform = {
                tpye: {
                    Bytedance: 'Bytedance',
                    WeChat: 'WeChat',
                    OPPO: 'OPPO',
                    OPPOTest: 'OPPOTest',
                    VIVO: 'VIVO',
                    General: 'General',
                    Web: 'Web',
                    WebTest: 'WebTest',
                    Research: 'Research',
                },
                get name() {
                    return this['_platform_name'] ? this['_platform_name'] : null;
                },
                set name(val) {
                    this['_platform_name'] = val;
                    switch (val) {
                        case Admin._platform.tpye.WebTest:
                            Laya.LocalStorage.clear();
                            _Gold._num.value = 5000;
                            break;
                        case Admin._platform.tpye.Research:
                            Laya.Stat.show();
                            _Gold._num.value = 50000000000000;
                            break;
                        default:
                            break;
                    }
                }
            };
            Admin._game = {
                switch: true,
                get level() {
                    return Laya.LocalStorage.getItem('_gameLevel') ? Number(Laya.LocalStorage.getItem('_gameLevel')) : 1;
                },
                set level(val) {
                    let diff = val - this.level;
                    if (diff > 0) {
                        this.maxLevel += diff;
                    }
                    if (val > this.loopLevel && this.loopLevel != -1) {
                        Laya.LocalStorage.setItem('_gameLevel', (1).toString());
                    }
                    else {
                        Laya.LocalStorage.setItem('_gameLevel', (val).toString());
                    }
                },
                get maxLevel() {
                    return Laya.LocalStorage.getItem('_game_maxLevel') ? Number(Laya.LocalStorage.getItem('_game_maxLevel')) : this.level;
                },
                set maxLevel(val) {
                    Laya.LocalStorage.setItem('_game_maxLevel', val.toString());
                },
                get loopLevel() {
                    return this['_gameloopLevel'] ? this['_gameloopLevel'] : -1;
                },
                set loopLevel(lev) {
                    this['_gameloopLevel'] = lev;
                },
                LevelNode: new Laya.Sprite,
                _createLevel(parent, x, y) {
                    let sp;
                    Laya.loader.load('prefab/LevelNode.json', Laya.Handler.create(this, function (prefab) {
                        let _prefab = new Laya.Prefab();
                        _prefab.json = prefab;
                        sp = Laya.Pool.getItemByCreateFun('prefab', _prefab.create, _prefab);
                        parent.addChild(sp);
                        sp.pos(x, y);
                        sp.zOrder = 0;
                        let level = sp.getChildByName('level');
                        Admin._game.LevelNode = sp;
                    }));
                },
                pause: {
                    get switch() {
                        return Admin._game.switch;
                    },
                    set switch(bool) {
                        this.bool = bool;
                        if (bool) {
                            Admin._game.switch = false;
                            Laya.timer.pause();
                        }
                        else {
                            Admin._game.switch = true;
                            Laya.timer.resume();
                        }
                    }
                }
            };
            class _Game {
            }
            Admin._Game = _Game;
            Admin._clickLock = {
                get switch() {
                    return Laya.stage.getChildByName('__stageClickLock__') ? true : false;
                },
                set switch(bool) {
                    if (bool) {
                        if (!Laya.stage.getChildByName('__stageClickLock__')) {
                            console.log('锁住点击！');
                            let __stageClickLock__ = new Laya.Sprite();
                            __stageClickLock__.name = '__stageClickLock__';
                            Laya.stage.addChild(__stageClickLock__);
                            __stageClickLock__.zOrder = 3000;
                            __stageClickLock__.width = Laya.stage.width;
                            __stageClickLock__.height = Laya.stage.height;
                            __stageClickLock__.pos(0, 0);
                            Click._on(Click._Type.noEffect, __stageClickLock__, this, null, null, (e) => {
                                console.log('舞台点击被锁住了！请用admin._clickLock=false解锁');
                                e.stopPropagation();
                            });
                        }
                        else {
                        }
                    }
                    else {
                        if (Laya.stage.getChildByName('__stageClickLock__')) {
                            Laya.stage.getChildByName('__stageClickLock__').removeSelf();
                        }
                    }
                }
            };
            function _secneLockClick(scene) {
                _unlockPreventClick(scene);
                let __lockClick__ = new Laya.Sprite();
                scene.addChild(__lockClick__);
                __lockClick__.zOrder = 1000;
                __lockClick__.name = '__lockClick__';
                __lockClick__.width = Laya.stage.width;
                __lockClick__.height = Laya.stage.height;
                __lockClick__.pos(0, 0);
                Click._on(Click._Type.noEffect, __lockClick__, this, null, null, (e) => {
                    console.log('场景点击被锁住了！请用admin._unlockPreventClick（）解锁');
                    e.stopPropagation();
                });
            }
            Admin._secneLockClick = _secneLockClick;
            function _unlockPreventClick(scene) {
                let __lockClick__ = scene.getChildByName('__lockClick__');
                if (__lockClick__) {
                    __lockClick__.removeSelf();
                }
            }
            Admin._unlockPreventClick = _unlockPreventClick;
            Admin._sceneControl = {};
            Admin._sceneScript = {};
            Admin._moudel = {};
            let _SceneName;
            (function (_SceneName) {
                _SceneName["PreLoad"] = "PreLoad";
                _SceneName["PreLoadStep"] = "PreLoadStep";
                _SceneName["Guide"] = "Guide";
                _SceneName["Start"] = "Start";
                _SceneName["Shop"] = "Shop";
                _SceneName["Task"] = "Task";
                _SceneName["Set"] = "Set";
                _SceneName["Skin"] = "Skin";
                _SceneName["Puase"] = "Puase";
                _SceneName["Share"] = "Share";
                _SceneName["Game3D"] = "Game3D";
                _SceneName["Victory"] = "Victory";
                _SceneName["Defeated"] = "Defeated";
                _SceneName["PassHint"] = "PassHint";
                _SceneName["SkinTry"] = "SkinTry";
                _SceneName["Redeem"] = "Redeem";
                _SceneName["Turntable"] = "Turntable";
                _SceneName["CaidanPifu"] = "CaidanPifu";
                _SceneName["Operation"] = "Operation";
                _SceneName["VictoryBox"] = "VictoryBox";
                _SceneName["CheckIn"] = "CheckIn";
                _SceneName["Resurgence"] = "Resurgence";
                _SceneName["AdsHint"] = "AdsHint";
                _SceneName["LwgInit"] = "LwgInit";
                _SceneName["Game"] = "Game";
                _SceneName["SmallHint"] = "SmallHint";
                _SceneName["DrawCard"] = "DrawCard";
                _SceneName["PropTry"] = "PropTry";
                _SceneName["Card"] = "Card";
                _SceneName["ExecutionHint"] = "ExecutionHint";
                _SceneName["SkinQualified"] = "SkinQualified";
                _SceneName["Eastereggister"] = "Eastereggister";
                _SceneName["SelectLevel"] = "SelectLevel";
                _SceneName["Settle"] = "Settle";
                _SceneName["Special"] = "Special";
                _SceneName["Compound"] = "Compound";
            })(_SceneName = Admin._SceneName || (Admin._SceneName = {}));
            function _preLoadOpenScene(openSceneName, cloesSceneName, func, zOrder) {
                _openScene(_SceneName.PreLoadStep);
                Admin._preLoadOpenSceneLater.openSceneName = openSceneName;
                Admin._preLoadOpenSceneLater.cloesSceneName = cloesSceneName;
                Admin._preLoadOpenSceneLater.func = func;
                Admin._preLoadOpenSceneLater.zOrder = zOrder;
            }
            Admin._preLoadOpenScene = _preLoadOpenScene;
            Admin._preLoadOpenSceneLater = {
                openSceneName: null,
                cloesSceneName: null,
                func: null,
                zOrder: null,
            };
            function _openScene(openSceneName, cloesSceneName, func, zOrder) {
                Admin._clickLock.switch = true;
                Laya.Scene.load('Scene/' + openSceneName + '.json', Laya.Handler.create(this, function (scene) {
                    if (Admin._moudel['_' + openSceneName]) {
                        if (Admin._moudel['_' + openSceneName][openSceneName]) {
                            if (!scene.getComponent(Admin._moudel['_' + openSceneName][openSceneName])) {
                                scene.addComponent(Admin._moudel['_' + openSceneName][openSceneName]);
                            }
                        }
                    }
                    else {
                        console.log(`${openSceneName}场景没有同名脚本！`);
                    }
                    scene.width = Laya.stage.width;
                    scene.height = Laya.stage.height;
                    var openf = () => {
                        if (Tools.Node.checkChildren(Laya.stage, openSceneName)) {
                            console.log(openSceneName, '场景重复出现！请检查代码');
                            return;
                        }
                        if (zOrder) {
                            Laya.stage.addChildAt(scene, zOrder);
                        }
                        else {
                            Laya.stage.addChild(scene);
                        }
                        if (func) {
                            func();
                        }
                    };
                    scene.name = openSceneName;
                    Admin._sceneControl[openSceneName] = scene;
                    let background = scene.getChildByName('Background');
                    if (background) {
                        background.width = Laya.stage.width;
                        background.height = Laya.stage.height;
                    }
                    if (Admin._sceneControl[cloesSceneName]) {
                        _closeScene(cloesSceneName, openf);
                    }
                    else {
                        openf();
                    }
                }));
            }
            Admin._openScene = _openScene;
            function _closeScene(closeName, func) {
                if (!Admin._sceneControl[closeName]) {
                    console.log('场景', closeName, '关闭失败！可能是名称不对！');
                    return;
                }
                var closef = () => {
                    Admin._clickLock.switch = false;
                    Admin._sceneControl[closeName].close();
                    if (func) {
                        func();
                    }
                };
                if (!Admin._sceneAnimation.vanishSwitch) {
                    closef();
                    return;
                }
                let cloesSceneScript = Admin._sceneControl[closeName][Admin._sceneControl[closeName].name];
                if (cloesSceneScript) {
                    if (cloesSceneScript) {
                        Admin._clickLock.switch = true;
                        cloesSceneScript.lwgBeforeVanishAni();
                        let time0 = cloesSceneScript.lwgVanishAni();
                        if (time0 !== null) {
                            Laya.timer.once(time0, this, () => {
                                closef();
                                Admin._clickLock.switch = false;
                            });
                        }
                        else {
                            _commonVanishAni(Admin._sceneControl[closeName], closef);
                        }
                    }
                }
            }
            Admin._closeScene = _closeScene;
            Admin._sceneAnimation = {
                type: {
                    fadeOut: 'fadeOut',
                    stickIn: {
                        random: 'random',
                        upLeftDownLeft: 'upLeftDownRight',
                        upRightDownLeft: 'upRightDownLeft',
                    },
                    leftMove: 'leftMove',
                    rightMove: 'rightMove',
                    centerRotate: 'centerRotate',
                    drawUp: 'drawUp',
                },
                vanishSwitch: false,
                openSwitch: true,
                presentAni: 'fadeOut',
            };
            function _commonVanishAni(CloseScene, closeFunc) {
                CloseScene[CloseScene.name].lwgBeforeVanishAni();
                let time;
                let delay;
                switch (Admin._sceneAnimation.presentAni) {
                    case Admin._sceneAnimation.type.fadeOut:
                        time = 150;
                        delay = 50;
                        if (CloseScene['Background']) {
                            Animation2D.fadeOut(CloseScene, 1, 0, time / 2);
                        }
                        Animation2D.fadeOut(CloseScene, 1, 0, time, delay, () => {
                            closeFunc();
                        });
                        break;
                    case Admin._sceneAnimation.type.stickIn.random:
                        closeFunc();
                        break;
                    default:
                        break;
                }
            }
            function _commonOpenAni(Scene) {
                let time;
                let delay;
                let sumDelay;
                var afterAni = () => {
                    Admin._clickLock.switch = false;
                    if (Scene[Scene.name]) {
                        Scene[Scene.name].lwgOpenAniAfter();
                        Scene[Scene.name].lwgBtnClick();
                    }
                };
                switch (Admin._sceneAnimation.presentAni) {
                    case Admin._sceneAnimation.type.fadeOut:
                        time = 400;
                        delay = 300;
                        if (Scene['Background']) {
                            Animation2D.fadeOut(Scene, 0, 1, time / 2, delay);
                        }
                        Animation2D.fadeOut(Scene, 0, 1, time, 0);
                        sumDelay = 400;
                        break;
                    case Admin._sceneAnimation.type.stickIn.upLeftDownLeft:
                        _sceneAnimationTypeStickIn(Scene, Admin._sceneAnimation.type.stickIn.upLeftDownLeft);
                        break;
                    case Admin._sceneAnimation.type.stickIn.upRightDownLeft:
                        _sceneAnimationTypeStickIn(Scene, Admin._sceneAnimation.type.stickIn.upRightDownLeft);
                    case Admin._sceneAnimation.type.stickIn.random:
                        _sceneAnimationTypeStickIn(Scene, Admin._sceneAnimation.type.stickIn.random);
                    default:
                        break;
                }
                Laya.timer.once(sumDelay, this, () => {
                    afterAni();
                });
                return sumDelay;
            }
            function _sceneAnimationTypeStickIn(Scene, type) {
                let sumDelay = 0;
                let time = 700;
                let delay = 100;
                if (Scene.getChildByName('Background')) {
                    Animation2D.fadeOut(Scene.getChildByName('Background'), 0, 1, time);
                }
                let stickInLeftArr = Tools.Node.zOrderByY(Scene, false);
                for (let index = 0; index < stickInLeftArr.length; index++) {
                    const element = stickInLeftArr[index];
                    if (element.name !== 'Background' && element.name.substr(0, 5) !== 'NoAni') {
                        let originalPovitX = element.pivotX;
                        let originalPovitY = element.pivotY;
                        switch (type) {
                            case Admin._sceneAnimation.type.stickIn.upLeftDownLeft:
                                element.rotation = element.y > Laya.stage.height / 2 ? -180 : 180;
                                Tools.Node.changePovit(element, 0, 0);
                                break;
                            case Admin._sceneAnimation.type.stickIn.upRightDownLeft:
                                element.rotation = element.y > Laya.stage.height / 2 ? -180 : 180;
                                Tools.Node.changePovit(element, element.rotation == 180 ? element.width : 0, 0);
                                break;
                            case Admin._sceneAnimation.type.stickIn.random:
                                element.rotation = Tools.randomOneHalf() == 1 ? 180 : -180;
                                Tools.Node.changePovit(element, Tools.randomOneHalf() == 1 ? 0 : element.width, Tools.randomOneHalf() == 1 ? 0 : element.height);
                                break;
                            default:
                                break;
                        }
                        let originalX = element.x;
                        let originalY = element.y;
                        element.x = element.pivotX > element.width / 2 ? 800 + element.width : -800 - element.width;
                        element.y = element.rotation > 0 ? element.y + 200 : element.y - 200;
                        Animation2D.simple_Rotate(element, element.rotation, 0, time, delay * index);
                        Animation2D.move_Simple(element, element.x, element.y, originalX, originalY, time, delay * index, () => {
                            Tools.Node.changePovit(element, originalPovitX, originalPovitY);
                        });
                    }
                }
                sumDelay = Scene.numChildren * delay + time + 200;
                return sumDelay;
            }
            Admin._gameState = {
                type: {
                    Start: 'Start',
                    Play: 'Play',
                    Pause: 'pause',
                    Victory: 'victory',
                    Defeated: 'defeated',
                },
                state: 'Start',
                setState(calssName) {
                    switch (calssName) {
                        case _SceneName.Start:
                            Admin._gameState.state = Admin._gameState.type.Start;
                            break;
                        case _SceneName.Game:
                            Admin._gameState.state = Admin._gameState.type.Play;
                            break;
                        case _SceneName.Defeated:
                            Admin._gameState.state = Admin._gameState.type.Defeated;
                            break;
                        case _SceneName.Victory:
                            Admin._gameState.state = Admin._gameState.type.Victory;
                            break;
                        default:
                            break;
                    }
                }
            };
            class _SceneBase extends Laya.Script {
                constructor() {
                    super();
                    this.calssName = _SceneName.PreLoad;
                }
                get Owner() {
                    return this.owner;
                }
                SpriteVar(str) {
                    if (this.Owner[str]) {
                        return this.Owner[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                        return undefined;
                    }
                }
                AniVar(str) {
                    if (this.Owner[str]) {
                        return this.Owner[str];
                    }
                    else {
                        console.log('场景内不存在动画：', str);
                        return undefined;
                    }
                }
                btnVar(str) {
                    if (this.Owner[str]) {
                        return this.Owner[str];
                    }
                    else {
                        console.log('场景内不存在全局按钮：', str);
                        return undefined;
                    }
                }
                ImgVar(str) {
                    if (this.Owner[str]) {
                        return this.Owner[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                        return undefined;
                    }
                }
                ListVar(str) {
                    if (this.Owner[str]) {
                        return this.Owner[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                    }
                }
                TapVar(str) {
                    if (this.Owner[str]) {
                        return this.Owner[str];
                    }
                    else {
                        console.log('场景内不存在全局节点：', str);
                    }
                }
                onAwake() {
                    if (this.Owner.name == null) {
                        console.log('场景名称失效，脚本赋值失败');
                    }
                    else {
                        this.calssName = this.Owner.name;
                        this.Owner[this.calssName] = this;
                    }
                    Admin._gameState.setState(this.calssName);
                    this.moduleOnAwake();
                    this.lwgOnAwake();
                    this.lwgAdaptive();
                }
                lwgOnAwake() { }
                ;
                moduleOnAwake() { }
                onEnable() {
                    this.moduleEventRegister();
                    this.lwgEventRegister();
                    this.moduleOnEnable();
                    this.lwgOnEnable();
                    this.btnAndlwgOpenAni();
                }
                moduleOnEnable() { }
                ;
                lwgEventRegister() { }
                ;
                moduleEventRegister() { }
                ;
                lwgOnEnable() { }
                onStart() {
                    this.moduleOnStart();
                    this.lwgOnStart();
                }
                btnRig(effect, target, caller, down, move, up, out) {
                    Click._on(effect, target, caller, down, move, up, out);
                }
                lwgOpenScene(openSceneName, closeSelf, func, zOrder) {
                    let closeName;
                    if (closeSelf == undefined || closeSelf == true) {
                        closeName = this.Owner.name;
                    }
                    Admin._openScene(openSceneName, closeName, func, zOrder);
                }
                lwgCloseScene(sceneName, func) {
                    Admin._closeScene(sceneName ? sceneName : this.Owner.name, func);
                }
                lwgOnStart() { }
                moduleOnStart() { }
                btnAndlwgOpenAni() {
                    let time = this.lwgOpenAni();
                    if (time !== null) {
                        Laya.timer.once(time, this, () => {
                            Admin._clickLock.switch = false;
                            this.lwgOpenAniAfter();
                            this.lwgBtnClick();
                        });
                    }
                    else {
                        time = _commonOpenAni(this.Owner);
                    }
                }
                lwgOpenAni() { return null; }
                ;
                lwgOpenAniAfter() { }
                ;
                lwgBtnClick() { }
                ;
                lwgAdaptiveProportion(arr) {
                    for (let index = 0; index < arr.length; index++) {
                        const element = arr[index];
                        element.y / GameConfig.height * Laya.stage.height;
                    }
                }
                ;
                lwgAdaptive() { }
                ;
                onUpdate() { this.lwgOnUpdate(); }
                ;
                lwgOnUpdate() { }
                ;
                lwgBeforeVanishAni() { }
                lwgVanishAni() { return null; }
                ;
                onDisable() {
                    Animation2D.fadeOut(this.Owner, 1, 0, 2000, 1);
                    this.lwgOnDisable();
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                    EventAdmin._offCaller(this);
                }
                lwgOnDisable() { }
                ;
            }
            Admin._SceneBase = _SceneBase;
            class _Person extends Laya.Script {
                constructor() {
                    super();
                }
                get Owner() {
                    return this.owner;
                }
                get OwnerScene() {
                    return this.owner.scene;
                }
                get OwnerRig() {
                    if (!this.Owner['_OwnerRig']) {
                        this.Owner['_OwnerRig'] = this.Owner.getComponent(Laya.RigidBody);
                    }
                    return this.Owner['_OwnerRig'];
                }
                onAwake() {
                    this.lwgOnAwake();
                }
                lwgOnAwake() {
                }
                onEnable() {
                    let calssName = this['__proto__']['constructor'].name;
                    this.Owner[calssName] = this;
                    this.lwgOnEnable();
                }
                lwgOnEnable() {
                    console.log('父类的初始化！');
                }
                lwgOpenScene(openSceneName, closeSelf, func, zOrder) {
                    let closeName;
                    if (closeSelf == undefined || closeSelf == true) {
                        closeName = this.OwnerScene.name;
                    }
                    Admin._openScene(openSceneName, closeName, func, zOrder);
                }
                lwgCloseScene(sceneName, func) {
                    Admin._closeScene(sceneName ? sceneName : this.Owner.name, func);
                }
            }
            Admin._Person = _Person;
            class _Object extends Laya.Script {
                constructor() {
                    super();
                }
                get Owner() {
                    return this.owner;
                }
                get OwnerScene() {
                    return this.owner.scene;
                }
                get OwnerRig() {
                    if (!this.Owner['_OwnerRig']) {
                        this.Owner['_OwnerRig'] = this.Owner.getComponent(Laya.RigidBody);
                    }
                    return this.Owner['_OwnerRig'];
                }
                onAwake() {
                    let calssName = this['__proto__']['constructor'].name;
                    this.Owner[calssName] = this;
                    this.lwgOnAwake();
                }
                ImgChild(str) {
                    if (this.Owner.getChildByName(str)) {
                        return this.Owner.getChildByName(str);
                    }
                    else {
                        console.log('场景内不存在子节点：', str);
                        return undefined;
                    }
                }
                lwgOpenScene(openSceneName, closeSelf, func, zOrder) {
                    let closeName;
                    if (closeSelf == undefined || closeSelf == true) {
                        closeName = this.OwnerScene.name;
                    }
                    Admin._openScene(openSceneName, closeName, func, zOrder);
                }
                lwgCloseScene(sceneName, func) {
                    Admin._closeScene(sceneName ? sceneName : this.Owner.name, func);
                }
                lwgOnAwake() { }
                onEnable() {
                    this.lwgBtnClick();
                    this.lwgEventRegister();
                    this.lwgOnEnable();
                }
                lwgOnEnable() { }
                lwgBtnClick() { }
                lwgEventRegister() { }
                onStart() {
                    this.lwgOnStart();
                }
                lwgOnStart() { }
                onUpdate() {
                    this.lwgOnUpdate();
                }
                lwgOnUpdate() { }
                onDisable() {
                    this.lwgOnDisable();
                    Laya.timer.clearAll(this);
                    EventAdmin._offCaller(this);
                }
                lwgOnDisable() { }
            }
            Admin._Object = _Object;
        })(Admin = lwg.Admin || (lwg.Admin = {}));
        let Color;
        (function (Color) {
            function RGBToHexString(r, g, b) {
                return '#' + ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
            }
            Color.RGBToHexString = RGBToHexString;
            function HexStringToRGB(str) {
                let arr = [];
                return arr;
            }
            Color.HexStringToRGB = HexStringToRGB;
            function _colour(node, RGBA, vanishtime) {
                let cf = new Laya.ColorFilter();
                node.blendMode = 'null';
                if (!RGBA) {
                    cf.color(Tools.randomOneNumber(255, 100, true), Tools.randomOneNumber(255, 100, true), Tools.randomOneNumber(255, 100, true), 1);
                }
                else {
                    cf.color(RGBA[0], RGBA[1], RGBA[2], RGBA[3]);
                }
                node.filters = [cf];
                if (vanishtime) {
                    Laya.timer.once(vanishtime, this, () => {
                        for (let index = 0; index < node.filters.length; index++) {
                            if (node.filters[index] == cf) {
                                node.filters = [];
                                break;
                            }
                        }
                    });
                }
                return cf;
            }
            Color._colour = _colour;
            function _changeOnce(node, RGBA, time, func) {
                if (!node) {
                    return;
                }
                let cf = new Laya.ColorFilter();
                cf.color(0, 0, 0, 0);
                let speedR = RGBA[0] / time;
                let speedG = RGBA[1] / time;
                let speedB = RGBA[2] / time;
                let speedA = 0;
                if (RGBA[3]) {
                    speedA = RGBA[3] / time;
                }
                let caller = {
                    add: true,
                };
                let R = 0, G = 0, B = 0, A = 0;
                TimerAdmin._frameLoop(1, caller, () => {
                    if (R < RGBA[0] && caller.add) {
                        R += speedR;
                        G += speedG;
                        B += speedB;
                        if (speedA !== 0)
                            A += speedA;
                        if (R >= RGBA[0]) {
                            caller.add = false;
                        }
                    }
                    else {
                        R -= speedR;
                        G -= speedG;
                        B -= speedB;
                        if (speedA !== 0)
                            A -= speedA;
                        if (R <= 0) {
                            if (func) {
                                func();
                            }
                            Laya.timer.clearAll(caller);
                        }
                    }
                    cf.color(R, G, B, A);
                    node.filters = [cf];
                });
            }
            Color._changeOnce = _changeOnce;
            function _changeConstant(node, RGBA1, RGBA2, frameTime) {
                let cf;
                let RGBA0 = [];
                if (!node.filters) {
                    cf = new Laya.ColorFilter();
                    cf.color(RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1);
                    RGBA0 = [RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1];
                    node.filters = [cf];
                }
                else {
                    cf = node.filters[0];
                    RGBA0 = [node.filters[0]['_alpha'][0], node.filters[0]['_alpha'][1], node.filters[0]['_alpha'][2], node.filters[0]['_alpha'][3] ? node.filters[0]['_alpha'][3] : 1];
                }
                let RGBA = [Tools.randomCountNumer(RGBA1[0], RGBA2[0])[0], Tools.randomCountNumer(RGBA1[1], RGBA2[1])[0], Tools.randomCountNumer(RGBA1[2], RGBA2[2])[0], Tools.randomCountNumer(RGBA1[3] ? RGBA1[3] : 1, RGBA2[3] ? RGBA2[3] : 1)[0]];
                let speedR = (RGBA[0] - RGBA0[0]) / frameTime;
                let speedG = (RGBA[1] - RGBA0[1]) / frameTime;
                let speedB = (RGBA[2] - RGBA0[2]) / frameTime;
                let speedA = 0;
                if (RGBA[3]) {
                    speedA = (RGBA[3] - RGBA0[3]) / frameTime;
                }
                if (node['changeCaller']) {
                    Laya.timer.clearAll(node['changeCaller']);
                }
                let changeCaller = {};
                node['changeCaller'] = changeCaller;
                let _time = 0;
                TimerAdmin._frameLoop(1, changeCaller, () => {
                    _time++;
                    if (_time <= frameTime) {
                        RGBA0[0] += speedR;
                        RGBA0[1] += speedG;
                        RGBA0[2] += speedB;
                    }
                    else {
                        Laya.timer.clearAll(changeCaller);
                    }
                    cf.color(RGBA0[0], RGBA0[1], RGBA0[2], RGBA0[3]);
                    node.filters = [cf];
                });
            }
            Color._changeConstant = _changeConstant;
        })(Color = lwg.Color || (lwg.Color = {}));
        let Effects;
        (function (Effects) {
            let _SkinUrl;
            (function (_SkinUrl) {
                _SkinUrl["\u7231\u5FC31"] = "Frame/Effects/aixin1.png";
                _SkinUrl["\u7231\u5FC32"] = "Frame/Effects/aixin2.png";
                _SkinUrl["\u7231\u5FC33"] = "Frame/Effects/aixin3.png";
                _SkinUrl["\u82B11"] = "Frame/Effects/hua1.png";
                _SkinUrl["\u82B12"] = "Frame/Effects/hua2.png";
                _SkinUrl["\u82B13"] = "Frame/Effects/hua3.png";
                _SkinUrl["\u82B14"] = "Frame/Effects/hua4.png";
                _SkinUrl["\u661F\u661F1"] = "Frame/Effects/star1.png";
                _SkinUrl["\u661F\u661F2"] = "Frame/Effects/star2.png";
                _SkinUrl["\u661F\u661F3"] = "Frame/Effects/star3.png";
                _SkinUrl["\u661F\u661F4"] = "Frame/Effects/star4.png";
                _SkinUrl["\u661F\u661F5"] = "Frame/Effects/star5.png";
                _SkinUrl["\u661F\u661F6"] = "Frame/Effects/star6.png";
                _SkinUrl["\u661F\u661F7"] = "Frame/Effects/star7.png";
                _SkinUrl["\u96EA\u82B11"] = "Frame/Effects/xuehua1.png";
                _SkinUrl["\u53F6\u5B501"] = "Frame/Effects/yezi1.png";
                _SkinUrl["\u5706\u5F62\u53D1\u51491"] = "Frame/Effects/yuanfaguang.png";
                _SkinUrl["\u5706\u5F621"] = "Frame/Effects/yuan1.png";
                _SkinUrl["\u5149\u57081"] = "Frame/Effects/guangquan1.png";
                _SkinUrl["\u5149\u57082"] = "Frame/Effects/guangquan2.png";
            })(_SkinUrl = Effects._SkinUrl || (Effects._SkinUrl = {}));
            let _Aperture;
            (function (_Aperture) {
                class _ApertureImage extends Laya.Image {
                    constructor(parent, centerPoint, width, height, rotation, urlArr, colorRGBA, zOrder) {
                        super();
                        if (!parent.parent) {
                            return;
                        }
                        parent.addChild(this);
                        centerPoint ? this.pos(centerPoint.x, centerPoint.y) : this.pos(0, 0);
                        this.width = width ? width : 100;
                        this.height = height ? height : 100;
                        this.pivotX = this.width / 2;
                        this.pivotY = this.height / 2;
                        this.rotation = rotation ? Tools.randomOneNumber(rotation[0], rotation[1]) : Tools.randomOneNumber(360);
                        this.skin = urlArr ? Tools.arrayRandomGetOne(urlArr) : _SkinUrl.花3;
                        this.zOrder = zOrder ? zOrder : 0;
                        this.alpha = 0;
                        let RGBA = [];
                        RGBA[0] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][0], colorRGBA[1][0]) : Tools.randomOneNumber(0, 255);
                        RGBA[1] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][1], colorRGBA[1][1]) : Tools.randomOneNumber(0, 255);
                        RGBA[2] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][2], colorRGBA[1][2]) : Tools.randomOneNumber(0, 255);
                        RGBA[3] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][3], colorRGBA[1][3]) : Tools.randomOneNumber(0, 255);
                        Color._colour(this, RGBA);
                    }
                }
                _Aperture._ApertureImage = _ApertureImage;
                function _continuous(parent, centerPoint, width, height, rotation, urlArr, colorRGBA, zOrder, scale, speed, accelerated) {
                    let Img = new _ApertureImage(parent, centerPoint, width, height, rotation, urlArr, colorRGBA, zOrder);
                    let _speed = speed ? Tools.randomOneNumber(speed[0], speed[1]) : 0.025;
                    let _accelerated = accelerated ? Tools.randomOneNumber(accelerated[0], accelerated[1]) : 0.0005;
                    let _scale = scale ? Tools.randomOneNumber(scale[0], scale[1]) : 2;
                    let moveCaller = {
                        alpha: true,
                        scale: false,
                        vanish: false
                    };
                    Img['moveCaller'] = moveCaller;
                    let acc = 0;
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        if (moveCaller.alpha) {
                            Img.alpha += 0.05;
                            acc = 0;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.scale = true;
                            }
                        }
                        else if (moveCaller.scale) {
                            acc += _accelerated;
                            if (Img.scaleX > _scale) {
                                moveCaller.scale = false;
                                moveCaller.vanish = true;
                            }
                        }
                        else if (moveCaller.vanish) {
                            acc -= _accelerated;
                            if (acc < 0) {
                                Img.alpha -= 0.015;
                                if (Img.alpha <= 0) {
                                    Img.removeSelf();
                                    Laya.timer.clearAll(moveCaller);
                                }
                            }
                        }
                        Img.scaleX = Img.scaleY += (_speed + acc);
                    });
                }
                _Aperture._continuous = _continuous;
            })(_Aperture = Effects._Aperture || (Effects._Aperture = {}));
            let _Particle;
            (function (_Particle) {
                class _ParticleImgBase extends Laya.Image {
                    constructor(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder) {
                        super();
                        parent.addChild(this);
                        let sectionWidth = sectionWH ? Tools.randomOneNumber(sectionWH[0]) : Tools.randomOneNumber(200);
                        let sectionHeight = sectionWH ? Tools.randomOneNumber(sectionWH[1]) : Tools.randomOneNumber(50);
                        sectionWidth = Tools.randomOneHalf() == 0 ? sectionWidth : -sectionWidth;
                        sectionHeight = Tools.randomOneHalf() == 0 ? sectionHeight : -sectionHeight;
                        this.x = centerPoint ? centerPoint.x + sectionWidth : sectionWidth;
                        this.y = centerPoint ? centerPoint.y + sectionHeight : sectionHeight;
                        this.width = width ? Tools.randomOneNumber(width[0], width[1]) : Tools.randomOneNumber(20, 50);
                        this.height = height ? Tools.randomOneNumber(height[0], height[1]) : this.width;
                        this.pivotX = this.width / 2;
                        this.pivotY = this.height / 2;
                        this.skin = urlArr ? Tools.arrayRandomGetOne(urlArr) : _SkinUrl.圆形1;
                        this.rotation = rotation ? Tools.randomOneNumber(rotation[0], rotation[1]) : 0;
                        this.alpha = 0;
                        this.zOrder = zOrder ? zOrder : 0;
                        let RGBA = [];
                        RGBA[0] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][0], colorRGBA[1][0]) : Tools.randomOneNumber(0, 255);
                        RGBA[1] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][1], colorRGBA[1][1]) : Tools.randomOneNumber(0, 255);
                        RGBA[2] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][2], colorRGBA[1][2]) : Tools.randomOneNumber(0, 255);
                        RGBA[3] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][3], colorRGBA[1][3]) : Tools.randomOneNumber(0, 255);
                        Color._colour(this, RGBA);
                    }
                }
                _Particle._ParticleImgBase = _ParticleImgBase;
                function _snow(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, rotationSpeed, speed, windX) {
                    let Img = new _ParticleImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
                    let _rotationSpeed = rotationSpeed ? Tools.randomOneNumber(rotationSpeed[0], rotationSpeed[1]) : Tools.randomOneNumber(0, 1);
                    _rotationSpeed = Tools.randomOneHalf() == 0 ? _rotationSpeed : -_rotationSpeed;
                    let speed0 = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(1, 2.5);
                    let _windX = windX ? Tools.randomOneNumber(windX[0], windX[1]) : 0;
                    let moveCaller = {
                        alpha: true,
                        move: false,
                        vinish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    let distance0 = 0;
                    let distance1 = distance ? Tools.randomOneNumber(distance[0], distance[1]) : Tools.randomOneNumber(100, 300);
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        Img.x += _windX;
                        Img.rotation += _rotationSpeed;
                        if (Img.alpha < 1 && moveCaller.alpha) {
                            Img.alpha += 0.05;
                            distance0 = Img.y++;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.move = true;
                            }
                        }
                        if (distance0 < distance1 && moveCaller.move) {
                            distance0 = Img.y += speed0;
                            if (distance0 >= distance1) {
                                moveCaller.move = false;
                                moveCaller.vinish = true;
                            }
                        }
                        if (moveCaller.vinish) {
                            Img.alpha -= 0.03;
                            Img.y += speed0;
                            if (Img.alpha <= 0 || speed0 <= 0) {
                                Img.removeSelf();
                                Laya.timer.clearAll(moveCaller);
                            }
                        }
                    });
                    return Img;
                }
                _Particle._snow = _snow;
                function _fallingVertical(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, speed, accelerated) {
                    let Img = new _ParticleImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
                    let speed0 = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(4, 8);
                    let accelerated0 = accelerated ? Tools.randomOneNumber(accelerated[0], accelerated[1]) : Tools.randomOneNumber(0.25, 0.45);
                    let acc = 0;
                    let moveCaller = {
                        alpha: true,
                        move: false,
                        vinish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    let distance0 = 0;
                    let distance1 = distance ? Tools.randomOneNumber(distance[0], distance[1]) : Tools.randomOneNumber(100, 300);
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        if (Img.alpha < 1 && moveCaller.alpha) {
                            Img.alpha += 0.05;
                            distance0 = Img.y++;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.move = true;
                            }
                        }
                        if (distance0 < distance1 && moveCaller.move) {
                            acc += accelerated0;
                            distance0 = Img.y += (speed0 + acc);
                            if (distance0 >= distance1) {
                                moveCaller.move = false;
                                moveCaller.vinish = true;
                            }
                        }
                        if (moveCaller.vinish) {
                            acc -= accelerated0 / 2;
                            Img.alpha -= 0.03;
                            Img.y += (speed0 + acc);
                            if (Img.alpha <= 0 || (speed0 + acc) <= 0) {
                                Img.removeSelf();
                                Laya.timer.clearAll(moveCaller);
                            }
                        }
                    });
                    return Img;
                }
                _Particle._fallingVertical = _fallingVertical;
                function _slowlyUp(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, speed, accelerated) {
                    let Img = new _ParticleImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
                    let speed0 = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(1.5, 2);
                    let accelerated0 = accelerated ? Tools.randomOneNumber(accelerated[0], accelerated[1]) : Tools.randomOneNumber(0.001, 0.005);
                    let acc = 0;
                    let moveCaller = {
                        alpha: true,
                        move: false,
                        vinish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    let fy = Img.y;
                    let distance0 = 0;
                    let distance1 = distance ? Tools.randomOneNumber(distance[0], distance[1]) : Tools.randomOneNumber(-250, -600);
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        if (Img.alpha < 1 && moveCaller.alpha) {
                            Img.alpha += 0.03;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.move = true;
                            }
                        }
                        if (distance0 > distance1 && moveCaller.move) {
                        }
                        else {
                            moveCaller.move = false;
                            moveCaller.vinish = true;
                        }
                        if (moveCaller.vinish) {
                            Img.alpha -= 0.02;
                            Img.scaleX -= 0.005;
                            Img.scaleY -= 0.005;
                            if (Img.alpha <= 0) {
                                Img.removeSelf();
                                Laya.timer.clearAll(moveCaller);
                            }
                        }
                        acc += accelerated0;
                        Img.y -= (speed0 + acc);
                        distance0 = fy - Img.y;
                    });
                    return Img;
                }
                _Particle._slowlyUp = _slowlyUp;
                function _spray(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, moveAngle, distance, rotationSpeed, speed, accelerated) {
                    let Img = new _ParticleImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
                    let centerPoint0 = centerPoint ? centerPoint : new Laya.Point(0, 0);
                    let speed0 = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(3, 10);
                    let accelerated0 = accelerated ? Tools.randomOneNumber(accelerated[0], accelerated[1]) : Tools.randomOneNumber(0.25, 0.45);
                    let acc = 0;
                    let moveCaller = {
                        alpha: true,
                        move: false,
                        vinish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    let radius = 0;
                    let distance1 = distance ? Tools.randomOneNumber(distance[0], distance[1]) : Tools.randomOneNumber(100, 200);
                    let angle0 = moveAngle ? Tools.randomOneNumber(moveAngle[0], moveAngle[1]) : Tools.randomOneNumber(0, 360);
                    let rotationSpeed0 = rotationSpeed ? Tools.randomOneNumber(rotationSpeed[0], rotationSpeed[1]) : Tools.randomOneNumber(0, 20);
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        Img.rotation += rotationSpeed0;
                        if (Img.alpha < 1 && moveCaller.alpha) {
                            Img.alpha += 0.5;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.move = true;
                            }
                        }
                        else {
                            if (radius < distance1 && moveCaller.move) {
                            }
                            else {
                                moveCaller.move = false;
                                moveCaller.vinish = true;
                            }
                            if (moveCaller.vinish) {
                                Img.alpha -= 0.05;
                                if (Img.alpha <= 0.3) {
                                    Img.removeSelf();
                                    Laya.timer.clearAll(moveCaller);
                                }
                            }
                            acc += accelerated0;
                            radius += speed0 + acc;
                            let point = Tools.Point.getRoundPos(angle0, radius, centerPoint0);
                            Img.pos(point.x, point.y);
                        }
                    });
                    return Img;
                }
                _Particle._spray = _spray;
                function _outsideBox(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, curtailAngle, distance, rotateSpeed, speed, accelerated) {
                    let Img = new _ParticleImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
                    let _angle = 0;
                    sectionWH = sectionWH ? sectionWH : [100, 100];
                    let fixedXY = Tools.randomOneHalf() == 0 ? 'x' : 'y';
                    curtailAngle = curtailAngle ? curtailAngle : 60;
                    if (fixedXY == 'x') {
                        if (Tools.randomOneHalf() == 0) {
                            Img.x += sectionWH[0];
                            _angle = Tools.randomOneHalf() == 0 ? Tools.randomOneNumber(0, 90 - curtailAngle) : Tools.randomOneNumber(0, -90 + curtailAngle);
                        }
                        else {
                            Img.x -= sectionWH[0];
                            _angle = Tools.randomOneNumber(90 + curtailAngle, 270 - curtailAngle);
                        }
                        Img.y += Tools.randomOneNumber(-sectionWH[1], sectionWH[1]);
                    }
                    else {
                        if (Tools.randomOneHalf() == 0) {
                            Img.y -= sectionWH[1];
                            _angle = Tools.randomOneNumber(180 + curtailAngle, 360 - curtailAngle);
                        }
                        else {
                            Img.y += sectionWH[1];
                            _angle = Tools.randomOneNumber(0 + curtailAngle, 180 - curtailAngle);
                        }
                        Img.x += Tools.randomOneNumber(-sectionWH[0], sectionWH[0]);
                    }
                    let p = Tools.d2_angle_Vector(_angle);
                    let _distance = distance ? Tools.randomOneNumber(distance[0], distance[1]) : Tools.randomOneNumber(20, 50);
                    let speed0 = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(0.5, 1);
                    let accelerated0 = accelerated ? Tools.randomOneNumber(accelerated[0], accelerated[1]) : Tools.randomOneNumber(0.25, 0.45);
                    let acc = 0;
                    let rotationSpeed0 = rotateSpeed ? Tools.randomOneNumber(rotateSpeed[0], rotateSpeed[1]) : Tools.randomOneNumber(0, 20);
                    let firstP = new Laya.Point(Img.x, Img.y);
                    let moveCaller = {
                        alpha: true,
                        move: false,
                        vinish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        Img.rotation += rotationSpeed0;
                        if (moveCaller.alpha) {
                            Img.alpha += 0.5;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.move = true;
                            }
                        }
                        else if (moveCaller.move) {
                            if (firstP.distance(Img.x, Img.y) >= _distance) {
                                moveCaller.move = false;
                                moveCaller.vinish = true;
                            }
                        }
                        else if (moveCaller.vinish) {
                            Img.alpha -= 0.05;
                            if (Img.alpha <= 0.3) {
                                Img.removeSelf();
                                Laya.timer.clearAll(moveCaller);
                            }
                        }
                        if (!moveCaller.alpha) {
                            acc += accelerated0;
                            Img.x += p.x * (speed0 + acc);
                            Img.y += p.y * (speed0 + acc);
                        }
                    });
                    return Img;
                }
                _Particle._outsideBox = _outsideBox;
                function _moveToTargetToMove(parent, centerPoint, width, height, rotation, angle, urlArr, colorRGBA, zOrder, distance1, distance2, rotationSpeed, speed, accelerated) {
                    let Img = new _ParticleImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
                    let centerPoint0 = centerPoint ? centerPoint : new Laya.Point(0, 0);
                    let speed0 = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(5, 6);
                    let accelerated0 = accelerated ? Tools.randomOneNumber(accelerated[0], accelerated[1]) : Tools.randomOneNumber(0.25, 0.45);
                    let acc = 0;
                    let moveCaller = {
                        alpha: true,
                        move1: false,
                        stop: false,
                        move2: false,
                        vinish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    let radius = 0;
                    let dis1 = distance1 ? Tools.randomOneNumber(distance1[0], distance1[1]) : Tools.randomOneNumber(100, 200);
                    let dis2 = distance2 ? Tools.randomOneNumber(distance2[0], distance2[1]) : Tools.randomOneNumber(100, 200);
                    let angle0 = angle ? Tools.randomOneNumber(angle[0], angle[1]) : Tools.randomOneNumber(0, 360);
                    Img.rotation = angle0 - 90;
                    let rotationSpeed0 = rotationSpeed ? Tools.randomOneNumber(rotationSpeed[0], rotationSpeed[1]) : Tools.randomOneNumber(0, 20);
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        if (moveCaller.alpha) {
                            acc += accelerated0;
                            radius += speed0 + acc;
                            Img.alpha += 0.5;
                            if (Img.alpha >= 1) {
                                moveCaller.alpha = false;
                                moveCaller.move1 = true;
                            }
                        }
                        else if (moveCaller.move1) {
                            acc += accelerated0;
                            radius += speed0 + acc;
                            if (radius >= dis1) {
                                moveCaller.move1 = false;
                                moveCaller.stop = true;
                            }
                        }
                        else if (moveCaller.stop) {
                            acc -= 0.3;
                            radius += 0.1;
                            if (acc <= 0) {
                                moveCaller.stop = false;
                                moveCaller.move2 = true;
                            }
                        }
                        else if (moveCaller.move2) {
                            acc += accelerated0 / 2;
                            radius += speed0 + acc;
                            if (radius >= dis1 + dis2) {
                                moveCaller.move2 = false;
                                moveCaller.vinish = true;
                            }
                        }
                        else if (moveCaller.vinish) {
                            radius += 0.5;
                            Img.alpha -= 0.05;
                            if (Img.alpha <= 0) {
                                Img.removeSelf();
                                Laya.timer.clearAll(moveCaller);
                            }
                        }
                        let point = Tools.Point.getRoundPos(angle0, radius, centerPoint0);
                        Img.pos(point.x, point.y);
                    });
                    return Img;
                }
                _Particle._moveToTargetToMove = _moveToTargetToMove;
                function _AnnularInhalation(parent, centerPoint, radius, rotation, width, height, urlArr, speed, accelerated, zOrder) {
                    let Img = new Laya.Image();
                    parent.addChild(Img);
                    width = width ? width : [25, 50];
                    Img.width = Tools.randomCountNumer(width[0], width[1])[0];
                    Img.height = height ? Tools.randomCountNumer(height[0], height[1])[0] : Img.width;
                    Img.pivotX = Img.width / 2;
                    Img.pivotY = Img.height / 2;
                    Img.skin = urlArr ? Tools.arrayRandomGetOut(urlArr)[0] : _SkinUrl[Tools.randomCountNumer(0, 12)[0]];
                    let radius0 = Tools.randomCountNumer(radius[0], radius[1])[0];
                    Img.alpha = 0;
                    let speed0 = speed ? Tools.randomCountNumer(speed[0], speed[1])[0] : Tools.randomCountNumer(5, 10)[0];
                    let angle = rotation ? Tools.randomCountNumer(rotation[0], rotation[1])[0] : Tools.randomCountNumer(0, 360)[0];
                    let caller = {};
                    let acc = 0;
                    accelerated = accelerated ? accelerated : 0.35;
                    TimerAdmin._frameLoop(1, caller, () => {
                        if (Img.alpha < 1) {
                            Img.alpha += 0.05;
                            acc += (accelerated / 5);
                            radius0 -= (speed0 / 2 + acc);
                        }
                        else {
                            acc += accelerated;
                            radius0 -= (speed0 + acc);
                        }
                        let point = Tools.Point.getRoundPos(angle, radius0, centerPoint);
                        Img.pos(point.x, point.y);
                        if (point.distance(centerPoint.x, centerPoint.y) <= 20 || point.distance(centerPoint.x, centerPoint.y) >= 1000) {
                            Img.removeSelf();
                            Laya.timer.clearAll(caller);
                        }
                    });
                    return Img;
                }
                _Particle._AnnularInhalation = _AnnularInhalation;
            })(_Particle = Effects._Particle || (Effects._Particle = {}));
            let _Glitter;
            (function (_Glitter) {
                class _GlitterImage extends Laya.Image {
                    constructor(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height) {
                        super();
                        if (!parent.parent) {
                            return;
                        }
                        parent.addChild(this);
                        this.skin = urlArr ? Tools.arrayRandomGetOne(urlArr) : _SkinUrl.星星1;
                        this.width = width ? Tools.randomOneNumber(width[0], width[1]) : 80;
                        this.height = height ? Tools.randomOneNumber(height[0], height[1]) : this.width;
                        this.pivotX = this.width / 2;
                        this.pivotY = this.height / 2;
                        let p = radiusXY ? Tools.Point.randomPointByCenter(centerPos, radiusXY[0], radiusXY[1], 1) : Tools.Point.randomPointByCenter(centerPos, 100, 100, 1);
                        this.pos(p[0].x, p[0].y);
                        let RGBA = [];
                        RGBA[0] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][0], colorRGBA[1][0]) : Tools.randomOneNumber(0, 255);
                        RGBA[1] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][1], colorRGBA[1][1]) : Tools.randomOneNumber(0, 255);
                        RGBA[2] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][2], colorRGBA[1][2]) : Tools.randomOneNumber(0, 255);
                        RGBA[3] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][3], colorRGBA[1][3]) : Tools.randomOneNumber(0, 255);
                        Color._colour(this, RGBA);
                        this.alpha = 0;
                    }
                }
                _Glitter._GlitterImage = _GlitterImage;
                function _blinkStar(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height, scale, speed, rotateSpeed) {
                    let Img = new _GlitterImage(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height);
                    Img.scaleX = 0;
                    Img.scaleY = 0;
                    let _scale = scale ? Tools.randomOneNumber(scale[0], scale[1]) : Tools.randomOneNumber(0.8, 1.2);
                    let _speed = speed ? Tools.randomOneNumber(speed[0], speed[1]) : Tools.randomOneNumber(0.01, 0.02);
                    let _rotateSpeed = rotateSpeed ? Tools.randomOneInt(rotateSpeed[0], rotateSpeed[1]) : Tools.randomOneInt(0, 5);
                    _rotateSpeed = Tools.randomOneHalf() == 0 ? -_rotateSpeed : _rotateSpeed;
                    let moveCaller = {
                        appear: true,
                        scale: false,
                        vanish: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    var ani = () => {
                        if (moveCaller.appear) {
                            Img.alpha += 0.1;
                            Img.rotation += _rotateSpeed;
                            Img.scaleX = Img.scaleY += _speed;
                            if (Img.alpha >= 1) {
                                moveCaller.appear = false;
                                moveCaller.scale = true;
                            }
                        }
                        else if (moveCaller.scale) {
                            Img.rotation += _rotateSpeed;
                            Img.scaleX = Img.scaleY += _speed;
                            if (Img.scaleX > _scale) {
                                moveCaller.scale = false;
                                moveCaller.vanish = true;
                            }
                        }
                        else if (moveCaller.vanish) {
                            Img.rotation -= _rotateSpeed;
                            Img.alpha -= 0.015;
                            Img.scaleX -= 0.01;
                            Img.scaleY -= 0.01;
                            if (Img.scaleX <= 0) {
                                Img.removeSelf();
                                Laya.timer.clearAll(moveCaller);
                            }
                        }
                    };
                    Laya.timer.frameLoop(1, moveCaller, ani);
                    return Img;
                }
                _Glitter._blinkStar = _blinkStar;
                function _simpleInfinite(parent, x, y, width, height, zOrder, url, speed) {
                    let Img = new Laya.Image();
                    parent.addChild(Img);
                    Img.width = width;
                    Img.height = height;
                    Img.pos(x, y);
                    Img.skin = url ? url : _SkinUrl.光圈1;
                    Img.alpha = 0;
                    Img.zOrder = zOrder ? zOrder : 0;
                    let add = true;
                    let caller = {};
                    let func = () => {
                        if (!add) {
                            Img.alpha -= speed ? speed : 0.01;
                            if (Img.alpha <= 0) {
                                if (caller['end']) {
                                    Laya.timer.clearAll(caller);
                                    Img.removeSelf();
                                }
                                else {
                                    add = true;
                                }
                            }
                        }
                        else {
                            Img.alpha += speed ? speed * 2 : 0.01 * 2;
                            if (Img.alpha >= 1) {
                                add = false;
                                caller['end'] = true;
                            }
                        }
                    };
                    Laya.timer.frameLoop(1, caller, func);
                    return Img;
                }
                _Glitter._simpleInfinite = _simpleInfinite;
            })(_Glitter = Effects._Glitter || (Effects._Glitter = {}));
            let _circulation;
            (function (_circulation) {
                class _circulationImage extends Laya.Image {
                    constructor(parent, urlArr, colorRGBA, width, height, zOrder) {
                        super();
                        parent.addChild(this);
                        this.skin = urlArr ? Tools.arrayRandomGetOne(urlArr) : _SkinUrl.圆形发光1;
                        this.width = width ? Tools.randomOneNumber(width[0], width[1]) : 80;
                        this.height = height ? Tools.randomOneNumber(height[0], height[1]) : this.width;
                        this.pivotX = this.width / 2;
                        this.pivotY = this.height / 2;
                        let RGBA = [];
                        RGBA[0] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][0], colorRGBA[1][0]) : Tools.randomOneNumber(0, 255);
                        RGBA[1] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][1], colorRGBA[1][1]) : Tools.randomOneNumber(0, 255);
                        RGBA[2] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][2], colorRGBA[1][2]) : Tools.randomOneNumber(0, 255);
                        RGBA[3] = colorRGBA ? Tools.randomOneNumber(colorRGBA[0][3], colorRGBA[1][3]) : Tools.randomOneNumber(0, 255);
                        Color._colour(this, RGBA);
                        this.zOrder = zOrder ? zOrder : 0;
                        this.alpha = 0;
                        this.scaleX = 0;
                        this.scaleY = 0;
                    }
                }
                _circulation._circulationImage = _circulationImage;
                function _corner(parent, posArray, urlArr, colorRGBA, width, height, zOrder, parallel, speed) {
                    if (posArray.length <= 1) {
                        return;
                    }
                    let Img = new _circulationImage(parent, urlArr, colorRGBA, width, height, zOrder);
                    let Imgfootprint = new _circulationImage(parent, urlArr, colorRGBA, width, height, zOrder);
                    Imgfootprint.filters = Img.filters;
                    Img.pos(posArray[0][0], posArray[0][1]);
                    Img.alpha = 1;
                    let moveCaller = {
                        num: 0,
                        alpha: true,
                        move: false,
                    };
                    Img['moveCaller'] = moveCaller;
                    let _speed = speed ? speed : 3;
                    let index = 0;
                    Img.scale(1, 1);
                    TimerAdmin._frameLoop(1, moveCaller, () => {
                        let Imgfootprint = new _circulationImage(parent, urlArr, colorRGBA, width, height, zOrder);
                        Imgfootprint.filters = Img.filters;
                        Imgfootprint.x = Img.x;
                        Imgfootprint.y = Img.y;
                        Imgfootprint.rotation = Img.rotation;
                        Imgfootprint.alpha = 1;
                        Imgfootprint.zOrder = -1;
                        Imgfootprint.scaleX = Img.scaleX;
                        Imgfootprint.scaleY = Img.scaleY;
                        Animation2D.fadeOut(Imgfootprint, 1, 0, 200, 0, () => {
                            Imgfootprint.removeSelf();
                        });
                        if (Img.parent == null) {
                            Laya.timer.clearAll(moveCaller);
                        }
                        moveCaller.num++;
                        if (urlArr) {
                            if (moveCaller.num > urlArr.length) {
                                moveCaller.num = 0;
                            }
                            else {
                                Img.skin = urlArr[moveCaller.num];
                            }
                        }
                    });
                    var func = () => {
                        let targetXY = [posArray[index][0], posArray[index][1]];
                        let distance = (new Laya.Point(Img.x, Img.y)).distance(targetXY[0], targetXY[1]);
                        if (parallel) {
                            Img.rotation = Tools.d2_Vector_Angle(Img.x - targetXY[0], Img.y - targetXY[1]) + 180;
                        }
                        let time = speed * 100 + distance / 5;
                        if (index == posArray.length + 1) {
                            targetXY = [posArray[0][0], posArray[0][1]];
                        }
                        Animation2D.move_Simple(Img, Img.x, Img.y, targetXY[0], targetXY[1], time, 0, () => {
                            index++;
                            if (index == posArray.length) {
                                index = 0;
                            }
                            func();
                        });
                    };
                    func();
                    return Img;
                }
                _circulation._corner = _corner;
            })(_circulation = Effects._circulation || (Effects._circulation = {}));
        })(Effects = lwg.Effects || (lwg.Effects = {}));
        let Click;
        (function (Click) {
            function _createButton() {
                let Btn = new Laya.Sprite();
                let img = new Laya.Image();
                let label = new Laya.Label();
            }
            Click._createButton = _createButton;
            let _Type;
            (function (_Type) {
                _Type["noEffect"] = "noEffect";
                _Type["largen"] = "largen";
                _Type["balloon"] = "balloon";
                _Type["beetle"] = "beetle";
            })(_Type = Click._Type || (Click._Type = {}));
            function _on(effect, target, caller, down, move, up, out) {
                let btnEffect;
                switch (effect) {
                    case _Type.noEffect:
                        btnEffect = new Btn_NoEffect();
                        break;
                    case _Type.largen:
                        btnEffect = new Btn_LargenEffect();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Balloon();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Beetle();
                        break;
                    default:
                        btnEffect = new Btn_LargenEffect();
                        break;
                }
                target.on(Laya.Event.MOUSE_DOWN, caller, down);
                target.on(Laya.Event.MOUSE_MOVE, caller, move);
                target.on(Laya.Event.MOUSE_UP, caller, up);
                target.on(Laya.Event.MOUSE_OUT, caller, out);
                target.on(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
                target.on(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
                target.on(Laya.Event.MOUSE_UP, caller, btnEffect.up);
                target.on(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
            }
            Click._on = _on;
            function _off(effect, target, caller, down, move, up, out) {
                let btnEffect;
                switch (effect) {
                    case _Type.noEffect:
                        btnEffect = new Btn_NoEffect();
                        break;
                    case _Type.largen:
                        btnEffect = new Btn_LargenEffect();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Balloon();
                        break;
                    case _Type.balloon:
                        btnEffect = new Btn_Beetle();
                        break;
                    default:
                        btnEffect = new Btn_LargenEffect();
                        break;
                }
                target._off(Laya.Event.MOUSE_DOWN, caller, down);
                target._off(Laya.Event.MOUSE_MOVE, caller, move);
                target._off(Laya.Event.MOUSE_UP, caller, up);
                target._off(Laya.Event.MOUSE_OUT, caller, out);
                target._off(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
                target._off(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
                target._off(Laya.Event.MOUSE_UP, caller, btnEffect.up);
                target._off(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
            }
            Click._off = _off;
        })(Click = lwg.Click || (lwg.Click = {}));
        class Btn_NoEffect {
            constructor() {
            }
            down(event) {
            }
            move(event) {
            }
            up(event) {
            }
            out(event) {
            }
        }
        lwg.Btn_NoEffect = Btn_NoEffect;
        class Btn_LargenEffect {
            constructor() {
            }
            down(event) {
                event.currentTarget.scale(1.1, 1.1);
                PalyAudio.playSound(Click._audioUrl);
            }
            move(event) {
            }
            up(event) {
                event.currentTarget.scale(1, 1);
            }
            out(event) {
                event.currentTarget.scale(1, 1);
            }
        }
        lwg.Btn_LargenEffect = Btn_LargenEffect;
        class Btn_Balloon {
            constructor() {
            }
            down(event) {
                event.currentTarget.scale(Click._balloonScale + 0.06, Click._balloonScale + 0.06);
                PalyAudio.playSound(Click._audioUrl);
            }
            up(event) {
                event.currentTarget.scale(Click._balloonScale, Click._balloonScale);
            }
            move(event) {
                event.currentTarget.scale(Click._balloonScale, Click._balloonScale);
            }
            out(event) {
                event.currentTarget.scale(Click._balloonScale, Click._balloonScale);
            }
        }
        lwg.Btn_Balloon = Btn_Balloon;
        class Btn_Beetle {
            constructor() {
            }
            down(event) {
                event.currentTarget.scale(Click._beetleScale + 0.06, Click._beetleScale + 0.06);
                PalyAudio.playSound(Click._audioUrl);
            }
            up(event) {
                event.currentTarget.scale(Click._beetleScale, Click._beetleScale);
            }
            move(event) {
                event.currentTarget.scale(Click._beetleScale, Click._beetleScale);
            }
            out(event) {
                event.currentTarget.scale(Click._beetleScale, Click._beetleScale);
            }
        }
        lwg.Btn_Beetle = Btn_Beetle;
        let Animation3D;
        (function (Animation3D) {
            Animation3D.tweenMap = {};
            Animation3D.frameRate = 1;
            function moveTo(target, toPos, duration, caller, ease, complete, delay = 0, coverBefore = true, update, frame) {
                let position = target.transform.position.clone();
                if (duration == 0 || duration === undefined || duration === null) {
                    target.transform.position = toPos.clone();
                    complete && complete.apply(caller);
                    return;
                }
                if (frame <= 0 || frame === undefined || frame === null) {
                    frame = Animation3D.frameRate;
                }
                let updateRenderPos = function () {
                    if (target.transform) {
                        target.transform.position = position;
                    }
                    update && update();
                };
                Laya.timer.once(delay, target, function () {
                    Laya.timer.frameLoop(frame, target, updateRenderPos);
                });
                let endTween = function () {
                    if (target.transform) {
                        target.transform.position = toPos.clone();
                        Laya.timer.clear(target, updateRenderPos);
                    }
                    complete && complete.apply(caller);
                };
                let tween = Laya.Tween.to(position, { x: toPos.x, y: toPos.y, z: toPos.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
                if (!Animation3D.tweenMap[target.id]) {
                    Animation3D.tweenMap[target.id] = [];
                }
                Animation3D.tweenMap[target.id].push(tween);
            }
            Animation3D.moveTo = moveTo;
            function rotateTo(target, toRotation, duration, caller, ease, complete, delay, coverBefore, update, frame) {
                let rotation = target.transform.localRotationEuler.clone();
                if (duration == 0 || duration === undefined || duration === null) {
                    target.transform.localRotationEuler = toRotation.clone();
                    complete && complete.apply(caller);
                    return;
                }
                if (frame <= 0 || frame === undefined || frame === null) {
                    frame = Animation3D.frameRate;
                }
                let updateRenderRotation = function () {
                    if (target.transform) {
                        target.transform.localRotationEuler = rotation;
                    }
                    update && update();
                };
                Laya.timer.once(delay, target, function () {
                    Laya.timer.frameLoop(frame, target, updateRenderRotation);
                });
                let endTween = function () {
                    if (target.transform) {
                        target.transform.localRotationEuler = toRotation.clone();
                        Laya.timer.clear(target, updateRenderRotation);
                    }
                    complete && complete.apply(caller);
                };
                let tween = Laya.Tween.to(rotation, { x: toRotation.x, y: toRotation.y, z: toRotation.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
                if (!Animation3D.tweenMap[target.id]) {
                    Animation3D.tweenMap[target.id] = [];
                }
                Animation3D.tweenMap[target.id].push(tween);
            }
            Animation3D.rotateTo = rotateTo;
            function scaleTo(target, toScale, duration, caller, ease, complete, delay, coverBefore, update, frame) {
                let localScale = target.transform.localScale.clone();
                if (duration == 0 || duration === undefined || duration === null) {
                    target.transform.localScale = toScale.clone();
                    complete && complete.apply(caller);
                    return;
                }
                if (frame <= 0 || frame === undefined || frame === null) {
                    frame = Animation3D.frameRate;
                }
                let updateRenderPos = function () {
                    target.transform.localScale = localScale.clone();
                    update && update();
                };
                Laya.timer.once(delay, this, function () {
                    Laya.timer.frameLoop(frame, target, updateRenderPos);
                });
                let endTween = function () {
                    target.transform.localScale = toScale.clone();
                    Laya.timer.clear(target, updateRenderPos);
                    complete && complete.apply(caller);
                };
                let tween = Laya.Tween.to(localScale, { x: toScale.x, y: toScale.y, z: toScale.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
                if (!Animation3D.tweenMap[target.id]) {
                    Animation3D.tweenMap[target.id] = [];
                }
                Animation3D.tweenMap[target.id].push(tween);
            }
            Animation3D.scaleTo = scaleTo;
            function ClearTween(target) {
                let tweens = Animation3D.tweenMap[target.id];
                if (tweens && tweens.length) {
                    while (tweens.length > 0) {
                        let tween = tweens.pop();
                        tween.clear();
                    }
                }
                Laya.timer.clearAll(target);
            }
            Animation3D.ClearTween = ClearTween;
            function rock(target, range, duration, caller, func, delayed, ease) {
                if (!delayed) {
                    delayed = 0;
                }
                let v1 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);
                rotateTo(target, v1, duration / 2, caller, ease, () => {
                    let v2 = new Laya.Vector3(target.transform.localRotationEulerX - range.x * 2, target.transform.localRotationEulerY - range.y * 2, target.transform.localRotationEulerZ - range.z * 2);
                    rotateTo(target, v2, duration, caller, ease, () => {
                        let v3 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);
                        rotateTo(target, v3, duration / 2, caller, ease, () => {
                            if (func) {
                                func();
                            }
                        });
                    });
                }, delayed);
            }
            Animation3D.rock = rock;
            function moveRotateTo(Sp3d, Target, duration, caller, ease, complete, delay, coverBefore, update, frame) {
                moveTo(Sp3d, Target.transform.position, duration, caller, ease, null, delay, coverBefore, update, frame);
                rotateTo(Sp3d, Target.transform.localRotationEuler, duration, caller, ease, complete, delay, coverBefore, null, frame);
            }
            Animation3D.moveRotateTo = moveRotateTo;
        })(Animation3D = lwg.Animation3D || (lwg.Animation3D = {}));
        let Animation2D;
        (function (Animation2D) {
            function circulation_scale(node, range, time, delayed, func) {
                Laya.Tween.to(node, { scaleX: 1 + range, scaleY: 1 + range }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 1 - range, scaleY: 1 - range }, time / 2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, time / 2, null, Laya.Handler.create(this, function () {
                            if (func) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.circulation_scale = circulation_scale;
            function leftRight_Shake(node, range, time, delayed, func, click) {
                if (!delayed) {
                    delayed = 0;
                }
                if (!click) {
                    Admin._clickLock.switch = true;
                }
                Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { x: node.x + range * 2 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, function () {
                            if (func) {
                                func();
                            }
                            if (!click) {
                                Admin._clickLock.switch = false;
                            }
                        }));
                    }));
                }), delayed);
            }
            Animation2D.leftRight_Shake = leftRight_Shake;
            function simple_Rotate(node, Frotate, Erotate, time, delayed, func) {
                node.rotation = Frotate;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(node, { rotation: Erotate }, time, null, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.simple_Rotate = simple_Rotate;
            function upDown_Overturn(node, time, func) {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                                if (func !== null || func !== undefined) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), 0);
            }
            Animation2D.upDown_Overturn = upDown_Overturn;
            function leftRight_Overturn(node, time, func) {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, function () {
                            }), 0);
                            if (func !== null) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), 0);
            }
            Animation2D.leftRight_Overturn = leftRight_Overturn;
            function upDwon_Shake(node, range, time, delayed, func) {
                Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { y: node.y - range * 2 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, function () {
                            if (func !== null) {
                                func();
                            }
                        }));
                    }));
                }), delayed);
            }
            Animation2D.upDwon_Shake = upDwon_Shake;
            function fadeOut(node, alpha1, alpha2, time, delayed, func, stageClick) {
                node.alpha = alpha1;
                if (stageClick) {
                    Admin._clickLock.switch = true;
                }
                Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                    if (stageClick) {
                        Admin._clickLock.switch = false;
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.fadeOut = fadeOut;
            function fadeOut_KickBack(node, alpha1, alpha2, time, delayed, func) {
                node.alpha = alpha1;
                Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.fadeOut_KickBack = fadeOut_KickBack;
            function move_FadeOut(node, firstX, firstY, targetX, targetY, time, delayed, func) {
                node.alpha = 0;
                node.x = firstX;
                node.y = firstY;
                Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.move_FadeOut = move_FadeOut;
            function move_Fade_Out(node, firstX, firstY, targetX, targetY, time, delayed, func) {
                node.alpha = 1;
                node.x = firstX;
                node.y = firstY;
                Laya.Tween.to(node, { alpha: 0, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.move_Fade_Out = move_Fade_Out;
            function move_FadeOut_Scale_01(node, firstX, firstY, targetX, targetY, time, delayed, func) {
                node.alpha = 0;
                node.targetX = 0;
                node.targetY = 0;
                node.x = firstX;
                node.y = firstY;
                Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY, scaleX: 1, scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.move_FadeOut_Scale_01 = move_FadeOut_Scale_01;
            function move_Scale(node, fScale, fX, fY, tX, tY, eScale, time, delayed, ease, func) {
                node.scaleX = fScale;
                node.scaleY = fScale;
                node.x = fX;
                node.y = fY;
                Laya.Tween.to(node, { x: tX, y: tY, scaleX: eScale, scaleY: eScale }, time, ease ? null : ease, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.move_Scale = move_Scale;
            function rotate_Scale(target, fRotate, fScaleX, fScaleY, eRotate, eScaleX, eScaleY, time, delayed, func) {
                target.scaleX = fScaleX;
                target.scaleY = fScaleY;
                target.rotation = fRotate;
                Laya.Tween.to(target, { rotation: eRotate, scaleX: eScaleX, scaleY: eScaleY }, time, null, Laya.Handler.create(this, () => {
                    if (func) {
                        func();
                    }
                    target.rotation = 0;
                }), delayed ? delayed : 0);
            }
            Animation2D.rotate_Scale = rotate_Scale;
            function drop_Simple(node, fY, tY, rotation, time, delayed, func) {
                node.y = fY;
                Laya.Tween.to(node, { y: tY, rotation: rotation }, time, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.drop_Simple = drop_Simple;
            function drop_KickBack(target, fAlpha, firstY, targetY, extendY, time1, delayed, func) {
                target.alpha = fAlpha;
                target.y = firstY;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(target, { alpha: 1, y: targetY + extendY }, time1, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { y: targetY - extendY / 2 }, time1 / 2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(target, { y: targetY }, time1 / 4, null, Laya.Handler.create(this, function () {
                            if (func) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.drop_KickBack = drop_KickBack;
            function drop_Excursion(node, targetY, targetX, rotation, time, delayed, func) {
                Laya.Tween.to(node, { x: node.x + targetX, y: node.y + targetY * 1 / 6 }, time, Laya.Ease.expoIn, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { x: node.x + targetX + 50, y: targetY, rotation: rotation }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.drop_Excursion = drop_Excursion;
            function goUp_Simple(node, initialY, initialR, targetY, time, delayed, func) {
                node.y = initialY;
                node.rotation = initialR;
                Laya.Tween.to(node, { y: targetY, rotation: 0 }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                    if (func !== null) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.goUp_Simple = goUp_Simple;
            function cardRotateX_TowFace(node, time, func1, delayed, func2) {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                    Tools.Node.childrenVisible2D(node, false);
                    if (func1) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleX: 1 }, time * 0.9, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: 0 }, time * 0.8, null, Laya.Handler.create(this, function () {
                            Tools.Node.childrenVisible2D(node, true);
                            Laya.Tween.to(node, { scaleX: 1 }, time * 0.7, null, Laya.Handler.create(this, function () {
                                if (func2) {
                                    func2();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.cardRotateX_TowFace = cardRotateX_TowFace;
            function cardRotateX_OneFace(node, func1, time, delayed, func2) {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, function () {
                    if (func1 !== null) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, function () {
                        if (func2 !== null) {
                            func2();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.cardRotateX_OneFace = cardRotateX_OneFace;
            function cardRotateY_TowFace(node, time, func1, delayed, func2) {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                    Tools.Node.childrenVisible2D(node, false);
                    if (func1) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleY: 1 }, time * 1 / 2, null, Laya.Handler.create(this, function () {
                                Tools.Node.childrenVisible2D(node, true);
                                if (func2) {
                                    func2();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.cardRotateY_TowFace = cardRotateY_TowFace;
            function cardRotateY_OneFace(node, func1, time, delayed, func2) {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, function () {
                    if (func1) {
                        func1();
                    }
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, function () {
                        if (func2) {
                            func2();
                        }
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.cardRotateY_OneFace = cardRotateY_OneFace;
            function move_changeRotate(node, targetX, targetY, per, rotation_pe, time, func) {
                let targetPerX = targetX * per + node.x * (1 - per);
                let targetPerY = targetY * per + node.y * (1 - per);
                Laya.Tween.to(node, { x: targetPerX, y: targetPerY, rotation: 45 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { x: targetX, y: targetY, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), 0);
            }
            Animation2D.move_changeRotate = move_changeRotate;
            function bomb_LeftRight(node, MaxScale, time, func, delayed) {
                Laya.Tween.to(node, { scaleX: MaxScale }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 0.85 }, time * 0.5, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: MaxScale * 0.9 }, time * 0.55, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: 0.95 }, time * 0.6, null, Laya.Handler.create(this, function () {
                                Laya.Tween.to(node, { scaleX: 1 }, time * 0.65, null, Laya.Handler.create(this, function () {
                                    if (func)
                                        func();
                                }), 0);
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.bomb_LeftRight = bomb_LeftRight;
            function bombs_Appear(node, firstAlpha, endScale, maxScale, rotation1, time1, time2, delayed, func) {
                node.scale(0, 0);
                node.alpha = firstAlpha;
                Laya.Tween.to(node, { scaleX: maxScale, scaleY: maxScale, alpha: 1, rotation: rotation1 }, time1, Laya.Ease.cubicInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: endScale + (maxScale - endScale) * 0.2, scaleY: endScale + (maxScale - endScale) * 0.2, rotation: 0 }, time2, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time2, null, Laya.Handler.create(this, function () {
                                if (func) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.bombs_Appear = bombs_Appear;
            function bombs_AppearAllChild(node, firstAlpha, endScale, scale1, rotation1, time1, time2, interval, func, audioType) {
                let de1 = 0;
                if (!interval) {
                    interval = 100;
                }
                for (let index = 0; index < node.numChildren; index++) {
                    let Child = node.getChildAt(index);
                    Child.alpha = 0;
                    Laya.timer.once(de1, this, () => {
                        Child.alpha = 1;
                        if (index !== node.numChildren - 1) {
                            func == null;
                        }
                        bombs_Appear(Child, firstAlpha, endScale, scale1, rotation1, time1, time2, null, func);
                    });
                    de1 += interval;
                }
            }
            Animation2D.bombs_AppearAllChild = bombs_AppearAllChild;
            function bombs_VanishAllChild(node, endScale, alpha, rotation, time, interval, func) {
                let de1 = 0;
                if (!interval) {
                    interval = 100;
                }
                for (let index = 0; index < node.numChildren; index++) {
                    let Child = node.getChildAt(index);
                    Laya.timer.once(de1, this, () => {
                        if (index !== node.numChildren - 1) {
                            func == null;
                        }
                        bombs_Vanish(node, endScale, alpha, rotation, time, 0, func);
                    });
                    de1 += interval;
                }
            }
            Animation2D.bombs_VanishAllChild = bombs_VanishAllChild;
            function bombs_Vanish(node, scale, alpha, rotation, time, delayed, func) {
                Laya.Tween.to(node, { scaleX: scale, scaleY: scale, alpha: alpha, rotation: rotation }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.bombs_Vanish = bombs_Vanish;
            function swell_shrink(node, firstScale, scale1, time, delayed, func) {
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(node, { scaleX: scale1, scaleY: scale1, alpha: 1, }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { scaleX: firstScale + (scale1 - firstScale) * 0.5, scaleY: firstScale + (scale1 - firstScale) * 0.5, rotation: 0 }, time * 0.5, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                                if (func) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed);
            }
            Animation2D.swell_shrink = swell_shrink;
            function move_Simple(node, fX, fY, targetX, targetY, time, delayed, func, ease) {
                node.x = fX;
                node.y = fY;
                Laya.Tween.to(node, { x: targetX, y: targetY }, time, ease ? ease : null, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed ? delayed : 0);
            }
            Animation2D.move_Simple = move_Simple;
            function move_Deform_X(node, firstX, firstR, targetX, scaleX, scaleY, time, delayed, func) {
                node.alpha = 0;
                node.x = firstX;
                node.rotation = firstR;
                Laya.Tween.to(node, { x: targetX, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.move_Deform_X = move_Deform_X;
            function move_Deform_Y(target, firstY, firstR, targeY, scaleX, scaleY, time, delayed, func) {
                target.alpha = 0;
                if (firstY) {
                    target.y = firstY;
                }
                target.rotation = firstR;
                Laya.Tween.to(target, { y: targeY, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.move_Deform_Y = move_Deform_Y;
            function blink_FadeOut_v(target, minAlpha, maXalpha, time, delayed, func) {
                target.alpha = minAlpha;
                Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, function () {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.blink_FadeOut_v = blink_FadeOut_v;
            function blink_FadeOut(target, minAlpha, maXalpha, time, delayed, func) {
                target.alpha = minAlpha;
                if (!delayed) {
                    delayed = 0;
                }
                Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }), 0);
                }), delayed);
            }
            Animation2D.blink_FadeOut = blink_FadeOut;
            function shookHead_Simple(target, rotate, time, delayed, func) {
                let firstR = target.rotation;
                Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { rotation: firstR - rotate * 2 }, time, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(target, { rotation: firstR }, time, null, Laya.Handler.create(this, function () {
                                if (func) {
                                    func();
                                }
                            }), 0);
                        }), 0);
                    }), 0);
                }), delayed ? delayed : 0);
            }
            Animation2D.shookHead_Simple = shookHead_Simple;
            function HintAni_01(target, upNum, time1, stopTime, downNum, time2, func) {
                target.alpha = 0;
                Laya.Tween.to(target, { alpha: 1, y: target.y - upNum }, time1, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(target, { y: target.y - 15 }, stopTime, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(target, { alpha: 0, y: target.y + upNum + downNum }, time2, null, Laya.Handler.create(this, function () {
                            if (func !== null) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), 0);
            }
            Animation2D.HintAni_01 = HintAni_01;
            function scale_Alpha(target, fAlpha, fScaleX, fScaleY, eScaleX, eScaleY, eAlpha, time, delayed, func, ease) {
                if (!delayed) {
                    delayed = 0;
                }
                if (!delayed) {
                    ease = null;
                }
                target.alpha = fAlpha;
                target.scaleX = fScaleX;
                target.scaleY = fScaleY;
                Laya.Tween.to(target, { scaleX: eScaleX, scaleY: eScaleY, alpha: eAlpha }, time, ease, Laya.Handler.create(this, function () {
                    if (func) {
                        func();
                    }
                }), delayed);
            }
            Animation2D.scale_Alpha = scale_Alpha;
            function rotate_Magnify_KickBack(node, eAngle, eScale, time1, time2, delayed1, delayed2, func) {
                node.alpha = 0;
                node.scaleX = 0;
                node.scaleY = 0;
                Laya.Tween.to(node, { alpha: 1, rotation: 360 + eAngle, scaleX: 1 + eScale, scaleY: 1 + eScale }, time1, null, Laya.Handler.create(this, function () {
                    Laya.Tween.to(node, { rotation: 360 - eAngle / 2, scaleX: 1 + eScale / 2, scaleY: 1 + eScale / 2 }, time2, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(node, { rotation: 360 + eAngle / 3, scaleX: 1 + eScale / 5, scaleY: 1 + eScale / 5 }, time2, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(node, { rotation: 360, scaleX: 1, scaleY: 1 }, time2, null, Laya.Handler.create(this, function () {
                                node.rotation = 0;
                                if (func !== null) {
                                    func();
                                }
                            }), 0);
                        }), delayed2);
                    }), 0);
                }), delayed1);
            }
            Animation2D.rotate_Magnify_KickBack = rotate_Magnify_KickBack;
        })(Animation2D = lwg.Animation2D || (lwg.Animation2D = {}));
        let Setting;
        (function (Setting) {
            Setting._sound = {
                get switch() {
                    return Laya.LocalStorage.getItem('Setting_sound') == '0' ? false : true;
                },
                set switch(value) {
                    let val;
                    if (value) {
                        val = 1;
                    }
                    else {
                        val = 0;
                    }
                    Laya.LocalStorage.setItem('Setting_sound', val.toString());
                }
            };
            Setting._bgMusic = {
                get switch() {
                    return Laya.LocalStorage.getItem('Setting_bgMusic') == '0' ? false : true;
                },
                set switch(value) {
                    let val;
                    if (value) {
                        val = 1;
                        Laya.LocalStorage.setItem('Setting_bgMusic', val.toString());
                        PalyAudio.playMusic();
                    }
                    else {
                        val = 0;
                        Laya.LocalStorage.setItem('Setting_bgMusic', val.toString());
                        PalyAudio.stopMusic();
                    }
                }
            };
            Setting._shake = {
                get switch() {
                    return Laya.LocalStorage.getItem('Setting_shake') == '0' ? false : true;
                },
                set switch(value) {
                    let val;
                    if (value) {
                        val = 1;
                    }
                    else {
                        val = 0;
                    }
                    Laya.LocalStorage.setItem('Setting_shake', val.toString());
                }
            };
            function createSetBtn(x, y, width, height, skin, parent, ZOder) {
                let btn = new Laya.Image;
                btn.width = width ? width : 100;
                btn.height = width ? width : 100;
                btn.skin = skin ? skin : 'Frame/UI/icon_set.png';
                if (parent) {
                    parent.addChild(btn);
                }
                else {
                    Laya.stage.addChild(btn);
                }
                btn.pivotX = btn.width / 2;
                btn.pivotY = btn.height / 2;
                btn.x = x;
                btn.y = y;
                btn.zOrder = ZOder ? ZOder : 100;
                var btnSetUp = function (e) {
                    e.stopPropagation();
                    Admin._openScene(Admin._SceneName.Set);
                };
                Click._on(Click._Type.largen, btn, null, null, btnSetUp, null);
                Setting.BtnSetNode = btn;
                Setting.BtnSetNode.name = 'BtnSetNode';
                return btn;
            }
            Setting.createSetBtn = createSetBtn;
            function setBtnAppear(delayed, x, y) {
                if (!Setting.BtnSetNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Setting.BtnSetNode, 0, 1, 1, 1, 1, 1, delayed, 0, f => {
                        Setting.BtnSetNode.visible = true;
                    });
                }
                else {
                    Setting.BtnSetNode.visible = true;
                }
                if (x) {
                    Setting.BtnSetNode.x = x;
                }
                if (y) {
                    Setting.BtnSetNode.y = y;
                }
            }
            Setting.setBtnAppear = setBtnAppear;
            function setBtnVinish(delayed) {
                if (!Setting.BtnSetNode) {
                    return;
                }
                if (delayed) {
                    Animation2D.scale_Alpha(Setting.BtnSetNode, 1, 1, 1, 1, 1, 0, delayed, 0, f => {
                        Setting.BtnSetNode.visible = false;
                    });
                }
                else {
                    Setting.BtnSetNode.visible = false;
                }
            }
            Setting.setBtnVinish = setBtnVinish;
        })(Setting = lwg.Setting || (lwg.Setting = {}));
        let PalyAudio;
        (function (PalyAudio) {
            let voiceUrl;
            (function (voiceUrl) {
                voiceUrl["btn"] = "Frame/Voice/btn.wav";
                voiceUrl["bgm"] = "Frame/Voice/bgm.mp3";
                voiceUrl["victory"] = "Frame/Voice/guoguan.wav";
                voiceUrl["defeated"] = "Frame/Voice/wancheng.wav";
                voiceUrl["huodejinbi"] = "Frame/Voice/huodejinbi.wav";
            })(voiceUrl = PalyAudio.voiceUrl || (PalyAudio.voiceUrl = {}));
            function playSound(url, number, func) {
                if (!url) {
                    url = voiceUrl.btn;
                }
                if (!number) {
                    number = 1;
                }
                if (Setting._sound.switch) {
                    Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }));
                }
            }
            PalyAudio.playSound = playSound;
            function playDefeatedSound(url, number, func) {
                if (!url) {
                    url = voiceUrl.defeated;
                }
                if (!number) {
                    number = 1;
                }
                if (Setting._sound.switch) {
                    Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }));
                }
            }
            PalyAudio.playDefeatedSound = playDefeatedSound;
            function playVictorySound(url, number, func) {
                if (!url) {
                    url = voiceUrl.victory;
                }
                if (!number) {
                    number = 1;
                }
                if (Setting._sound.switch) {
                    Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, function () {
                        if (func) {
                            func();
                        }
                    }));
                }
            }
            PalyAudio.playVictorySound = playVictorySound;
            function playMusic(url, number, delayed) {
                if (!url) {
                    url = voiceUrl.bgm;
                }
                if (!number) {
                    number = 0;
                }
                if (!delayed) {
                    delayed = 0;
                }
                if (Setting._bgMusic.switch) {
                    Laya.SoundManager.playMusic(url, number, Laya.Handler.create(this, function () { }), delayed);
                }
            }
            PalyAudio.playMusic = playMusic;
            function stopMusic() {
                Laya.SoundManager.stopMusic();
            }
            PalyAudio.stopMusic = stopMusic;
        })(PalyAudio = lwg.PalyAudio || (lwg.PalyAudio = {}));
        let Tools;
        (function (Tools) {
            function color_RGBtoHexString(r, g, b) {
                return '#' + ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
            }
            Tools.color_RGBtoHexString = color_RGBtoHexString;
            function format_FormatNumber(crc, fixNum = 0) {
                let textTemp;
                if (crc >= 1e27) {
                    textTemp = (crc / 1e27).toFixed(fixNum) + "ae";
                }
                else if (crc >= 1e24) {
                    textTemp = (crc / 1e24).toFixed(fixNum) + "ad";
                }
                else if (crc >= 1e21) {
                    textTemp = (crc / 1e21).toFixed(fixNum) + "ac";
                }
                else if (crc >= 1e18) {
                    textTemp = (crc / 1e18).toFixed(fixNum) + "ab";
                }
                else if (crc >= 1e15) {
                    textTemp = (crc / 1e15).toFixed(fixNum) + "aa";
                }
                else if (crc >= 1e12) {
                    textTemp = (crc / 1e12).toFixed(fixNum) + "t";
                }
                else if (crc >= 1e9) {
                    textTemp = (crc / 1e9).toFixed(fixNum) + "b";
                }
                else if (crc >= 1e6) {
                    textTemp = (crc / 1e6).toFixed(fixNum) + "m";
                }
                else if (crc >= 1e3) {
                    textTemp = (crc / 1e3).toFixed(fixNum) + "k";
                }
                else {
                    textTemp = Math.round(crc).toString();
                }
                return textTemp;
            }
            Tools.format_FormatNumber = format_FormatNumber;
            function format_StrAddNum(str, num) {
                return (Number(str) + num).toString();
            }
            Tools.format_StrAddNum = format_StrAddNum;
            function format_NumAddStr(num, str) {
                return Number(str) + num;
            }
            Tools.format_NumAddStr = format_NumAddStr;
            let Node;
            (function (Node) {
                function zOrderByY(sp, zOrder, along) {
                    let arr = [];
                    if (sp.numChildren == 0) {
                        return arr;
                    }
                    ;
                    for (let index = 0; index < sp.numChildren; index++) {
                        const element = sp.getChildAt(index);
                        arr.push(element);
                    }
                    Tools.objArrPropertySort(arr, 'y');
                    if (zOrder) {
                        for (let index = 0; index < arr.length; index++) {
                            const element = arr[index];
                            element['zOrder'] = index;
                        }
                    }
                    if (along) {
                        let arr0 = [];
                        for (let index = arr.length - 1; index >= 0; index--) {
                            const element = arr[index];
                            console.log(element);
                            element['zOrder'] = arr.length - index;
                            arr0.push(element);
                        }
                        return arr0;
                    }
                    else {
                        return arr;
                    }
                }
                Node.zOrderByY = zOrderByY;
                function changePovit(sp, _pivotX, _pivotY, int) {
                    let originalPovitX = sp.pivotX;
                    let originalPovitY = sp.pivotY;
                    if (int) {
                        _pivotX = Math.round(_pivotX);
                        _pivotY = Math.round(_pivotY);
                    }
                    if (sp.width) {
                        sp.pivot(_pivotX, _pivotY);
                        sp.x += (sp.pivotX - originalPovitX);
                        sp.y += (sp.pivotY - originalPovitY);
                    }
                }
                Node.changePovit = changePovit;
                function getChildArrByProperty(node, property, value) {
                    let childArr = [];
                    for (let index = 0; index < node.numChildren; index++) {
                        const element = node.getChildAt(index);
                        if (element[property] == value) {
                            childArr.push(element);
                        }
                    }
                    return childArr;
                }
                Node.getChildArrByProperty = getChildArrByProperty;
                function randomChildren(node, num) {
                    let childArr = [];
                    let indexArr = [];
                    for (let i = 0; i < node.numChildren; i++) {
                        indexArr.push(i);
                    }
                    let randomIndex = Tools.arrayRandomGetOut(indexArr, num);
                    for (let j = 0; j < randomIndex.length; j++) {
                        childArr.push(node.getChildAt(randomIndex[j]));
                    }
                    return childArr;
                }
                Node.randomChildren = randomChildren;
                function removeAllChildren(node) {
                    if (node.numChildren > 0) {
                        node.removeChildren(0, node.numChildren - 1);
                    }
                }
                Node.removeAllChildren = removeAllChildren;
                function removeOneChildren(node, nodeName) {
                    for (let index = 0; index < node.numChildren; index++) {
                        const element = node.getChildAt(index);
                        if (element.name == nodeName) {
                            element.removeSelf();
                        }
                    }
                }
                Node.removeOneChildren = removeOneChildren;
                function checkChildren(node, nodeName) {
                    let bool = false;
                    for (let index = 0; index < node.numChildren; index++) {
                        const element = node.getChildAt(index);
                        if (element.name == nodeName) {
                            bool = true;
                        }
                    }
                    return bool;
                }
                Node.checkChildren = checkChildren;
                function showExcludedChild2D(node, childNameArr, bool) {
                    for (let i = 0; i < node.numChildren; i++) {
                        let Child = node.getChildAt(i);
                        for (let j = 0; j < childNameArr.length; j++) {
                            if (Child.name == childNameArr[j]) {
                                if (bool || bool == undefined) {
                                    Child.visible = true;
                                }
                                else {
                                    Child.visible = false;
                                }
                            }
                            else {
                                if (bool || bool == undefined) {
                                    Child.visible = false;
                                }
                                else {
                                    Child.visible = true;
                                }
                            }
                        }
                    }
                }
                Node.showExcludedChild2D = showExcludedChild2D;
                function showExcludedChild3D(node, childNameArr, bool) {
                    for (let i = 0; i < node.numChildren; i++) {
                        let Child = node.getChildAt(i);
                        for (let j = 0; j < childNameArr.length; j++) {
                            if (Child.name == childNameArr[j]) {
                                if (bool || bool == undefined) {
                                    Child.active = true;
                                }
                                else {
                                    Child.active = false;
                                }
                            }
                            else {
                                if (bool || bool == undefined) {
                                    Child.active = false;
                                }
                                else {
                                    Child.active = true;
                                }
                            }
                        }
                    }
                }
                Node.showExcludedChild3D = showExcludedChild3D;
                function prefabCreate(prefab, name) {
                    let sp = Laya.Pool.getItemByCreateFun(name ? name : prefab.json['props']['name'], prefab.create, prefab);
                    return sp;
                }
                Node.prefabCreate = prefabCreate;
                function childrenVisible2D(node, bool) {
                    for (let index = 0; index < node.numChildren; index++) {
                        const element = node.getChildAt(index);
                        if (bool) {
                            element.visible = true;
                        }
                        else {
                            element.visible = false;
                        }
                    }
                }
                Node.childrenVisible2D = childrenVisible2D;
                function childrenVisible3D(node, bool) {
                    for (let index = 0; index < node.numChildren; index++) {
                        const element = node.getChildAt(index);
                        if (bool) {
                            element.active = true;
                        }
                        else {
                            element.active = false;
                        }
                    }
                }
                Node.childrenVisible3D = childrenVisible3D;
                function findChild3D(parent, name) {
                    var item = null;
                    item = parent.getChildByName(name);
                    if (item != null)
                        return item;
                    var go = null;
                    for (var i = 0; i < parent.numChildren; i++) {
                        go = findChild3D(parent.getChildAt(i), name);
                        if (go != null)
                            return go;
                    }
                    return null;
                }
                Node.findChild3D = findChild3D;
                function findChild2D(parent, name) {
                    var item = null;
                    item = parent.getChildByName(name);
                    if (item != null)
                        return item;
                    var go = null;
                    for (var i = 0; i < parent.numChildren; i++) {
                        go = findChild2D(parent.getChildAt(i), name);
                        if (go != null)
                            return go;
                    }
                    return null;
                }
                Node.findChild2D = findChild2D;
                function findChildByName2D(parent, name) {
                    let arr = [];
                    return arr;
                }
                Node.findChildByName2D = findChildByName2D;
            })(Node = Tools.Node || (Tools.Node = {}));
            function randomOneHalf() {
                let number;
                number = Math.floor(Math.random() * 2);
                return number;
            }
            Tools.randomOneHalf = randomOneHalf;
            function randomOneInt(section1, section2) {
                if (section2) {
                    return Math.floor(Math.random() * (section2 - section1)) + section1;
                }
                else {
                    return Math.floor(Math.random() * section1);
                }
            }
            Tools.randomOneInt = randomOneInt;
            function randomCountNumer(section1, section2, count, intSet) {
                let arr = [];
                if (!count) {
                    count = 1;
                }
                if (section2) {
                    while (count > arr.length) {
                        let num;
                        if (intSet || intSet == undefined) {
                            num = Math.floor(Math.random() * (section2 - section1)) + section1;
                        }
                        else {
                            num = Math.random() * (section2 - section1) + section1;
                        }
                        arr.push(num);
                        Tools.arrayUnique_01(arr);
                    }
                    ;
                    return arr;
                }
                else {
                    while (count > arr.length) {
                        let num;
                        if (intSet || intSet == undefined) {
                            num = Math.floor(Math.random() * section1);
                        }
                        else {
                            num = Math.random() * section1;
                        }
                        arr.push(num);
                        Tools.arrayUnique_01(arr);
                    }
                    return arr;
                }
            }
            Tools.randomCountNumer = randomCountNumer;
            function randomOneNumber(section1, section2, intSet) {
                let chage;
                if (section1 > section2) {
                    chage = section1;
                    section1 = section2;
                    section2 = chage;
                }
                if (section2) {
                    let num;
                    if (intSet) {
                        num = Math.floor(Math.random() * (section2 - section1)) + section1;
                    }
                    else {
                        num = Math.random() * (section2 - section1) + section1;
                    }
                    return num;
                }
                else {
                    let num;
                    if (intSet) {
                        num = Math.floor(Math.random() * section1);
                    }
                    else {
                        num = Math.random() * section1;
                    }
                    return num;
                }
            }
            Tools.randomOneNumber = randomOneNumber;
            function d2_twoObjectsLen(obj1, obj2) {
                let point = new Laya.Point(obj1.x, obj1.y);
                let len = point.distance(obj2.x, obj2.y);
                return len;
            }
            Tools.d2_twoObjectsLen = d2_twoObjectsLen;
            function d2_Vector_Angle(x, y) {
                let radian = Math.atan2(x, y);
                let angle = 90 - radian * (180 / Math.PI);
                if (angle <= 0) {
                    angle = 270 + (90 + angle);
                }
                return angle - 90;
            }
            Tools.d2_Vector_Angle = d2_Vector_Angle;
            ;
            function d2_angle_Vector(angle) {
                let radian = (90 - angle) / (180 / Math.PI);
                let p = new Laya.Point(Math.sin(radian), Math.cos(radian));
                p.normalize();
                return p;
            }
            Tools.d2_angle_Vector = d2_angle_Vector;
            ;
            function d3_twoObjectsLen(obj1, obj2) {
                let obj1V3 = obj1.transform.position;
                let obj2V3 = obj2.transform.position;
                let p = new Laya.Vector3();
                Laya.Vector3.subtract(obj1V3, obj2V3, p);
                let lenp = Laya.Vector3.scalarLength(p);
                return lenp;
            }
            Tools.d3_twoObjectsLen = d3_twoObjectsLen;
            function d3_twoPositionLen(v1, v2) {
                let p = d3_twoSubV3(v1, v2);
                let lenp = Laya.Vector3.scalarLength(p);
                return lenp;
            }
            Tools.d3_twoPositionLen = d3_twoPositionLen;
            function d3_twoSubV3(V3_01, V3_02, normalizing) {
                let p = new Laya.Vector3();
                Laya.Vector3.subtract(V3_01, V3_02, p);
                if (normalizing) {
                    let p1 = new Laya.Vector3();
                    Laya.Vector3.normalize(p, p1);
                    return p1;
                }
                else {
                    return p;
                }
            }
            Tools.d3_twoSubV3 = d3_twoSubV3;
            function d3_maximumDistanceLimi(originV3, obj, length) {
                let subP = new Laya.Vector3();
                let objP = obj.transform.position;
                Laya.Vector3.subtract(objP, originV3, subP);
                let lenP = Laya.Vector3.scalarLength(subP);
                if (lenP >= length) {
                    let normalizP = new Laya.Vector3();
                    Laya.Vector3.normalize(subP, normalizP);
                    let x = originV3.x + normalizP.x * length;
                    let y = originV3.y + normalizP.y * length;
                    let z = originV3.z + normalizP.z * length;
                    let p = new Laya.Vector3(x, y, z);
                    obj.transform.position = p;
                    return p;
                }
            }
            Tools.d3_maximumDistanceLimi = d3_maximumDistanceLimi;
            function d3_rayScanning(camera, scene3D, vector2, filtrateName) {
                let _ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
                let outs = new Array();
                camera.viewportPointToRay(vector2, _ray);
                scene3D.physicsSimulation.rayCastAll(_ray, outs);
                if (outs.length != 0 && filtrateName) {
                    let outsChaild = null;
                    for (var i = 0; i < outs.length; i++) {
                        let hitResult = outs[i].collider.owner;
                        if (hitResult.name === filtrateName) {
                            outsChaild = outs[i];
                        }
                    }
                    return outsChaild;
                }
                else {
                    return outs;
                }
            }
            Tools.d3_rayScanning = d3_rayScanning;
            function d3_TransitionScreenPointfor(v3, camera) {
                let ScreenV4 = new Laya.Vector4();
                camera.viewport.project(v3, camera.projectionViewMatrix, ScreenV4);
                let point = new Laya.Vector2();
                point.x = ScreenV4.x;
                point.y = ScreenV4.y;
                return point;
            }
            Tools.d3_TransitionScreenPointfor = d3_TransitionScreenPointfor;
            function d3_animatorPlay(Sp3D, aniName, normalizedTime, layerIndex) {
                let sp3DAni = Sp3D.getComponent(Laya.Animator);
                if (!sp3DAni) {
                    console.log(Sp3D.name, '没有动画组件');
                    return;
                }
                if (!layerIndex) {
                    layerIndex = 0;
                }
                sp3DAni.play(aniName, layerIndex, normalizedTime);
                return sp3DAni;
            }
            Tools.d3_animatorPlay = d3_animatorPlay;
            function dAll_reverseVector(type, Vecoter1, Vecoter2, normalizing) {
                let p;
                if (type === '2d') {
                    p = new Laya.Point(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y);
                    if (normalizing) {
                        p.normalize();
                    }
                    return p;
                }
                else if (type === '3d') {
                    p = new Laya.Vector3(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y, Vecoter1.z - Vecoter2.z);
                    if (normalizing) {
                        let returnP = new Laya.Vector3();
                        Laya.Vector3.normalize(p, returnP);
                        return returnP;
                    }
                    else {
                        return p;
                    }
                }
            }
            Tools.dAll_reverseVector = dAll_reverseVector;
            function sk_indexControl(sk, name) {
                sk.play(name, true);
                sk.player.currentTime = 15 * 1000 / sk.player.cacheFrameRate;
            }
            Tools.sk_indexControl = sk_indexControl;
            let Draw;
            (function (Draw) {
                function drawPieMask(parent, startAngle, endAngle) {
                    parent.cacheAs = "bitmap";
                    let drawPieSpt = new Laya.Sprite();
                    drawPieSpt.blendMode = "destination-out";
                    parent.addChild(drawPieSpt);
                    let drawPie = drawPieSpt.graphics.drawPie(parent.width / 2, parent.height / 2, parent.width / 2 + 10, startAngle, endAngle, "#000000");
                    return drawPie;
                }
                Draw.drawPieMask = drawPieMask;
                function reverseRoundMask(node, x, y, radius, eliminate) {
                    if (eliminate == undefined || eliminate == true) {
                        Node.removeAllChildren(node);
                    }
                    let interactionArea = new Laya.Sprite();
                    interactionArea.name = 'reverseRoundMask';
                    interactionArea.blendMode = "destination-out";
                    node.cacheAs = "bitmap";
                    node.addChild(interactionArea);
                    interactionArea.graphics.drawCircle(0, 0, radius, "#000000");
                    interactionArea.pos(x, y);
                    return interactionArea;
                }
                Draw.reverseRoundMask = reverseRoundMask;
                function reverseRoundrectMask(node, x, y, width, height, round, eliminate) {
                    if (eliminate == undefined || eliminate == true) {
                        Node.removeAllChildren(node);
                    }
                    let interactionArea = new Laya.Sprite();
                    interactionArea.name = 'reverseRoundrectMask';
                    interactionArea.blendMode = "destination-out";
                    node.cacheAs = "bitmap";
                    node.addChild(interactionArea);
                    interactionArea.graphics.drawPath(0, 0, [["moveTo", 5, 0], ["lineTo", width - round, 0], ["arcTo", width, 0, width, round, round], ["lineTo", width, height - round], ["arcTo", width, height, width - round, height, round], ["lineTo", height - round, height], ["arcTo", 0, height, 0, height - round, round], ["lineTo", 0, round], ["arcTo", 0, 0, round, 0, round], ["closePath"]], { fillStyle: "#000000" });
                    interactionArea.width = width;
                    interactionArea.height = height;
                    interactionArea.pivotX = width / 2;
                    interactionArea.pivotY = height / 2;
                    interactionArea.pos(x, y);
                }
                Draw.reverseRoundrectMask = reverseRoundrectMask;
            })(Draw = Tools.Draw || (Tools.Draw = {}));
            function objArrPropertySort(array, property) {
                var compare = function (obj1, obj2) {
                    var val1 = obj1[property];
                    var val2 = obj2[property];
                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    }
                    else if (val1 > val2) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                };
                array.sort(compare);
                return array;
            }
            Tools.objArrPropertySort = objArrPropertySort;
            function objArr2DifferentPropertyObjArr1(objArr1, objArr2, property) {
                var result = [];
                for (var i = 0; i < objArr1.length; i++) {
                    var obj1 = objArr1[i];
                    var obj1Name = obj1[property];
                    var isExist = false;
                    for (var j = 0; j < objArr2.length; j++) {
                        var obj2 = objArr2[j];
                        var obj2Name = obj2[property];
                        if (obj2Name == obj1Name) {
                            isExist = true;
                            break;
                        }
                    }
                    if (!isExist) {
                        result.push(obj1);
                    }
                }
                return result;
            }
            Tools.objArr2DifferentPropertyObjArr1 = objArr2DifferentPropertyObjArr1;
            function objArr1IdenticalPropertyObjArr2(data1, data2, property) {
                var result = [];
                for (var i = 0; i < data1.length; i++) {
                    var obj1 = data1[i];
                    var obj1Name = obj1[property];
                    var isExist = false;
                    for (var j = 0; j < data2.length; j++) {
                        var obj2 = data2[j];
                        var obj2Name = obj2[property];
                        if (obj2Name == name) {
                            isExist = true;
                            break;
                        }
                    }
                    if (isExist) {
                        result.push(obj1);
                    }
                }
                return result;
            }
            Tools.objArr1IdenticalPropertyObjArr2 = objArr1IdenticalPropertyObjArr2;
            function objArrUnique(arr, property) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    for (var j = i + 1, len = arr.length; j < len; j++) {
                        if (arr[i][property] === arr[j][property]) {
                            arr.splice(j, 1);
                            j--;
                            len--;
                        }
                    }
                }
                return arr;
            }
            Tools.objArrUnique = objArrUnique;
            function objArrGetValue(objArr, property) {
                let arr = [];
                for (let i = 0; i < objArr.length; i++) {
                    if (objArr[i][property]) {
                        arr.push(objArr[i][property]);
                    }
                }
                return arr;
            }
            Tools.objArrGetValue = objArrGetValue;
            function objArray_Copy(ObjArray) {
                var sourceCopy = ObjArray instanceof Array ? [] : {};
                for (var item in ObjArray) {
                    sourceCopy[item] = typeof ObjArray[item] === 'object' ? obj_Copy(ObjArray[item]) : ObjArray[item];
                }
                return sourceCopy;
            }
            Tools.objArray_Copy = objArray_Copy;
            function obj_Copy(obj) {
                var objCopy = {};
                for (const item in obj) {
                    if (obj.hasOwnProperty(item)) {
                        const element = obj[item];
                        if (typeof element === 'object') {
                            if (Array.isArray(element)) {
                                let arr1 = array_Copy(element);
                                objCopy[item] = arr1;
                            }
                            else {
                                obj_Copy(element);
                            }
                        }
                        else {
                            objCopy[item] = element;
                        }
                    }
                }
                return objCopy;
            }
            Tools.obj_Copy = obj_Copy;
            function arrayAddToarray(array1, array2) {
                for (let index = 0; index < array2.length; index++) {
                    const element = array2[index];
                    array1.push(element);
                }
                return array1;
            }
            Tools.arrayAddToarray = arrayAddToarray;
            function arrayRandomGetOut(arr, num) {
                if (!num) {
                    num = 1;
                }
                let arrCopy = Tools.array_Copy(arr);
                let arr0 = [];
                if (num > arrCopy.length) {
                    return '数组长度小于取出的数！';
                }
                else {
                    for (let index = 0; index < num; index++) {
                        let ran = Math.round(Math.random() * (arrCopy.length - 1));
                        let a1 = arrCopy[ran];
                        arrCopy.splice(ran, 1);
                        arr0.push(a1);
                    }
                    return arr0;
                }
            }
            Tools.arrayRandomGetOut = arrayRandomGetOut;
            function arrayRandomGetOne(arr) {
                let arrCopy = Tools.array_Copy(arr);
                let ran = Math.round(Math.random() * (arrCopy.length - 1));
                return arrCopy[ran];
            }
            Tools.arrayRandomGetOne = arrayRandomGetOne;
            function array_Copy(arr1) {
                var arr = [];
                for (var i = 0; i < arr1.length; i++) {
                    arr.push(arr1[i]);
                }
                return arr;
            }
            Tools.array_Copy = array_Copy;
            function arrayUnique_01(arr) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    for (var j = i + 1, len = arr.length; j < len; j++) {
                        if (arr[i] === arr[j]) {
                            arr.splice(j, 1);
                            j--;
                            len--;
                        }
                    }
                }
                return arr;
            }
            Tools.arrayUnique_01 = arrayUnique_01;
            function arrayUnique_02(arr) {
                arr = arr.sort();
                var arr1 = [arr[0]];
                for (var i = 1, len = arr.length; i < len; i++) {
                    if (arr[i] !== arr[i - 1]) {
                        arr1.push(arr[i]);
                    }
                }
                return arr1;
            }
            Tools.arrayUnique_02 = arrayUnique_02;
            function arrayUnique_03(arr) {
                return Array.from(new Set(arr));
            }
            Tools.arrayUnique_03 = arrayUnique_03;
            function array1ExcludeArray2(arr1, arr2) {
                let arr1Capy = array_Copy(arr1);
                let arr2Capy = array_Copy(arr2);
                for (let i = 0; i < arr1Capy.length; i++) {
                    for (let j = 0; j < arr2Capy.length; j++) {
                        if (arr1Capy[i] == arr2Capy[j]) {
                            arr1Capy.splice(i, 1);
                            i--;
                        }
                    }
                }
                return arr1Capy;
            }
            Tools.array1ExcludeArray2 = array1ExcludeArray2;
            function array_ExcludeArrays(arrays, exclude) {
                let arr0 = [];
                for (let i = 0; i < arrays.length; i++) {
                    for (let j = 0; j < arrays[i].length; j++) {
                        arr0.push(arrays[i][j]);
                    }
                }
                let arr1 = Tools.array_Copy(arr0);
                let arr2 = Tools.arrayUnique_01(arr1);
                let arrNum = [];
                for (let k = 0; k < arr2.length; k++) {
                    arrNum.push({
                        name: arr2[k],
                        num: 0,
                    });
                }
                for (let l = 0; l < arr0.length; l++) {
                    for (let m = 0; m < arrNum.length; m++) {
                        if (arr0[l] == arrNum[m]['name']) {
                            arrNum[m]['num']++;
                        }
                    }
                }
                let arrAllHave = [];
                let arrDiffHave = [];
                for (let n = 0; n < arrNum.length; n++) {
                    const element = arrNum[n];
                    if (arrNum[n]['num'] == arrays.length) {
                        arrAllHave.push(arrNum[n]['name']);
                    }
                    else {
                        arrDiffHave.push(arrNum[n]['name']);
                    }
                }
                if (!exclude) {
                    return arrAllHave;
                }
                else {
                    return arrDiffHave;
                }
            }
            Tools.array_ExcludeArrays = array_ExcludeArrays;
            let Point;
            (function (Point) {
                function dotRotatePoint(x0, y0, x1, y1, angle) {
                    let x2 = x0 + (x1 - x0) * Math.cos(angle * Math.PI / 180) - (y1 - y0) * Math.sin(angle * Math.PI / 180);
                    let y2 = y0 + (x1 - x0) * Math.sin(angle * Math.PI / 180) + (y1 - y0) * Math.cos(angle * Math.PI / 180);
                    return new Laya.Point(x2, y2);
                }
                Point.dotRotatePoint = dotRotatePoint;
                function SpeedXYByAngle(angle, speed) {
                    if (angle % 90 === 0 || !angle) {
                    }
                    const speedXY = { x: 0, y: 0 };
                    speedXY.x = speed * Math.cos(angle * Math.PI / 180);
                    speedXY.y = speed * Math.sin(angle * Math.PI / 180);
                    return new Laya.Point(speedXY.x, speedXY.y);
                }
                Point.SpeedXYByAngle = SpeedXYByAngle;
                function getRoundPos(angle, radius, centerPos) {
                    var center = centerPos;
                    var radius = radius;
                    var hudu = (2 * Math.PI / 360) * angle;
                    var X = center.x + Math.sin(hudu) * radius;
                    var Y = center.y - Math.cos(hudu) * radius;
                    return new Laya.Point(X, Y);
                }
                Point.getRoundPos = getRoundPos;
                function randomPointByCenter(centerPos, radiusX, radiusY, count) {
                    if (!count) {
                        count = 1;
                    }
                    let arr = [];
                    for (let index = 0; index < count; index++) {
                        let x0 = Tools.randomCountNumer(0, radiusX, 1, false);
                        let y0 = Tools.randomCountNumer(0, radiusY, 1, false);
                        let diffX = Tools.randomOneHalf() == 0 ? x0[0] : -x0[0];
                        let diffY = Tools.randomOneHalf() == 0 ? y0[0] : -y0[0];
                        let p = new Laya.Point(centerPos.x + diffX, centerPos.y + diffY);
                        arr.push(p);
                    }
                    return arr;
                }
                Point.randomPointByCenter = randomPointByCenter;
                function getPArrBetweenTwoP(p1, p2, num) {
                    let arr = [];
                    let x0 = p2.x - p1.x;
                    let y0 = p2.y - p1.y;
                    for (let index = 0; index < num; index++) {
                        arr.push(new Laya.Point(p1.x + (x0 / num) * index, p1.y + (y0 / num) * index));
                    }
                    if (arr.length >= 1) {
                        arr.unshift();
                    }
                    if (arr.length >= 1) {
                        arr.pop();
                    }
                    return arr;
                }
                Point.getPArrBetweenTwoP = getPArrBetweenTwoP;
            })(Point = Tools.Point || (Tools.Point = {}));
            function angle_GetRad(angle) {
                return angle / 180 * Math.PI;
            }
            Tools.angle_GetRad = angle_GetRad;
            function jsonCompare(url, storageName, propertyName) {
                let dataArr;
                try {
                    Laya.LocalStorage.getJSON(storageName);
                }
                catch (error) {
                    dataArr = Laya.loader.getRes(url)['RECORDS'];
                    Laya.LocalStorage.setJSON(storageName, JSON.stringify(dataArr));
                    return dataArr;
                }
                if (Laya.LocalStorage.getJSON(storageName)) {
                    dataArr = JSON.parse(Laya.LocalStorage.getJSON(storageName));
                    console.log(storageName + '从本地缓存中获取到数据,将和文件夹的json文件进行对比');
                    try {
                        let dataArr_0 = Laya.loader.getRes(url)['RECORDS'];
                        if (dataArr_0.length >= dataArr.length) {
                            let diffArray = Tools.objArr2DifferentPropertyObjArr1(dataArr_0, dataArr, propertyName);
                            console.log('两个数据的差值为：', diffArray);
                            Tools.arrayAddToarray(dataArr, diffArray);
                        }
                        else {
                            console.log(storageName + '数据表填写有误，长度不能小于之前的长度');
                        }
                    }
                    catch (error) {
                        console.log(storageName, '数据赋值失败！请检查数据表或者手动赋值！');
                    }
                }
                else {
                    try {
                        dataArr = Laya.loader.getRes(url)['RECORDS'];
                    }
                    catch (error) {
                        console.log(storageName + '数据赋值失败！请检查数据表或者手动赋值！');
                    }
                }
                Laya.LocalStorage.setJSON(storageName, JSON.stringify(dataArr));
                return dataArr;
            }
            Tools.jsonCompare = jsonCompare;
        })(Tools = lwg.Tools || (lwg.Tools = {}));
        let Shop;
        (function (Shop) {
            Shop.goodsClassArr = [];
            Shop.classWarehouse = [];
            Shop._tryName = [];
            Shop.allSkin = [];
            Shop._currentSkin = {
                get name() {
                    return Laya.LocalStorage.getItem('Shop_currentSkin') ? Laya.LocalStorage.getItem('Shop_currentSkin') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Shop_currentSkin', name);
                }
            };
            Shop.allProps = [];
            Shop._currentProp = {
                get name() {
                    return Laya.LocalStorage.getItem('Shop_currentProp') ? Laya.LocalStorage.getItem('Shop_currentProp') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Shop_currentProp', name);
                }
            };
            Shop.allOther = [];
            Shop._currentOther = {
                get name() {
                    return Laya.LocalStorage.getItem('Shop_crrentOther') ? Laya.LocalStorage.getItem('Shop_crrentOther') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Shop_crrentOther', name);
                }
            };
            Shop.useSkinType = [];
            function setUseSkinType() {
                let arr = [];
                try {
                    if (Laya.LocalStorage.getJSON('Shop_useSkinType')) {
                        arr = JSON.parse(Laya.LocalStorage.getJSON('Shop_useSkinType'));
                        Shop.useSkinType = arr !== null ? arr['Shop_useSkinType'] : [];
                        Shop.useSkinType.push(Shop._currentOther.name, Shop._currentProp.name, Shop._currentSkin.name);
                        Shop.useSkinType = Tools.arrayUnique_03(Shop.useSkinType);
                    }
                }
                catch (error) {
                }
                let data = {
                    Shop_useSkinType: Shop.useSkinType,
                };
                Laya.LocalStorage.setJSON('Shop_useSkinType', JSON.stringify(data));
                return Shop.useSkinType.length;
            }
            Shop.setUseSkinType = setUseSkinType;
            function getProperty(goodsClass, name, property) {
                let pro = null;
                let arr = getClassArr(goodsClass);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            Shop.getProperty = getProperty;
            function setProperty(goodsClass, name, property, value) {
                let arr = getClassArr(goodsClass);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                let data = {};
                data[goodsClass] = arr;
                Laya.LocalStorage.setJSON(goodsClass, JSON.stringify(data));
                if (Shop._ShopList) {
                    Shop._ShopList.refresh();
                }
            }
            Shop.setProperty = setProperty;
            function getHaveArr(goodsClass) {
                let arr = getClassArr(goodsClass);
                let arrHave = [];
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element[GoodsProperty.have]) {
                        arrHave.push(element);
                    }
                }
                return arrHave;
            }
            Shop.getHaveArr = getHaveArr;
            function getwayGoldArr(goodsClass, have, excludeCurrent) {
                let arr = getClassArr(goodsClass);
                let arrNoHave = [];
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (have && have !== undefined) {
                        if (element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.gold) {
                            arrNoHave.push(element);
                        }
                    }
                    else if (!have && have !== undefined) {
                        if (!element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.gold) {
                            arrNoHave.push(element);
                        }
                    }
                    else if (have == undefined) {
                        if (element[GoodsProperty.getway] === Getway.gold) {
                            arrNoHave.push(element);
                        }
                    }
                }
                if (excludeCurrent && excludeCurrent !== undefined) {
                    for (let index = 0; index < arrNoHave.length; index++) {
                        const element = arrNoHave[index];
                        if (element[GoodsProperty.name] === get_Current(goodsClass)) {
                            arrNoHave.splice(index, 1);
                            break;
                        }
                    }
                }
                return arrNoHave;
            }
            Shop.getwayGoldArr = getwayGoldArr;
            function getwayIneedwinArr(goodsClass, have) {
                let arr = getClassArr(goodsClass);
                let arrIneedwin = [];
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (have && have !== undefined) {
                        if (element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.ineedwin) {
                            arrIneedwin.push(element);
                        }
                    }
                    else if (!have && have !== undefined) {
                        if (!element[GoodsProperty.have] && element[GoodsProperty.getway] === Getway.ineedwin) {
                            arrIneedwin.push(element);
                        }
                    }
                    else if (have == undefined) {
                        if (element[GoodsProperty.getway] === Getway.ineedwin) {
                            arrIneedwin.push(element);
                        }
                    }
                }
                return arrIneedwin;
            }
            Shop.getwayIneedwinArr = getwayIneedwinArr;
            function get_Current(goodsClass) {
                let _current = null;
                switch (goodsClass) {
                    case GoodsClass.Skin:
                        _current = Shop._currentSkin.name;
                        break;
                    case GoodsClass.Props:
                        _current = Shop._currentProp.name;
                        break;
                    case GoodsClass.Other:
                        _current = Shop._currentOther.name;
                        break;
                    default:
                        break;
                }
                return _current;
            }
            Shop.get_Current = get_Current;
            function getClassArr(goodsClass) {
                let arr = [];
                switch (goodsClass) {
                    case GoodsClass.Skin:
                        arr = Shop.allSkin;
                        break;
                    case GoodsClass.Props:
                        arr = Shop.allProps;
                        break;
                    case GoodsClass.Other:
                        arr = Shop.allOther;
                        break;
                    default:
                        break;
                }
                return arr;
            }
            Shop.getClassArr = getClassArr;
            function buyGoods(calssName, name, number) {
                if (!number) {
                    number = 1;
                }
                let resCondition = getProperty(calssName, name, GoodsProperty.resCondition);
                let condition = getProperty(calssName, name, GoodsProperty.condition);
                let have = getProperty(calssName, name, GoodsProperty.have);
                if (have !== true && have !== null) {
                    if (condition <= resCondition + number) {
                        setProperty(calssName, name, GoodsProperty.resCondition, condition);
                        setProperty(calssName, name, GoodsProperty.have, true);
                        if (Shop._ShopList) {
                            Shop._ShopList.refresh();
                        }
                        return true;
                    }
                    else {
                        setProperty(calssName, name, GoodsProperty.resCondition, resCondition + number);
                        if (Shop._ShopList) {
                            Shop._ShopList.refresh();
                        }
                        return false;
                    }
                }
                else {
                    return -1;
                }
            }
            Shop.buyGoods = buyGoods;
            function initShop() {
                Shop.allSkin = Tools.jsonCompare('GameData/Shop/Skin.json', GoodsClass.Skin, GoodsProperty.name);
                Shop.allProps = Tools.jsonCompare('GameData/Shop/Props.json', GoodsClass.Props, GoodsProperty.name);
                Shop.allOther = Tools.jsonCompare('GameData/Shop/Other.json', GoodsClass.Other, GoodsProperty.name);
            }
            Shop.initShop = initShop;
            let GoodsProperty;
            (function (GoodsProperty) {
                GoodsProperty["name"] = "name";
                GoodsProperty["getway"] = "getway";
                GoodsProperty["condition"] = "condition";
                GoodsProperty["resCondition"] = "resCondition";
                GoodsProperty["arrange"] = "arrange";
                GoodsProperty["getOder"] = "getOder";
                GoodsProperty["have"] = "have";
            })(GoodsProperty = Shop.GoodsProperty || (Shop.GoodsProperty = {}));
            let Getway;
            (function (Getway) {
                Getway["free"] = "free";
                Getway["ads"] = "ads";
                Getway["adsXD"] = "adsXD";
                Getway["ineedwin"] = "ineedwin";
                Getway["gold"] = "gold";
                Getway["diamond"] = "diamond";
                Getway["easte_registerg"] = "easte_registerg";
                Getway["other"] = "other";
            })(Getway = Shop.Getway || (Shop.Getway = {}));
            let GoodsClass;
            (function (GoodsClass) {
                GoodsClass["Skin"] = "Shop_Skin";
                GoodsClass["Props"] = "Shop_Props";
                GoodsClass["Other"] = "Shop_Other";
            })(GoodsClass = Shop.GoodsClass || (Shop.GoodsClass = {}));
            let EventType;
            (function (EventType) {
                EventType["select"] = "select";
            })(EventType = Shop.EventType || (Shop.EventType = {}));
            class ShopScene extends Admin._SceneBase {
                moduleOnAwake() {
                    Shop._ShopTap = this.Owner['MyTap'];
                    Shop._ShopList = this.Owner['MyList'];
                    if (!Shop.allSkin) {
                        Shop.allSkin = Tools.jsonCompare('GameData/Shop/Skin.json', GoodsClass.Skin, GoodsProperty.name);
                    }
                    if (!Shop.allProps) {
                        Shop.allProps = Tools.jsonCompare('GameData/Shop/Props.json', GoodsClass.Props, GoodsProperty.name);
                    }
                    if (!Shop.allOther) {
                        Shop.allOther = Tools.jsonCompare('GameData/Shop/Other.json', GoodsClass.Other, GoodsProperty.name);
                    }
                    Shop.goodsClassArr = [Shop.allSkin, Shop.allProps, Shop.allOther];
                    Shop.classWarehouse = [GoodsClass.Skin, GoodsClass.Props, GoodsClass.Skin];
                }
                moduleOnEnable() {
                    this.myList_Create();
                    this.myTap_Create();
                }
                myTap_Create() {
                    Shop._ShopTap.selectHandler = new Laya.Handler(this, this.myTap_Select);
                }
                myTap_Select(index) { }
                myList_Create() {
                    Shop._ShopList.selectEnable = true;
                    Shop._ShopList.selectHandler = new Laya.Handler(this, this.myList_Scelet);
                    Shop._ShopList.renderHandler = new Laya.Handler(this, this.myList_Update);
                    this.myList_refresh();
                }
                myList_Scelet(index) { }
                myList_Update(cell, index) { }
                myList_refresh() {
                    if (Shop._ShopList && Shop.goodsClassArr.length > 0) {
                        Shop._ShopList.array = Shop.goodsClassArr[0];
                        Shop._ShopList.refresh();
                    }
                }
            }
            Shop.ShopScene = ShopScene;
        })(Shop = lwg.Shop || (lwg.Shop = {}));
        let VictoryBox;
        (function (VictoryBox) {
            VictoryBox._BoxArray = [];
            VictoryBox._canOpenNum = 3;
            VictoryBox._alreadyOpenNum = 0;
            VictoryBox._adsMaxOpenNum = 6;
            VictoryBox._openVictoryBoxNum = 0;
            function getProperty(name, property) {
                let pro = null;
                for (let index = 0; index < VictoryBox._BoxArray.length; index++) {
                    const element = VictoryBox._BoxArray[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            VictoryBox.getProperty = getProperty;
            function setProperty(name, property, value) {
                for (let index = 0; index < VictoryBox._BoxArray.length; index++) {
                    const element = VictoryBox._BoxArray[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                if (VictoryBox._BoxList) {
                    VictoryBox._BoxList.refresh();
                }
            }
            VictoryBox.setProperty = setProperty;
            let BoxProperty;
            (function (BoxProperty) {
                BoxProperty["name"] = "name";
                BoxProperty["rewardType"] = "rewardType";
                BoxProperty["rewardNum"] = "rewardNum";
                BoxProperty["openState"] = "openState";
                BoxProperty["ads"] = "ads";
                BoxProperty["select"] = "select";
            })(BoxProperty = VictoryBox.BoxProperty || (VictoryBox.BoxProperty = {}));
            let EventType;
            (function (EventType) {
                EventType["openBox"] = "openBox";
            })(EventType = VictoryBox.EventType || (VictoryBox.EventType = {}));
            class VictoryBoxScene extends Admin._SceneBase {
                moduleOnAwake() {
                    VictoryBox._BoxList = this.Owner['MyList'];
                    VictoryBox._BoxArray = Tools.objArray_Copy(Laya.loader.getRes("GameData/VictoryBox/VictoryBox.json")['RECORDS']);
                    VictoryBox._selectBox = null;
                    VictoryBox._canOpenNum = 3;
                    VictoryBox._openVictoryBoxNum++;
                    VictoryBox._adsMaxOpenNum = 6;
                    VictoryBox._alreadyOpenNum = 0;
                }
                moduleOnEnable() {
                    this.boxList_Create();
                }
                boxList_Create() {
                    VictoryBox._BoxList.selectEnable = true;
                    VictoryBox._BoxList.selectHandler = new Laya.Handler(this, this.boxList_Scelet);
                    VictoryBox._BoxList.renderHandler = new Laya.Handler(this, this.boxList_Update);
                    this.boxList_refresh();
                }
                boxList_Scelet(index) { }
                boxList_Update(cell, index) { }
                boxList_refresh() {
                    if (VictoryBox._BoxList) {
                        VictoryBox._BoxList.array = VictoryBox._BoxArray;
                        VictoryBox._BoxList.refresh();
                    }
                }
            }
            VictoryBox.VictoryBoxScene = VictoryBoxScene;
        })(VictoryBox = lwg.VictoryBox || (lwg.VictoryBox = {}));
        let CheckIn;
        (function (CheckIn) {
            CheckIn._fromWhich = Admin._SceneName.PreLoad;
            CheckIn._lastCheckDate = {
                get date() {
                    return Laya.LocalStorage.getItem('Check_lastCheckDate') ? Number(Laya.LocalStorage.getItem('Check_lastCheckDate')) : -1;
                },
                set date(date) {
                    Laya.LocalStorage.setItem('Check_lastCheckDate', date.toString());
                }
            };
            CheckIn._checkInNum = {
                get number() {
                    return Laya.LocalStorage.getItem('Check_checkInNum') ? Number(Laya.LocalStorage.getItem('Check_checkInNum')) : 0;
                },
                set number(num) {
                    Laya.LocalStorage.setItem('Check_checkInNum', num.toString());
                }
            };
            CheckIn._todayCheckIn = {
                get bool() {
                    return CheckIn._lastCheckDate.date == DateAdmin._date.date ? true : false;
                },
            };
            function getProperty(name, property) {
                let pro = null;
                for (let index = 0; index < CheckIn._checkArray.length; index++) {
                    const element = CheckIn._checkArray[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            CheckIn.getProperty = getProperty;
            function setProperty(className, name, property, value) {
                for (let index = 0; index < CheckIn._checkArray.length; index++) {
                    const element = CheckIn._checkArray[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                let data = {};
                data[className] = CheckIn._checkArray;
                Laya.LocalStorage.setJSON(className, JSON.stringify(data));
                if (CheckIn._checkList) {
                    CheckIn._checkList.refresh();
                }
            }
            CheckIn.setProperty = setProperty;
            function openCheckIn() {
                if (!CheckIn._todayCheckIn.bool) {
                    console.log('没有签到过，弹出签到页面！');
                    Admin._openScene(Admin._SceneName.CheckIn);
                }
                else {
                    if (SkinQualified._adsNum.value < 7) {
                        Admin._openScene(Admin._SceneName.SkinQualified);
                    }
                    console.log('签到过了，今日不可以再签到');
                }
            }
            CheckIn.openCheckIn = openCheckIn;
            function todayCheckIn_7Days() {
                CheckIn._lastCheckDate.date = DateAdmin._date.date;
                CheckIn._checkInNum.number++;
                setProperty(CheckClass.chek_7Days, 'day' + CheckIn._checkInNum.number, CheckProPerty.checkInState, true);
                let rewardNum = getProperty('day' + CheckIn._checkInNum.number, CheckProPerty.rewardNum);
                return rewardNum;
            }
            CheckIn.todayCheckIn_7Days = todayCheckIn_7Days;
            function init() {
                if (CheckIn._checkInNum.number === 7 && !CheckIn._todayCheckIn.bool) {
                    CheckIn._checkInNum.number = 0;
                    Laya.LocalStorage.removeItem(CheckClass.chek_7Days);
                }
            }
            CheckIn.init = init;
            let CheckClass;
            (function (CheckClass) {
                CheckClass["chek_7Days"] = "Chek_7Days";
                CheckClass["chek_15Days"] = "Chek_15Days";
                CheckClass["chek_30Days"] = "Chek_30Days";
            })(CheckClass = CheckIn.CheckClass || (CheckIn.CheckClass = {}));
            let CheckProPerty;
            (function (CheckProPerty) {
                CheckProPerty["name"] = "name";
                CheckProPerty["rewardType"] = "rewardType";
                CheckProPerty["rewardNum"] = "rewardNum";
                CheckProPerty["checkInState"] = "checkInState";
                CheckProPerty["arrange"] = "arrange";
            })(CheckProPerty = CheckIn.CheckProPerty || (CheckIn.CheckProPerty = {}));
            let EventType;
            (function (EventType) {
                EventType["removeCheckBtn"] = "removeCheckBtn";
            })(EventType = CheckIn.EventType || (CheckIn.EventType = {}));
            class CheckInScene extends Admin._SceneBase {
                moduleOnAwake() {
                    CheckIn._checkList = this.Owner['CheckList'];
                    CheckIn._checkArray = Tools.jsonCompare('GameData/CheckIn/CheckIn.json', CheckClass.chek_7Days, CheckProPerty.name);
                }
                moduleOnEnable() {
                    this.checkList_Create();
                }
                moduleEventRegister() {
                }
                checkList_Create() {
                    CheckIn._checkList.selectEnable = true;
                    CheckIn._checkList.selectHandler = new Laya.Handler(this, this.checkList_Scelet);
                    CheckIn._checkList.renderHandler = new Laya.Handler(this, this.checkList_Update);
                    this.checkList_refresh();
                }
                checkList_Scelet(index) { }
                checkList_Update(cell, index) { }
                checkList_refresh() {
                    if (CheckIn._checkList) {
                        CheckIn._checkList.array = CheckIn._checkArray;
                        CheckIn._checkList.refresh();
                    }
                }
            }
            CheckIn.CheckInScene = CheckInScene;
        })(CheckIn = lwg.CheckIn || (lwg.CheckIn = {}));
        let SkinQualified;
        (function (SkinQualified) {
            SkinQualified._adsNum = {
                get value() {
                    return Laya.LocalStorage.getItem('SkinQualified_adsNum') ? Number(Laya.LocalStorage.getItem('SkinQualified_adsNum')) : 0;
                },
                set value(value) {
                    Laya.LocalStorage.setItem('SkinQualified_adsNum', value.toString());
                }
            };
            function openUISkinQualified(fromScene) {
                if (SkinQualified._adsNum.value >= SkinQualified._needAdsNum) {
                    return;
                }
                else {
                    Admin._openScene(Admin._SceneName.SkinQualified);
                    SkinQualified._fromScene = fromScene;
                }
            }
            SkinQualified.openUISkinQualified = openUISkinQualified;
            let EventType;
            (function (EventType) {
                EventType["acquisition"] = "acquisition";
            })(EventType = SkinQualified.EventType || (SkinQualified.EventType = {}));
            class SkinQualifiedScene extends Admin._SceneBase {
                moduleOnEnable() {
                    SkinQualified._needAdsNum = 3;
                }
            }
            SkinQualified.SkinQualifiedScene = SkinQualifiedScene;
        })(SkinQualified = lwg.SkinQualified || (lwg.SkinQualified = {}));
        let Skin;
        (function (Skin) {
            Skin._skinClassArr = [];
            Skin._headSkinArr = [];
            Skin._currentHead = {
                get name() {
                    return Laya.LocalStorage.getItem('Skin_currentHead') ? Laya.LocalStorage.getItem('Skin_currentHead') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Skin_currentHead', name);
                }
            };
            Skin._eyeSkinArr = [];
            Skin._currentEye = {
                get name() {
                    return Laya.LocalStorage.getItem('Skin_currentEye') ? Laya.LocalStorage.getItem('Skin_currentEye') : null;
                },
                set name(name) {
                    Laya.LocalStorage.setItem('Skin_currentEye', name);
                }
            };
            let SkinClass;
            (function (SkinClass) {
                SkinClass["head"] = "head";
                SkinClass["eye"] = "eye";
                SkinClass["body"] = "body";
                SkinClass["upperBody"] = "upperBody";
                SkinClass["lowerBody"] = "lowerBody";
            })(SkinClass = Skin.SkinClass || (Skin.SkinClass = {}));
            let SkinProperty;
            (function (SkinProperty) {
                SkinProperty["name"] = "name";
                SkinProperty["getway"] = "getway";
                SkinProperty["condition"] = "condition";
                SkinProperty["resCondition"] = "resCondition";
                SkinProperty["arrange"] = "arrange";
                SkinProperty["getOder"] = "getOder";
                SkinProperty["classify"] = "classify";
                SkinProperty["have"] = "have";
            })(SkinProperty = Skin.SkinProperty || (Skin.SkinProperty = {}));
            let EventType;
            (function (EventType) {
                EventType["purchase"] = "purchase";
                EventType["select"] = "select";
            })(EventType = Skin.EventType || (Skin.EventType = {}));
            class SkinScene extends Admin._SceneBase {
                moduleOnAwake() {
                    Skin._SkinTap = this.Owner['SkinTap'];
                    Skin._SkinList = this.Owner['SkinList'];
                    Skin._skinClassArr = [Skin._eyeSkinArr, Skin._headSkinArr];
                }
                moduleOnEnable() {
                    this.skinList_Create();
                    this.skinTap_Create();
                }
                skinTap_Create() {
                    Skin._SkinTap.selectHandler = new Laya.Handler(this, this.skinTap_Select);
                }
                skinTap_Select(index) { }
                skinList_Create() {
                    Skin._SkinList.selectEnable = true;
                    Skin._SkinList.selectHandler = new Laya.Handler(this, this.skinList_Scelet);
                    Skin._SkinList.renderHandler = new Laya.Handler(this, this.skinList_Update);
                    this.skinList_refresh();
                }
                skinList_Scelet(index) { }
                skinList_Update(cell, index) { }
                skinList_refresh() {
                    if (Skin._SkinList && Skin._skinClassArr.length > 1) {
                        Skin._SkinList.array = Skin._skinClassArr[0];
                        Skin._SkinList.refresh();
                    }
                }
            }
            Skin.SkinScene = SkinScene;
        })(Skin = lwg.Skin || (lwg.Skin = {}));
        let Easte_registerg;
        (function (Easte_registerg) {
            Easte_registerg._easte_registerg_1Arr = [];
            Easte_registerg._easte_registerg_1 = {
                get value() {
                    if (!Laya.LocalStorage.getItem('_easte_registerg_01')) {
                        return false;
                    }
                    else {
                        return true;
                    }
                },
                set value(val) {
                    Laya.LocalStorage.setItem('_easte_registerg_01', val.toString());
                }
            };
            function initEaste_registerg() {
                Easte_registerg._easte_registerg_1Arr = Tools.jsonCompare("GameData/Easte_registerg/Easte_registerg.json", Classify.Easte_registerg_01, Property.name);
                Laya.loader.getRes("GameData/Easte_registerg/Easte_registerg.json")['RECORDS'];
            }
            Easte_registerg.initEaste_registerg = initEaste_registerg;
            function getProperty(classify, name, property) {
                let pro = null;
                let arr = getClassArr(classify);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        pro = element[property];
                        break;
                    }
                }
                if (pro !== null) {
                    return pro;
                }
                else {
                    console.log(name + '找不到属性:' + property, pro);
                    return null;
                }
            }
            Easte_registerg.getProperty = getProperty;
            function setProperty(classify, name, property, value) {
                let arr = getClassArr(classify);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element['name'] === name) {
                        element[property] = value;
                        break;
                    }
                }
                let data = {};
                data[classify] = arr;
                Laya.LocalStorage.setJSON(classify, JSON.stringify(data));
            }
            Easte_registerg.setProperty = setProperty;
            function getClassArr(classify) {
                let arr = [];
                switch (classify) {
                    case Classify.Easte_registerg_01:
                        arr = Easte_registerg._easte_registerg_1Arr;
                        break;
                    default:
                        break;
                }
                return arr;
            }
            Easte_registerg.getClassArr = getClassArr;
            function doDetection(classify, name, number) {
                if (!number) {
                    number = 0;
                }
                let resCondition = getProperty(classify, name, Property.resCondition);
                let condition = getProperty(classify, name, Property.condition);
                if (!getProperty(classify, name, Property.complete)) {
                    if (condition <= resCondition + number) {
                        setProperty(classify, name, Property.resCondition, condition);
                        setProperty(classify, name, Property.complete, true);
                        console.log(getProperty(classify, name, Property.complete));
                        return true;
                    }
                    else {
                        setProperty(classify, name, Property.resCondition, resCondition + number);
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
            Easte_registerg.doDetection = doDetection;
            function detectAllTasks(classify) {
                let num = 1;
                let arr = getClassArr(classify);
                for (const key in arr) {
                    if (arr.hasOwnProperty(key)) {
                        const element = arr[key];
                        let resCondition = getProperty(classify, element.name, Property.resCondition);
                        let condition = getProperty(classify, element.name, Property.condition);
                        if (condition > resCondition) {
                            num = 0;
                        }
                    }
                }
                if (num == 1) {
                    console.log(classify, '完成了！');
                }
                else {
                    console.log(classify, '没有完成！');
                }
                return num;
            }
            Easte_registerg.detectAllTasks = detectAllTasks;
            let rewardType;
            (function (rewardType) {
                rewardType["gold"] = "gold";
                rewardType["diamond"] = "diamond";
                rewardType["assembly"] = "assembly";
            })(rewardType = Easte_registerg.rewardType || (Easte_registerg.rewardType = {}));
            let Property;
            (function (Property) {
                Property["name"] = "name";
                Property["explain"] = "explain";
                Property["condition"] = "condition";
                Property["resCondition"] = "resCondition";
                Property["complete"] = "complete";
            })(Property = Easte_registerg.Property || (Easte_registerg.Property = {}));
            let Classify;
            (function (Classify) {
                Classify["Easte_registerg_01"] = "Easte_registerg_01";
            })(Classify = Easte_registerg.Classify || (Easte_registerg.Classify = {}));
            let Name;
            (function (Name) {
                Name["assembly_1"] = "assembly_1";
                Name["assembly_2"] = "assembly_2";
                Name["assembly_3"] = "assembly_3";
                Name["assembly_4"] = "assembly_4";
                Name["assembly_5"] = "assembly_5";
            })(Name = Easte_registerg.Name || (Easte_registerg.Name = {}));
            let EventType;
            (function (EventType) {
                EventType["trigger"] = "trigger";
                EventType["easte_registergAds"] = "easte_registergAds";
            })(EventType = Easte_registerg.EventType || (Easte_registerg.EventType = {}));
            class Easte_registergScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                moduleOnEnable() {
                }
                moduleEventRegister() {
                }
            }
            Easte_registerg.Easte_registergScene = Easte_registergScene;
        })(Easte_registerg = lwg.Easte_registerg || (lwg.Easte_registerg = {}));
        let Victory;
        (function (Victory) {
            class VictoryScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                ;
                moduleEventRegister() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Victory.VictoryScene = VictoryScene;
        })(Victory = lwg.Victory || (lwg.Victory = {}));
        let Defeated;
        (function (Defeated) {
            class DefeatedScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                ;
                moduleEventRegister() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Defeated.DefeatedScene = DefeatedScene;
        })(Defeated = lwg.Defeated || (lwg.Defeated = {}));
        let DrawCard;
        (function (DrawCard) {
            DrawCard._freeAds = {
                get num() {
                    return Laya.LocalStorage.getItem('DrawCard_freeAdsNum') ? Number(Laya.LocalStorage.getItem('DrawCard_freeAdsNum')) : 0;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('DrawCard_freeAdsNum', val.toString());
                }
            };
            DrawCard._residueDraw = {
                get num() {
                    return Laya.LocalStorage.getItem('DrawCard_residueDraw') ? Number(Laya.LocalStorage.getItem('DrawCard_residueDraw')) : 2;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('DrawCard_residueDraw', val.toString());
                }
            };
            DrawCard._drawCount = {
                get num() {
                    return Laya.LocalStorage.getItem('DrawCard_drawCount') ? Number(Laya.LocalStorage.getItem('DrawCard_drawCount')) : 0;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('DrawCard_drawCount', val.toString());
                }
            };
            class DrawCardScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                ;
                moduleEventRegister() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            DrawCard.DrawCardScene = DrawCardScene;
        })(DrawCard = lwg.DrawCard || (lwg.DrawCard = {}));
        let Share;
        (function (Share) {
            Share._fromWhich = Admin._SceneName.Victory;
            class ShareScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                ;
                moduleEventRegister() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Share.ShareScene = ShareScene;
        })(Share = lwg.Share || (lwg.Share = {}));
        let PropTry;
        (function (PropTry) {
            class PropTryScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                ;
                moduleEventRegister() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            PropTry.PropTryScene = PropTryScene;
        })(PropTry = lwg.PropTry || (lwg.PropTry = {}));
        let Backpack;
        (function (Backpack) {
            Backpack._prop1 = {
                get num() {
                    return Laya.LocalStorage.getItem('Backpack_prop1') ? Number(Laya.LocalStorage.getItem('Backpack_prop1')) : 1;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('Backpack_prop1', val.toString());
                }
            };
            Backpack._prop2 = {
                get num() {
                    return Laya.LocalStorage.getItem('Backpack_prop2') ? Number(Laya.LocalStorage.getItem('Backpack_prop2')) : 1;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('Backpack_prop2', val.toString());
                }
            };
            Backpack._trophy = {
                get num() {
                    return Laya.LocalStorage.getItem('Backpack_trophy') ? Number(Laya.LocalStorage.getItem('Backpack_trophy')) : 0;
                },
                set num(val) {
                    Laya.LocalStorage.setItem('Backpack_trophy', val.toString());
                }
            };
            Backpack._haveCardArray = {
                get arr() {
                    try {
                        let data = Laya.LocalStorage.getJSON('Backpack_haveCardArray');
                        if (data) {
                            return JSON.parse(data);
                            ;
                        }
                        else {
                            return [];
                        }
                    }
                    catch (error) {
                        return [];
                    }
                },
                set arr(array) {
                    Laya.LocalStorage.setJSON('Backpack_haveCardArray', JSON.stringify(array));
                },
                add(arr1) {
                    let arr0 = Backpack._haveCardArray.arr;
                    for (let index = 0; index < arr1.length; index++) {
                        arr0.push(arr1[index]);
                    }
                    let arr00 = Tools.arrayUnique_01(arr0);
                    Laya.LocalStorage.setJSON('Backpack_haveCardArray', JSON.stringify(arr00));
                    return arr00;
                },
                sub(arr1) {
                    let arr0 = Backpack._haveCardArray.arr;
                    for (let i = 0; i < arr0.length; i++) {
                        for (let j = 0; j < arr1.length; j++) {
                            if (arr0[i] == arr1[j]) {
                                arr0.splice(i, 1);
                                i--;
                            }
                        }
                    }
                    Laya.LocalStorage.setJSON('Backpack_haveCardArray', JSON.stringify(arr0));
                    return arr0;
                }
            };
            Backpack._backpackArray = [];
            class BackpackScene extends Admin._SceneBase {
                moduleOnAwake() {
                }
                ;
                moduleEventRegister() {
                }
                ;
                moduleOnEnable() {
                }
                ;
            }
            Backpack.BackpackScene = BackpackScene;
        })(Backpack = lwg.Backpack || (lwg.Backpack = {}));
        let LwgPreLoad;
        (function (LwgPreLoad) {
            let _scene3D = [];
            let _prefab3D = [];
            let _mesh3D = [];
            let _material = [];
            let _texture = [];
            let _texture2D = [];
            let _pic2D = [];
            let _scene2D = [];
            let _prefab2D = [];
            let _json = [];
            let _skeleton = [];
            LwgPreLoad._sumProgress = 0;
            LwgPreLoad._loadOrder = [];
            LwgPreLoad._loadOrderIndex = 0;
            LwgPreLoad._whereToLoad = Admin._SceneName.PreLoad;
            let _ListName;
            (function (_ListName) {
                _ListName["scene3D"] = "scene3D";
                _ListName["prefab3D"] = "prefab3D";
                _ListName["mesh3D"] = "mesh3D";
                _ListName["material"] = "material";
                _ListName["texture"] = "texture";
                _ListName["texture2D"] = "texture2D";
                _ListName["pic2D"] = "pic2D";
                _ListName["scene2D"] = "scene2D";
                _ListName["prefab2D"] = "prefab2D";
                _ListName["json"] = "json";
                _ListName["skeleton"] = "skeleton";
            })(_ListName = LwgPreLoad._ListName || (LwgPreLoad._ListName = {}));
            LwgPreLoad._currentProgress = {
                get value() {
                    return this['len'] ? this['len'] : 0;
                },
                set value(val) {
                    this['len'] = val;
                    if (this['len'] >= LwgPreLoad._sumProgress) {
                        if (LwgPreLoad._sumProgress == 0) {
                            return;
                        }
                        console.log('当前进度条进度为:', LwgPreLoad._currentProgress.value / LwgPreLoad._sumProgress);
                        console.log('进度条停止！');
                        console.log('所有资源加载完成！此时所有资源可通过例如 Laya.loader.getRes("url")获取');
                        EventAdmin._notify(LwgPreLoad._Event.complete);
                    }
                    else {
                        let number = 0;
                        for (let index = 0; index <= LwgPreLoad._loadOrderIndex; index++) {
                            number += LwgPreLoad._loadOrder[index].length;
                        }
                        if (this['len'] == number) {
                            LwgPreLoad._loadOrderIndex++;
                        }
                        EventAdmin._notify(LwgPreLoad._Event.startLoding);
                    }
                },
            };
            let _Event;
            (function (_Event) {
                _Event["importList"] = "_PreLoad_importList";
                _Event["complete"] = "_PreLoad_complete";
                _Event["startLoding"] = "_PreLoad_startLoding";
                _Event["progress"] = "_PreLoad_progress";
            })(_Event = LwgPreLoad._Event || (LwgPreLoad._Event = {}));
            function _remakeLode() {
                _scene3D = [];
                _prefab3D = [];
                _mesh3D = [];
                _material = [];
                _texture2D = [];
                _pic2D = [];
                _scene2D = [];
                _prefab2D = [];
                _json = [];
                _skeleton = [];
                LwgPreLoad._loadOrder = [];
                LwgPreLoad._sumProgress = 0;
                LwgPreLoad._loadOrderIndex = 0;
                LwgPreLoad._currentProgress.value = 0;
            }
            LwgPreLoad._remakeLode = _remakeLode;
            class _PreLoadScene extends Admin._SceneBase {
                moduleOnAwake() {
                    LwgPreLoad._remakeLode();
                }
                lwgStartLoding(any) {
                    EventAdmin._notify(LwgPreLoad._Event.importList, (any));
                }
                moduleEventRegister() {
                    EventAdmin._register(_Event.importList, this, (listObj) => {
                        for (const key in listObj) {
                            if (Object.prototype.hasOwnProperty.call(listObj, key)) {
                                for (const key1 in listObj[key]) {
                                    if (Object.prototype.hasOwnProperty.call(listObj[key], key1)) {
                                        const element = listObj[key][key1];
                                        switch (key) {
                                            case _ListName.json:
                                                _json.push(element);
                                                break;
                                            case _ListName.material:
                                                _material.push(element);
                                                break;
                                            case _ListName.mesh3D:
                                                _mesh3D.push(element);
                                                break;
                                            case _ListName.pic2D:
                                                _pic2D.push(element);
                                                break;
                                            case _ListName.prefab2D:
                                                _prefab2D.push(element);
                                                break;
                                            case _ListName.prefab3D:
                                                _prefab3D.push(element);
                                                break;
                                            case _ListName.scene2D:
                                                _scene2D.push(element);
                                                break;
                                            case _ListName.scene3D:
                                                _scene3D.push(element);
                                                break;
                                            case _ListName.texture2D:
                                                _texture2D.push(element);
                                                break;
                                            case _ListName.skeleton:
                                                _skeleton.push(element);
                                                break;
                                            case _ListName.texture:
                                                _texture.push(element);
                                                break;
                                            default:
                                                break;
                                        }
                                    }
                                }
                            }
                        }
                        LwgPreLoad._loadOrder = [_pic2D, _scene2D, _prefab2D, _scene3D, _prefab3D, _json, _texture, _texture2D, _mesh3D, _material, _skeleton];
                        for (let index = 0; index < LwgPreLoad._loadOrder.length; index++) {
                            LwgPreLoad._sumProgress += LwgPreLoad._loadOrder[index].length;
                            if (LwgPreLoad._loadOrder[index].length <= 0) {
                                LwgPreLoad._loadOrder.splice(index, 1);
                                index--;
                            }
                        }
                        let time = this.lwgOpenAni();
                        if (time == null) {
                            time = 0;
                        }
                        Laya.timer.once(time, this, () => {
                            EventAdmin._notify(LwgPreLoad._Event.startLoding);
                        });
                    });
                    EventAdmin._register(_Event.startLoding, this, () => { this.startLodingRule(); });
                    EventAdmin._register(_Event.complete, this, () => {
                        let time = this.lwgAllComplete();
                        Laya.timer.once(time, this, () => {
                            this.Owner.name = LwgPreLoad._whereToLoad;
                            Admin._sceneControl[LwgPreLoad._whereToLoad] = this.Owner;
                            if (LwgPreLoad._whereToLoad !== Admin._SceneName.PreLoad) {
                                if (Admin._preLoadOpenSceneLater.openSceneName) {
                                    Admin._openScene(Admin._preLoadOpenSceneLater.openSceneName, Admin._preLoadOpenSceneLater.cloesSceneName, () => {
                                        Admin._preLoadOpenSceneLater.func;
                                        Admin._closeScene(LwgPreLoad._whereToLoad);
                                    }, Admin._preLoadOpenSceneLater.zOrder);
                                }
                            }
                            else {
                                for (const key in Admin._moudel) {
                                    if (Object.prototype.hasOwnProperty.call(Admin._moudel, key)) {
                                        const element = Admin._moudel[key];
                                        if (element['_init']) {
                                            element['_init']();
                                        }
                                        else {
                                            console.log(element, '模块没有初始化函数！');
                                        }
                                    }
                                }
                                PalyAudio.playMusic();
                                Admin._closeScene(LwgPreLoad._whereToLoad, () => {
                                    LwgPreLoad._whereToLoad = Admin._SceneName.PreLoadStep;
                                });
                            }
                        });
                    });
                    EventAdmin._register(_Event.progress, this, () => {
                        LwgPreLoad._currentProgress.value++;
                        if (LwgPreLoad._currentProgress.value < LwgPreLoad._sumProgress) {
                            console.log('当前进度条进度为:', LwgPreLoad._currentProgress.value / LwgPreLoad._sumProgress);
                            this.lwgStepComplete();
                        }
                    });
                }
                moduleOnEnable() {
                    LwgPreLoad._loadOrderIndex = 0;
                }
                startLodingRule() {
                    if (LwgPreLoad._loadOrder.length <= 0) {
                        console.log('没有加载项');
                        EventAdmin._notify(LwgPreLoad._Event.complete);
                        return;
                    }
                    let alreadyPro = 0;
                    for (let i = 0; i < LwgPreLoad._loadOrderIndex; i++) {
                        alreadyPro += LwgPreLoad._loadOrder[i].length;
                    }
                    let index = LwgPreLoad._currentProgress.value - alreadyPro;
                    switch (LwgPreLoad._loadOrder[LwgPreLoad._loadOrderIndex]) {
                        case _pic2D:
                            Laya.loader.load(_pic2D[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX2D资源' + _pic2D[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('2D图片' + _pic2D[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _scene2D:
                            Laya.loader.load(_scene2D[index], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX数据表' + _scene2D[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('2D场景' + _scene2D[index] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }), null, Laya.Loader.JSON);
                            break;
                        case _scene3D:
                            Laya.Scene3D.load(_scene3D[index]['url'], Laya.Handler.create(this, (Scene) => {
                                if (Scene == null) {
                                    console.log('XXXXXXXXXXX3D场景' + _scene3D[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    _scene3D[index]['scene'] = Scene;
                                    console.log('3D场景' + _scene3D[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _prefab3D:
                            Laya.Sprite3D.load(_prefab3D[index]['url'], Laya.Handler.create(this, (Sp) => {
                                if (Sp == null) {
                                    console.log('XXXXXXXXXXX3D预设体' + _prefab3D[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    _prefab3D[index]['prefab'] = Sp;
                                    console.log('3D预制体' + _prefab3D[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _mesh3D:
                            Laya.Mesh.load(_mesh3D[index]['url'], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX3D网格' + _mesh3D[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('3D网格' + _mesh3D[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _texture:
                            Laya.loader.load(_texture[index]['url'], Laya.Handler.create(this, (tex) => {
                                if (tex == null) {
                                    console.log('XXXXXXXXXXX2D纹理' + _texture[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    _texture[index]['texture'] = tex;
                                    console.log('纹理' + _texture[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _texture2D:
                            Laya.Texture2D.load(_texture2D[index]['url'], Laya.Handler.create(this, (tex) => {
                                if (tex == null) {
                                    console.log('XXXXXXXXXXX2D纹理' + _texture2D[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    _texture2D[index]['texture2D'] = tex;
                                    console.log('2D纹理' + _texture2D[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _material:
                            Laya.Material.load(_material[index]['url'], Laya.Handler.create(this, (any) => {
                                if (any == null) {
                                    console.log('XXXXXXXXXXX材质' + _material[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    console.log('材质' + _material[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        case _json:
                            Laya.loader.load(_json[index]['url'], Laya.Handler.create(this, (data) => {
                                if (data == null) {
                                    console.log('XXXXXXXXXXX数据表' + _json[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    _json[index]['data'] = data["RECORDS"];
                                    console.log('数据表' + _json[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }), null, Laya.Loader.JSON);
                            break;
                        case _skeleton:
                            _skeleton[index]['templet'].on(Laya.Event.ERROR, this, () => {
                                console.log('XXXXXXXXXXX骨骼动画' + _skeleton[index] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                EventAdmin._notify(_Event.progress);
                            });
                            _skeleton[index]['templet'].on(Laya.Event.COMPLETE, this, () => {
                                console.log('骨骼动画', _skeleton[index]['templet']['url'], '加载完成！', '数组下标为：', index);
                                EventAdmin._notify(_Event.progress);
                            });
                            _skeleton[index]['templet'].loadAni(_skeleton[index]['url']);
                            break;
                        case _prefab2D:
                            Laya.loader.load(_prefab2D[index]['url'], Laya.Handler.create(this, (prefab) => {
                                if (prefab == null) {
                                    console.log('XXXXXXXXXXX数据表' + _prefab2D[index]['url'] + '加载失败！不会停止加载进程！', '数组下标为：', index, 'XXXXXXXXXXX');
                                }
                                else {
                                    let _prefab = new Laya.Prefab();
                                    _prefab.json = prefab;
                                    _prefab2D[index]['prefab'] = _prefab;
                                    console.log('2D预制体' + _prefab2D[index]['url'] + '加载完成！', '数组下标为：', index);
                                }
                                EventAdmin._notify(_Event.progress);
                            }));
                            break;
                        default:
                            break;
                    }
                }
                lwgStepComplete() { }
                lwgAllComplete() { return 0; }
                ;
            }
            LwgPreLoad._PreLoadScene = _PreLoadScene;
        })(LwgPreLoad = lwg.LwgPreLoad || (lwg.LwgPreLoad = {}));
        let _LwgInit;
        (function (_LwgInit) {
            _LwgInit._pkgStep = 0;
            _LwgInit._pkgInfo = [
                { name: "sp1", root: "res" },
                { name: "sp2", root: "3DScene" },
                { name: "sp3", root: "3DPrefab" },
            ];
            let _Event;
            (function (_Event) {
                _Event["start"] = "_ResPrepare_start";
                _Event["nextStep"] = "_ResPrepare_nextStep";
                _Event["compelet"] = "_ResPrepare_compelet";
            })(_Event = _LwgInit._Event || (_LwgInit._Event = {}));
            function _init() {
                switch (Admin._platform.name) {
                    case Admin._platform.tpye.WeChat:
                        _loadPkg_Wechat();
                        break;
                    case Admin._platform.tpye.OPPO || Admin._platform.tpye.VIVO:
                        _loadPkg_VIVO();
                        break;
                    default:
                        break;
                }
            }
            _LwgInit._init = _init;
            function _loadPkg_VIVO() {
                if (_LwgInit._pkgStep !== _LwgInit._pkgInfo.length) {
                    let info = _LwgInit._pkgInfo[_LwgInit._pkgStep];
                    let name = info.name;
                    Laya.Browser.window.qg.loadSubpackage({
                        name: name,
                        success: (res) => {
                            _LwgInit._pkgStep++;
                            _loadPkg_VIVO();
                        },
                        fail: (res) => {
                            console.error(`load ${name} err: `, res);
                        },
                    });
                }
            }
            _LwgInit._loadPkg_VIVO = _loadPkg_VIVO;
            function _loadPkg_Wechat() {
                if (_LwgInit._pkgStep !== _LwgInit._pkgInfo.length) {
                    let info = _LwgInit._pkgInfo[_LwgInit._pkgStep];
                    let name = info.name;
                    let root = info.root;
                    Laya.Browser.window.wx.loadSubpackage({
                        name: name,
                        success: (res) => {
                            console.log(`load ${name} suc`);
                            Laya.MiniAdpter.subNativeFiles[name] = root;
                            Laya.MiniAdpter.nativefiles.push(root);
                            _LwgInit._pkgStep++;
                            console.log("加载次数", _LwgInit._pkgStep);
                            _loadPkg_Wechat();
                        },
                        fail: (res) => {
                            console.error(`load ${name} err: `, res);
                        },
                    });
                }
            }
            _LwgInit._loadPkg_Wechat = _loadPkg_Wechat;
            class _LwgInitScene extends Admin._SceneBase {
                moduleOnStart() {
                    _init();
                    this.lwgOpenScene(_SceneName.PreLoad, null, () => {
                    });
                }
                ;
            }
            _LwgInit._LwgInitScene = _LwgInitScene;
        })(_LwgInit = lwg._LwgInit || (lwg._LwgInit = {}));
    })(lwg || (lwg = {}));
    var lwg$1 = lwg;
    let Admin = lwg.Admin;
    let _SceneBase = Admin._SceneBase;
    let _SceneName = Admin._SceneName;
    let EventAdmin = lwg.EventAdmin;
    let DateAdmin = lwg.DateAdmin;
    let TimerAdmin = lwg.TimerAdmin;
    let Pause = lwg.Pause;
    let Execution = lwg.Execution;
    let _Gold = lwg.Gold;
    let Setting = lwg.Setting;
    let PalyAudio = lwg.PalyAudio;
    let Click = lwg.Click;
    let Color = lwg.Color;
    let Effects = lwg.Effects;
    let Dialogue = lwg.Dialogue;
    let Animation2D = lwg.Animation2D;
    let Animation3D = lwg.Animation3D;
    let Tools = lwg.Tools;
    let Elect = lwg.Elect;
    let _LwgPreLoad = lwg.LwgPreLoad;
    let _PreLoadScene = lwg.LwgPreLoad._PreLoadScene;
    let _LwgInit = lwg._LwgInit;
    let _LwgInitScene = lwg._LwgInit._LwgInitScene;
    let Shop = lwg.Shop;
    let ShopScene = lwg.Shop.ShopScene;
    let VictoryBox = lwg.VictoryBox;
    let VictoryBoxScene = lwg.VictoryBox.VictoryBoxScene;
    let CheckIn = lwg.CheckIn;
    let CheckInScene = lwg.CheckIn.CheckInScene;
    let SkinQualified = lwg.SkinQualified;
    let SkinXDScene = lwg.SkinQualified.SkinQualifiedScene;
    let Skin = lwg.Skin;
    let SkinScene = lwg.Skin.SkinScene;
    let Easte_registerg = lwg.Easte_registerg;
    let Victory = lwg.Victory;
    let VictoryScene = lwg.Victory.VictoryScene;
    let Defeated = lwg.Defeated;
    let DefeatedScene = lwg.Defeated.DefeatedScene;
    let DrawCard = lwg.DrawCard;
    let DrawCardScene = lwg.DrawCard.DrawCardScene;
    let Share = lwg.Share;
    let ShareScene = lwg.Share.ShareScene;
    let PropTry = lwg.PropTry;
    let PropTryScene = lwg.PropTry.PropTryScene;
    let Backpack = lwg.Backpack;
    let BackpackScene = lwg.Backpack.BackpackScene;

    class _GamePencilItem extends Admin._Object {
        lwgBtnClick() {
        }
    }

    var _Task;
    (function (_Task) {
        _Task._allClassifyArr = [];
        _Task._todayDate = {
            get date() {
                return Laya.LocalStorage.getItem('Task_todayDate') ? Number(Laya.LocalStorage.getItem('Task_todayDate')) : null;
            },
            set date(date) {
                Laya.LocalStorage.setItem('Task_todayDate', date.toString());
            }
        };
        function _getProperty(ClassName, name, property) {
            let pro = null;
            let arr = _getClassArr(ClassName);
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (element['name'] === name) {
                    pro = element[property];
                    break;
                }
            }
            if (pro !== null) {
                return pro;
            }
            else {
                console.log(name + '找不到属性:' + property, pro);
                return null;
            }
        }
        _Task._getProperty = _getProperty;
        function _setProperty(ClassName, name, property, value) {
            let arr = _getClassArr(ClassName);
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (element['name'] === name) {
                    element[property] = value;
                    break;
                }
            }
            let data = {};
            data[ClassName] = arr;
            Laya.LocalStorage.setJSON(ClassName, JSON.stringify(data));
            if (_Task._TaskList) {
                _Task._TaskList.refresh();
            }
        }
        _Task._setProperty = _setProperty;
        function _getClassArr(ClassName) {
            let arr = [];
            switch (ClassName) {
                case _Classify.everyday:
                    arr = _Task._everydayTask;
                    break;
                case _Classify.perpetual:
                    arr = _Task._perpetualTask;
                    break;
                default:
                    break;
            }
            return arr;
        }
        _Task._getClassArr = _getClassArr;
        function _doDetection(calssName, name, number) {
            if (!number) {
                number = 1;
            }
            let resCondition = _Task._getProperty(calssName, name, _Task._Property.resCondition);
            let condition = _Task._getProperty(calssName, name, _Task._Property.condition);
            if (_Task._getProperty(calssName, name, _Task._Property.get) !== -1) {
                if (condition <= resCondition + number) {
                    _Task._setProperty(calssName, name, _Task._Property.resCondition, condition);
                    _Task._setProperty(calssName, name, _Task._Property.get, 1);
                    if (_Task._TaskList) {
                        _Task._TaskList.refresh();
                    }
                    return true;
                }
                else {
                    _Task._setProperty(calssName, name, _Task._Property.resCondition, resCondition + number);
                    if (_Task._TaskList) {
                        _Task._TaskList.refresh();
                    }
                    return false;
                }
            }
            else {
                return -1;
            }
        }
        _Task._doDetection = _doDetection;
        let _Property;
        (function (_Property) {
            _Property["name"] = "name";
            _Property["explain"] = "explain";
            _Property["CompeletType"] = "CompeletType";
            _Property["condition"] = "condition";
            _Property["resCondition"] = "resCondition";
            _Property["rewardType"] = "rewardType";
            _Property["rewardNum"] = "rewardNum";
            _Property["arrange"] = "arrange";
            _Property["time"] = "time";
            _Property["get"] = "get";
        })(_Property = _Task._Property || (_Task._Property = {}));
        let _Classify;
        (function (_Classify) {
            _Classify["everyday"] = "Task_Everyday";
            _Classify["perpetual"] = "Task_Perpetual";
        })(_Classify = _Task._Classify || (_Task._Classify = {}));
        let _Event;
        (function (_Event) {
            _Event["getAward"] = "Task_getAward";
            _Event["adsGetAward_Every"] = "Task_adsGetAward_Every";
            _Event["useSkins"] = "Task_useSkins";
            _Event["victory"] = "Task_victory";
            _Event["adsTime"] = "Task_adsTime";
            _Event["victoryBox"] = "Task_victoryBox";
        })(_Event = _Task._Event || (_Task._Event = {}));
        let _CompeletType;
        (function (_CompeletType) {
            _CompeletType["ads"] = "ads";
            _CompeletType["victory"] = "victory";
            _CompeletType["useSkins"] = "useSkins";
            _CompeletType["treasureBox"] = "treasureBox";
        })(_CompeletType = _Task._CompeletType || (_Task._CompeletType = {}));
        let _Name;
        (function (_Name) {
            _Name["\u89C2\u770B\u5E7F\u544A\u83B7\u5F97\u91D1\u5E01"] = "\u89C2\u770B\u5E7F\u544A\u83B7\u5F97\u91D1\u5E01";
            _Name["\u6BCF\u65E5\u670D\u52A110\u4F4D\u5BA2\u4EBA"] = "\u6BCF\u65E5\u670D\u52A110\u4F4D\u5BA2\u4EBA";
            _Name["\u6BCF\u65E5\u89C2\u770B\u4E24\u4E2A\u5E7F\u544A"] = "\u6BCF\u65E5\u89C2\u770B\u4E24\u4E2A\u5E7F\u544A";
            _Name["\u6BCF\u65E5\u4F7F\u75285\u79CD\u76AE\u80A4"] = "\u6BCF\u65E5\u4F7F\u75285\u79CD\u76AE\u80A4";
            _Name["\u6BCF\u65E5\u5F00\u542F10\u4E2A\u5B9D\u7BB1"] = "\u6BCF\u65E5\u5F00\u542F10\u4E2A\u5B9D\u7BB1";
        })(_Name = _Task._Name || (_Task._Name = {}));
        function _init() {
        }
        _Task._init = _init;
        class _TaskBase extends Admin._SceneBase {
            moduleOnAwake() {
                _Task._allClassifyArr = [_Task._everydayTask];
                _Task._TaskTap = this.Owner['TaskTap'];
                _Task._TaskList = this.Owner['TaskList'];
            }
            moduleOnEnable() {
                this.lwgTapCreate();
                this.lwgListCreate();
            }
            lwgTapCreate() {
                _Task._TaskList.selectHandler = new Laya.Handler(this, this.lwgTapSelect);
            }
            lwgTapSelect(index) { }
            lwgListCreate() {
                _Task._TaskList.selectEnable = true;
                _Task._TaskList.vScrollBarSkin = "";
                _Task._TaskList.selectHandler = new Laya.Handler(this, this.lwgListScelet);
                _Task._TaskList.renderHandler = new Laya.Handler(this, this.lwgListUpdate);
                if (_Task._allClassifyArr[0]) {
                    _Task._TaskList.array = _Task._allClassifyArr[0];
                    this.lwgAddItemComponent();
                }
            }
            lwgListScelet(index) { }
            lwgListUpdate(cell, index) { }
            lwgAddItemComponent() {
                for (let index = 0; index < _Task._TaskList.cells.length; index++) {
                    const element = _Task._TaskList.cells[index];
                    if (!element.getComponent(TaskItem)) {
                        element.addComponent(TaskItem);
                    }
                }
            }
        }
        _Task._TaskBase = _TaskBase;
        class Task extends _Task._TaskBase {
        }
        _Task.Task = Task;
        class TaskItem extends Admin._Object {
        }
        _Task.TaskItem = TaskItem;
    })(_Task || (_Task = {}));
    var _Task$1 = _Task.Task;

    class ADManager {
        static ShowBanner() {
            let p = new TJ.ADS.Param();
            p.place = TJ.ADS.Place.BOTTOM | TJ.ADS.Place.CENTER;
            TJ.ADS.Api.ShowBanner(p);
        }
        static CloseBanner() {
            let p = new TJ.ADS.Param();
            p.place = TJ.ADS.Place.BOTTOM | TJ.ADS.Place.CENTER;
            TJ.ADS.Api.RemoveBanner(p);
        }
        static ShowNormal() {
            TJ.API.AdService.ShowNormal(new TJ.API.AdService.Param());
        }
        static showNormal2() {
            TJ.API.AdService.ShowNormal(new TJ.API.AdService.Param());
        }
        static ShowReward(rewardAction, CDTime = 500) {
            if (Admin._platform.name == Admin._platform.tpye.WebTest || Admin._platform.name == Admin._platform.tpye.OPPOTest || Admin._platform.name == Admin._platform.tpye.Research) {
                rewardAction();
                return;
            }
            if (ADManager.CanShowCD) {
                PalyAudio.stopMusic();
                console.log("?????");
                let p = new TJ.ADS.Param();
                p.extraAd = true;
                let getReward = false;
                p.cbi.Add(TJ.Define.Event.Reward, () => {
                    getReward = true;
                    PalyAudio.playMusic(PalyAudio.voiceUrl.bgm, 0, 1000);
                    if (rewardAction != null) {
                        rewardAction();
                        EventAdmin._notify(_Task._Event.adsTime);
                    }
                });
                p.cbi.Add(TJ.Define.Event.Close, () => {
                    if (!getReward) {
                        PalyAudio.playMusic(PalyAudio.voiceUrl.bgm, 0, 1000);
                        console.log('观看完整广告才能获取奖励哦！');
                        Admin._openScene(_SceneName.AdsHint, null, () => {
                            console.log(Admin._sceneControl['AdsHint']);
                            Admin._sceneControl['AdsHint']['AdsHint'].setCallBack(rewardAction);
                        });
                    }
                });
                p.cbi.Add(TJ.Define.Event.NoAds, () => {
                    PalyAudio.playMusic(PalyAudio.voiceUrl.bgm, 0, 1000);
                    lwg$1.Dialogue.createHint_Middle("暂时没有广告，过会儿再试试吧！");
                });
                TJ.ADS.Api.ShowReward(p);
                ADManager.CanShowCD = false;
                setTimeout(() => {
                    ADManager.CanShowCD = true;
                }, CDTime);
            }
            else {
            }
        }
        static Event(param, value) {
            console.log("Param:>" + param + "Value:>" + value);
            let p = new TJ.GSA.Param();
            if (value == null) {
                p.id = param;
            }
            else {
                p.id = param + value;
            }
            console.log(p.id);
            TJ.GSA.Api.Event(p);
        }
        static initShare() {
            if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.WX_AppRt) {
                this.wx.onShareAppMessage(() => {
                    return {
                        title: this.shareContent,
                        imageUrl: this.shareImgUrl,
                        query: ""
                    };
                });
                this.wx.showShareMenu({
                    withShareTicket: true,
                    success: null,
                    fail: null,
                    complete: null
                });
            }
        }
        static lureShare() {
            if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.WX_AppRt) {
                this.wx.shareAppMessage({
                    title: this.shareContent,
                    imageUrl: this.shareImgUrl,
                    query: ""
                });
            }
        }
        static VibrateShort() {
            if (!Setting._shake.switch) {
                return;
            }
            TJ.API.Vibrate.Short();
        }
        static Vibratelong() {
            if (!Setting._shake.switch) {
                return;
            }
            TJ.API.Vibrate.Long();
        }
        static TAPoint(type, name) {
            let p = new TJ.API.TA.Param();
            p.id = name;
            switch (type) {
                case TaT.BtnShow:
                    TJ.API.TA.Event_Button_Show(p);
                    break;
                case TaT.BtnClick:
                    TJ.API.TA.Event_Button_Click(p);
                    break;
                case TaT.PageShow:
                    TJ.API.TA.Event_Page_Show(p);
                    break;
                case TaT.PageEnter:
                    TJ.API.TA.Event_Page_Enter(p);
                    break;
                case TaT.PageLeave:
                    TJ.API.TA.Event_Page_Leave(p);
                    break;
                case TaT.LevelStart:
                    TJ.API.TA.Event_Level_Start(p);
                    console.log('本关开始打点');
                    break;
                case TaT.LevelFail:
                    TJ.API.TA.Event_Level_Fail(p);
                    console.log('本关失败打点');
                    break;
                case TaT.LevelFinish:
                    TJ.API.TA.Event_Level_Finish(p);
                    console.log('本关胜利打点');
                    break;
            }
        }
    }
    ADManager.CanShowCD = true;
    ADManager.wx = Laya.Browser.window.wx;
    ADManager.shareImgUrl = "http://image.tomatojoy.cn/6847506204006681a5d5fa0cd91ce408";
    ADManager.shareContent = "涂鸦小画手";
    var TaT;
    (function (TaT) {
        TaT[TaT["BtnShow"] = 0] = "BtnShow";
        TaT[TaT["BtnClick"] = 1] = "BtnClick";
        TaT[TaT["PageShow"] = 2] = "PageShow";
        TaT[TaT["PageEnter"] = 3] = "PageEnter";
        TaT[TaT["PageLeave"] = 4] = "PageLeave";
        TaT[TaT["LevelStart"] = 5] = "LevelStart";
        TaT[TaT["LevelFinish"] = 6] = "LevelFinish";
        TaT[TaT["LevelFail"] = 7] = "LevelFail";
    })(TaT || (TaT = {}));

    class RecordManager {
        constructor() {
            this.GRV = null;
            this.isRecordVideoing = false;
            this.isVideoRecord = false;
            this.videoRecordTimer = 0;
            this.isHasVideoRecord = false;
        }
        static Init() {
            RecordManager.grv = new TJ.Platform.AppRt.DevKit.TT.GameRecorderVideo();
        }
        static startAutoRecord() {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            if (RecordManager.grv == null)
                RecordManager.Init();
            if (RecordManager.recording)
                return;
            RecordManager.autoRecording = true;
            console.log("******************开始录屏");
            RecordManager._start();
            RecordManager.lastRecordTime = Date.now();
        }
        static stopAutoRecord() {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            if (!RecordManager.autoRecording) {
                console.log("RecordManager.autoRecording", RecordManager.autoRecording);
                return false;
            }
            RecordManager.autoRecording = false;
            RecordManager._end(false);
            if (Date.now() - RecordManager.lastRecordTime > 6000) {
                return true;
            }
            if (Date.now() - RecordManager.lastRecordTime < 3000) {
                console.log("小于3秒");
                return false;
            }
            return true;
        }
        static startRecord() {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            if (RecordManager.autoRecording) {
                this.stopAutoRecord();
            }
            RecordManager.recording = true;
            RecordManager._start();
            RecordManager.lastRecordTime = Date.now();
        }
        static stopRecord() {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            console.log("time:" + (Date.now() - RecordManager.lastRecordTime));
            if (Date.now() - RecordManager.lastRecordTime <= 3000) {
                return false;
            }
            RecordManager.recording = false;
            RecordManager._end(true);
            return true;
        }
        static _start() {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            console.log("******************180s  ？？？？？");
            RecordManager.grv.Start(180);
        }
        static _end(share) {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            console.log("******************180结束 ？？？？？");
            RecordManager.grv.Stop(share);
        }
        static _share(type, successedAc, completedAc = null, failAc = null) {
            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                return;
            console.log("******************吊起分享 ？？？？？", RecordManager.grv, RecordManager.grv.videoPath);
            if (RecordManager.grv.videoPath) {
                let p = new TJ.Platform.AppRt.Extern.TT.ShareAppMessageParam();
                p.extra.videoTopics = ["涂鸦小画手", "番茄小游戏", "抖音小游戏"];
                p.channel = "video";
                p.success = () => {
                    Dialogue.createHint_Middle("分享成功!");
                    successedAc();
                };
                p.fail = () => {
                    if (type === 'noAward') {
                        Dialogue.createHint_Middle("分享失败！");
                    }
                    else {
                        Dialogue.createHint_Middle("分享成功后才能获取奖励！");
                    }
                    failAc();
                };
                RecordManager.grv.Share(p);
            }
            else {
                Dialogue.createHint_Middle("暂无视频，玩一局游戏之后分享！");
            }
        }
    }
    RecordManager.recording = false;
    RecordManager.autoRecording = false;

    var OldEffects;
    (function (OldEffects) {
        let SkinUrl;
        (function (SkinUrl) {
            SkinUrl[SkinUrl["Frame/Effects/cir_white.png"] = 0] = "Frame/Effects/cir_white.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_blue.png"] = 1] = "Frame/Effects/cir_blue.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_bluish.png"] = 2] = "Frame/Effects/cir_bluish.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_cyan.png"] = 3] = "Frame/Effects/cir_cyan.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_grass.png"] = 4] = "Frame/Effects/cir_grass.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_green.png"] = 5] = "Frame/Effects/cir_green.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_orange.png"] = 6] = "Frame/Effects/cir_orange.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_pink.png"] = 7] = "Frame/Effects/cir_pink.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_purple.png"] = 8] = "Frame/Effects/cir_purple.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_red.png"] = 9] = "Frame/Effects/cir_red.png";
            SkinUrl[SkinUrl["Frame/Effects/cir_yellow.png"] = 10] = "Frame/Effects/cir_yellow.png";
            SkinUrl[SkinUrl["Frame/Effects/star_blue.png"] = 11] = "Frame/Effects/star_blue.png";
            SkinUrl[SkinUrl["Frame/Effects/star_bluish.png"] = 12] = "Frame/Effects/star_bluish.png";
            SkinUrl[SkinUrl["Frame/Effects/star_cyan.png"] = 13] = "Frame/Effects/star_cyan.png";
            SkinUrl[SkinUrl["Frame/Effects/star_grass.png"] = 14] = "Frame/Effects/star_grass.png";
            SkinUrl[SkinUrl["Frame/Effects/star_green.png"] = 15] = "Frame/Effects/star_green.png";
            SkinUrl[SkinUrl["Frame/Effects/star_orange.png"] = 16] = "Frame/Effects/star_orange.png";
            SkinUrl[SkinUrl["Frame/Effects/star_pink.png"] = 17] = "Frame/Effects/star_pink.png";
            SkinUrl[SkinUrl["Frame/Effects/star_purple.png"] = 18] = "Frame/Effects/star_purple.png";
            SkinUrl[SkinUrl["Frame/Effects/star_red.png"] = 19] = "Frame/Effects/star_red.png";
            SkinUrl[SkinUrl["Frame/Effects/star_white.png"] = 20] = "Frame/Effects/star_white.png";
            SkinUrl[SkinUrl["Frame/Effects/star_yellow.png"] = 21] = "Frame/Effects/star_yellow.png";
            SkinUrl[SkinUrl["Frame/Effects/ui_Circular_l_yellow.png"] = 22] = "Frame/Effects/ui_Circular_l_yellow.png";
            SkinUrl[SkinUrl["Frame/UI/ui_square_guang.png"] = 23] = "Frame/UI/ui_square_guang.png";
        })(SkinUrl = OldEffects.SkinUrl || (OldEffects.SkinUrl = {}));
        let SkinStyle;
        (function (SkinStyle) {
            SkinStyle["star"] = "star";
            SkinStyle["dot"] = "dot";
        })(SkinStyle = OldEffects.SkinStyle || (OldEffects.SkinStyle = {}));
        class EffectsBase extends Laya.Script {
            onAwake() {
                this.initProperty();
            }
            onEnable() {
                this.self = this.owner;
                this.selfScene = this.self.scene;
                let calssName = this['__proto__']['constructor'].name;
                this.self[calssName] = this;
                this.timer = 0;
                this.lwgInit();
                this.propertyAssign();
            }
            lwgInit() {
            }
            initProperty() {
            }
            propertyAssign() {
                if (this.startAlpha) {
                    this.self.alpha = this.startAlpha;
                }
                if (this.startScale) {
                    this.self.scale(this.startScale, this.startScale);
                }
                if (this.startRotat) {
                    this.self.rotation = this.startRotat;
                }
            }
            commonSpeedXYByAngle(angle, speed) {
                this.self.x += Tools.Point.SpeedXYByAngle(angle, speed + this.accelerated).x;
                this.self.y += Tools.Point.SpeedXYByAngle(angle, speed + this.accelerated).y;
            }
            moveRules() {
            }
            onUpdate() {
                this.moveRules();
            }
            onDisable() {
                Laya.Pool.recover(this.self.name, this.self);
                this.destroy();
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            }
        }
        OldEffects.EffectsBase = EffectsBase;
        function createCommonExplosion(parent, quantity, x, y, style, speed, continueTime) {
            for (let index = 0; index < quantity; index++) {
                let ele = Laya.Pool.getItemByClass('ele', Laya.Image);
                ele.name = 'ele';
                let num;
                if (style === SkinStyle.star) {
                    num = 10 + Math.floor(Math.random() * 12);
                }
                else if (style === SkinStyle.dot) {
                    num = Math.floor(Math.random() * 12);
                }
                ele.skin = SkinUrl[num];
                ele.alpha = 1;
                parent.addChild(ele);
                ele.pos(x, y);
                let scirpt = ele.addComponent(commonExplosion);
                scirpt.startSpeed = Math.random() * speed;
                scirpt.continueTime = 2 * Math.random() + continueTime;
            }
        }
        OldEffects.createCommonExplosion = createCommonExplosion;
        class commonExplosion extends EffectsBase {
            lwgInit() {
                this.self.width = 25;
                this.self.height = 25;
                this.self.pivotX = this.self.width / 2;
                this.self.pivotY = this.self.height / 2;
            }
            initProperty() {
                this.startAngle = 360 * Math.random();
                this.startSpeed = 5 * Math.random() + 8;
                this.startScale = 0.4 + Math.random() * 0.6;
                this.accelerated = 2;
                this.continueTime = 8 + Math.random() * 10;
                this.rotateDir = Math.floor(Math.random() * 2) === 1 ? 'left' : 'right';
                this.rotateRan = Math.random() * 10;
            }
            moveRules() {
                this.timer++;
                if (this.rotateDir === 'left') {
                    this.self.rotation += this.rotateRan;
                }
                else {
                    this.self.rotation -= this.rotateRan;
                }
                if (this.timer >= this.continueTime / 2) {
                    this.self.alpha -= 0.04;
                    if (this.self.alpha <= 0.65) {
                        this.self.removeSelf();
                    }
                }
                this.commonSpeedXYByAngle(this.startAngle, this.startSpeed + this.accelerated);
                this.accelerated += 0.2;
            }
        }
        OldEffects.commonExplosion = commonExplosion;
        function createExplosion_Rotate(parent, quantity, x, y, style, speed, rotate) {
            for (let index = 0; index < quantity; index++) {
                let ele = Laya.Pool.getItemByClass('ele', Laya.Image);
                ele.name = 'ele';
                let num;
                if (style === SkinStyle.star) {
                    num = 10 + Math.floor(Math.random() * 12);
                }
                else if (style === SkinStyle.dot) {
                    num = Math.floor(Math.random() * 12);
                }
                ele.skin = SkinUrl[num];
                ele.alpha = 1;
                parent.addChild(ele);
                ele.pos(x, y);
                let scirpt = ele.addComponent(Explosion_Rotate);
                scirpt.startSpeed = 2 + Math.random() * speed;
                scirpt.rotateRan = Math.random() * rotate;
            }
        }
        OldEffects.createExplosion_Rotate = createExplosion_Rotate;
        class Explosion_Rotate extends EffectsBase {
            lwgInit() {
                this.self.width = 41;
                this.self.height = 41;
                this.self.pivotX = this.self.width / 2;
                this.self.pivotY = this.self.height / 2;
            }
            initProperty() {
                this.startAngle = 360 * Math.random();
                this.startSpeed = 5 * Math.random() + 8;
                this.startScale = 0.4 + Math.random() * 0.6;
                this.accelerated = 0;
                this.continueTime = 5 + Math.random() * 20;
                this.rotateDir = Math.floor(Math.random() * 2) === 1 ? 'left' : 'right';
                this.rotateRan = Math.random() * 15;
            }
            moveRules() {
                if (this.rotateDir === 'left') {
                    this.self.rotation += this.rotateRan;
                }
                else {
                    this.self.rotation -= this.rotateRan;
                }
                if (this.startSpeed - this.accelerated <= 0.1) {
                    this.self.alpha -= 0.03;
                    if (this.self.alpha <= 0) {
                        this.self.removeSelf();
                    }
                }
                else {
                    this.accelerated += 0.2;
                }
                this.commonSpeedXYByAngle(this.startAngle, this.startSpeed - this.accelerated);
            }
        }
        OldEffects.Explosion_Rotate = Explosion_Rotate;
        function createFireworks(parent, quantity, x, y) {
            for (let index = 0; index < quantity; index++) {
                let ele = Laya.Pool.getItemByClass('fireworks', Laya.Image);
                ele.name = 'fireworks';
                let num = 12 + Math.floor(Math.random() * 11);
                ele.alpha = 1;
                ele.skin = SkinUrl[num];
                parent.addChild(ele);
                ele.pos(x, y);
                let scirpt = ele.getComponent(Fireworks);
                if (!scirpt) {
                    ele.addComponent(Fireworks);
                }
            }
        }
        OldEffects.createFireworks = createFireworks;
        class Fireworks extends EffectsBase {
            lwgInit() {
                this.self.width = 41;
                this.self.height = 41;
                this.self.pivotX = this.self.width / 2;
                this.self.pivotY = this.self.height / 2;
            }
            initProperty() {
                this.startAngle = 360 * Math.random();
                this.startSpeed = 5 * Math.random() + 5;
                this.startScale = 0.4 + Math.random() * 0.6;
                this.accelerated = 0.1;
                this.continueTime = 200 + Math.random() * 10;
            }
            moveRules() {
                this.timer++;
                if (this.timer >= this.continueTime * 3 / 5) {
                    this.self.alpha -= 0.1;
                }
                if (this.timer >= this.continueTime) {
                    this.self.removeSelf();
                }
                else {
                    this.commonSpeedXYByAngle(this.startAngle, this.startSpeed);
                }
                if (this.self.scaleX < 0) {
                    this.self.scaleX += 0.01;
                }
                else if (this.self.scaleX >= this.startScale) {
                    this.self.scaleX -= 0.01;
                }
            }
        }
        OldEffects.Fireworks = Fireworks;
        function createLeftOrRightJet(parent, direction, quantity, x, y) {
            for (let index = 0; index < quantity; index++) {
                let ele = Laya.Pool.getItemByClass('Jet', Laya.Image);
                ele.name = 'Jet';
                let num = 12 + Math.floor(Math.random() * 11);
                ele.skin = SkinUrl[num];
                ele.alpha = 1;
                parent.addChild(ele);
                ele.pos(x, y);
                let scirpt = ele.getComponent(leftOrRightJet);
                if (!scirpt) {
                    ele.addComponent(leftOrRightJet);
                    let scirpt1 = ele.getComponent(leftOrRightJet);
                    scirpt1.direction = direction;
                    scirpt1.initProperty();
                }
                else {
                    scirpt.direction = direction;
                    scirpt.initProperty();
                }
            }
        }
        OldEffects.createLeftOrRightJet = createLeftOrRightJet;
        class leftOrRightJet extends EffectsBase {
            lwgInit() {
                this.self.width = 41;
                this.self.height = 41;
                this.self.pivotX = this.self.width / 2;
                this.self.pivotY = this.self.height / 2;
            }
            initProperty() {
                if (this.direction === 'left') {
                    this.startAngle = 100 * Math.random() - 90 + 45 - 10 - 20;
                }
                else if (this.direction === 'right') {
                    this.startAngle = 100 * Math.random() + 90 + 45 + 20;
                }
                this.startSpeed = 10 * Math.random() + 3;
                this.startScale = 0.4 + Math.random() * 0.6;
                this.accelerated = 0.1;
                this.continueTime = 300 + Math.random() * 50;
                this.randomRotate = 1 + Math.random() * 20;
            }
            moveRules() {
                this.timer++;
                if (this.timer >= this.continueTime * 3 / 5) {
                    this.self.alpha -= 0.1;
                }
                if (this.timer >= this.continueTime) {
                    this.self.removeSelf();
                }
                else {
                    this.commonSpeedXYByAngle(this.startAngle, this.startSpeed);
                }
                this.self.rotation += this.randomRotate;
                if (this.self.scaleX < 0) {
                    this.self.scaleX += 0.01;
                }
                else if (this.self.scaleX >= this.startScale) {
                    this.self.scaleX -= 0.01;
                }
            }
        }
        OldEffects.leftOrRightJet = leftOrRightJet;
    })(OldEffects || (OldEffects = {}));
    var OldEffects$1 = OldEffects;

    var _Compound;
    (function (_Compound) {
        class Compound extends Admin._SceneBase {
            constructor() {
                super(...arguments);
                this.getCompound = {
                    setPro: (p) => {
                        console.log(p);
                        if (p == 1) {
                            this.getCompound.name = _Game._BlinkPencils._randomNoHaveOne();
                            if (this.getCompound.name == null) {
                                this.btnVar('BtnNo').visible = this.btnVar('BtnGet').visible = false;
                                this.btnVar('BtnConfirm').visible = true;
                                this.ImgVar('GetPic').skin = `Game/UI/GameScene/Pencils/Single/${this.getCompound.name}.png`;
                            }
                            else {
                                this.btnVar('BtnNo').visible = this.btnVar('BtnGet').visible = true;
                                this.btnVar('BtnConfirm').visible = false;
                                this.ImgVar('GetPic').skin = `Game/UI/GameScene/Pencils/Blink/${this.getCompound.name}.png`;
                            }
                        }
                        else {
                            this.getCompound.name = _Game._GeneralPencils._randomOne();
                            this.btnVar('BtnNo').visible = this.btnVar('BtnGet').visible = false;
                            this.btnVar('BtnConfirm').visible = true;
                            this.ImgVar('GetPic').skin = `Game/UI/GameScene/Pencils/Single/${this.getCompound.name}.png`;
                        }
                        this['_pro'] = p;
                    },
                    name: null,
                };
            }
            lwgOnAwake() {
                if (_Compound.Skin1 == 'colours') {
                    _Compound.Skin1 = _Game._ColoursPencils._pitchName;
                    this.ImgVar('Pencil1').skin = `Game/UI/GameScene/Pencils/ColoursPencils/${_Compound.Skin1}.png`;
                }
                else {
                    this.ImgVar('Pencil1').skin = `Game/UI/GameScene/Pencils/Single/${_Compound.Skin1}.png`;
                }
                this.ImgVar('Pencil1').sizeGrid = '112,0,17,0';
                if (_Compound.Skin2 == 'colours') {
                    _Compound.Skin2 = _Game._ColoursPencils._pitchName;
                    this.ImgVar('Pencil2').skin = `Game/UI/GameScene/Pencils/ColoursPencils/${_Compound.Skin2}.png`;
                }
                else {
                    this.ImgVar('Pencil2').skin = `Game/UI/GameScene/Pencils/Single/${_Compound.Skin2}.png`;
                }
                this.ImgVar('Pencil2').sizeGrid = '112,0,17,0';
                this.getCompound.setPro(Tools.randomOneHalf());
            }
            lwgOnEnable() {
                _Game._activate = false;
                this.AniVar('ani1').play(0, false);
                this.AniVar('ani1').on(Laya.Event.LABEL, this, () => {
                    OldEffects$1.createFireworks(Laya.stage, 40, 430, 200);
                    OldEffects$1.createFireworks(Laya.stage, 40, 109, 200);
                    OldEffects$1.createLeftOrRightJet(Laya.stage, 'right', 40, 720, 300);
                    OldEffects$1.createLeftOrRightJet(Laya.stage, 'left', 40, 0, 300);
                });
            }
            lwgOpenAni() {
                return 100;
            }
            lwgBtnClick() {
                var close = () => {
                    _Game._activate = true;
                    this.lwgCloseScene();
                };
                Click._on(Click._Type.largen, this.btnVar('BtnConfirm'), this, null, null, (e) => {
                    _Game._GeneralPencils._pitchName = this.getCompound.name;
                    EventAdmin._notify(_Game._Event.turnLeft);
                    close();
                });
                Click._on(Click._Type.largen, this.btnVar('BtnGet'), this, null, null, (e) => {
                    ADManager.ShowReward(() => {
                        EventAdmin._notify(_Game._Event.turnRight);
                        _Game._BlinkPencils._pitchName = this.getCompound.name;
                        _Game._BlinkPencils._addPencil(this.getCompound.name);
                        Dialogue.createHint_Middle(`恭喜获得一只新的闪光画笔！`);
                        close();
                    });
                });
                Click._on(Click._Type.largen, this.btnVar('BtnNo'), this, null, null, (e) => {
                    EventAdmin._notify(_Game._Event.turnLeft);
                    close();
                });
            }
        }
        _Compound.Compound = Compound;
    })(_Compound || (_Compound = {}));
    var _Compound$1 = _Compound.Compound;

    class shieldTime {
    }
    class ShieldScene {
    }
    class ConfigInfo {
    }
    class ipData {
    }
    class IPInfo {
    }
    var ShieldLevel;
    (function (ShieldLevel) {
        ShieldLevel["low"] = "Low";
        ShieldLevel["mid"] = "Mid";
        ShieldLevel["high"] = "High";
    })(ShieldLevel || (ShieldLevel = {}));
    class ZJADMgr {
        constructor() {
            this.tt = Laya.Browser.window.tt;
            this.shieldLevel = ShieldLevel.high;
            this.prk_init = "platform_init";
            this.prk_shareTimes = "platform_shareTimes";
            this.prk_shareTs = "platform_shareTs";
            this.shareItv = 1 * 3600 * 1000;
            this.shareMaxTimes = 5;
            this.shareImgUrl = "http://image.tomatojoy.cn/fkbxs01.jpg";
            this.shareContent = "消灭方块，人人有责！";
            this.shieldArea = false;
            this.shieldUser = false;
            this.shieldVersion = false;
            this.shieldtime = false;
            this.shareTimes = 0;
            this.lastShareTs = 0;
            this.configInited = false;
            this.ipInfoInited = false;
            this.inited = false;
            this.playVideoIndex = 0;
            ZJADMgr.ins = this;
            this.requestInfo();
        }
        async GameCfg() {
            let www = new TJ.Common.WWW("https://h5.tomatojoy.cn/res/" + TJ.API.AppInfo.AppGuid() + "/config/game.json");
            await www.Send();
            if (www.error == null && www.text != null) {
                this.onGameCfgSuccess(www.text);
                return;
            }
            else {
                let www = new TJ.Common.WWW("https://h5.tomatojoy.cn/res/" + TJ.API.AppInfo.AppGuid() + "/config/game.json");
                await www.Send();
                if (www.error == null && www.text != null) {
                    this.onGameCfgSuccess(www.text);
                    return;
                }
                else {
                    let www = new TJ.Common.WWW("https://h5.tomatojoy.cn/res/" + TJ.API.AppInfo.AppGuid() + "/config/game.json");
                    await www.Send();
                    if (www.error == null && www.text != null) {
                        this.onGameCfgSuccess(www.text);
                        return;
                    }
                }
            }
            return null;
        }
        async GetIP() {
            let www = new TJ.Common.WWW("https://api1.tomatojoy.cn/getIp");
            await www.Send();
            if (www.error == null && www.text != null) {
                this.onGetIpSuccess(www.text);
                return;
            }
            else {
                let www = new TJ.Common.WWW("https://api1.tomatojoy.cn/getIp");
                await www.Send();
                if (www.error == null && www.text != null) {
                    this.onGetIpSuccess(www.text);
                    return;
                }
                else {
                    let www = new TJ.Common.WWW("https://api1.tomatojoy.cn/getIp");
                    await www.Send();
                    if (www.error == null && www.text != null) {
                        this.onGetIpSuccess(www.text);
                        return;
                    }
                    else {
                        console.log(www.error);
                    }
                }
            }
            return null;
        }
        onGameCfgSuccess(config) {
            let _configinfo = JSON.parse(config);
            this.configinfo = _configinfo;
            this.configInited = true;
            if (this.ipInfoInited) {
                this.init();
            }
        }
        onGetIpSuccess(ipInfo) {
            let _iPInfo = JSON.parse(ipInfo);
            this.iPInfo = _iPInfo;
            this.ipInfoInited = true;
            if (this.configInited) {
                this.init();
            }
        }
        requestInfo() {
            if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.ZJTD_AppRt) {
                this.GameCfg();
                this.GetIP();
            }
        }
        init() {
            if (this.configinfo.shieldStatus) {
                if (TJ.API.AppInfo.VersionName() == this.configinfo.codeVer)
                    this.shieldVersion = true;
            }
            if (this.iPInfo != null) {
                if (this.iPInfo.code == 200) {
                    let m_cityName = this.iPInfo.data.city;
                    if (this.configinfo.shieldCity != "") {
                        if (this.configinfo.shieldCity == "all") {
                            this.shieldArea = true;
                        }
                        else {
                            this.shieldArea = false;
                            let shieldcities = this.configinfo.shieldCity.split(",");
                            for (var i = 0; i < shieldcities.length; i++) {
                                if (m_cityName.indexOf(shieldcities[i]) >= 0) {
                                    this.shieldArea = true;
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        this.shieldArea = false;
                    }
                }
                else {
                    this.shieldArea = true;
                }
            }
            if (this.configinfo.shieldTime.status) {
                let timeLimit = this.configinfo.shieldTime.time.split("-");
                let date = new Date();
                if (date.getHours() >= Number(timeLimit[0]) && date.getHours() <= Number(timeLimit[1])) {
                    this.shieldtime = true;
                }
                else {
                    this.shieldtime = false;
                }
            }
            else {
                this.shieldtime = false;
            }
            let launchRes = this.tt.getLaunchOptionsSync();
            console.log(launchRes);
            if (this.configinfo.ShieldScene.status) {
                let timeLimit = this.configinfo.ShieldScene.Scene.split("|");
                this.shieldUser = timeLimit.indexOf(launchRes.scene) >= 0;
                console.log(this.shieldUser);
            }
            this.inited = true;
            if (this.onConFigInited != null)
                this.onConFigInited();
            let iswifi = false;
            this.tt.getNetworkType({
                success: (obj) => {
                    if (obj.networkType == "wifi") {
                        if (ZJADMgr.ins.shieldArea) {
                            ZJADMgr.ins.shieldLevel = ShieldLevel.high;
                        }
                        else {
                            ZJADMgr.ins.shieldLevel = ShieldLevel.low;
                        }
                    }
                    else {
                        ZJADMgr.ins.shieldLevel = ShieldLevel.high;
                    }
                    if (ZJADMgr.ins.shieldUser) {
                        ZJADMgr.ins.shieldLevel = ShieldLevel.high;
                    }
                    if (ZJADMgr.ins.shieldVersion) {
                        ZJADMgr.ins.shieldLevel = ShieldLevel.high;
                    }
                    if (ZJADMgr.ins.shieldtime) {
                        ZJADMgr.ins.shieldLevel = ShieldLevel.high;
                    }
                    console.log("--------ZJADMgr.ins.shieldLevel-------");
                    console.log(ZJADMgr.ins.shieldLevel);
                },
                fail: null,
                complete: null
            });
            this.showVideo = this.configinfo.ADPoint;
        }
        CheckPlayVideo() {
            if (!this.inited)
                return false;
            if (this.shieldLevel == ShieldLevel.low) {
                if (this.showVideo[this.playVideoIndex % this.showVideo.length] == '0') {
                    this.playVideoIndex++;
                    return false;
                }
                else {
                    this.playVideoIndex++;
                    return true;
                }
            }
            return false;
        }
    }

    var _PreloadUrl;
    (function (_PreloadUrl) {
        _PreloadUrl._list = {
            prefab2D: {
                LwgGold: {
                    url: 'Prefab/LwgGold.json',
                    prefab: new Laya.Prefab,
                },
                PencilsList: {
                    url: 'Prefab/PencilsList.json',
                    prefab: new Laya.Prefab,
                },
                StepSwitch: {
                    url: 'Prefab/StepSwitch.json',
                    prefab: new Laya.Prefab,
                },
                BtnCompelet: {
                    url: 'Prefab/BtnCompelet.json',
                    prefab: new Laya.Prefab,
                },
                BtnTurnLeft: {
                    url: 'Prefab/BtnTurnLeft.json',
                    prefab: new Laya.Prefab,
                },
                BtnTurnRight: {
                    url: 'Prefab/BtnTurnRight.json',
                    prefab: new Laya.Prefab,
                },
            },
            texture: {
                bishua1: {
                    url: 'Game/UI/GameScene/bishua1.png',
                    texture: new Laya.Texture,
                },
                bishua2: {
                    url: 'Game/UI/GameScene/bishua2.png',
                    texture: new Laya.Texture,
                },
                bishua3: {
                    url: 'Game/UI/GameScene/bishua3.png',
                    texture: new Laya.Texture,
                },
                bishua4: {
                    url: 'Game/UI/GameScene/bishua4.png',
                    texture: new Laya.Texture,
                },
                bishua5: {
                    url: 'Game/UI/GameScene/bishua5.png',
                    texture: new Laya.Texture,
                },
                bishua6: {
                    url: 'Game/UI/GameScene/bishua6.png',
                    texture: new Laya.Texture,
                },
                blink1: {
                    url: 'Game/UI/GameScene/blink1.png',
                    texture: new Laya.Texture,
                },
                blink2: {
                    url: 'Game/UI/GameScene/blink2.png',
                    texture: new Laya.Texture,
                },
                blink3: {
                    url: 'Game/UI/GameScene/blink3.png',
                    texture: new Laya.Texture,
                },
                blink4: {
                    url: 'Game/UI/GameScene/blink4.png',
                    texture: new Laya.Texture,
                },
            },
            scene2D: {
                Start: `Scene/${_SceneName.Start}.json`,
                AdsHint: `Scene/${_SceneName.AdsHint}.json`,
                Special: `Scene/${_SceneName.Special}.json`,
                Victory: `Scene/${_SceneName.Victory}.json`,
                SelectLevel: `Scene/${_SceneName.SelectLevel}.json`,
                Settle: `Scene/${_SceneName.Settle}.json`,
                PropTry: `Scene/${_SceneName.PropTry}.json`,
                PreLoadStep: `Scene/${_SceneName.PreLoadStep}.json`,
                Share: `Scene/${_SceneName.Share}.json`,
                Game_dinglaotai: `Scene/Game_dinglaotai.json`,
                Game_dinglaotou: `Scene/Game_dinglaotou.json`,
                Game_haitun: `Scene/Game_haitun.json`,
                Game_maomaochong: `Scene/Game_maomaochong.json`,
                Game_maotouying: `Scene/Game_maotouying.json`,
                Game_wanshengnangua: `Scene/Game_wanshengnangua.json`,
                Game_wugui: `Scene/Game_wugui.json`,
                Game_xiaohonghua: `Scene/Game_xiaohonghua.json`,
                Game_xiaohuamao: `Scene/Game_xiaohuamao.json`,
                Game_xiaonainiu: `Scene/Game_xiaonainiu.json`,
                Game_xiaoqiche: `Scene/Game_xiaoqiche.json`,
                Game_zhangyugege: `Scene/Game_zhangyugege.json`,
            },
            json: {
                General: {
                    url: "_LwgData" + "/_Game/General" + ".json",
                    data: new Array,
                },
                Colours: {
                    url: "_LwgData" + "/_Game/Colours" + ".json",
                    data: new Array,
                },
                Blink: {
                    url: "_LwgData" + "/_Game/Blink" + ".json",
                    data: new Array,
                },
                SelectLevel1: {
                    url: "_LwgData" + "/_SelectLevel/SelectLevel1" + ".json",
                    data: new Array,
                }
            },
        };
    })(_PreloadUrl || (_PreloadUrl = {}));
    var _PreLoad;
    (function (_PreLoad) {
        class PreLoad extends _LwgPreLoad._PreLoadScene {
            lwgOnStart() {
                ADManager.TAPoint(TaT.PageShow, 'loadpage');
                this.AniVar('ani1').play(0, false);
                this.AniVar('ani1').on(Laya.Event.LABEL, this, () => {
                    EventAdmin._notify(_LwgPreLoad._Event.importList, (_PreloadUrl._list));
                });
            }
            lwgOpenAni() { return 1; }
            lwgStepComplete() {
            }
            lwgAllComplete() {
                return 1000;
            }
            lwgOnDisable() {
                ADManager.TAPoint(TaT.PageLeave, 'loadpage');
            }
        }
        _PreLoad.PreLoad = PreLoad;
    })(_PreLoad || (_PreLoad = {}));

    var _SelectLevel;
    (function (_SelectLevel) {
        class _Data {
            static _getClassifyArr(classify) {
                let _arr = [];
                for (const key in this._arr) {
                    if (Object.prototype.hasOwnProperty.call(this._arr, key)) {
                        const element = this._arr[key];
                        if (element[this._property.classify] == classify) {
                            _arr.push(element);
                        }
                    }
                }
                return _arr;
            }
            ;
            static get _arr() {
                if (!this['_SelectLevel_Data3']) {
                    this['_SelectLevel_Data3'] = Tools.jsonCompare(_PreloadUrl._list.json.SelectLevel1.url, '_SelectLevel_Data3', _Data._property.name);
                }
                return this['_SelectLevel_Data3'];
            }
            ;
            static set _arr(array) {
                this['_SelectLevel_Data3'] = array;
            }
            ;
            static _getUnlockByName(name) {
                let bool;
                for (const key in this._arr) {
                    if (Object.prototype.hasOwnProperty.call(this._arr, key)) {
                        const element = this._arr[key];
                        if (element[this._property.name] == name) {
                            bool = element[this._property.unlock];
                            break;
                        }
                    }
                    return bool;
                }
            }
            ;
            static _getProperty(name, pro) {
                let value;
                for (const key in this._arr) {
                    if (Object.prototype.hasOwnProperty.call(this._arr, key)) {
                        const element = this._arr[key];
                        if (element[this._property.name] == name) {
                            value = element[pro];
                            break;
                        }
                    }
                }
                return value;
            }
            ;
            static _setProperty(name, pro, value) {
                for (const key in this._arr) {
                    if (Object.prototype.hasOwnProperty.call(this._arr, key)) {
                        const element = this._arr[key];
                        if (element[this._property.name] == name) {
                            element[pro] = value;
                            _SelectLevel._MyList.refresh();
                            Laya.LocalStorage.setJSON('_SelectLevel_Data3', JSON.stringify(this._arr));
                            break;
                        }
                    }
                }
                return value;
            }
            ;
            static _setHaveBeenDrawn(imgSkin, name) {
                for (const key in this._arr) {
                    if (Object.prototype.hasOwnProperty.call(this._arr, key)) {
                        const element = this._arr[key];
                        name = name ? name : this._pich.customs;
                        if (element[this._property.name] == name) {
                            element[this._property.haveBeenDrawn] = imgSkin;
                            Laya.LocalStorage.setJSON('_SelectLevel_Data3', JSON.stringify(this._arr));
                        }
                    }
                }
            }
        }
        _Data._property = {
            name: 'name',
            chName: 'chName',
            classify: 'classify',
            unlockWay: 'unlockWay',
            condition: 'condition',
            resCondition: 'resCondition',
            unlock: 'unlock',
            haveBeenDrawn: 'haveBeenDrawn',
        };
        _Data._classify = {
            limit: 'limit',
            animal: 'animal',
            botany: 'botany',
            other: 'other',
        };
        _Data._pich = {
            get classify() {
                return this['_SelectLevel_pichclassify'] ? this['_SelectLevel_pichclassify'] : 'animal';
            },
            set classify(str) {
                if (_SelectLevel._MyList) {
                    _SelectLevel._MyList.array = _Data._getClassifyArr(str);
                    _SelectLevel._MyList.refresh();
                }
                this['_SelectLevel_pichclassify'] = str;
            },
            get customs() {
                return Laya.LocalStorage.getItem('_SelectLevel_pichcustoms') ? Laya.LocalStorage.getItem('_SelectLevel_pichcustoms') : null;
            },
            set customs(str) {
                _SelectLevel._MyList.array = _Data._getClassifyArr(str);
                _SelectLevel._MyList.refresh();
                Laya.LocalStorage.setItem('_SelectLevel_pichcustoms', str.toString());
            }
        };
        _Data._unlockWay = {
            free: 'free',
            gold: 'gold',
            ads: 'ads',
        };
        _SelectLevel._Data = _Data;
        let _Event;
        (function (_Event) {
            _Event["_SelectLevel_Close"] = "_SelectLevel_Close";
        })(_Event = _SelectLevel._Event || (_SelectLevel._Event = {}));
        function _init() {
        }
        _SelectLevel._init = _init;
        class _SelectLevelItem extends Admin._Object {
            lwgOnEnable() {
                ADManager.TAPoint(TaT.BtnShow, 'ADrewardbt_choosecard');
            }
            lwgBtnClick() {
                let BtnContent = this.Owner.getChildByName('Content').getChildByName('BtnContent');
                Click._on(Click._Type.largen, BtnContent, this, null, null, () => {
                    if (!this.owner['_dataSource'][_Data._property.unlock]) {
                        switch (this.owner['_dataSource'][_Data._property.unlockWay]) {
                            case _Data._unlockWay.ads:
                                ADManager.ShowReward(() => {
                                    ADManager.TAPoint(TaT.BtnClick, 'ADrewardbt_choosecard');
                                    _Data._setProperty(this.Owner['_dataSource'][_Data._property.name], _Data._property.unlock, true);
                                });
                                break;
                            case _Data._unlockWay.gold:
                                let num = this.owner['_dataSource'][_Data._property.condition];
                                if (_Gold._num.value >= num) {
                                    _Data._setProperty(this.Owner['_dataSource'][_Data._property.name], _Data._property.unlock, true);
                                    _Gold._num.value -= num;
                                }
                                else {
                                    Dialogue.createHint_Middle('金币不够了！');
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    else {
                        _SelectLevel._Data._pich.customs = this.Owner['_dataSource'][_SelectLevel._Data._property.name];
                        Admin._sceneAnimation.presentAni = Admin._sceneAnimation.type.stickIn.random;
                        this.lwgOpenScene(_SceneName.PropTry, false);
                    }
                    _SelectLevel._MyList.refresh();
                });
            }
        }
        _SelectLevel._SelectLevelItem = _SelectLevelItem;
        class SelectLevelBase extends Admin._SceneBase {
            moduleOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'choosecardpage');
                _SelectLevel._MyList = this.ListVar('MyList');
                _SelectLevel._MyList.array = _Data._getClassifyArr(_Data._pich.classify);
                _SelectLevel._MyList.selectEnable = true;
                _SelectLevel._MyList.vScrollBarSkin = "";
                _SelectLevel._MyList.selectHandler = new Laya.Handler(this, (index) => { });
                _SelectLevel._MyList.renderHandler = new Laya.Handler(this, (cell, index) => {
                    let _dataSource = cell.dataSource;
                    let Content = cell.getChildByName('Content');
                    let BtnContent = Content.getChildByName('BtnContent');
                    let Name = BtnContent.getChildByName('Name');
                    Name.skin = `Game/UI/SelectLevel/Name/${_dataSource[_Data._property.name]}.png`;
                    let Xianlu = Content.getChildByName('Xianlu');
                    let IconPen = Content.getChildByName('IconPen');
                    if (index % 3 == 0) {
                        IconPen.skin = `Game/UI/SelectLevel/IconDress/bi.png`;
                    }
                    else if (index % 2 == 0) {
                        IconPen.skin = `Game/UI/SelectLevel/IconDress/bz.png`;
                    }
                    else {
                        IconPen.skin = `Game/UI/SelectLevel/IconDress/shu.png`;
                    }
                    if (index % 2 !== 0) {
                        Content.pos(27, 8);
                        Xianlu.pos(104, 189);
                        Xianlu.skin = `Game/UI/SelectLevel/xianlu2.png`;
                        IconPen.scaleX = 1;
                        IconPen.pos(350, 180);
                    }
                    else {
                        Content.pos(363, 10);
                        Xianlu.pos(-140, 170);
                        Xianlu.skin = `Game/UI/SelectLevel/xianlu1.png`;
                        IconPen.scaleX = -1;
                        IconPen.pos(-31, 195);
                    }
                    let IconAds = BtnContent.getChildByName('IconAds');
                    let IconLock = BtnContent.getChildByName('IconLock');
                    let GoldNum = BtnContent.getChildByName('GoldNum');
                    let GoldBoard = BtnContent.getChildByName('GoldBoard');
                    if (!_dataSource[_Data._property.unlock]) {
                        switch (_dataSource[_Data._property.unlockWay]) {
                            case _Data._unlockWay.ads:
                                GoldBoard.visible = GoldNum.visible = false;
                                IconAds.visible = true;
                                break;
                            case _Data._unlockWay.free:
                                GoldBoard.visible = GoldNum.visible = false;
                                IconAds.visible = false;
                                break;
                            case _Data._unlockWay.gold:
                                GoldNum.text = _dataSource[_Data._property.condition];
                                GoldBoard.visible = GoldNum.visible = true;
                                IconAds.visible = false;
                                break;
                            default:
                                break;
                        }
                        IconLock.skin = `Game/UI/SelectLevel/suo.png`;
                    }
                    else {
                        IconAds.visible = false;
                        GoldNum.visible = false;
                        GoldBoard.visible = false;
                        IconLock.skin = `Game/UI/SelectLevel/icon_can.png`;
                    }
                    let Board2 = BtnContent.getChildByName('Board2');
                    let Pic = Board2.getChildByName('Pic');
                    if (_dataSource[_Data._property.haveBeenDrawn]) {
                        Pic.skin = _dataSource[_Data._property.haveBeenDrawn];
                        IconLock.visible = false;
                        Board2.skin = `Game/UI/SelectLevel/yuan1.png`;
                    }
                    else {
                        Pic.skin = null;
                        IconLock.visible = true;
                        Board2.skin = `Game/UI/SelectLevel/yuan.png`;
                    }
                    if (index == _SelectLevel._MyList.array.length - 1) {
                        IconPen.visible = Xianlu.visible = false;
                    }
                    else {
                        IconPen.visible = Xianlu.visible = true;
                    }
                    cell.zOrder = index;
                });
            }
        }
        _SelectLevel.SelectLevelBase = SelectLevelBase;
        class SelectLevel extends _SelectLevel.SelectLevelBase {
            lwgOnAwake() {
                console.log(_Data._pich.classify);
                _PropTry._comeFrom = _SceneName.SelectLevel;
                for (let index = 0; index < this.ImgVar('CutBtn').numChildren; index++) {
                    const element = this.ImgVar('CutBtn').getChildAt(index);
                    if (element.name == _Data._pich.classify) {
                        element.y = 11;
                    }
                    else {
                        element.y = 69;
                    }
                }
            }
            lwgAdaptive() {
                this.ImgVar('UiLand').y = Laya.stage.height - 74;
                this.ImgVar('BtnBack').y = Laya.stage.height - 80;
                this.ListVar('MyList').height = Laya.stage.height - 320;
            }
            lwgEventRegister() {
                EventAdmin._register(_Event._SelectLevel_Close, this, () => {
                    this.lwgCloseScene();
                });
            }
            lwgBtnClick() {
                Click._on(Click._Type.largen, this.ImgVar('BtnBack'), this, null, null, () => {
                    this.lwgOpenScene(_SceneName.Start);
                });
                if (_SelectLevel._MyList.cells.length !== 0) {
                    for (let index = 0; index < _SelectLevel._MyList.cells.length; index++) {
                        const element = _SelectLevel._MyList.cells[index];
                        if (!element.getComponent(_SelectLevelItem)) {
                            element.addComponent(_SelectLevelItem);
                        }
                    }
                }
                for (let index = 0; index < this.ImgVar('CutBtn').numChildren; index++) {
                    const element = this.ImgVar('CutBtn').getChildAt(index);
                    if (element.name == _Data._pich.classify) {
                        element.y = 11;
                    }
                    else {
                        element.y = 69;
                    }
                    Click._on(Click._Type.largen, element, this, null, null, (e) => {
                        for (let index = 0; index < this.ImgVar('CutBtn').numChildren; index++) {
                            const Btn = this.ImgVar('CutBtn').getChildAt(index);
                            if (Btn == e.currentTarget) {
                                Btn.y = 35;
                                _Data._pich.classify = Btn.name;
                            }
                            else {
                                Btn.y = 69;
                            }
                        }
                    });
                }
            }
            lwgOnDisable() {
                ADManager.TAPoint(TaT.PageLeave, 'choosecardpage');
            }
        }
        _SelectLevel.SelectLevel = SelectLevel;
    })(_SelectLevel || (_SelectLevel = {}));
    var _SelectLevel$1 = _SelectLevel.SelectLevel;

    var _PropTry;
    (function (_PropTry) {
        _PropTry._presentTry = false;
        _PropTry._comeFrom = _SceneName.SelectLevel;
        function _init() { }
        _PropTry._init = _init;
        let _Event;
        (function (_Event) {
            _Event["_PropTryClose"] = "_PropTryClose";
        })(_Event = _PropTry._Event || (_PropTry._Event = {}));
        class PropTryBase extends Admin._SceneBase {
            moduleOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'skintrypage');
                ADManager.TAPoint(TaT.BtnShow, 'ADrewardbt_skintry');
                if (_PropTry._comeFrom == _SceneName.SelectLevel) {
                    _Game._GeneralPencils._pitchName = _Game._GeneralPencils._data[0][_Game._GeneralPencils._property.name];
                    _Game._ColoursPencils._switch = false;
                }
            }
        }
        _PropTry.PropTryBase = PropTryBase;
        class PropTry extends PropTryBase {
            lwgOnAwake() {
                if (Admin._platform.name == Admin._platform.tpye.Research || Admin._platform.name == Admin._platform.tpye.WebTest) {
                    Tools.Node.showExcludedChild2D(this.ImgVar('Platform'), [Admin._platform.tpye.Bytedance], true);
                    Tools.Node.showExcludedChild2D(this.ImgVar(Admin._platform.tpye.Bytedance), ['High'], true);
                }
                else {
                    Tools.Node.showExcludedChild2D(this.ImgVar('Platform'), [Admin._platform.name], true);
                    if (Admin._platform.name == Admin._platform.tpye.Bytedance) {
                        Tools.Node.showExcludedChild2D(this.ImgVar(Admin._platform.tpye.Bytedance), [ZJADMgr.ins.shieldLevel], true);
                    }
                }
            }
            lwgOnEnable() {
                this.ImgVar('BtnClose').visible = false;
                Laya.timer.once(2000, this, () => {
                    this.ImgVar('BtnClose').visible = true;
                });
            }
            lwgEventRegister() {
                EventAdmin._registerOnce(_Event._PropTryClose, this, () => {
                    if (_PropTry._comeFrom == _SceneName.SelectLevel) {
                        let levelName = _SceneName.Game + '_' + _SelectLevel._Data._pich.customs;
                        this.lwgOpenScene(levelName, true, () => {
                            if (!Admin._sceneControl[levelName].getComponent(_Game.Game)) {
                                Admin._sceneControl[levelName].addComponent(_Game.Game);
                            }
                        });
                        EventAdmin._notify(_SelectLevel._Event._SelectLevel_Close);
                    }
                    else {
                        this.lwgCloseScene();
                    }
                });
            }
            lwgBtnClick() {
                Click._on(Click._Type.noEffect, this.ImgVar('Bytedance_Low_Select'), this, null, null, this.bytedanceSelectUp);
                Click._on(Click._Type.largen, this.ImgVar('Bytedance_Low_BtnGet'), this, null, null, this.bytedanceGetUp);
                Click._on(Click._Type.noEffect, this.ImgVar('Bytedance_Mid_Select'), this, null, null, this.bytedanceSelectUp);
                Click._on(Click._Type.largen, this.ImgVar('Bytedance_Mid_BtnGet'), this, null, null, this.bytedanceGetUp);
                Click._on(Click._Type.noEffect, this.ImgVar('ClickBg'), this, null, null, this.clickBgtUp);
                Click._on(Click._Type.largen, this.ImgVar('Bytedance_High_BtnGet'), this, null, null, this.bytedanceGetUp);
                Click._on(Click._Type.largen, this.ImgVar('Bytedance_High_BtnNo'), this, null, null, (e) => {
                    e.stopPropagation();
                    EventAdmin._notify(_Event._PropTryClose);
                });
                Click._on(Click._Type.largen, this.ImgVar('OPPO_BtnNo'), this, null, null, (e) => {
                    e.stopPropagation();
                    EventAdmin._notify(_Event._PropTryClose);
                });
                Click._on(Click._Type.largen, this.ImgVar('OPPO_BtnGet'), this, null, null, (e) => {
                    e.stopPropagation();
                    this.advFunc();
                });
                Click._on(Click._Type.largen, this.ImgVar('BtnClose'), this, null, null, (e) => {
                    e.stopPropagation();
                    EventAdmin._notify(_Event._PropTryClose);
                });
            }
            clickBgtUp(e) {
                e.stopPropagation();
                if (Admin._platform.name !== Admin._platform.tpye.Bytedance) {
                    return;
                }
                let Dot;
                if (this.ImgVar('Low').visible) {
                    Dot = this.ImgVar('Bytedance_Low_Dot');
                }
                else if (this.ImgVar('Mid').visible) {
                    Dot = this.ImgVar('Bytedance_Mid_Dot');
                }
                if (!Dot) {
                    return;
                }
                if (Dot.visible) {
                    this.advFunc();
                }
                else {
                    EventAdmin._notify(_Event._PropTryClose);
                }
            }
            bytedanceGetUp(e) {
                e.stopPropagation();
                this.advFunc();
            }
            bytedanceSelectUp(e) {
                e.stopPropagation();
                if (this.ImgVar('Low').visible) {
                    if (!this.ImgVar('Low')['count']) {
                        this.ImgVar('Low')['count'] = 0;
                    }
                    this.ImgVar('Low')['count']++;
                    if (this.ImgVar('Low')['count'] >= 4) {
                        if (this.ImgVar('Bytedance_Low_Dot').visible) {
                            this.ImgVar('Bytedance_Low_Dot').visible = false;
                        }
                        else {
                            this.ImgVar('Bytedance_Low_Dot').visible = true;
                        }
                    }
                    if (ZJADMgr.ins.CheckPlayVideo()) {
                        ADManager.ShowReward(null);
                    }
                }
                else if (this.ImgVar('Mid').visible) {
                    if (!this.ImgVar('Mid')['count']) {
                        this.ImgVar('Mid')['count'] = 0;
                    }
                    this.ImgVar('Mid')['count']++;
                    if (this.ImgVar('Mid')['count'] >= 4) {
                        if (this.ImgVar('Bytedance_Mid_Dot').visible) {
                            this.ImgVar('Bytedance_Mid_Dot').visible = false;
                        }
                        else {
                            this.ImgVar('Bytedance_Mid_Dot').visible = true;
                        }
                    }
                }
            }
            advFunc() {
                ADManager.ShowReward(() => {
                    ADManager.TAPoint(TaT.BtnShow, 'ADrewardbt_skintry');
                    _Game._GeneralPencils._pitchName = _Game._GeneralPencils._effectType.colours;
                    _Game._ColoursPencils._switch = true;
                    _Game._ColoursPencils._clickNum = 2;
                    EventAdmin._notify(_Event._PropTryClose);
                });
            }
            onDisable() {
                _Game._activate = true;
                ADManager.TAPoint(TaT.PageLeave, 'skintrypage');
            }
        }
        _PropTry.PropTry = PropTry;
    })(_PropTry || (_PropTry = {}));
    var _PropTry$1 = _PropTry.PropTry;

    class _GameItem extends Admin._Object {
        constructor() {
            super(...arguments);
            this.Compound = {
                Pic: null,
                time: 0,
                restrict: 1,
                Img: null,
                firstPos: null,
                PosArr: null,
                homing: () => {
                    if (this.Compound.Img) {
                        this.Compound.Img.destroy();
                        this.Compound.Img = null;
                        this.Compound.Pic.visible = true;
                    }
                },
                remake: () => {
                    this.Compound.homing();
                    this.Compound.time = 0;
                    _Game._GeneralPencils._compoundName = null;
                    _Game._activate = true;
                }
            };
        }
        lwgOnAwake() {
            this.Compound.Pic = this.Owner.getChildByName('Pic');
        }
        lwgOnStart() {
            var caller = {};
            TimerAdmin._frameLoop(1, caller, () => {
                if (this.Owner['_dataSource']) {
                    Laya.timer.clearAll(caller);
                    Animation2D.bombs_Appear(this.Owner, 0, 1, 1.3, Tools.randomOneHalf() == 1 ? 10 : -10, 300, 150, Math.round(Math.random() * 500) + 800, () => {
                        if (!this.Owner.getComponents(_GameItem)) {
                            !this.Owner.addComponent(_GameItem);
                        }
                        if ((_Game._GeneralPencils._pitchName == this.Owner['_dataSource'][_Game._GeneralPencils._property.name])) {
                            Animation2D.rotate_Scale(this.Owner, 0, 1, 1, 180, 1.2, 1.2, 250, 0, () => {
                                Animation2D.rotate_Scale(this.Owner, 0, 1, 1, 360, 1, 1, 250, 0, () => {
                                    this.Owner.rotation = 0;
                                });
                            });
                        }
                    });
                }
            });
        }
        onStageMouseMove(e) {
            if (this.Owner['_dataSource'] && this.Compound.time > this.Compound.restrict && this.Compound.Img) {
                _Game._activate = false;
                _Game._GeneralPencils._compoundName = this.Owner['_dataSource']['name'];
                this.Compound.Img.visible = true;
                this.Compound.Pic.visible = false;
                this.Compound.Img.pos(e.stageX, e.stageY);
            }
        }
        onStageMouseUp(e) {
            if (this.Owner['_dataSource']) {
                this.Compound.remake();
            }
        }
        lwgBtnClick() {
            Click._on(Click._Type.noEffect, this.Compound.Pic, this, (e) => {
                if (!this.Compound.Img && this.Owner['_dataSource']) {
                    this.Compound.firstPos = new Laya.Point(e.stageX, e.stageY);
                    this.Compound.Img = new Laya.Image;
                    this.OwnerScene.addChild(this.Compound.Img);
                    this.Compound.Img.zOrder = 300;
                    this.Compound.Img.width = this.Compound.Pic.width;
                    this.Compound.Img.height = this.Compound.Pic.height;
                    this.Compound.Img.scale(this.Compound.Pic.scaleX, this.Compound.Pic.scaleY);
                    Tools.Node.changePovit(this.Compound.Img, this.Compound.Img.width / 2, this.Compound.Img.height / 2);
                    this.Compound.Img.skin = this.Compound.Pic.skin;
                    this.Compound.Img.visible = false;
                }
                e.stopPropagation();
            }, (e) => {
                this.Compound.time++;
            }, (e) => {
                console.log('抬起！');
                if (_Game._GeneralPencils._compoundName && _Game._GeneralPencils._compoundName !== this.Owner['_dataSource']['name']) {
                    _Compound.Skin1 = _Game._GeneralPencils._compoundName;
                    _Compound.Skin2 = this.Owner['_dataSource']['name'];
                    this.lwgOpenScene(_SceneName.Compound, false);
                    this.Compound.remake();
                    return;
                }
                ADManager.TAPoint(TaT.BtnClick, `id_${this.Owner['_dataSource']['name']}`);
                let lastName = _Game._GeneralPencils._pitchName;
                _Game._GeneralPencils._pitchName = this.Owner['_dataSource']['name'];
                if (this.Owner['_dataSource']['name'] == 'colours') {
                    if (!_Game._ColoursPencils._switch) {
                        _Game._GeneralPencils._pitchName = lastName;
                        _PropTry._comeFrom = _SceneName.Game;
                        this.lwgOpenScene(_SceneName.PropTry, false);
                        _Game._activate = false;
                        return;
                    }
                    _Game._ColoursPencils._clickNum++;
                    if (_Game._ColoursPencils._clickNum == 1) {
                        EventAdmin._notify(_Game._Event.generalRefresh);
                        return;
                    }
                    for (let index = 0; index < _Game._ColoursPencils._data.length; index++) {
                        const element = _Game._ColoursPencils._data[index];
                        if (_Game._ColoursPencils._pitchName == element[_Game._GeneralPencils._property.name]) {
                            let nameIndex = Number(_Game._ColoursPencils._pitchName.substr(5));
                            if (_Game._ColoursPencils._switch) {
                                if (!nameIndex) {
                                    nameIndex = 1;
                                }
                                nameIndex++;
                                if (nameIndex > 7) {
                                    nameIndex = 1;
                                }
                                _Game._ColoursPencils._pitchName = `caise${nameIndex}`;
                                _Game._ColoursPencils._setPresentColorArr();
                            }
                            EventAdmin._notify(_Game._Event.generalRefresh);
                            return;
                        }
                    }
                }
                else {
                    _Game._ColoursPencils._clickNum = 0;
                }
            }, (e) => {
                e.stopPropagation();
            });
        }
    }

    var _Share;
    (function (_Share) {
        class _Data {
        }
        _Data._photo = {
            _base64: null,
            _width: 400,
            _height: 400,
        };
        _Share._Data = _Data;
        let _Event;
        (function (_Event) {
        })(_Event = _Share._Event || (_Share._Event = {}));
        function _init() {
        }
        _Share._init = _init;
        class ShareBase extends Admin._SceneBase {
            moduleOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'sharepage');
                ADManager.TAPoint(TaT.BtnShow, 'share_share');
            }
        }
        _Share.ShareBase = ShareBase;
        class Share extends _Share.ShareBase {
            lwgOnAwake() {
                this.ImgVar('Photo').width = Laya.stage.width;
                this.ImgVar('Photo').height = Laya.stage.height;
                if (_Data._photo._base64) {
                    this.ImgVar('Photo').skin = _Data._photo._base64;
                    this.ImgVar('Photo').scale(0.8, 0.8);
                }
            }
            lwgBtnClick() {
                var func = () => {
                    EventAdmin._notify(_Game._Event.victory);
                    this.lwgOpenScene(_SceneName.Victory);
                };
                Click._on(Click._Type.noEffect, this.btnVar('BtnShareBg'), this, null, null, () => {
                    RecordManager._share('noAward', () => {
                        ADManager.TAPoint(TaT.BtnClick, 'share_share');
                        func();
                    });
                });
                Click._on(Click._Type.largen, this.btnVar('BtnContinue'), this, null, null, () => {
                    func();
                });
                Click._on(Click._Type.largen, this.btnVar('BtnShare'), this, null, null, () => {
                    RecordManager._share('noAward', () => {
                        ADManager.TAPoint(TaT.BtnClick, 'share_share');
                        func();
                    });
                });
            }
            lwgOnDisable() {
                ADManager.TAPoint(TaT.PageLeave, 'sharepage');
            }
        }
        _Share.Share = Share;
    })(_Share || (_Share = {}));
    var _Share$1 = _Share.Share;

    var _Game;
    (function (_Game) {
        let _Event;
        (function (_Event) {
            _Event["start"] = "_Game_start";
            _Event["showStepBtn"] = "_Game_showStepBtn";
            _Event["lastStep"] = "_Game_lastStep";
            _Event["nextStep"] = "_Game_nextStep";
            _Event["compelet"] = "_Game_compelet";
            _Event["playAni1"] = "_Game_playAni1";
            _Event["playAni2"] = "_Game_playAni2";
            _Event["restoreZOder"] = "_Game_restoreZoder";
            _Event["colseScene"] = "_Game_colseScene";
            _Event["victory"] = "_Game_victory";
            _Event["Photo"] = "_Game_Photo";
            _Event["turnRight"] = "_Game_turnRight";
            _Event["turnLeft"] = "_Game_turnLeft";
            _Event["generalRefresh"] = "_Game_generalRefresh";
        })(_Event = _Game._Event || (_Game._Event = {}));
        let _Animation;
        (function (_Animation) {
            _Animation["action1"] = "action1";
            _Animation["action2"] = "action2";
        })(_Animation = _Game._Animation || (_Game._Animation = {}));
        _Game._stepOrderImg = [];
        _Game._stepMaskIndex = 0;
        _Game._activate = true;
        _Game._stepIndex = {
            get present() {
                return this['presentIndex'] ? this['presentIndex'] : 0;
            },
            set present(val) {
                this['presentIndex'] = val;
                if (this['presentIndex'] > _Game._stepIndex.max) {
                    _Game._stepIndex.max = this['presentIndex'];
                }
            },
            get max() {
                return this['maxIndex'] ? this['maxIndex'] : 0;
            },
            set max(val) {
                this['maxIndex'] = val;
            },
        };
        class _GeneralPencils {
            static _init() {
                this._data = Tools.objArray_Copy(_PreloadUrl._list.json.General.data);
                this._pitchName = this._data[0][this._property.name];
            }
            static get _pitchName() {
                return this['pitchName'] ? this['pitchName'] : this._data[0][this._property.name];
            }
            static set _pitchName(name) {
                for (let index = 0; index < this._data.length; index++) {
                    if (name == this._data[index][this._property.name]) {
                        this._data[index][this._property.pitch] = true;
                        this['pitchName'] = name;
                        this._pitchColor = this._data[index][this._property.color];
                    }
                    else {
                        this._data[index][this._property.pitch] = false;
                    }
                    EventAdmin._notify(_Event.generalRefresh);
                }
            }
            static _randomOne() {
                let name = Tools.arrayRandomGetOne(this._data)['name'];
                if (name == 'colours' || name == 'eraser') {
                    name = this._data[0]['name'];
                }
                return name;
            }
        }
        _GeneralPencils._effectType = {
            general: 'general',
            colours: 'colours',
            blink: 'blink',
            eraser: 'eraser',
        };
        _GeneralPencils._property = {
            _dataSource: '_dataSource',
            index: 'index',
            name: 'name',
            color: 'color',
            pitch: 'pitch',
            serial: 'serial',
            have: 'have',
        };
        _GeneralPencils._pitchColor = '';
        _GeneralPencils._data = [];
        _Game._GeneralPencils = _GeneralPencils;
        class _ColoursPencils extends _GeneralPencils {
            static get _outputColor() {
                let str;
                this._drawTime++;
                let R;
                let G;
                let B;
                if (1 <= this._drawTime && this._drawTime <= this._drawInterval) {
                    R = this._presentColorArr[0][0] + (this._presentColorArr[1][0] - this._presentColorArr[0][0]) * this._drawTime / this._drawInterval;
                    G = this._presentColorArr[0][1] + (this._presentColorArr[1][1] - this._presentColorArr[0][1]) * this._drawTime / this._drawInterval;
                    B = this._presentColorArr[0][2] + (this._presentColorArr[1][2] - this._presentColorArr[0][2]) * this._drawTime / this._drawInterval;
                }
                else if (this._drawInterval < this._drawTime && this._drawTime <= this._drawInterval * 2) {
                    R = this._presentColorArr[1][0] + (this._presentColorArr[2][0] - this._presentColorArr[1][0]) * (this._drawTime - this._drawInterval) / this._drawInterval;
                    G = this._presentColorArr[1][1] + (this._presentColorArr[2][1] - this._presentColorArr[1][1]) * (this._drawTime - this._drawInterval) / this._drawInterval;
                    B = this._presentColorArr[1][2] + (this._presentColorArr[2][2] - this._presentColorArr[1][2]) * (this._drawTime - this._drawInterval) / this._drawInterval;
                }
                else if (this._drawInterval * 2 < this._drawTime && this._drawTime < this._drawInterval * 3) {
                    R = this._presentColorArr[2][0] + (this._presentColorArr[0][0] - this._presentColorArr[2][0]) * (this._drawTime - this._drawInterval * 2) / this._drawInterval;
                    ;
                    G = this._presentColorArr[2][1] + (this._presentColorArr[0][1] - this._presentColorArr[2][1]) * (this._drawTime - this._drawInterval * 2) / this._drawInterval;
                    B = this._presentColorArr[2][2] + (this._presentColorArr[0][2] - this._presentColorArr[2][2]) * (this._drawTime - this._drawInterval * 2) / this._drawInterval;
                }
                else if (this._drawInterval * 3 - 1 < this._drawTime) {
                    this._drawTime = 0;
                    R = this._presentColorArr[0][0];
                    G = this._presentColorArr[0][1];
                    B = this._presentColorArr[0][2];
                }
                R = Math.round(R), G = Math.round(G), B = Math.round(B);
                str = Color.RGBToHexString(R, G, B);
                return str;
            }
            ;
            static get _presentColorArr() {
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
            static _init() {
                this._data = Tools.objArray_Copy(_PreloadUrl._list.json.Colours.data);
                this._pitchName = this._data[0][this._property.name];
            }
        }
        _ColoursPencils._clickNum = 0;
        _ColoursPencils._switch = false;
        _ColoursPencils._drawTime = 0;
        _ColoursPencils._drawInterval = 30;
        _Game._ColoursPencils = _ColoursPencils;
        ;
        class _BlinkPencils extends _GeneralPencils {
            static _randomNoHaveOne() {
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
                }
                else {
                    return null;
                }
            }
            static _addPencil(name) {
                for (let index = 0; index < this._data.length; index++) {
                    const element = this._data[index];
                    if (element['name'] == name) {
                        element['have'] = true;
                        Laya.LocalStorage.setJSON('_Game_Blink', JSON.stringify(this._data));
                        if (_Game._BlinkList) {
                            _Game._BlinkList.refresh();
                        }
                        return;
                    }
                }
            }
            static checkHave(name) {
                let bool = false;
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
            static _init() {
                this._data = Tools.jsonCompare(_PreloadUrl._list.json.Blink.url, '_Game_Blink', this._property.name);
            }
        }
        _BlinkPencils._switch = false;
        _Game._BlinkPencils = _BlinkPencils;
        ;
        let _drawBoardProperty;
        (function (_drawBoardProperty) {
            _drawBoardProperty["originalZOder"] = "originalZOder";
            _drawBoardProperty["whetherPass"] = "whetherPass";
        })(_drawBoardProperty = _Game._drawBoardProperty || (_Game._drawBoardProperty = {}));
        function _init() {
            Admin._game.loopLevel = 12;
            _GeneralPencils._init();
            _BlinkPencils._init();
            _ColoursPencils._init();
        }
        _Game._init = _init;
        class Game extends Admin._SceneBase {
            constructor() {
                super(...arguments);
                this.Step = {
                    firstRootP: null,
                    firstRootScaleX: null,
                    firstRootScaleY: null,
                    BtnNext: null,
                    BtnLast: null,
                    BtnTurnLeft: null,
                    BtnTurnRight: null,
                    btnSwitch: true,
                    automaticNext: false,
                    setAutomaticNext: () => {
                        Laya.timer.frameOnce(120, this.Step, () => {
                            if (this.Step.automaticNext) {
                                EventAdmin._notify(_Event.nextStep);
                                this.Step.automaticNext = false;
                            }
                        });
                    },
                    BtnCompelet: null,
                    needCut: false,
                    cutFocus: (func) => {
                        this.Draw.len.count = 0;
                        let Img = _Game._stepOrderImg[_Game._stepIndex.present];
                        let Parent = Img.parent;
                        if (!this.Step.needCut) {
                            return;
                        }
                        if (Parent.name == 'Head' || Parent.name == 'Body') {
                            let oriPovitX = Parent.pivotX;
                            let oriPovitY = Parent.pivotY;
                            if (this.Owner.name !== 'Game_wugui') {
                                Tools.Node.changePovit(Parent, Parent.width / 2, Parent.height / 2, true);
                            }
                            let point = Parent.parent.localToGlobal(new Laya.Point(Parent.x, Parent.y));
                            let diffPoint = new Laya.Point(Laya.stage.width / 2 - point.x, Laya.stage.width * 3 / 5 - point.y);
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
                    compeletCutFocus: (func) => {
                        Animation2D.move_Simple(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y, this.Step.firstRootP.x, this.Step.firstRootP.y, 300, 0, () => {
                            if (func) {
                                func();
                            }
                        });
                    },
                    init: () => {
                        this.ImgVar('DrawRoot').y = this.ImgVar('DrawRoot').y / 1280 * Laya.stage.height;
                        let Picture = this.ImgVar('DrawRoot').getChildAt(0);
                        let num = 0;
                        for (let index = 0; index < Picture.numChildren; index++) {
                            const element = Picture.getChildAt(index);
                            if (element.name == 'Head' || element.name == 'Body') {
                                num++;
                            }
                        }
                        if (num == 2) {
                            this.Step.needCut = true;
                        }
                        else {
                            this.Step.needCut = false;
                        }
                        this.Step.firstRootP = new Laya.Point(this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y);
                        this.Step.firstRootScaleX = this.ImgVar('DrawRoot').scaleX;
                        this.Step.firstRootScaleY = this.ImgVar('DrawRoot').scaleY;
                        let StepSwitch = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.StepSwitch.prefab);
                        this.Owner.addChild(StepSwitch)['pos'](Laya.stage.width / 2, Laya.stage.height * 0.641);
                        this.Step.BtnNext = StepSwitch.getChildByName('BtnNextStep');
                        this.Step.BtnLast = StepSwitch.getChildByName('BtnLastStep');
                        this.Step.BtnNext.visible = false;
                        this.Step.BtnLast.visible = false;
                        this.Step.BtnCompelet = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.BtnCompelet.prefab);
                        this.Owner.addChild(this.Step.BtnCompelet)['pos'](563, Laya.stage.height * 0.641);
                        this.Step.BtnCompelet.visible = false;
                        this.Step.BtnTurnLeft = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.BtnTurnLeft.prefab);
                        this.Owner.addChild(this.Step.BtnTurnLeft)['pos'](37, Laya.stage.height * 0.838);
                        this.Step.BtnTurnRight = Tools.Node.prefabCreate(_PreloadUrl._list.prefab2D.BtnTurnRight.prefab);
                        this.Owner.addChild(this.Step.BtnTurnRight)['pos'](687, Laya.stage.height * 0.838);
                    }
                };
                this.Draw = {
                    switch: false,
                    DrawRoot: null,
                    DrawBoard: null,
                    EraserSp: null,
                    DrawSp: null,
                    BlinkSp: null,
                    frontPos: null,
                    endPos: null,
                    getTex: () => {
                        return _PreloadUrl._list.texture[`bishua${1 + Math.floor(Math.random() * 4)}`]['texture'];
                    },
                    getBlinkTex: () => {
                        return _PreloadUrl._list.texture.blink1.texture;
                    },
                    getColor: () => {
                        let color;
                        if (_BlinkPencils._switch) {
                            color = _BlinkPencils._pitchColor;
                        }
                        else {
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
                    getRadius: () => {
                        if (this.Owner.name == 'Game_dinglaotai' || this.Owner.name == 'Game_dinglaotou' || this.Owner.name == 'Game_zhangyugege') {
                            return 25;
                        }
                        else {
                            return 50;
                        }
                    },
                    draw: (Sp, x, y, tex, color) => {
                        Sp.graphics.drawTexture(tex ? tex : this.Draw.getTex(), x ? x : this.Draw.frontPos.x - this.Draw.getRadius() / 2, y ? y : this.Draw.frontPos.y - this.Draw.getRadius() / 2, this.Draw.getRadius(), this.Draw.getRadius(), null, 1, color ? color : this.Draw.getColor(), null);
                    },
                    drawBlink: (x, y) => {
                        if (!_BlinkPencils.checkHave(_BlinkPencils._pitchName)) {
                            return;
                        }
                        this.Draw.BlinkSp.graphics.drawTexture(this.Draw.getBlinkTex(), x ? x : this.Draw.frontPos.x - this.Draw.getRadius() / 2, y ? y : this.Draw.frontPos.y - this.Draw.getRadius() / 2, this.Draw.getRadius(), this.Draw.getRadius(), null, 1, null, null);
                    },
                    getSpace: () => {
                        if (this.Owner.name == 'Game_dinglaotai' || this.Owner.name == 'Game_dinglaotou' || this.Owner.name == 'Game_zhangyugege') {
                            return 5;
                        }
                        else {
                            return 10;
                        }
                    },
                    len: {
                        get count() {
                            return this['lenCount'] ? this['lenCount'] : 0;
                        },
                        set count(val) {
                            if (_Game._stepIndex.present == _Game._stepIndex.max) {
                                this['lenCount'] = val;
                                if (this['lenCount'] >= 50 && !_Game._stepOrderImg[_Game._stepIndex.present][_drawBoardProperty.whetherPass]) {
                                    EventAdmin._notify(_Event.showStepBtn);
                                    _Game._stepOrderImg[_Game._stepIndex.present][_drawBoardProperty.whetherPass] = true;
                                    this['lenCount'] = 0;
                                }
                            }
                        },
                    },
                    restoration: () => {
                        this.Draw.switch = false;
                        this.Draw.frontPos = null;
                        this.Draw.endPos = null;
                        this.Draw.DrawSp = null;
                        this.Draw.EraserSp = null;
                    },
                };
            }
            lwgOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'playpage');
                ADManager.TAPoint(TaT.LevelStart, `level_${this.Owner.name}`);
                _Gold.goldVinish(100);
                _BlinkPencils._switch = false;
                _Game._stepIndex.present = 0;
                _Game._stepIndex.present = 0;
                _Game._stepIndex.max = 0;
                _Game._GeneralList1 = this.ImgVar('GeneralList1');
                _Game._GeneralList1.pos(Laya.stage.width / 2, Laya.stage.height * 0.835);
                _Game._stepOrderImg = [];
                let index = 1;
                while (this.Owner['Draw' + index]) {
                    let Img = this.Owner['Draw' + index];
                    _Game._stepOrderImg.push(Img);
                    Img[_drawBoardProperty.originalZOder] = Img.zOrder;
                    let parent = Img.parent;
                    if (parent != this.ImgVar('DrawRoot')) {
                        parent[_drawBoardProperty.originalZOder] = parent.zOrder;
                        parent[_drawBoardProperty.whetherPass] = false;
                    }
                    let DrawBoard = Img.addChild((new Laya.Sprite()).pos(0, 0));
                    DrawBoard.cacheAs = "bitmap";
                    DrawBoard.name = 'DrawBoard';
                    DrawBoard.width = Img.width;
                    DrawBoard.height = Img.height;
                    this.Owner['Draw' + index].skin = null;
                    index++;
                }
            }
            lwgOpenAni() {
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
                    });
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
            lwgOnEnable() {
                _Game._BlinkList = this.ListVar('BlinkList');
                _Game._BlinkList.pos(Laya.stage.width / 2 + Laya.stage.width, Laya.stage.height * 0.835);
                _Game._BlinkList.array = _BlinkPencils._data;
                _Game._BlinkList.selectEnable = true;
                _Game._BlinkList.renderHandler = new Laya.Handler(this, (cell, index) => {
                    let _dataSource = cell.dataSource;
                    let Pic = cell.getChildByName('Pic');
                    Pic.skin = `Game/UI/GameScene/Pencils/Blink/${_dataSource['name']}.png`;
                    if (_dataSource['have']) {
                        Pic.gray = false;
                    }
                    else {
                        Pic.gray = true;
                    }
                    if (_dataSource[_GeneralPencils._property.pitch] && _dataSource[_GeneralPencils._property.have]) {
                        Pic.scale(1.2, 1.2);
                    }
                    else {
                        Pic.scale(1, 1);
                    }
                });
                this.Step.init();
            }
            lwgOnStart() {
                EventAdmin._notify(_Event.generalRefresh);
                EventAdmin._notify(_Event.start);
            }
            lwgEventRegister() {
                EventAdmin._register(_Event.generalRefresh, this, () => {
                    for (let index = 0; index < _Game._GeneralList1.numChildren; index++) {
                        const cell = _Game._GeneralList1.getChildAt(index);
                        let _dataSource = cell['_dataSource'] = _GeneralPencils._data[index];
                        if (!cell.getComponent(_GameItem)) {
                            cell.addComponent(_GameItem);
                        }
                        let Pic = cell.getChildByName('Pic');
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
                        }
                        else {
                            Pic.scale(1, 1);
                        }
                    }
                });
                EventAdmin._register(_Event.Photo, this, () => {
                    this.AniVar(_Animation.action1).play();
                    this.AniVar(_Animation.action1).stop();
                    var htmlCanvas = this.Owner.drawToCanvas(this.Owner.width, this.Owner.height, 0, 0);
                    _Share._Data._photo._base64 = htmlCanvas.toBase64("image/png", 1);
                });
                EventAdmin._register(_Event.colseScene, this, () => {
                    Tools.Node.changePovit(this.ImgVar('DrawRoot'), 0, 0);
                    this.ImgVar('DrawRoot').x = 0;
                    this.ImgVar('DrawRoot').y = 0;
                    let Image = this.ImgVar('DrawRoot').getChildAt(0);
                    Tools.Node.changePovit(Image, 0, 0);
                    Image.scale(Image.scaleX - 0.2, Image.scaleY - 0.2);
                    if (this.Owner.name == 'Game_dinglaotai' || this.Owner.name == 'Game_dinglaotou' || this.Owner.name == 'Game_zhangyugege') {
                        Image.x = 130;
                    }
                    else if (this.Owner.name == 'Game_xiaohonghua') {
                        Image.x = 85;
                    }
                    else if (this.Owner.name == 'Game_xiaoqiche') {
                        Image.x = 130;
                    }
                    else if (this.Owner.name == 'Game_wanshengnangua') {
                        Image.x = 80;
                    }
                    else if (this.Owner.name == 'Game_xiaonainiu') {
                        Image.x = 55;
                    }
                    else if (this.Owner.name == 'Game_maotouying') {
                        Image.x = 85;
                    }
                    else {
                        Image.x = 50;
                    }
                    if (this.Owner.name == 'Game_wugui' || this.Owner.name == 'Game_haitun' || this.Owner.name == 'Game_wanshengnangua') {
                        Image.y = 120;
                    }
                    else if (this.Owner.name == 'Game_xiaonainiu') {
                        Image.y = 90;
                    }
                    else {
                        Image.y = 100;
                    }
                    var htmlCanvas = this.Owner.drawToCanvas(this.Owner.width, this.Owner.height, 0, 0);
                    _SelectLevel._Data._setHaveBeenDrawn(htmlCanvas.toBase64("image/png", 1));
                    this.lwgCloseScene();
                });
                EventAdmin._register(_Event.victory, this, () => {
                    this.AniVar(_Animation.action1).stop();
                    Tools.Node.changePovit(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').width / 2, this.ImgVar('DrawRoot').height / 2);
                    Animation2D.move_Scale(this.ImgVar('DrawRoot'), this.ImgVar('DrawRoot').scaleX, this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y, this.ImgVar('DrawRoot').x, this.ImgVar('DrawRoot').y + 150, this.ImgVar('DrawRoot').scaleX / 2, 500, 500);
                    _Gold.goldAppear(100);
                });
                EventAdmin._register(_Event.playAni1, this, (loop) => {
                    this.AniVar(_Animation.action1).play(null, loop == undefined ? false : loop);
                });
                EventAdmin._register(_Event.start, this, () => {
                    this.Draw.switch = true;
                    for (let index = 0; index < _Game._stepOrderImg.length; index++) {
                        if (_Game._stepIndex.present >= index) {
                            _Game._stepOrderImg[index].visible = true;
                        }
                        else {
                            _Game._stepOrderImg[index].visible = false;
                        }
                    }
                    let Img = _Game._stepOrderImg[_Game._stepIndex.present];
                    let ImgParent = Img.parent;
                    if (ImgParent != this.ImgVar('DrawRoot')) {
                        ImgParent.zOrder = 200;
                    }
                    Img.zOrder = 200;
                });
                EventAdmin._register(_Event.showStepBtn, this, () => {
                    if (_Game._stepIndex.present == 0) {
                        this.Step.BtnNext.visible = true;
                        Animation2D.fadeOut(this.Step.BtnNext, 0, 1, 300);
                    }
                    else {
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
                    }
                    else {
                        this.Step.btnSwitch = false;
                    }
                    this.Draw.restoration();
                    if (_Game._stepIndex.present - 1 >= 0) {
                        let Img0 = _Game._stepOrderImg[_Game._stepIndex.present - 1];
                        let Img0Parent = Img0.parent;
                        Animation2D.fadeOut(Img0.getChildByName('Pic'), 0, 1, 300, 0, () => {
                            let Img = _Game._stepOrderImg[_Game._stepIndex.present];
                            Animation2D.fadeOut(Img.getChildByName('Pic'), 1, 0, 300, 0, () => {
                                _Game._stepIndex.present--;
                                this.Step.cutFocus();
                                if (_Game._stepIndex.present < _Game._stepIndex.max) {
                                    this.Step.BtnNext.visible = true;
                                }
                                if (_Game._stepIndex.present == 0) {
                                    this.Step.BtnLast.visible = false;
                                }
                                EventAdmin._notify(_Event.restoreZOder);
                                if (Img0Parent != this.ImgVar('DrawRoot')) {
                                    Img0Parent.zOrder = 200;
                                }
                                Img0.zOrder = 200;
                                this.Step.btnSwitch = true;
                                this.Draw.switch = true;
                            });
                        });
                    }
                });
                EventAdmin._register(_Event.nextStep, this, () => {
                    if (!this.Step.btnSwitch) {
                        return;
                    }
                    else {
                        this.Step.btnSwitch = false;
                    }
                    if (!this.Step.BtnLast.visible) {
                        Animation2D.fadeOut(this.Step.BtnLast, 0, 1, 300, null, () => {
                            this.Step.BtnLast.visible = true;
                        });
                    }
                    EventAdmin._notify(_Event.restoreZOder);
                    this.Draw.restoration();
                    if (_Game._stepIndex.present >= _Game._stepOrderImg.length - 1) {
                        EventAdmin._notify(_Event.compelet);
                        Animation2D.fadeOut(_Game._stepOrderImg[_Game._stepIndex.present].getChildByName('Pic'), 1, 0, 300, 0);
                    }
                    else {
                        let Img = _Game._stepOrderImg[_Game._stepIndex.present];
                        Img.zOrder = Img[_drawBoardProperty.originalZOder];
                        Animation2D.fadeOut(Img.getChildByName('Pic'), 1, 0, 300, 0, () => {
                            let Img0 = _Game._stepOrderImg[_Game._stepIndex.present + 1];
                            Img0.visible = true;
                            Animation2D.fadeOut(Img0.getChildByName('Pic'), 0, 1, 300, 0, () => {
                                let Img0Parent = Img0.parent;
                                _Game._stepIndex.present++;
                                this.Step.cutFocus();
                                if (!_Game._stepOrderImg[_Game._stepIndex.present][_drawBoardProperty.whetherPass]) {
                                    this.Step.BtnNext.visible = false;
                                }
                                if (Img0Parent != this.ImgVar('DrawRoot')) {
                                    Img0Parent.zOrder = 200;
                                }
                                Img0.zOrder = 200;
                                this.Step.btnSwitch = true;
                                this.Draw.switch = true;
                            });
                        });
                    }
                });
                EventAdmin._register(_Event.restoreZOder, this, () => {
                    for (let index = 0; index < _Game._stepOrderImg.length; index++) {
                        const element = _Game._stepOrderImg[index];
                        if (element) {
                            element.zOrder = _Game._stepOrderImg[index][_drawBoardProperty.originalZOder];
                            let parent = element.parent;
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
                        Animation2D.fadeOut(_Game._GeneralList1, 1, 0, 200);
                        Animation2D.fadeOut(_Game._BlinkList, 1, 0, 200);
                    });
                    EventAdmin._notify(_Event.restoreZOder);
                });
                EventAdmin._register(_Event.turnRight, this, () => {
                    this.Step.btnSwitch = false;
                    Animation2D.move_Simple(_Game._GeneralList1, _Game._GeneralList1.x, _Game._GeneralList1.y, Laya.stage.width / 2 - Laya.stage.width, _Game._GeneralList1.y, 250, 0, () => {
                        Animation2D.move_Simple(_Game._BlinkList, _Game._BlinkList.x, _Game._BlinkList.y, Laya.stage.width / 2, _Game._BlinkList.y, 250, 0, () => {
                            this.Step.btnSwitch = true;
                            _BlinkPencils._switch = true;
                        });
                    });
                });
                EventAdmin._register(_Event.turnLeft, this, () => {
                    this.Step.btnSwitch = false;
                    Animation2D.move_Simple(_Game._BlinkList, _Game._BlinkList.x, _Game._BlinkList.y, Laya.stage.width / 2 + Laya.stage.width, _Game._BlinkList.y, 250, 0, () => {
                        Animation2D.move_Simple(_Game._GeneralList1, _Game._GeneralList1.x, _Game._GeneralList1.y, Laya.stage.width / 2, _Game._GeneralList1.y, 250, 0, () => {
                            this.Step.btnSwitch = true;
                            _BlinkPencils._switch = false;
                        });
                    });
                });
            }
            onStageMouseDown(e) {
                Laya.timer.clearAll(this.Step);
                if (this.Draw.switch && _Game._activate) {
                    this.Draw.DrawRoot = _Game._stepOrderImg[_Game._stepIndex.present];
                    this.Draw.DrawBoard = this.Draw.DrawRoot.getChildByName('DrawBoard');
                    this.Draw.frontPos = this.Draw.DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                    let Sp;
                    let DrawBoard = this.Draw.DrawRoot.getChildByName('DrawBoard');
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
                    }
                    else {
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
            onStageMouseMove(e) {
                if (this.Draw.frontPos && this.Draw.switch && _Game._activate) {
                    let endPos = this.Draw.DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                    let Sp;
                    if (_BlinkPencils._switch) {
                        switch (_BlinkPencils._pitchName) {
                            case _BlinkPencils._effectType.eraser:
                                Sp = this.Draw.EraserSp;
                                break;
                            default:
                                Sp = this.Draw.DrawSp;
                                break;
                        }
                    }
                    else {
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
            onStageMouseUp() {
                if (this.Draw.len.count > 0 && _Game._activate) {
                    this.Step.setAutomaticNext();
                }
                this.Draw.frontPos = null;
                if (this.Draw.DrawBoard && this.Draw.DrawBoard.numChildren > 40) {
                    let NewBoard = this.Draw.DrawRoot.addChild((new Laya.Sprite()).pos(0, 0));
                    NewBoard.width = this.Draw.DrawRoot.width;
                    NewBoard.height = this.Draw.DrawRoot.height;
                    NewBoard.cacheAs = "bitmap";
                    NewBoard.name = 'DrawBoard';
                    NewBoard.texture = this.Draw.DrawBoard.drawToTexture(this.Draw.DrawBoard.width, this.Draw.DrawBoard.height, this.Draw.DrawBoard.x, this.Draw.DrawBoard.y);
                    this.Draw.DrawBoard.removeSelf();
                }
            }
            lwgBtnClick() {
                for (let index = 0; index < _Game._stepOrderImg.length; index++) {
                    const element = _Game._stepOrderImg[index];
                    var func = () => {
                        if (index == _Game._stepIndex.present) {
                            this.Step.automaticNext = true;
                        }
                    };
                    Click._on(Click._Type.noEffect, _Game._stepOrderImg[index], this, (e) => {
                        if (this.Draw.switch && index == _Game._stepIndex.present) {
                            this.Draw.len.count += 1;
                        }
                    }, (e) => {
                        if (this.Draw.frontPos && this.Draw.switch && index == _Game._stepIndex.present) {
                            let endPos = this.Draw.DrawBoard.globalToLocal(new Laya.Point(e.stageX, e.stageY));
                            if (_GeneralPencils._pitchName != _GeneralPencils._effectType.eraser) {
                                this.Draw.len.count += this.Draw.frontPos.distance(endPos.x, endPos.y);
                            }
                        }
                    }, func, func);
                }
                var stop = (e) => {
                    e.stopPropagation();
                };
                Click._on(Click._Type.largen, this.Step.BtnLast, this, stop, stop, (e) => {
                    e.stopPropagation();
                    Laya.timer.clearAll(this.Step);
                    this.Draw.frontPos = null;
                    EventAdmin._notify(_Event.lastStep);
                    this.Draw.len.count = 0;
                });
                Click._on(Click._Type.largen, this.Step.BtnNext, this, stop, stop, (e) => {
                    e.stopPropagation();
                    Laya.timer.clearAll(this.Step);
                    this.Draw.frontPos = null;
                    EventAdmin._notify(_Event.nextStep);
                    this.Draw.len.count = 0;
                });
                Click._on(Click._Type.largen, this.Step.BtnTurnLeft, this, stop, stop, (e) => {
                    e.stopPropagation();
                    EventAdmin._notify(_Event.turnLeft);
                });
                Click._on(Click._Type.largen, this.Step.BtnTurnRight, this, stop, stop, (e) => {
                    e.stopPropagation();
                    EventAdmin._notify(_Event.turnRight);
                });
                Click._on(Click._Type.largen, this.Step.BtnCompelet, this, stop, stop, () => {
                    this.lwgOpenScene(_SceneName.Settle, false, () => {
                        this.Step.BtnCompelet.visible = false;
                    });
                });
            }
            lwgOnDisable() {
                _ColoursPencils._switch = false;
                ADManager.TAPoint(TaT.PageShow, 'playpage');
                ADManager.TAPoint(TaT.LevelFinish, `level_${this.Owner.name} `);
            }
        }
        _Game.Game = Game;
    })(_Game || (_Game = {}));
    var _Game$1 = _Game.Game;

    class _GameBlinkItem extends Admin._Object {
        lwgBtnClick() {
            var func = (e) => {
                e.stopPropagation();
            };
            Click._on(Click._Type.noEffect, this.Owner, this, func, func, (e) => {
                e.stopPropagation();
                if (this.Owner['_dataSource']['have']) {
                    _Game._BlinkPencils._pitchName = this.Owner['_dataSource']['name'];
                }
                else {
                    Dialogue.createHint_Middle('尚未获得！');
                }
            }, func);
        }
    }

    var _AdsHint;
    (function (_AdsHint) {
        class AdsHint extends Admin._SceneBase {
            setCallBack(_adAction) {
                this.adAction = _adAction;
            }
            lwgOnEnable() {
                this.Owner['BtnClose'].visible = false;
                Laya.timer.frameOnce(120, this, () => {
                    this.Owner['BtnClose'].visible = true;
                });
            }
            lwgOpenAni() {
                return 10;
            }
            lwgBtnClick() {
                Click._on(Click._Type.largen, this.Owner['BtnClose'], this, null, null, () => {
                    this.lwgCloseScene();
                });
                Click._on(Click._Type.largen, this.Owner['BtnConfirm'], this, null, null, () => {
                    ADManager.ShowReward(this.adAction, null);
                    this.lwgCloseScene();
                });
            }
        }
        _AdsHint.AdsHint = AdsHint;
    })(_AdsHint || (_AdsHint = {}));
    var _AdsHint$1 = _AdsHint.AdsHint;

    var _Guide;
    (function (_Guide) {
        _Guide._complete = {
            get bool() {
                if (Laya.LocalStorage.getItem('_Guide_complete')) {
                    if (Number(Laya.LocalStorage.getItem('_Guide_complete')) == 0) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return false;
                }
            },
            set bool(bol) {
                if (bol == true) {
                    bol = 1;
                }
                Laya.LocalStorage.setItem('_Guide_complete', bol.toString());
            }
        };
        _Guide._whichStep = {
            get num() {
                return Laya.LocalStorage.getItem('_Guide_whichStep') ? Number(Laya.LocalStorage.getItem('_Guide_whichStep')) : 1;
            },
            set num(num0) {
                Laya.LocalStorage.setItem('_Guide_whichStep', num0.toString());
            }
        };
        _Guide._whichStepNum = 1;
        let _Event;
        (function (_Event) {
            _Event["onStep"] = "_Guide_onStep";
            _Event["stepComplete"] = "_Guide_stepComplete";
            _Event["appear"] = "_Guide_appear";
            _Event["start"] = "_Guide_start";
            _Event["complete"] = "_Guide_complete";
        })(_Event = _Guide._Event || (_Guide._Event = {}));
        function _init() {
            console.log('开始进行新手引导！');
            Admin._openScene(_SceneName.Start, null, () => {
                console.log('新手引导完成！');
            });
        }
        _Guide._init = _init;
        class _GuideBase extends Admin._SceneBase {
            moduleOnAwake() { }
            moduleOnEnable() { }
            moduleEventRegister() { }
        }
        _Guide._GuideBase = _GuideBase;
        class Guide extends _Guide._GuideBase {
            lwgOnEnable() {
                this.Owner['Background'].alpha = 0;
                this.Owner['Hand'].alpha = 0;
                EventAdmin._notify(_Guide._Event.onStep);
                this.Owner["Draw"].on(Laya.Event.LABEL, this, (labal) => {
                    if (labal === 'start') {
                        let DrawCanvas = this.Owner['Hand'].getChildByName('DrawCanvas');
                        if (!DrawCanvas) {
                            let DrawCanvas = new Laya.Sprite();
                            DrawCanvas.name = 'DrawCanvas';
                            this.Owner['Hand'].addChild(DrawCanvas);
                            this.Owner['Handpic'].pos(0, 0);
                            this.Owner['Handpic'].pivotX = 0;
                            this.Owner['Handpic'].pivotY = 0;
                            this['drawLinePos'] = new Laya.Point(this.Owner['Handpic'].x, this.Owner['Handpic'].y);
                        }
                    }
                    else if (labal === 'end') {
                        let DrawCanvas = this.Owner['Hand'].getChildByName('DrawCanvas');
                        if (this.Owner['Hand'].getChildByName('DrawCanvas')) {
                            this['drawLinePos'] == false;
                            DrawCanvas.removeSelf();
                        }
                    }
                });
                TimerAdmin._frameLoop(1, this, () => {
                    let DrawCanvas = this.Owner['Hand'].getChildByName('DrawCanvas');
                    if (DrawCanvas) {
                        if (this['drawLinePos']) {
                            DrawCanvas.graphics.drawLine(this['drawLinePos'].x, this['drawLinePos'].y, this.Owner['Handpic'].x, this.Owner['Handpic'].y, "#000000", 8);
                            DrawCanvas.graphics.drawCircle(this.Owner['Handpic'].x, this.Owner['Handpic'].y, 4, "#000000");
                            this['drawLinePos'] = new Laya.Point(this.Owner['Handpic'].x, this.Owner['Handpic'].y);
                        }
                    }
                });
            }
            lwgEventRegister() {
                var step1 = () => {
                    this.Owner["Draw"].play(0, true);
                    EventAdmin._notify(_Guide._Event.appear);
                    this.Owner['Hand'].pos(198, 523);
                    Tools.Draw.reverseRoundMask(this.Owner['Background'], 360, 598, 350, true);
                };
                var step2 = () => {
                    EventAdmin._notify(_Guide._Event.appear);
                    this.Owner['Hand'].pos(360, 1161);
                    this.Owner["Click"].play(0, true);
                    Tools.Draw.reverseRoundrectMask(this.Owner['Background'], 360, 1161, 320, 150, 40, true);
                };
                var step3 = () => {
                    step1();
                };
                var step4 = () => {
                    step2();
                };
                var step5 = () => {
                    EventAdmin._notify(_Guide._Event.appear);
                    this.Owner['Hand'].pos(75, 102);
                    this.Owner["Click"].play(0, true);
                    Tools.Draw.reverseRoundMask(this.Owner['Background'], 72, 105, 60);
                };
                var step6 = () => {
                    EventAdmin._notify(_Guide._Event.appear);
                    this.Owner['Hand'].pos(630, 790);
                    this.Owner["Click"].play(0, true);
                    Tools.Draw.reverseRoundrectMask(this.Owner['Background'], 653, 758, 130, 150, 20, true);
                };
                var step7 = () => {
                    step5();
                };
                var step8 = () => {
                    EventAdmin._notify(_Guide._Event.appear);
                    this.Owner['Hand'].pos(360, Laya.stage.height * 0.779);
                    this.Owner["Click"].play(0, true);
                    Tools.Draw.reverseRoundrectMask(this.Owner['Background'], 360, Laya.stage.height * 0.779, 450, 180, 20, true);
                };
                EventAdmin._register(_Guide._Event.onStep, this, () => {
                    Laya.timer.once(500, this, () => {
                        console.log('新手引导到了第：', _Guide._whichStepNum + '步了');
                        switch (_Guide._whichStepNum) {
                            case 1:
                                step1();
                                break;
                            case 2:
                                step2();
                                break;
                            case 3:
                                step3();
                                break;
                            case 4:
                                step4();
                                break;
                            case 5:
                                step5();
                                break;
                            case 6:
                                step6();
                                break;
                            case 7:
                                step7();
                                break;
                            case 8:
                                step8();
                                break;
                            default:
                                break;
                        }
                    });
                });
                EventAdmin._register(_Guide._Event.appear, this, (func) => {
                    Animation2D.fadeOut(this.Owner['Hand'], 0, 1, 150);
                    Animation2D.fadeOut(this.Owner['Background'], 0, 0.5, 300);
                });
                EventAdmin._register(_Guide._Event.stepComplete, this, () => {
                    _Guide._whichStepNum++;
                    let DrawCanvas = this.Owner['Hand'].getChildByName('DrawCanvas');
                    if (this.Owner['Hand'].getChildByName('DrawCanvas')) {
                        this['drawLinePos'] == false;
                        DrawCanvas.removeSelf();
                    }
                    Animation2D.fadeOut(this.Owner['Hand'], 1, 0, 150);
                    Animation2D.fadeOut(this.Owner['Background'], 0.5, 0, 300, 0, () => {
                        this.Owner["Draw"].stop();
                        this.Owner["Click"].stop();
                    });
                });
                EventAdmin._register(_Guide._Event.complete, this, () => {
                    Animation2D.fadeOut(this.Owner['Hand'], 1, 0, 150);
                    Animation2D.fadeOut(this.Owner['Background'], 0.5, 0, 300, 0, () => {
                        _Guide._complete.bool = true;
                        Admin._closeScene(this.Owner.name);
                    });
                });
            }
        }
        _Guide.Guide = Guide;
    })(_Guide || (_Guide = {}));
    var _Guide$1 = _Guide.Guide;

    var _PreLoadStepUrl;
    (function (_PreLoadStepUrl) {
        _PreLoadStepUrl._game = {};
    })(_PreLoadStepUrl || (_PreLoadStepUrl = {}));
    var _PreLoadStep;
    (function (_PreLoadStep) {
        class PreLoadStep extends _LwgPreLoad._PreLoadScene {
            lwgOnStart() {
                switch (Admin._preLoadOpenSceneLater.openSceneName) {
                    case _SceneName.Game:
                        EventAdmin._notify(_LwgPreLoad._Event.importList, ([_PreLoadStepUrl._game]));
                        break;
                    default:
                        break;
                }
            }
        }
        _PreLoadStep.PreLoadStep = PreLoadStep;
    })(_PreLoadStep || (_PreLoadStep = {}));
    ;
    var _PreLoadStep$1 = _PreLoadStep.PreLoadStep;

    var _Settle;
    (function (_Settle) {
        class _data {
        }
        _Settle._data = _data;
        let _Event;
        (function (_Event) {
        })(_Event = _Settle._Event || (_Settle._Event = {}));
        function _init() {
        }
        _Settle._init = _init;
        class SettleBase extends Admin._SceneBase {
            moduleOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'ACTpage');
                ADManager.TAPoint(TaT.BtnShow, 'share_ACT');
                ADManager.TAPoint(TaT.BtnShow, 'act_ACT');
            }
        }
        _Settle.SettleBase = SettleBase;
        class Settle extends _Settle.SettleBase {
            lwgOnAwake() {
                EventAdmin._notify(_Game._Event.playAni1, [true]);
            }
            lwgBtnClick() {
                Click._on(Click._Type.largen, this.btnVar('BtnPlayAni'), this, null, null, () => {
                    EventAdmin._notify(_Game._Event.playAni1, [false]);
                    ADManager.TAPoint(TaT.BtnClick, 'act_ACT');
                });
                Click._on(Click._Type.largen, this.btnVar('BtnContinue'), this, null, null, () => {
                    EventAdmin._notify(_Game._Event.Photo);
                    this.lwgOpenScene(_SceneName.Share);
                });
            }
            lwgOnDisable() {
                RecordManager.stopAutoRecord();
                ADManager.TAPoint(TaT.PageLeave, 'ACTpage');
            }
        }
        _Settle.Settle = Settle;
    })(_Settle || (_Settle = {}));
    var _Settle$1 = _Settle.Settle;

    var _Special;
    (function (_Special) {
        class _data {
            static get _openNum() {
                return Laya.LocalStorage.getItem('_Special_OpenNum') ? Number(Laya.LocalStorage.getItem('_Special_OpenNum')) : 0;
            }
            static set _openNum(count) {
                Laya.LocalStorage.setItem('_Special_OpenNum', count.toString());
            }
            static get _lastDate() {
                return Laya.LocalStorage.getItem('_Special_lastDate') ? Number(Laya.LocalStorage.getItem('_Special_lastDate')) : DateAdmin._date.date - 1;
            }
            static set _lastDate(date) {
                Laya.LocalStorage.setItem('_Special_lastDate', date.toString());
            }
        }
        _Special._data = _data;
        let _Event;
        (function (_Event) {
        })(_Event = _Special._Event || (_Special._Event = {}));
        function _init() {
        }
        _Special._init = _init;
        ;
        class SpecialBase extends Admin._SceneBase {
            moduleOnAwake() {
                ADManager.TAPoint(TaT.PageShow, '100Mpage');
                ADManager.TAPoint(TaT.BtnShow, 'ADrewardbt_100M');
            }
        }
        _Special.SpecialBase = SpecialBase;
        class Special extends _Special.SpecialBase {
            lwgBtnClick() {
                Click._on(Click._Type.largen, this.btnVar('BtnSale'), this, null, null, () => {
                    ADManager.ShowReward(() => {
                        _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`);
                        TimerAdmin._frameOnce(5, this, () => {
                            _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`, new Laya.Point(Laya.stage.width / 2 - 200, Laya.stage.height / 2));
                        });
                        TimerAdmin._frameOnce(10, this, () => {
                            _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`, new Laya.Point(Laya.stage.width / 2 + 200, Laya.stage.height / 2));
                        });
                        TimerAdmin._frameOnce(15, this, () => {
                            _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`, new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2 - 200));
                        });
                        TimerAdmin._frameOnce(20, this, () => {
                            _Gold._getGoldAni_Heap(Laya.stage, 15, 55, 51, `Game/UI/Victory/jb.png`, new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2 + 200), null, null, () => {
                                _Gold._addGold(100000000000);
                                this.lwgCloseScene(this.Owner.name, () => {
                                    console.log(Laya.stage);
                                });
                            });
                        });
                    });
                });
                Click._on(Click._Type.largen, this.btnVar('BtnClose'), this, null, null, () => {
                    ADManager.TAPoint(TaT.BtnClick, 'ADrewardbt_100M');
                    this.lwgCloseScene();
                });
            }
            lwgOnDisable() {
                ADManager.TAPoint(TaT.PageLeave, '100Mpage');
            }
        }
        _Special.Special = Special;
    })(_Special || (_Special = {}));
    var _Special$1 = _Special.Special;

    var _Start;
    (function (_Start) {
        function _init() {
        }
        _Start._init = _init;
        class _StartScene extends Admin._SceneBase {
            moduleOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'mainpage');
                ADManager.TAPoint(TaT.BtnShow, 'start_main');
                _Gold.createGoldNode(38, 68);
            }
        }
        _Start._StartScene = _StartScene;
        class Start extends _StartScene {
            lwgOnAwake() {
            }
            lwgOnStart() {
                Admin._sceneAnimation.presentAni = Admin._sceneAnimation.type.stickIn.upLeftDownLeft;
            }
            lwgOpenAniAfter() {
                TimerAdmin._loop(2000, this, () => {
                    Animation2D.bomb_LeftRight(this.ImgVar('BtnStart'), 1.22, 250);
                }, true);
            }
            lwgBtnClick() {
                Click._on(Click._Type.largen, this.btnVar('BtnStart'), this, null, null, () => {
                    ADManager.TAPoint(TaT.BtnClick, 'start_main');
                    _SelectLevel._Data._pich.classify = _SelectLevel._Data._classify.animal;
                    this.lwgOpenScene(_SceneName.SelectLevel);
                });
                Click._on(Click._Type.largen, this.btnVar('BtnLimit'), this, null, null, () => {
                    _SelectLevel._Data._pich.classify = _SelectLevel._Data._classify.limit;
                    this.lwgOpenScene(_SceneName.SelectLevel);
                });
                Click._on(Click._Type.largen, this.btnVar('BtnConversion'), this, null, null, () => {
                    Dialogue.createHint_Middle('敬请期待！');
                });
                Click._on(Click._Type.noEffect, this.btnVar('BtnSpecial'), this, null, null, () => {
                    Dialogue.createHint_Middle('敬请期待！');
                });
            }
            lwgOnDisable() {
                ADManager.TAPoint(TaT.PageLeave, 'mainpage');
            }
        }
        _Start.Start = Start;
    })(_Start || (_Start = {}));
    var _Start$1 = _Start.Start;

    var _Victory;
    (function (_Victory) {
        let _Event;
        (function (_Event) {
            _Event["_Settle_CloseScene"] = "_Settle_CloseScene";
        })(_Event = _Victory._Event || (_Victory._Event = {}));
        function _init() {
        }
        _Victory._init = _init;
        class VictoryBase extends Admin._SceneBase {
            lwgOnAwake() {
                ADManager.TAPoint(TaT.PageShow, 'endpage');
                ADManager.TAPoint(TaT.BtnShow, 'ADrewardbt_end');
                ADManager.TAPoint(TaT.BtnShow, 'close_end');
            }
        }
        _Victory.VictoryBase = VictoryBase;
        class Victory extends _Victory.VictoryBase {
            lwgOnAwake() {
                RecordManager.stopAutoRecord();
                if (_Share._Data._photo._base64) {
                    this.ImgVar('Photo').skin = _Share._Data._photo._base64;
                    this.ImgVar('Photo').scale(0.75, 0.75);
                }
                if (_Game._ColoursPencils._switch && _Special._data._lastDate
                    !== DateAdmin._date.date) {
                    this.ImgVar('Evaluate').skin = 'Game/UI/Victory/sbml.png';
                }
                else {
                    if (_Game._GeneralPencils._pitchName == 'colours') {
                        this.ImgVar('Evaluate').skin = 'Game/UI/Victory/jmjl.png';
                    }
                    else {
                        this.ImgVar('Evaluate').skin = 'Game/UI/Victory/pptt.png';
                    }
                }
            }
            lwgOpenAniAfter() {
                this.AniVar('NoAni_Remark').play(0, false);
                this.AniVar('NoAni_Remark').on(Laya.Event.LABEL, this, (e) => {
                    PalyAudio.playVictorySound();
                    OldEffects$1.createFireworks(Laya.stage, 40, 430, 200);
                    OldEffects$1.createFireworks(Laya.stage, 40, 109, 200);
                    OldEffects$1.createLeftOrRightJet(Laya.stage, 'right', 40, 720, 300);
                    OldEffects$1.createLeftOrRightJet(Laya.stage, 'left', 40, 0, 300);
                    console.log(_Game._GeneralPencils._pitchName, _Special._data._lastDate);
                    if (_Game._ColoursPencils._switch && _Special._data._lastDate
                        !== DateAdmin._date.date) {
                        _Special._data._lastDate = DateAdmin._date.date;
                        this.ImgVar('Evaluate').skin = 'Game/UI/Victory/sbml.png';
                        this.lwgOpenScene(_SceneName.Special, false);
                    }
                    else {
                        if (_Game._GeneralPencils._pitchName == 'colours') {
                            this.ImgVar('Evaluate').skin = 'Game/UI/Victory/jmjl.png';
                        }
                        else {
                            this.ImgVar('Evaluate').skin = 'Game/UI/Victory/pptt.png';
                        }
                    }
                    let num = 25;
                    Click._on(Click._Type.largen, this.btnVar('BtnNext'), this, null, null, () => {
                        if (this['BtnNextSwitch']) {
                            return;
                        }
                        else {
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
                        }
                        else {
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
                });
            }
            lwgOnDisable() {
                ADManager.TAPoint(TaT.PageLeave, 'endpage');
            }
        }
        _Victory.Victory = Victory;
    })(_Victory || (_Victory = {}));
    var _Victory$1 = _Victory.Victory;

    var SceneName;
    (function (SceneName) {
    })(SceneName || (SceneName = {}));
    class LwgInit extends _LwgInitScene {
        lwgOnAwake() {
            _LwgInit._pkgInfo = [];
            Admin._platform.name = Admin._platform.tpye.Bytedance;
            Admin._sceneAnimation.presentAni = Admin._sceneAnimation.type.stickIn.random;
            Admin._moudel = {
                _PreLoad: _PreLoad,
                _Guide: _Guide,
                _Start: _Start,
                _Game: _Game,
                _Task: _Task,
                _PreLoadStep: _PreLoadStep,
                _SelectLevel: _SelectLevel,
                _Settle: _Settle,
                _Victory: _Victory,
                _Share: _Share,
                _Special: _Special,
                _PropTry: _PropTry,
                _AdsHint: _AdsHint,
                _Compound: _Compound,
            };
            new ZJADMgr();
        }
    }

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            this.newScene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = this.newScene.addChild(new Laya.Camera(0, 0.1, 100));
            camera.transform.translate(new Laya.Vector3(0, 6, 9.5));
            camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
            var directionLight = new Laya.DirectionLight();
            this.newScene.addChild(directionLight);
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            var mat = directionLight.transform.worldMatrix;
            mat.setForward(new Laya.Vector3(-1.0, -1.0, -1.0));
            directionLight.transform.worldMatrix = mat;
            var plane = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(10, 10, 10, 10)));
            var planeMat = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/grass.png", Laya.Handler.create(this, function (tex) {
                planeMat.albedoTexture = tex;
            }));
            var tilingOffset = planeMat.tilingOffset;
            tilingOffset.setValue(5, 5, 0, 0);
            planeMat.tilingOffset = tilingOffset;
            plane.meshRenderer.material = planeMat;
            var planeStaticCollider = plane.addComponent(Laya.PhysicsCollider);
            var planeShape = new Laya.BoxColliderShape(10, 0, 10);
            planeStaticCollider.colliderShape = planeShape;
            planeStaticCollider.friction = 2;
            planeStaticCollider.restitution = 0.3;
            this.mat1 = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/wood.jpg", Laya.Handler.create(this, function (tex) {
                this.mat1.albedoTexture = tex;
                Laya.timer.once(100, this, function () {
                    this.addBox();
                });
            }));
        }
        addBox() {
            var box = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.75, 0.5, 0.5)));
            box.meshRenderer.material = this.mat1;
            var transform = box.transform;
            var pos = transform.position;
            pos.setValue(0, 10, 0);
            transform.position = pos;
            var rigidBody = box.addComponent(Laya.Rigidbody3D);
            var boxShape = new Laya.BoxColliderShape(0.75, 0.5, 0.5);
            rigidBody.colliderShape = boxShape;
            rigidBody.mass = 10;
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/Frame/_GamePencilItem.ts", _GamePencilItem);
            reg("script/Frame/_GameBlinkItem.ts", _GameBlinkItem);
            reg("script/Frame/LwgInit.ts", LwgInit);
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Scene/Lwginit.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
