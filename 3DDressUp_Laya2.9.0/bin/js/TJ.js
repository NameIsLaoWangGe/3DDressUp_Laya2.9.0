var DP = 
{
    Basic:
    {
        appGuid:"d8fe0ff2-3c0c-35d4-6196-1da9e6725232",
        productName:"涂鸦小画手",
        packageName:"com.qingkuijoy.tyxhs.toutiao",
        versionName:"1.0.1",
        versionCode:2,
        channel:"ZJTD_AppRt",
    },
    XIAOMI:
    {
        QG:   //小米快游戏
        {
            insertId:null,
            videoId:null,
        },
    },
    WX:   //微信小游戏
    {
        appId:null,
        bannerId:null,
        insertId:null,
        videoId:null,
    },
    VIVO:
    {
        QG:   //vivo小游戏
        {
            bannerId:"a06f50fe4849413eb2644412734197dc",
            insertId:"0298c76ee2ec44258056cc357930469d",
            videoId:"0f37dd9eec1a442fac0dfc39723b9342",
            nativeId:"99351dc533db46e29f0260cf8146bc1b",
            nativeCustomInsert:null,
        },
    },
    UC:   //UC小游戏
    {
        appid:null,
        clientid:null,
    },
    TT:   //字节跳动小游戏
    {
        appId:"tt62dc1461fde789ab",
        bannerId:"1acmk6c6lkbonh0049",
        insertId:"17al0aik4hmd11bp48",
        videoId:"aekluq02s4g4aptb68",
    },
    ReYun:   //热云统计
    {
        appId:"b1c86215b2fc92180391d841a9a2fdad",
    },
    QTTGame:   //趣头条游戏
    {
        appId:null,
        appKey:null,
    },
    QQ:   //QQ小游戏
    {
        appId:null,
        bannerId:null,
        insertId:null,
        videoId:null,
    },
    OPPO:
    {
        QG:   //oppo小游戏
        {
            appId:"30328407",
            bannerId:"214580",
            insertId:null,
            videoId:"214589",
            nativeId:"221104",
            nativeCustomInsert:null,
            gameBannerId:null,
            gamePortalId:null,
        },
    },
    MZ:   //魅族快游戏
    {
        bannerId:null,
        insertId:null,
        videoId:null,
    },
    Kwai:   //快手小游戏
    {
        appId:null,
        videoId:null,
    },
    HG:   //Hago游戏
    {
        videoId:0,
    },
    HBS:   //华为快游戏
    {
        appId:null,
    },
    Adwending:   //双阳小游戏
    {
        username:null,
        gameid:0,
    },
}

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*
DESKTOP-BT8F2H9
Microsoft Windows NT 10.0.17763.0
中国标准时间 2020/11/10 20:54:14
*/
var TJ;
(function (TJ) {
    var Define;
    (function (Define) {
        var Channel;
        (function (Channel) {
            var Android;
            (function (Android) {
                Android.GooglePlay = "GooglePlay";
                Android.MiGuTV = "MiGuTV";
                Android._233 = "233";
                Android.wdj = "wdj";
                Android.aiqiyi = "aiqiyi";
                Android.mailaing3 = "mailaing3";
                Android.mintegral = "mintegral";
                Android.tongyong2 = "tongyong2";
                Android.egame = "egame";
                Android.mailiang = "mailiang";
                Android.agg = "agg";
                Android.test = "test";
                Android.baidu = "baidu";
                Android.tianzi = "tianzi";
                Android._4399 = "4399";
                Android.nby = "nby";
                Android.wifi = "wifi";
                Android.baidu2 = "baidu2";
                Android.tianzi1 = "tianzi1";
                Android._43992 = "43992";
                Android.haoyou = "haoyou";
                Android.toutiao = "toutiao";
                Android.tongyong = "tongyong";
                Android.xiaoqi = "xiaoqi";
                Android.qingning = "qingning";
                Android.coolpad = "coolpad";
                Android.jinli = "jinli";
                Android.zhongxing = "zhongxing";
                Android.samsung = "samsung";
                Android.taptap = "taptap";
                Android.yyb = "yyb";
                Android.jiuyou = "jiuyou";
                Android.yyh = "yyh";
                Android.qihoo = "qihoo";
                Android.lenovo = "lenovo";
                Android.huawei = "huawei";
                Android.meizu = "meizu";
                Android.xiaomi = "xiaomi";
                Android.vivo = "vivo";
                Android.oppo = "oppo";
            })(Android = Channel.Android || (Channel.Android = {}));
            var iOS;
            (function (iOS) {
                iOS.AppStore_iOS = "AppStore_iOS";
            })(iOS = Channel.iOS || (Channel.iOS = {}));
            var AppRt;
            (function (AppRt) {
                AppRt.HUAWEI_AppRt = "HUAWEI_AppRt";
                AppRt._4399_AppRt = "4399_AppRt";
                AppRt.WX_AppRt = "WX_AppRt";
                AppRt.XIAOMI_AppRt = "XIAOMI_AppRt";
                AppRt.VIVO_AppRt = "VIVO_AppRt";
                AppRt.OPPO_AppRt = "OPPO_AppRt";
                AppRt.QTT_AppRt = "QTT_AppRt";
                AppRt.ZJTD_AppRt = "ZJTD_AppRt";
                AppRt.Kwai_AppRt = "Kwai_AppRt";
                AppRt.UC_AppRt = "UC_AppRt";
                AppRt.SQ_AppRt = "SQ_AppRt";
                AppRt.SY_AppRt = "SY_AppRt";
                AppRt.MZ_AppRt = "MZ_AppRt";
                AppRt.HG_AppRt = "HG_AppRt";
            })(AppRt = Channel.AppRt || (Channel.AppRt = {}));
        })(Channel = Define.Channel || (Define.Channel = {}));
    })(Define = TJ.Define || (TJ.Define = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Define;
    (function (Define) {
        var Event;
        (function (Event) {
            Event[Event["Click"] = 0] = "Click";
            Event[Event["Close"] = 1] = "Close";
            Event[Event["Expose"] = 2] = "Expose";
            Event[Event["NoAds"] = 3] = "NoAds";
            Event[Event["Reward"] = 4] = "Reward";
            Event[Event["NoReward"] = 5] = "NoReward";
            Event[Event["Success"] = 6] = "Success";
            Event[Event["Failure"] = 7] = "Failure";
            Event[Event["Error"] = 8] = "Error";
            Event[Event["Cancel"] = 9] = "Cancel";
            Event[Event["Complete"] = 10] = "Complete";
            Event[Event["Statistic"] = 11] = "Statistic";
        })(Event = Define.Event || (Define.Event = {}));
    })(Define = TJ.Define || (TJ.Define = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Define;
    (function (Define) {
        var Platform;
        (function (Platform) {
            Platform[Platform["Unknown"] = 0] = "Unknown";
            Platform[Platform["Android"] = 1] = "Android";
            Platform[Platform["iOS"] = 2] = "iOS";
            Platform[Platform["AppRt"] = 3] = "AppRt";
        })(Platform = Define.Platform || (Define.Platform = {}));
    })(Define = TJ.Define || (TJ.Define = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Define;
    (function (Define) {
        var SDK;
        (function (SDK) {
            SDK.version = "3.1.3.0";
        })(SDK = Define.SDK || (Define.SDK = {}));
    })(Define = TJ.Define || (TJ.Define = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Engine;
    (function (Engine) {
        var Android;
        (function (Android) {
            var Java = /** @class */ (function () {
                function Java() {
                }
                Java.Send = function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    var _a;
                    if (this.javaClass == null) {
                        if (window['PlatformClass'] != null) {
                            this.javaClass = window['PlatformClass'].createClass("tj.Java");
                        }
                    }
                    if (this.javaClass != null) {
                        return (_a = this.javaClass).call.apply(_a, params);
                    }
                    return "";
                };
                Java.Set = function (className, fieldName, value, obj) {
                    Java.Send("Set", className, fieldName, value, obj);
                };
                Java.Get = function (className, fieldName, obj) {
                    return Java.Send("Get", className, fieldName, obj);
                };
                Java.Call = function (className, methodName, values, obj) {
                    return Java.Send("Call", className, methodName, values, obj);
                };
                Java.New = function (className, values) {
                    return Java.Send("New", className, values);
                };
                Java.Class = function (obj) {
                    return Java.Send("Class", obj);
                };
                Java.GetInt = function (obj) {
                    return Java.Send("GetInt", "" + obj);
                };
                Java.GetFloat = function (obj) {
                    return Java.Send("GetFloat", "" + obj);
                };
                Java.GetBoolean = function (obj) {
                    return Java.Send("GetBoolean", "" + obj);
                };
                Java.GetString = function (obj) {
                    return Java.Send("GetString", "" + obj);
                };
                Java.SetValue = function (value, javaSignature) {
                    if (typeof value == 'number') {
                        return Java.Send("SetNumber", value, javaSignature);
                    }
                    return Java.Send("SetValue", value);
                };
                return Java;
            }());
            Android.Java = Java;
        })(Android = Engine.Android || (Engine.Android = {}));
    })(Engine = TJ.Engine || (TJ.Engine = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Engine;
    (function (Engine) {
        var iOS;
        (function (iOS) {
            var Objc = /** @class */ (function () {
                function Objc() {
                }
                Objc.Send = function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    var _a;
                    if (this.objcClass == null) {
                        if (window['PlatformClass'] != null) {
                            this.objcClass = window['PlatformClass'].createClass("TJ_Objc");
                        }
                    }
                    if (this.objcClass != null) {
                        return (_a = this.objcClass).call.apply(_a, params);
                    }
                    return "";
                };
                Objc.Set = function (className, fieldName, value, obj) {
                    Objc.Send("Set", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", className, fieldName, value, obj);
                };
                Objc.Get = function (className, fieldName, obj) {
                    return Objc.Send("Get", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", className, fieldName, obj);
                };
                Objc.Call = function (className, methodName, values, obj) {
                    return Objc.Send("Call_className:Call_methodName:Call_values:Call_obj:", className, methodName, values, obj);
                };
                Objc.New = function (className) {
                    return Objc.Send("New_className:", className);
                };
                Objc.Class = function (obj) {
                    return Objc.Send("Class_obj:", obj);
                };
                Objc.GetInt = function (obj) {
                    return Objc.Send("GetObj:", obj);
                };
                Objc.GetFloat = function (obj) {
                    return Objc.Send("GetObj:", obj);
                };
                Objc.GetBoolean = function (obj) {
                    return Objc.Send("GetObj:", obj);
                };
                Objc.GetString = function (obj) {
                    return Objc.Send("GetObj:", obj);
                };
                Objc.SetValue = function (value) {
                    return Objc.Send("SetObj:", value);
                };
                return Objc;
            }());
            iOS.Objc = Objc;
        })(iOS = Engine.iOS || (Engine.iOS = {}));
    })(Engine = TJ.Engine || (TJ.Engine = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Engine;
    (function (Engine) {
        var RuntimeInfo = /** @class */ (function () {
            function RuntimeInfo() {
            }
            Object.defineProperty(RuntimeInfo, "windowSize", {
                get: function () {
                    return { width: Laya.Browser.clientWidth, height: Laya.Browser.clientHeight };
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(RuntimeInfo, "platform", {
                get: function () {
                    if (Laya.Browser.onQGMiniGame ||
                        Laya.Browser.onVVMiniGame ||
                        Laya.Browser.onQQMiniGame ||
                        Laya.Browser.onWeiXin) {
                        return TJ.Define.Platform.AppRt;
                    }
                    if (Laya.Browser.onAndroid && window['PlatformClass'] != null) {
                        return TJ.Define.Platform.Android;
                    }
                    if (Laya.Browser.onIOS && window['PlatformClass'] != null) {
                        return TJ.Define.Platform.iOS;
                    }
                    if (Laya.Browser.onPC ||
                        Laya.Browser.onMobile) {
                        return TJ.Define.Platform.AppRt;
                    }
                    return TJ.Define.Platform.Unknown;
                },
                enumerable: true,
                configurable: true
            });
            return RuntimeInfo;
        }());
        Engine.RuntimeInfo = RuntimeInfo;
    })(Engine = TJ.Engine || (TJ.Engine = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var MD5 = /** @class */ (function () {
            function MD5() {
                this.hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
                this.b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
            }
            /*
            * These are the privates you'll usually want to call
            * They take string arguments and return either hex or base-64 encoded strings
            */
            MD5.prototype.hex_md5 = function (s) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))); }; //这个函数就行了，
            MD5.prototype.b64_md5 = function (s) { return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s))); };
            MD5.prototype.any_md5 = function (s, e) { return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e); };
            MD5.prototype.hex_hmac_md5 = function (k, d) { return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
            MD5.prototype.b64_hmac_md5 = function (k, d) { return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
            MD5.prototype.any_hmac_md5 = function (k, d, e) { return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e); };
            /*
            * Calculate the MD5 of a raw string
            */
            MD5.prototype.rstr_md5 = function (s) {
                return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
            };
            /*
            * Calculate the HMAC-MD5, of a key and some data (raw strings)
            */
            MD5.prototype.rstr_hmac_md5 = function (key, data) {
                var bkey = this.rstr2binl(key);
                if (bkey.length > 16)
                    bkey = this.binl_md5(bkey, key.length * 8);
                var ipad = Array(16), opad = Array(16);
                for (var i = 0; i < 16; i++) {
                    ipad[i] = bkey[i] ^ 0x36363636;
                    opad[i] = bkey[i] ^ 0x5C5C5C5C;
                }
                var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
                return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
            };
            /*
            * Convert a raw string to a hex string
            */
            MD5.prototype.rstr2hex = function (input) {
                try {
                    this.hexcase;
                }
                catch (e) {
                    this.hexcase = 0;
                }
                var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
                var output = "";
                var x;
                for (var i = 0; i < input.length; i++) {
                    x = input.charCodeAt(i);
                    output += hex_tab.charAt((x >>> 4) & 0x0F)
                        + hex_tab.charAt(x & 0x0F);
                }
                return output;
            };
            /*
            * Convert a raw string to a base-64 string
            */
            MD5.prototype.rstr2b64 = function (input) {
                try {
                    this.b64pad;
                }
                catch (e) {
                    this.b64pad = '';
                }
                var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var output = "";
                var len = input.length;
                for (var i = 0; i < len; i += 3) {
                    var triplet = (input.charCodeAt(i) << 16)
                        | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                        | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
                    for (var j = 0; j < 4; j++) {
                        if (i * 8 + j * 6 > input.length * 8)
                            output += this.b64pad;
                        else
                            output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
                    }
                }
                return output;
            };
            /*
            * Convert a raw string to an arbitrary string encoding
            */
            MD5.prototype.rstr2any = function (input, encoding) {
                var divisor = encoding.length;
                var i, j, q, x, quotient;
                /* Convert to an array of 16-bit big-endian values, forming the dividend */
                var dividend = Array(Math.ceil(input.length / 2));
                for (i = 0; i < dividend.length; i++) {
                    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
                }
                /*
                * Repeatedly perform a long division. The binary array forms the dividend,
                * the length of the encoding is the divisor. Once computed, the quotient
                * forms the dividend for the next step. All remainders are stored for later
                * use.
                */
                var full_length = Math.ceil(input.length * 8 /
                    (Math.log(encoding.length) / Math.log(2)));
                var remainders = Array(full_length);
                for (j = 0; j < full_length; j++) {
                    quotient = Array();
                    x = 0;
                    for (i = 0; i < dividend.length; i++) {
                        x = (x << 16) + dividend[i];
                        q = Math.floor(x / divisor);
                        x -= q * divisor;
                        if (quotient.length > 0 || q > 0)
                            quotient[quotient.length] = q;
                    }
                    remainders[j] = x;
                    dividend = quotient;
                }
                /* Convert the remainders to the output string */
                var output = "";
                for (i = remainders.length - 1; i >= 0; i--)
                    output += encoding.charAt(remainders[i]);
                return output;
            };
            /*
            * Encode a string as utf-8.
            * For efficiency, this assumes the input is valid utf-16.
            */
            MD5.prototype.str2rstr_utf8 = function (input) {
                var output = "";
                var i = -1;
                var x, y;
                while (++i < input.length) {
                    /* Decode utf-16 surrogate pairs */
                    x = input.charCodeAt(i);
                    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
                    if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                        x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                        i++;
                    }
                    /* Encode output as utf-8 */
                    if (x <= 0x7F)
                        output += String.fromCharCode(x);
                    else if (x <= 0x7FF)
                        output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
                    else if (x <= 0xFFFF)
                        output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
                    else if (x <= 0x1FFFFF)
                        output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
                }
                return output;
            };
            /*
            * Encode a string as utf-16
            */
            MD5.prototype.str2rstr_utf16le = function (input) {
                var output = "";
                for (var i = 0; i < input.length; i++)
                    output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
                return output;
            };
            MD5.prototype.str2rstr_utf16be = function (input) {
                var output = "";
                for (var i = 0; i < input.length; i++)
                    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
                return output;
            };
            /*
            * Convert a raw string to an array of little-endian words
            * Characters >255 have their high-byte silently ignored.
            */
            MD5.prototype.rstr2binl = function (input) {
                var output = Array(input.length >> 2);
                for (var i = 0; i < output.length; i++)
                    output[i] = 0;
                for (var i = 0; i < input.length * 8; i += 8)
                    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
                return output;
            };
            /*
            * Convert an array of little-endian words to a string
            */
            MD5.prototype.binl2rstr = function (input) {
                var output = "";
                for (var i = 0; i < input.length * 32; i += 8)
                    output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
                return output;
            };
            /*
            * Calculate the MD5 of an array of little-endian words, and a bit length.
            */
            MD5.prototype.binl_md5 = function (x, len) {
                /* append padding */
                x[len >> 5] |= 0x80 << ((len) % 32);
                x[(((len + 64) >>> 9) << 4) + 14] = len;
                var a = 1732584193;
                var b = -271733879;
                var c = -1732584194;
                var d = 271733878;
                for (var i = 0; i < x.length; i += 16) {
                    var olda = a;
                    var oldb = b;
                    var oldc = c;
                    var oldd = d;
                    a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                    d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                    c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                    b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                    a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                    d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                    c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                    b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                    a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                    d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                    c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                    b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                    a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                    d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                    c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                    b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
                    a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                    d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                    c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                    b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                    a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                    d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                    c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                    b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                    a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                    d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                    c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                    b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                    a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                    d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                    c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                    b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
                    a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                    d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                    c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                    b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                    a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                    d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                    c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                    b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                    a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                    d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                    c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                    b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                    a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                    d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                    c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                    b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
                    a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                    d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                    c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                    b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                    a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                    d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                    c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                    b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                    a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                    d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                    c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                    b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                    a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                    d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                    c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                    b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
                    a = this.safe_add(a, olda);
                    b = this.safe_add(b, oldb);
                    c = this.safe_add(c, oldc);
                    d = this.safe_add(d, oldd);
                }
                return [a, b, c, d];
            };
            /*
            * These privates implement the four basic operations the algorithm uses.
            */
            MD5.prototype.md5_cmn = function (q, a, b, x, s, t) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
            };
            MD5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
                return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
            };
            MD5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
                return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
            };
            MD5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
                return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
            };
            MD5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
                return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
            };
            /*
            * Add integers, wrapping at 2^32. This uses 16-bit operations internally
            * to work around bugs in some JS interpreters.
            */
            MD5.prototype.safe_add = function (x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            };
            /*
            * Bitwise rotate a 32-bit number to the left.
            */
            MD5.prototype.bit_rol = function (num, cnt) {
                return (num << cnt) | (num >>> (32 - cnt));
            };
            return MD5;
        }());
        Common.MD5 = MD5;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Guid = /** @class */ (function () {
            function Guid() {
            }
            Guid.New = function () {
                var date = new Date();
                var str = date.getTime().toString(16);
                while (str.length < 32) {
                    str += Math.floor(Math.random() * 16).toString(16);
                }
                var md5 = new Common.MD5();
                return md5.hex_md5(str);
            };
            return Guid;
        }());
        Common.Guid = Guid;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Num_ = /** @class */ (function () {
            function Num_(value) {
                this._value = value;
            }
            Object.defineProperty(Num_.prototype, "value", {
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            Num_.prototype.toString = function () {
                return "" + this.value;
            };
            return Num_;
        }());
        var Int_ = /** @class */ (function (_super) {
            __extends(Int_, _super);
            function Int_() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Int_.prototype, "value", {
                get: function () {
                    return Math.floor(this._value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Int_.prototype, "javaSignature", {
                get: function () {
                    return "I";
                },
                enumerable: true,
                configurable: true
            });
            return Int_;
        }(Num_));
        Common.Int_ = Int_;
        var Long_ = /** @class */ (function (_super) {
            __extends(Long_, _super);
            function Long_() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Long_.prototype, "value", {
                get: function () {
                    return Math.floor(this._value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Long_.prototype, "javaSignature", {
                get: function () {
                    return "J";
                },
                enumerable: true,
                configurable: true
            });
            return Long_;
        }(Num_));
        Common.Long_ = Long_;
        var Float_ = /** @class */ (function (_super) {
            __extends(Float_, _super);
            function Float_() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Float_.prototype, "javaSignature", {
                get: function () {
                    return "F";
                },
                enumerable: true,
                configurable: true
            });
            return Float_;
        }(Num_));
        Common.Float_ = Float_;
        var Bool_ = /** @class */ (function () {
            function Bool_(value) {
                this._value = value;
            }
            Object.defineProperty(Bool_.prototype, "value", {
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            Bool_.prototype.toString = function () {
                return "" + this.value;
            };
            Object.defineProperty(Bool_.prototype, "javaSignature", {
                get: function () {
                    return "Z";
                },
                enumerable: true,
                configurable: true
            });
            return Bool_;
        }());
        Common.Bool_ = Bool_;
        var String_ = /** @class */ (function () {
            function String_(value) {
                this._value = value;
            }
            Object.defineProperty(String_.prototype, "value", {
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            String_.prototype.toString = function () {
                return "" + this.value;
            };
            Object.defineProperty(String_.prototype, "javaSignature", {
                get: function () {
                    return "Ljava/lang/String;";
                },
                enumerable: true,
                configurable: true
            });
            String_.Format = function (format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (format != null) {
                    for (var index = 0; index < args.length; index++) {
                        format = format.replace("{" + index + "}", args[index]);
                    }
                }
                return format;
            };
            String_.IsNullOrEmpty = function (value) {
                if (typeof value != "string")
                    return true;
                if (value == null)
                    return true;
                if (value.length < 1)
                    return true;
                return false;
            };
            return String_;
        }());
        Common.String_ = String_;
        var Date_ = /** @class */ (function () {
            function Date_() {
            }
            Object.defineProperty(Date_, "nowSeconds", {
                get: function () {
                    return Date.now() / 1000.0;
                },
                enumerable: true,
                configurable: true
            });
            Date_.Format = function (date, fmt) {
                var opt = {
                    "y+": date.getFullYear().toString(),
                    "M+": (date.getMonth() + 1).toString(),
                    "d+": date.getDate().toString(),
                    "H+": date.getHours().toString(),
                    "m+": date.getMinutes().toString(),
                    "s+": date.getSeconds().toString(),
                    "S+": date.getMilliseconds().toString() // 毫
                    // 有其他格式化字符需求可以继续添加，必须转化成字符串
                };
                for (var k in opt) {
                    var ret = new RegExp("(" + k + ")").exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
                    }
                    ;
                }
                ;
                return fmt;
            };
            return Date_;
        }());
        Common.Date_ = Date_;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Action = /** @class */ (function () {
            function Action() {
                var func = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    func[_i] = arguments[_i];
                }
                this.invocationList = [];
                for (var _a = 0, func_1 = func; _a < func_1.length; _a++) {
                    var item = func_1[_a];
                    if (typeof item == 'function') {
                        this.Add(item);
                    }
                }
            }
            Action.prototype.GetInvocationList = function () {
                return this.invocationList;
            };
            Action.prototype.Add = function (func) {
                if (func != null) {
                    if (func instanceof Action) {
                        for (var _i = 0, _a = func.invocationList; _i < _a.length; _i++) {
                            var item = _a[_i];
                            this.Add(item);
                        }
                    }
                    else {
                        this.invocationList.push(func);
                    }
                }
                return this;
            };
            Action.prototype.Remove = function (func) {
                if (func != null) {
                    var id = void 0;
                    if (func instanceof Action) {
                        for (var _i = 0, _a = func.invocationList; _i < _a.length; _i++) {
                            var item = _a[_i];
                            this.Remove(item);
                        }
                    }
                    else {
                        id = this.invocationList.indexOf(func);
                        if (id >= 0) {
                            this.invocationList.splice(id, 1);
                        }
                    }
                }
            };
            Action.prototype.Clear = function () {
                this.invocationList = [];
            };
            Action.prototype.Invoke = function () {
                var param = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    param[_i] = arguments[_i];
                }
                for (var _a = 0, _b = this.invocationList; _a < _b.length; _a++) {
                    var item = _b[_a];
                    if (item != null) {
                        try {
                            item.apply(void 0, param);
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                }
            };
            return Action;
        }());
        Common.Action = Action;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Android;
        (function (Android) {
            var Java = /** @class */ (function () {
                function Java() {
                }
                Java.SerializeObjects = function (objs) {
                    var values = [];
                    for (var _i = 0, objs_1 = objs; _i < objs_1.length; _i++) {
                        var item = objs_1[_i];
                        values.push("" + item);
                    }
                    return JSON.stringify(values);
                };
                Java.Set = function (className, fieldName, value, obj) {
                    TJ.Engine.Android.Java.Set(className, fieldName, "" + value, "" + obj);
                };
                Java.Get = function (className, fieldName, obj) {
                    var k = TJ.Engine.Android.Java.Get(className, fieldName, "" + obj);
                    return Object_.Get(k);
                };
                Java.Call = function (className, methodName, values, obj) {
                    var k = TJ.Engine.Android.Java.Call(className, methodName, this.SerializeObjects(values), "" + obj);
                    return Object_.Get(k);
                };
                Java.New = function (className, values) {
                    var k = TJ.Engine.Android.Java.New(className, this.SerializeObjects(values));
                    return Object_.Get(k);
                };
                Java.Class = function (obj) {
                    return TJ.Engine.Android.Java.Class("" + obj);
                };
                Java.GetInt = function (obj) {
                    return TJ.Engine.Android.Java.GetInt("" + obj);
                };
                Java.GetFloat = function (obj) {
                    return TJ.Engine.Android.Java.GetFloat("" + obj);
                };
                Java.GetBoolean = function (obj) {
                    return TJ.Engine.Android.Java.GetBoolean("" + obj);
                };
                Java.GetString = function (obj) {
                    return TJ.Engine.Android.Java.GetString("" + obj);
                };
                Java.SetValue = function (value) {
                    var k = TJ.Engine.Android.Java.SetValue(value.value, value.javaSignature);
                    return Object_.Get(k);
                };
                return Java;
            }());
            Android.Java = Java;
            var Object_ = /** @class */ (function () {
                function Object_(obj) {
                    this.objectIndex = obj;
                }
                Object_.prototype.toString = function () {
                    return this.objectIndex;
                };
                Object_.Get = function (obj) {
                    if (typeof obj == 'string') {
                        return new Object_(obj);
                    }
                    else {
                        return Java.SetValue(obj);
                    }
                };
                Object_.prototype.GetValue = function (type) {
                    if (type == null) {
                        return null;
                    }
                    var obj;
                    if (type.prototype == Common.Int_.prototype) {
                        obj = new Common.Int_(Java.GetInt(this));
                    }
                    if (type.prototype == Common.Float_.prototype) {
                        obj = new Common.Float_(Java.GetFloat(this));
                    }
                    if (type.prototype == Common.Bool_.prototype) {
                        obj = new Common.Bool_(Java.GetBoolean(this));
                    }
                    if (type.prototype == Common.String_.prototype) {
                        obj = new Common.String_(Java.GetString(this));
                    }
                    return obj;
                };
                return Object_;
            }());
            Android.Object_ = Object_;
            var JavaClass = /** @class */ (function () {
                function JavaClass(className) {
                    this.className = className;
                }
                JavaClass.prototype.SetStatic = function (fieldName, value) {
                    Java.Set(this.className, fieldName, JavaObject.SetValue(value), null);
                };
                JavaClass.prototype.GetStatic = function (type, fieldName) {
                    var obj = Java.Get(this.className, fieldName, null);
                    return JavaObject.GetValue(type, obj);
                };
                JavaClass.prototype.CallStatic = function () {
                    var s = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        s[_i] = arguments[_i];
                    }
                    var a = s.shift();
                    if (typeof a == 'string') {
                        Java.Call(this.className, a, JavaObject.SetValues.apply(JavaObject, s), null);
                    }
                    else {
                        var b = s.shift();
                        var obj = Java.Call(this.className, b, JavaObject.SetValues.apply(JavaObject, s), null);
                        return JavaObject.GetValue(a, obj);
                    }
                };
                JavaClass.prototype.New = function () {
                    var values = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        values[_i] = arguments[_i];
                    }
                    return Java.New(this.className, JavaObject.SetValues.apply(JavaObject, values));
                };
                return JavaClass;
            }());
            Android.JavaClass = JavaClass;
            var JavaObject = /** @class */ (function () {
                function JavaObject(obj, clazz) {
                    this.javaClass = clazz;
                    this.object = obj;
                }
                JavaObject.prototype.toString = function () {
                    return "" + this.object;
                };
                JavaObject.New = function (className) {
                    var values = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        values[_i - 1] = arguments[_i];
                    }
                    var ajc = new JavaClass(className);
                    var obj = ajc.New.apply(ajc, values);
                    return new JavaObject(obj, ajc);
                };
                JavaObject.Get = function (obj) {
                    var ajc = new JavaClass(Java.Class(obj));
                    return new JavaObject(obj, ajc);
                };
                JavaObject.prototype.Set = function (fieldName, value) {
                    var v;
                    if (value instanceof JavaObject) {
                        v = value.object;
                    }
                    else {
                        v = Object_.Get(value);
                    }
                    Java.Set(this.javaClass.className, fieldName, v, this.object);
                };
                JavaObject.prototype.Get = function (type, fieldName) {
                    var obj = Java.Get(this.javaClass.className, fieldName, this.object);
                    return JavaObject.GetValue(type, obj);
                };
                JavaObject.prototype.Call = function () {
                    var s = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        s[_i] = arguments[_i];
                    }
                    var a = s.shift();
                    if (typeof a == 'string') {
                        Java.Call(this.javaClass.className, a, JavaObject.SetValues.apply(JavaObject, s), this.object);
                    }
                    else {
                        var b = s.shift();
                        var obj = Java.Call(this.javaClass.className, b, JavaObject.SetValues.apply(JavaObject, s), this.object);
                        return JavaObject.GetValue(a, obj);
                    }
                };
                JavaObject.GetValue = function (type, obj) {
                    var res;
                    if (type.prototype == JavaObject.prototype) {
                        res = JavaObject.Get(obj);
                    }
                    else {
                        res = obj.GetValue(type);
                    }
                    return res;
                };
                JavaObject.SetValue = function (value) {
                    if (value instanceof JavaObject) {
                        return value.object;
                    }
                    else {
                        return Object_.Get(value);
                    }
                };
                JavaObject.SetValues = function () {
                    var value = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        value[_i] = arguments[_i];
                    }
                    var values = [];
                    for (var _a = 0, value_1 = value; _a < value_1.length; _a++) {
                        var item = value_1[_a];
                        values.push(JavaObject.SetValue(item));
                    }
                    return values;
                };
                return JavaObject;
            }());
            Android.JavaObject = JavaObject;
        })(Android = Common.Android || (Common.Android = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var externCallbacks = [];
        setInterval(function () {
            while (externCallbacks.length > 0) {
                var obj = externCallbacks.shift();
                CallbackManager.Get(obj.guid).Run(TJ.Define.Event[obj.key], obj.json);
            }
        }, 500);
        window["ExternCallback"] = function (guid, key, json) {
            console.log("ExternCallback = " + guid + " - " + key + " - " + json);
            var obj = {};
            obj.guid = guid;
            obj.key = key;
            obj.json = json;
            externCallbacks.push(obj);
        };
        var CallbackManager = /** @class */ (function () {
            function CallbackManager() {
            }
            CallbackManager.Set = function (cbi) {
                var guid = Common.Guid.New();
                this.callbacks[guid] = cbi;
                return guid;
            };
            CallbackManager.Get = function (guid) {
                var cbi = this.callbacks[guid];
                if (cbi == null) {
                    cbi = new CallbackInfo();
                }
                return cbi;
            };
            CallbackManager.callbacks = {};
            return CallbackManager;
        }());
        Common.CallbackManager = CallbackManager;
        var CallbackInfo = /** @class */ (function () {
            function CallbackInfo() {
                this.callbacks = {};
            }
            CallbackInfo.prototype.Clone = function () {
                var cbi = new CallbackInfo();
                for (var _i = 0, _a = Object.keys(this.callbacks); _i < _a.length; _i++) {
                    var key = _a[_i];
                    cbi.callbacks[key] = this.callbacks[key];
                }
                return cbi;
            };
            CallbackInfo.prototype.Get = function (key) {
                if (key == null)
                    key = '';
                var act = this.callbacks[key];
                if (act == null)
                    act = new Common.Action();
                return act;
            };
            CallbackInfo.prototype.Set = function (key, value) {
                if (typeof value == 'function') {
                    value = new Common.Action(value);
                }
                this.callbacks[key] = value;
            };
            CallbackInfo.prototype.Add = function (key, value) {
                this.Set(key, this.Get(key).Add(value));
            };
            CallbackInfo.prototype.Run = function (key) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var cb = this.Get(key);
                if (cb != null) {
                    for (var _a = 0, _b = cb.GetInvocationList(); _a < _b.length; _a++) {
                        var item = _b[_a];
                        try {
                            item.apply(void 0, args);
                        }
                        catch (error) {
                            console.error(error);
                        }
                    }
                }
            };
            return CallbackInfo;
        }());
        Common.CallbackInfo = CallbackInfo;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Component;
        (function (Component) {
            var Interface = /** @class */ (function () {
                function Interface() {
                    this.isInit = false;
                }
                Interface.prototype.DoInit = function () {
                    if (!this.isInit) {
                        this.isInit = true;
                        try {
                            this.OnInit();
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                };
                Interface.prototype.OnInit = function () {
                };
                return Interface;
            }());
            Component.Interface = Interface;
            var Manager = /** @class */ (function () {
                function Manager() {
                }
                Manager.AddComponent = function (type) {
                    var obj = new type /*type.prototype.constructor()*/;
                    this.components.push(obj);
                    return obj;
                };
                Manager.GetComponent = function (type) {
                    for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item == type.prototype || item instanceof type /*type.prototype.constructor*/) {
                            return item;
                        }
                    }
                    return null;
                };
                Manager.GetComponents = function (type) {
                    var cs = [];
                    for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item == type.prototype || item instanceof type /*type.prototype.constructor*/) {
                            cs.push(item);
                        }
                    }
                    return cs;
                };
                Manager.GetComponentsWithInit = function (type) {
                    var cs = this.GetComponents(type);
                    for (var _i = 0, cs_1 = cs; _i < cs_1.length; _i++) {
                        var item = cs_1[_i];
                        item.DoInit();
                    }
                    return cs;
                };
                Manager.components = [];
                return Manager;
            }());
            Component.Manager = Manager;
        })(Component = Common.Component || (Common.Component = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var iOS;
        (function (iOS) {
            var Objc = /** @class */ (function () {
                function Objc() {
                }
                Objc.SerializeObjects = function (objs) {
                    var values = [];
                    for (var _i = 0, objs_2 = objs; _i < objs_2.length; _i++) {
                        var item = objs_2[_i];
                        values.push("" + item);
                    }
                    return JSON.stringify(values);
                };
                Objc.Set = function (className, fieldName, value, obj) {
                    TJ.Engine.iOS.Objc.Set(className, fieldName, "" + value, "" + obj);
                };
                Objc.Get = function (className, fieldName, obj) {
                    var k = TJ.Engine.iOS.Objc.Get(className, fieldName, "" + obj);
                    return Object_.Get(k);
                };
                Objc.Call = function (className, methodName, values, obj) {
                    var k = TJ.Engine.iOS.Objc.Call(className, methodName, this.SerializeObjects(values), "" + obj);
                    return Object_.Get(k);
                };
                Objc.New = function (className) {
                    var k = TJ.Engine.iOS.Objc.New(className);
                    return Object_.Get(k);
                };
                Objc.Class = function (obj) {
                    return TJ.Engine.iOS.Objc.Class("" + obj);
                };
                Objc.GetInt = function (obj) {
                    return TJ.Engine.iOS.Objc.GetInt("" + obj);
                };
                Objc.GetFloat = function (obj) {
                    return TJ.Engine.iOS.Objc.GetFloat("" + obj);
                };
                Objc.GetBoolean = function (obj) {
                    return TJ.Engine.iOS.Objc.GetBoolean("" + obj);
                };
                Objc.GetString = function (obj) {
                    return TJ.Engine.iOS.Objc.GetString("" + obj);
                };
                Objc.SetValue = function (value) {
                    var k = TJ.Engine.iOS.Objc.SetValue(value.value);
                    return Object_.Get(k);
                };
                return Objc;
            }());
            iOS.Objc = Objc;
            var Object_ = /** @class */ (function () {
                function Object_(obj) {
                    this.objectIndex = obj;
                }
                Object_.prototype.toString = function () {
                    return this.objectIndex;
                };
                Object_.Get = function (obj) {
                    if (typeof obj == 'string') {
                        return new Object_(obj);
                    }
                    else {
                        return Objc.SetValue(obj);
                    }
                };
                Object_.prototype.GetValue = function (type) {
                    if (type == null) {
                        return null;
                    }
                    var obj;
                    if (type.prototype == Common.Int_.prototype) {
                        obj = new Common.Int_(Objc.GetInt(this));
                    }
                    if (type.prototype == Common.Float_.prototype) {
                        obj = new Common.Float_(Objc.GetFloat(this));
                    }
                    if (type.prototype == Common.Bool_.prototype) {
                        obj = new Common.Bool_(Objc.GetBoolean(this));
                    }
                    if (type.prototype == Common.String_.prototype) {
                        obj = new Common.String_(Objc.GetString(this));
                    }
                    return obj;
                };
                return Object_;
            }());
            iOS.Object_ = Object_;
            var ObjcClass = /** @class */ (function () {
                function ObjcClass(className) {
                    this.className = className;
                }
                ObjcClass.prototype.SetStatic = function (fieldName, value) {
                    Objc.Set(this.className, fieldName, ObjcObject.SetValue(value), null);
                };
                ObjcClass.prototype.GetStatic = function (type, fieldName) {
                    var obj = Objc.Get(this.className, fieldName, null);
                    return ObjcObject.GetValue(type, obj);
                };
                ObjcClass.prototype.CallStatic = function () {
                    var s = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        s[_i] = arguments[_i];
                    }
                    var a = s.shift();
                    if (typeof a == 'string') {
                        Objc.Call(this.className, a, ObjcObject.SetValues.apply(ObjcObject, s), null);
                    }
                    else {
                        var b = s.shift();
                        var obj = Objc.Call(this.className, b, ObjcObject.SetValues.apply(ObjcObject, s), null);
                        return ObjcObject.GetValue(a, obj);
                    }
                };
                ObjcClass.prototype.New = function () {
                    var values = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        values[_i] = arguments[_i];
                    }
                    return Objc.New(this.className);
                };
                return ObjcClass;
            }());
            iOS.ObjcClass = ObjcClass;
            var ObjcObject = /** @class */ (function () {
                function ObjcObject(obj, clazz) {
                    this.objcClass = clazz;
                    this.object = obj;
                }
                ObjcObject.prototype.toString = function () {
                    return "" + this.object;
                };
                ObjcObject.New = function (className) {
                    var values = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        values[_i - 1] = arguments[_i];
                    }
                    var ioc = new ObjcClass(className);
                    var obj = ioc.New.apply(ioc, values);
                    return new ObjcObject(obj, ioc);
                };
                ObjcObject.Get = function (obj) {
                    var ioc = new ObjcClass(Objc.Class(obj));
                    return new ObjcObject(obj, ioc);
                };
                ObjcObject.prototype.Set = function (fieldName, value) {
                    var v;
                    if (value instanceof ObjcObject) {
                        v = value.object;
                    }
                    else {
                        v = Object_.Get(value);
                    }
                    Objc.Set(this.objcClass.className, fieldName, v, this.object);
                };
                ObjcObject.prototype.Get = function (type, fieldName) {
                    var obj = Objc.Get(this.objcClass.className, fieldName, this.object);
                    return ObjcObject.GetValue(type, obj);
                };
                ObjcObject.prototype.Call = function () {
                    var s = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        s[_i] = arguments[_i];
                    }
                    var a = s.shift();
                    if (typeof a == 'string') {
                        Objc.Call(this.objcClass.className, a, ObjcObject.SetValues.apply(ObjcObject, s), this.object);
                    }
                    else {
                        var b = s.shift();
                        var obj = Objc.Call(this.objcClass.className, b, ObjcObject.SetValues.apply(ObjcObject, s), this.object);
                        return ObjcObject.GetValue(a, obj);
                    }
                };
                ObjcObject.GetValue = function (type, obj) {
                    var res;
                    if (type.prototype == ObjcObject.prototype) {
                        res = ObjcObject.Get(obj);
                    }
                    else {
                        res = obj.GetValue(type);
                    }
                    return res;
                };
                ObjcObject.SetValue = function (value) {
                    if (value instanceof ObjcObject) {
                        return value.object;
                    }
                    else {
                        return Object_.Get(value);
                    }
                };
                ObjcObject.SetValues = function () {
                    var value = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        value[_i] = arguments[_i];
                    }
                    var values = [];
                    for (var _a = 0, value_2 = value; _a < value_2.length; _a++) {
                        var item = value_2[_a];
                        values.push(ObjcObject.SetValue(item));
                    }
                    return values;
                };
                return ObjcObject;
            }());
            iOS.ObjcObject = ObjcObject;
            var SwiftClass = /** @class */ (function (_super) {
                __extends(SwiftClass, _super);
                function SwiftClass(className) {
                    var _this = this;
                    className = "test." + className;
                    _this = _super.call(this, className) || this;
                    return _this;
                }
                return SwiftClass;
            }(ObjcClass));
            iOS.SwiftClass = SwiftClass;
            var SwiftObject = /** @class */ (function () {
                function SwiftObject() {
                }
                SwiftObject.New = function (className) {
                    var values = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        values[_i - 1] = arguments[_i];
                    }
                    className = "test." + className;
                    return ObjcObject.New.apply(ObjcObject, [className].concat(values));
                };
                return SwiftObject;
            }());
            iOS.SwiftObject = SwiftObject;
        })(iOS = Common.iOS || (Common.iOS = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Prefs;
        (function (Prefs) {
            var RawData = /** @class */ (function () {
                function RawData() {
                    this.value = null;
                    this.time = 0;
                }
                return RawData;
            }());
            Prefs.RawData = RawData;
            var Raw;
            (function (Raw) {
                var keyTag = "<Prefs>";
                var intTag = "<Int>";
                var floatTag = "<Float>";
                var stringTag = "<String>";
                var boolTag = "<Bool>";
                function Tags() {
                    var tags = [];
                    tags.push(intTag);
                    tags.push(floatTag);
                    tags.push(stringTag);
                    tags.push(boolTag);
                    return tags;
                }
                function Keys() {
                    var keys = [];
                    for (var _i = 0, _a = Object.keys(window.localStorage); _i < _a.length; _i++) {
                        var key = _a[_i];
                        if (key.search(keyTag) != -1) {
                            keys.push(key);
                        }
                    }
                    return keys;
                }
                function GetRaw(key) {
                    if (key == null)
                        return null;
                    var value = window.localStorage.getItem(key);
                    if (value == '')
                        return null;
                    return value;
                }
                Raw.GetRaw = GetRaw;
                function SetRaw(key, value) {
                    if (key != null) {
                        if (value != null) {
                            window.localStorage.setItem(key, value);
                        }
                        else {
                            window.localStorage.removeItem(key);
                        }
                    }
                    Raw.changeKey = key;
                    if (Raw.changeKeys == null)
                        Raw.changeKeys = [];
                    Raw.changeKeys.push(Raw.changeKey);
                }
                Raw.SetRaw = SetRaw;
                function GetRawData(key) {
                    var data = null;
                    var json = GetRaw(key);
                    if (json != null) {
                        data = JSON.parse(json);
                    }
                    if (data == null) {
                        data = new RawData();
                    }
                    return data;
                }
                Raw.GetRawData = GetRawData;
                function SetRawData(key, data) {
                    if (data != null) {
                        var loc = GetRawData(key);
                        if (loc.time < data.time) {
                            var json = JSON.stringify(data);
                            SetRaw(key, json);
                        }
                        else {
                            return loc;
                        }
                    }
                    else {
                        SetRaw(key, null);
                    }
                    return null;
                }
                Raw.SetRawData = SetRawData;
                function RawGet(key) {
                    return GetRawData(key).value;
                }
                Raw.RawGet = RawGet;
                function RawSet(key, value) {
                    if (value != null) {
                        var data = new RawData();
                        data.time = Date.now();
                        data.value = value;
                        data = SetRawData(key, data);
                        if (data != null) {
                            return data.value;
                        }
                    }
                    else {
                        SetRawData(key, null);
                    }
                    return null;
                }
                Raw.RawSet = RawSet;
                function Get(key) {
                    return RawGet(keyTag + key);
                }
                Raw.Get = Get;
                function Set(key, value) {
                    RawSet(keyTag + key, value);
                }
                Raw.Set = Set;
                function GetInt(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = 0; }
                    var value = Get(intTag + key);
                    if (value == null) {
                        value = defaultValue;
                    }
                    return value;
                }
                Raw.GetInt = GetInt;
                function SetInt(key, value) {
                    Set(intTag + key, new Common.Int_(value).value);
                }
                Raw.SetInt = SetInt;
                function GetFloat(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = 0; }
                    var value = Get(floatTag + key);
                    if (value == null) {
                        value = defaultValue;
                    }
                    return value;
                }
                Raw.GetFloat = GetFloat;
                function SetFloat(key, value) {
                    Set(floatTag + key, new Common.Float_(value).value);
                }
                Raw.SetFloat = SetFloat;
                function GetString(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = null; }
                    var value = Get(stringTag + key);
                    if (value == null) {
                        value = defaultValue;
                    }
                    return value;
                }
                Raw.GetString = GetString;
                function SetString(key, value) {
                    Set(stringTag + key, new Common.String_(value).value);
                }
                Raw.SetString = SetString;
                function GetBool(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = false; }
                    var value = Get(boolTag + key);
                    if (value == null) {
                        value = defaultValue;
                    }
                    return value;
                }
                Raw.GetBool = GetBool;
                function SetBool(key, value) {
                    Set(boolTag + key, new Common.Bool_(value).value);
                }
                Raw.SetBool = SetBool;
                function DeleteAll(tag) {
                    if (tag === void 0) { tag = null; }
                    Raw.changeKeys = null;
                    for (var _i = 0, _a = Keys(); _i < _a.length; _i++) {
                        var key = _a[_i];
                        if (tag != null) {
                            if (key.search(tag) != -1) {
                                SetRawData(key, null);
                            }
                        }
                        else {
                            SetRawData(key, null);
                        }
                    }
                }
                Raw.DeleteAll = DeleteAll;
                function DeleteKey(key) {
                    Raw.changeKeys = null;
                    var keys = [];
                    for (var _i = 0, _a = Tags(); _i < _a.length; _i++) {
                        var tag = _a[_i];
                        keys.push(tag + key);
                    }
                    for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                        var key_1 = keys_1[_b];
                        Set(key_1, null);
                    }
                }
                Raw.DeleteKey = DeleteKey;
                function HasKey(key) {
                    for (var _i = 0, _a = Tags(); _i < _a.length; _i++) {
                        var tag = _a[_i];
                        if (Get(tag + key) != null) {
                            return true;
                        }
                    }
                    return false;
                }
                Raw.HasKey = HasKey;
            })(Raw = Prefs.Raw || (Prefs.Raw = {}));
        })(Prefs = Common.Prefs || (Common.Prefs = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Prefs;
        (function (Prefs) {
            var Player;
            (function (Player) {
                var keyTag = "<Player>";
                function Get(key) {
                    return Prefs.Raw.Get(keyTag + key);
                }
                Player.Get = Get;
                function Set(key, value) {
                    Prefs.Raw.Set(keyTag + key, value);
                }
                Player.Set = Set;
                function GetInt(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = 0; }
                    return Prefs.Raw.GetInt(keyTag + key, defaultValue);
                }
                Player.GetInt = GetInt;
                function SetInt(key, value) {
                    Prefs.Raw.SetInt(keyTag + key, value);
                }
                Player.SetInt = SetInt;
                function GetFloat(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = 0; }
                    return Prefs.Raw.GetFloat(keyTag + key, defaultValue);
                }
                Player.GetFloat = GetFloat;
                function SetFloat(key, value) {
                    Prefs.Raw.SetFloat(keyTag + key, value);
                }
                Player.SetFloat = SetFloat;
                function GetString(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = null; }
                    return Prefs.Raw.GetString(keyTag + key, defaultValue);
                }
                Player.GetString = GetString;
                function SetString(key, value) {
                    Prefs.Raw.SetString(keyTag + key, value);
                }
                Player.SetString = SetString;
                function GetBool(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = false; }
                    return Prefs.Raw.GetBool(keyTag + key, defaultValue);
                }
                Player.GetBool = GetBool;
                function SetBool(key, value) {
                    Prefs.Raw.SetBool(keyTag + key, value);
                }
                Player.SetBool = SetBool;
                function DeleteAll() {
                    Prefs.Raw.DeleteAll(keyTag);
                }
                Player.DeleteAll = DeleteAll;
                function DeleteKey(key) {
                    Prefs.Raw.DeleteKey(keyTag + key);
                }
                Player.DeleteKey = DeleteKey;
                function HasKey(key) {
                    return Prefs.Raw.HasKey(keyTag + key);
                }
                Player.HasKey = HasKey;
            })(Player = Prefs.Player || (Prefs.Player = {}));
        })(Prefs = Common.Prefs || (Common.Prefs = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Prefs;
        (function (Prefs) {
            var System;
            (function (System) {
                var keyTag = "<System>";
                function Get(key) {
                    return Prefs.Raw.Get(keyTag + key);
                }
                System.Get = Get;
                function Set(key, value) {
                    Prefs.Raw.Set(keyTag + key, value);
                }
                System.Set = Set;
                function GetInt(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = 0; }
                    return Prefs.Raw.GetInt(keyTag + key, defaultValue);
                }
                System.GetInt = GetInt;
                function SetInt(key, value) {
                    Prefs.Raw.SetInt(keyTag + key, value);
                }
                System.SetInt = SetInt;
                function GetFloat(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = 0; }
                    return Prefs.Raw.GetFloat(keyTag + key, defaultValue);
                }
                System.GetFloat = GetFloat;
                function SetFloat(key, value) {
                    Prefs.Raw.SetFloat(keyTag + key, value);
                }
                System.SetFloat = SetFloat;
                function GetString(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = null; }
                    return Prefs.Raw.GetString(keyTag + key, defaultValue);
                }
                System.GetString = GetString;
                function SetString(key, value) {
                    Prefs.Raw.SetString(keyTag + key, value);
                }
                System.SetString = SetString;
                function GetBool(key, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = false; }
                    return Prefs.Raw.GetBool(keyTag + key, defaultValue);
                }
                System.GetBool = GetBool;
                function SetBool(key, value) {
                    Prefs.Raw.SetBool(keyTag + key, value);
                }
                System.SetBool = SetBool;
                function DeleteAll() {
                    Prefs.Raw.DeleteAll(keyTag);
                }
                System.DeleteAll = DeleteAll;
                function DeleteKey(key) {
                    Prefs.Raw.DeleteKey(keyTag + key);
                }
                System.DeleteKey = DeleteKey;
                function HasKey(key) {
                    return Prefs.Raw.HasKey(keyTag + key);
                }
                System.HasKey = HasKey;
            })(System = Prefs.System || (Prefs.System = {}));
        })(Prefs = Common.Prefs || (Common.Prefs = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var PriorityInit;
        (function (PriorityInit) {
            var initList = [];
            function Add(p, f) {
                var obj = { p: p, f: f };
                initList.push(obj);
            }
            PriorityInit.Add = Add;
            window.setTimeout(function () {
                initList.sort(function (a, b) { return a.p - b.p; });
                for (var _i = 0, initList_1 = initList; _i < initList_1.length; _i++) {
                    var item = initList_1[_i];
                    try {
                        item.f();
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }, 0);
        })(PriorityInit = Common.PriorityInit || (Common.PriorityInit = {}));
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var PromiseWrap = /** @class */ (function () {
            function PromiseWrap(executor) {
                var _this = this;
                this.resolved = false;
                this.rejucted = false;
                this.promise = new Promise(function (resolve, reject) {
                    _this.resolve = resolve;
                    _this.reject = reject;
                    if (executor != null)
                        executor(_this.Resolve, _this.Reject);
                });
                var pr;
                this.pending = new Promise(function (res) { pr = res; });
                this.promise.then(function (val) {
                    pr();
                });
                this.promise["catch"](function (rea) {
                    pr();
                });
            }
            PromiseWrap.prototype.Resolve = function (value) {
                this.value = value;
                this.resolved = true;
                this.resolve(value);
            };
            PromiseWrap.prototype.Reject = function (reason) {
                this.reason = reason;
                this.rejucted = true;
                this.reject(reason);
            };
            return PromiseWrap;
        }());
        Common.PromiseWrap = PromiseWrap;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var SystemInfo = /** @class */ (function () {
            function SystemInfo() {
            }
            Object.defineProperty(SystemInfo, "clientGuid", {
                get: function () {
                    var key = "SystemInfo.clientGuid";
                    if (this._clientGuid == null) {
                        this._clientGuid = Common.Prefs.System.GetString(key);
                    }
                    if (this._clientGuid == null) {
                        this._clientGuid = Common.Guid.New();
                        Common.Prefs.System.SetString(key, this._clientGuid);
                    }
                    return this._clientGuid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SystemInfo, "userGuid", {
                get: function () {
                    var key = "SystemInfo.userGuid";
                    if (this._userGuid == null) {
                        this._userGuid = Common.Prefs.System.GetString(key);
                    }
                    // Prefs.System.SetString(key, this._userGuid);
                    return this._userGuid;
                },
                set: function (value) {
                    var key = "SystemInfo.userGuid";
                    this._userGuid = value;
                    Common.Prefs.System.SetString(key, this._userGuid);
                },
                enumerable: true,
                configurable: true
            });
            SystemInfo.startupGuid = Common.Guid.New();
            SystemInfo.startupTime = Common.Date_.nowSeconds;
            SystemInfo.foreground = true;
            SystemInfo.foregroundTime = 0;
            return SystemInfo;
        }());
        Common.SystemInfo = SystemInfo;
        console.log("startupGuid = " + SystemInfo.startupGuid);
        setInterval(function () { if (SystemInfo.foreground)
            SystemInfo.foregroundTime += 0.1; }, 100);
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var Url = /** @class */ (function () {
            function Url() {
            }
            Url.GetArgs = function (url) {
                if (url === void 0) { url = null; }
                if (url == null) {
                    url = "" + window.location;
                }
                var i = url.indexOf("?");
                if (i > 0) {
                    url = url.substring(i);
                }
                var ss = url.split("&");
                var args = {};
                for (var _i = 0, ss_1 = ss; _i < ss_1.length; _i++) {
                    var s = ss_1[_i];
                    var kv = s.split("=");
                    if (kv.length > 1) {
                        args[kv[0]] = kv[1];
                    }
                }
                return args;
            };
            return Url;
        }());
        Common.Url = Url;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Common;
    (function (Common) {
        var WWW = /** @class */ (function () {
            function WWW(url, form) {
                if (form === void 0) { form = null; }
                this._form = null;
                this._url = null;
                this._promise = null;
                this._resolve = null;
                this._error = null;
                this._text = null;
                this.guid = Common.Guid.New();
                this.logSend = true;
                this.logError = true;
                this.logText = false;
                this._url = url;
                this._form = form;
            }
            Object.defineProperty(WWW.prototype, "logTag", {
                get: function () {
                    return "WWW : " + this.guid + " ->";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WWW.prototype, "error", {
                get: function () {
                    return this._error;
                },
                enumerable: true,
                configurable: true
            });
            WWW.prototype.LogError = function () {
                if (this.logError && this.error != null) {
                    console.log(this.logTag + " error -> " + this.error);
                }
            };
            Object.defineProperty(WWW.prototype, "text", {
                get: function () {
                    return this._text;
                },
                enumerable: true,
                configurable: true
            });
            WWW.prototype.LogText = function () {
                if (this.logText && this.text != null) {
                    console.log(this.logTag + " text -> " + this.text);
                }
            };
            WWW.prototype.Send = function (method, format) {
                var _this = this;
                if (method === void 0) { method = null; }
                if (format === void 0) { format = null; }
                if (method == null)
                    method = "get";
                // if (format == null) format = "";
                // method = method.toLowerCase();
                // format = format.toLowerCase();
                var url = this._url;
                var data = null;
                switch (format) {
                    case "form":
                        var keys = Object.keys(this._form);
                        for (var i = 0; i < keys.length; i++) {
                            var key = keys[i];
                            if (i == 0) {
                                data = key + "=" + this._form[key];
                            }
                            else {
                                data += "&" + key + "=" + this._form[key];
                            }
                        }
                        break;
                    case "json":
                        data = JSON.stringify(this._form);
                        break;
                }
                switch (method) {
                    case "get":
                        if (data != null) {
                            url += "?" + data;
                        }
                        break;
                    case "post":
                        break;
                }
                if (this.logSend)
                    console.log(this.logTag + " " + url + " <" + method + "> " + data);
                this._promise = new Promise(function (resolve) { _this._resolve = resolve; });
                this.DoSend(url, method, data);
                return this._promise;
            };
            WWW.prototype.DoSend = function (url, method, data) {
                var _this = this;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    // console.log(this.logTag + " readyState = " + xhr.readyState + "  status = " + xhr.status);
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            _this._text = xhr.responseText;
                        }
                        else {
                            _this._error = xhr.status + " - " + xhr.responseText;
                        }
                        _this._resolve();
                        _this.LogError();
                        _this.LogText();
                    }
                };
                xhr.open(method, url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                // xhr.setRequestHeader("Content-Type", "application/json");
                switch (method) {
                    case "get":
                        xhr.send();
                        break;
                    case "post":
                        xhr.send(data);
                        break;
                }
            };
            return WWW;
        }());
        Common.WWW = WWW;
    })(Common = TJ.Common || (TJ.Common = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var Account;
        (function (Account) {
            var IAccount = /** @class */ (function (_super) {
                __extends(IAccount, _super);
                function IAccount() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IAccount.prototype.Login = function (param) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, {}];
                    }); });
                };
                IAccount.prototype.GetUserInfo = function (param) {
                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, {}];
                    }); });
                };
                IAccount.prototype.OnInit = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!Account.autoLogin) return [3 /*break*/, 5];
                                    return [4 /*yield*/, this.Login(null)];
                                case 1:
                                    Account.userId = _b.sent();
                                    _a = TJ.Common.SystemInfo;
                                    return [4 /*yield*/, TJ.Develop.Yun.Login.Public.GetUserguid(Account.userId)];
                                case 2:
                                    _a.userGuid = _b.sent();
                                    Account.loginPromiseWrap.Resolve();
                                    if (!Account.autoGetUserInfo) return [3 /*break*/, 5];
                                    return [4 /*yield*/, this.GetUserInfo(null)];
                                case 3:
                                    Account.userInfo = _b.sent();
                                    return [4 /*yield*/, TJ.Develop.Yun.Player.Player.ReportUserInfo(Account.userInfo)];
                                case 4:
                                    _b.sent();
                                    Account.getUserInfoPromiseWrap.Resolve();
                                    _b.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                return IAccount;
            }(TJ.Common.Component.Interface));
            Account.IAccount = IAccount;
            var Param = /** @class */ (function () {
                function Param() {
                    this.force = false;
                }
                return Param;
            }());
            Account.Param = Param;
            Account.autoLogin = true;
            Account.loginPromiseWrap = new TJ.Common.PromiseWrap();
            function Login(param) {
                return __awaiter(this, void 0, void 0, function () {
                    var _i, _a, item, e_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAccount);
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/, 6];
                                item = _a[_i];
                                _b.label = 2;
                            case 2:
                                _b.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, item.Login(param)];
                            case 3:
                                Account.userId = _b.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                e_1 = _b.sent();
                                console.log(JSON.stringify(e_1));
                                return [3 /*break*/, 5];
                            case 5:
                                _i++;
                                return [3 /*break*/, 1];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            }
            Account.Login = Login;
            Account.autoGetUserInfo = true;
            Account.getUserInfoPromiseWrap = new TJ.Common.PromiseWrap();
            function GetUserInfo(param) {
                return __awaiter(this, void 0, void 0, function () {
                    var _i, _a, item, e_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAccount);
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/, 6];
                                item = _a[_i];
                                _b.label = 2;
                            case 2:
                                _b.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, item.GetUserInfo(param)];
                            case 3:
                                Account.userInfo = _b.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                e_2 = _b.sent();
                                console.log(JSON.stringify(e_2));
                                return [3 /*break*/, 5];
                            case 5:
                                _i++;
                                return [3 /*break*/, 1];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            }
            Account.GetUserInfo = GetUserInfo;
        })(Account = API.Account || (API.Account = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var AdService;
        (function (AdService) {
            var IAdService = /** @class */ (function (_super) {
                __extends(IAdService, _super);
                function IAdService() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IAdService.prototype.ShowBanner = function (param) { };
                IAdService.prototype.RemoveBanner = function (param) { };
                IAdService.prototype.NormalReady = function (param) { return false; };
                IAdService.prototype.ShowNormal = function (param) { };
                IAdService.prototype.RewardReady = function (param) { return false; };
                IAdService.prototype.ShowReward = function (param) { };
                IAdService.prototype.LoadNative = function (param) { return null; };
                IAdService.prototype.Exist = function () { return false; };
                return IAdService;
            }(TJ.Common.Component.Interface));
            AdService.IAdService = IAdService;
            var Param = /** @class */ (function () {
                function Param() {
                    this.cbi = new TJ.Common.CallbackInfo();
                    this.id = null;
                    this.place = 0;
                    this.extraAd = true;
                    this.template = true;
                    this.video = true;
                    this.refresh = false;
                    this.onNative = null;
                }
                Param.prototype.ToJson = function () {
                    var args = {};
                    args.cbi = TJ.Common.CallbackManager.Set(this.cbi);
                    args.id = this.id;
                    args.place = this.place;
                    args.extraAd = this.extraAd;
                    args.template = this.template;
                    args.video = this.video;
                    return JSON.stringify(args);
                };
                return Param;
            }());
            AdService.Param = Param;
            var Place;
            (function (Place) {
                Place[Place["LEFT"] = 3] = "LEFT";
                Place[Place["RIGHT"] = 5] = "RIGHT";
                Place[Place["CENTER"] = 17] = "CENTER";
                Place[Place["TOP"] = 48] = "TOP";
                Place[Place["BOTTOM"] = 80] = "BOTTOM";
            })(Place = AdService.Place || (AdService.Place = {}));
            function ShowBanner(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.ShowBanner(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AdService.ShowBanner = ShowBanner;
            function RemoveBanner(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.RemoveBanner(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AdService.RemoveBanner = RemoveBanner;
            function NormalReady(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        if (item.NormalReady(param))
                            return true;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return false;
            }
            AdService.NormalReady = NormalReady;
            function ShowNormal(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.ShowNormal(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AdService.ShowNormal = ShowNormal;
            function RewardReady(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        if (item.RewardReady(param))
                            return true;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return false;
            }
            AdService.RewardReady = RewardReady;
            function ShowReward(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.ShowReward(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AdService.ShowReward = ShowReward;
            var NativeItem = /** @class */ (function () {
                function NativeItem() {
                }
                NativeItem.prototype.OnShow = function () { };
                NativeItem.prototype.OnClick = function () { };
                return NativeItem;
            }());
            AdService.NativeItem = NativeItem;
            function LoadNative(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        var nad = item.LoadNative(param);
                        if (nad != null) {
                            return nad;
                        }
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return null;
            }
            AdService.LoadNative = LoadNative;
            function Exist() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAdService); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        if (item.Exist())
                            return true;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return false;
            }
            AdService.Exist = Exist;
        })(AdService = API.AdService || (API.AdService = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var Analytics;
        (function (Analytics) {
            var IAnalytics = /** @class */ (function (_super) {
                __extends(IAnalytics, _super);
                function IAnalytics() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IAnalytics.prototype.Event = function (param) { };
                IAnalytics.prototype.EventBegin = function (param) { };
                IAnalytics.prototype.EventEnd = function (param) { };
                IAnalytics.prototype.PageBegin = function (param) { };
                IAnalytics.prototype.PageEnd = function (param) { };
                IAnalytics.prototype.LevelStart = function (param) { };
                IAnalytics.prototype.LevelFinish = function (param) { };
                IAnalytics.prototype.LevelFail = function (param) { };
                IAnalytics.prototype.Pay = function (param) { };
                IAnalytics.prototype.Buy = function (param) { };
                IAnalytics.prototype.Use = function (param) { };
                IAnalytics.prototype.Bonus = function (param) { };
                return IAnalytics;
            }(TJ.Common.Component.Interface));
            Analytics.IAnalytics = IAnalytics;
            var Param = /** @class */ (function () {
                function Param() {
                    this.dic = {};
                }
                Param.prototype.ToJson = function () {
                    return JSON.stringify(this);
                };
                return Param;
            }());
            Analytics.Param = Param;
            function Event(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.Event = Event;
            function EventBegin(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.EventBegin(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.EventBegin = EventBegin;
            function EventEnd(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.EventEnd(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.EventEnd = EventEnd;
            function PageBegin(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.PageBegin(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.PageBegin = PageBegin;
            function PageEnd(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.PageEnd(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.PageEnd = PageEnd;
            function LevelStart(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.LevelStart(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.LevelStart = LevelStart;
            function LevelFinish(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.LevelFinish(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.LevelFinish = LevelFinish;
            function LevelFail(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.LevelFail(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.LevelFail = LevelFail;
            function Pay(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Pay(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.Pay = Pay;
            function Buy(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Buy(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.Buy = Buy;
            function Use(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Use(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.Use = Use;
            function Bonus(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAnalytics); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Bonus(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Analytics.Bonus = Bonus;
        })(Analytics = API.Analytics || (API.Analytics = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var AppCtl;
        (function (AppCtl) {
            var IAppCtl = /** @class */ (function (_super) {
                __extends(IAppCtl, _super);
                function IAppCtl() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IAppCtl.prototype.Review = function () { };
                IAppCtl.prototype.Quit = function () { };
                IAppCtl.prototype.UserAgreement = function () { };
                IAppCtl.prototype.PrivacyPolicy = function () { };
                return IAppCtl;
            }(TJ.Common.Component.Interface));
            AppCtl.IAppCtl = IAppCtl;
            function Review() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppCtl); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Review();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AppCtl.Review = Review;
            function Quit() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppCtl); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Quit();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AppCtl.Quit = Quit;
            function UserAgreement() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppCtl); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.UserAgreement();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AppCtl.UserAgreement = UserAgreement;
            function PrivacyPolicy() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppCtl); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.PrivacyPolicy();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            AppCtl.PrivacyPolicy = PrivacyPolicy;
        })(AppCtl = API.AppCtl || (API.AppCtl = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var AppInfo;
        (function (AppInfo) {
            var IAppInfo = /** @class */ (function (_super) {
                __extends(IAppInfo, _super);
                function IAppInfo() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IAppInfo.prototype.AppGuid = function () { return null; };
                IAppInfo.prototype.ProductName = function () { return null; };
                IAppInfo.prototype.PackageName = function () { return null; };
                IAppInfo.prototype.VersionName = function () { return null; };
                IAppInfo.prototype.VersionCode = function () { return 0; };
                IAppInfo.prototype.Channel = function () { return null; };
                return IAppInfo;
            }(TJ.Common.Component.Interface));
            AppInfo.IAppInfo = IAppInfo;
            var appGuid;
            function AppGuid() {
                if (appGuid == null) {
                    for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppInfo); _i < _a.length; _i++) {
                        var item = _a[_i];
                        try {
                            appGuid = item.AppGuid();
                            if (appGuid != null)
                                return appGuid;
                        }
                        catch (e) {
                            console.log(JSON.stringify(e));
                        }
                    }
                }
                return appGuid;
            }
            AppInfo.AppGuid = AppGuid;
            function ProductName() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppInfo); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        var res = item.ProductName();
                        if (res != null)
                            return res;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return "";
            }
            AppInfo.ProductName = ProductName;
            function PackageName() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppInfo); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        var res = item.PackageName();
                        if (res != null)
                            return res;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return "";
            }
            AppInfo.PackageName = PackageName;
            function VersionName() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppInfo); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        var res = item.VersionName();
                        if (res != null)
                            return res;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return "";
            }
            AppInfo.VersionName = VersionName;
            function VersionCode() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppInfo); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        var res = item.VersionCode();
                        if (res != null)
                            return res;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return 0;
            }
            AppInfo.VersionCode = VersionCode;
            function Channel() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IAppInfo); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        var res = item.Channel();
                        if (res != null)
                            return res;
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return "";
            }
            AppInfo.Channel = Channel;
        })(AppInfo = API.AppInfo || (API.AppInfo = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var Billing;
        (function (Billing) {
            var IBilling = /** @class */ (function (_super) {
                __extends(IBilling, _super);
                function IBilling() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IBilling.prototype.Purchase = function (param) { };
                IBilling.prototype.QueryAll = function (param) { };
                IBilling.prototype.Consume = function (param) { };
                IBilling.prototype.Exist = function () { return false; };
                return IBilling;
            }(TJ.Common.Component.Interface));
            Billing.IBilling = IBilling;
            var Param = /** @class */ (function () {
                function Param() {
                    this.cbi = new TJ.Common.CallbackInfo();
                    this.product = new Product();
                    this.order = new Order();
                }
                Param.prototype.ToJson = function () {
                    var args = {};
                    args.cbi = TJ.Common.CallbackManager.Set(this.cbi);
                    args.product = this.product;
                    args.order = {};
                    args.order.id = this.order.id;
                    args.order.date = "" + this.order.date.getTime();
                    return JSON.stringify(args);
                };
                return Param;
            }());
            Billing.Param = Param;
            var Product = /** @class */ (function () {
                function Product() {
                }
                return Product;
            }());
            Billing.Product = Product;
            var Order = /** @class */ (function () {
                function Order() {
                    this.date = new Date();
                }
                return Order;
            }());
            Billing.Order = Order;
            function Purchase(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IBilling); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Purchase(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Billing.Purchase = Purchase;
            function QueryAll(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IBilling); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.QueryAll(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Billing.QueryAll = QueryAll;
            function Consume(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IBilling); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Consume(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Billing.Consume = Consume;
            function Exist() {
                var res = false;
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IBilling); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        res = item.Exist();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
                return res;
            }
            Billing.Exist = Exist;
        })(Billing = API.Billing || (API.Billing = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
// namespace TJ.API.NativeAd
// {
//     export class INativeAd extends Common.Component.Interface
//     {
//         public Load(): Item { return null; }
//     }
//     export class Item
//     {
//         public title: string;
//         public desc: string;
//         public iconUrl: string;
//         public imgUrl: string;
//         public logoUrl: string;
//         public OnShow() { }
//         public OnClick() { }
//     }
//     export function Load()
//     {
//         for (let item of Common.Component.Manager.GetComponentsWithInit(INativeAd))
//         {
//             try 
//             {
//                 let nad = item.Load();
//                 if (nad != null)
//                 {
//                     return nad;
//                 }
//             }
//             catch (e) { console.log(JSON.stringify(e)); }
//         }
//         return null;
//     }
// }
(function (TJ) {
    var API;
    (function (API) {
        var Promo;
        (function (Promo) {
            var IPromo = /** @class */ (function (_super) {
                __extends(IPromo, _super);
                function IPromo() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IPromo.prototype.Pop = function (param) { };
                return IPromo;
            }(TJ.Common.Component.Interface));
            Promo.IPromo = IPromo;
            var Param = /** @class */ (function () {
                function Param() {
                    this.cbi = new TJ.Common.CallbackInfo();
                }
                return Param;
            }());
            Promo.Param = Param;
            function Pop(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IPromo); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Pop(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Promo.Pop = Pop;
        })(Promo = API.Promo || (API.Promo = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var TA;
        (function (TA) {
            var ITA = /** @class */ (function (_super) {
                __extends(ITA, _super);
                function ITA() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ITA.prototype.Event = function (param) { };
                ITA.prototype.PromoEvent = function (param) { };
                ITA.prototype.PromoEvents = function (params) { };
                ITA.prototype.Event_LifeCycle_Load = function (param) { };
                ITA.prototype.Event_LifeCycle_Start = function (param) { };
                ITA.prototype.Event_LifeCycle_Destroy = function (param) { };
                ITA.prototype.Event_LifeCycle_Enable = function (param) { };
                ITA.prototype.Event_LifeCycle_Disable = function (param) { };
                ITA.prototype.Event_Page_Enter = function (param) { };
                ITA.prototype.Event_Page_Show = function (param) { };
                ITA.prototype.Event_Page_Leave = function (param) { };
                ITA.prototype.Event_Button_Show = function (param) { };
                ITA.prototype.Event_Button_Click = function (param) { };
                ITA.prototype.Event_Level_Start = function (param) { };
                ITA.prototype.Event_Level_Finish = function (param) { };
                ITA.prototype.Event_Level_Fail = function (param) { };
                return ITA;
            }(TJ.Common.Component.Interface));
            TA.ITA = ITA;
            var Param = /** @class */ (function () {
                function Param() {
                    this.id = "";
                    this.source = "";
                    this.type = "";
                    this.style = "";
                    this.icon = "";
                }
                return Param;
            }());
            TA.Param = Param;
            TA.log = false;
            function Event(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event = Event;
            function PromoEvent(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.PromoEvent(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.PromoEvent = PromoEvent;
            function PromoEvents(params) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.PromoEvents(params);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.PromoEvents = PromoEvents;
            function Event_LifeCycle_Load(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_LifeCycle_Load(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_LifeCycle_Load = Event_LifeCycle_Load;
            function Event_LifeCycle_Start(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_LifeCycle_Start(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_LifeCycle_Start = Event_LifeCycle_Start;
            function Event_LifeCycle_Destroy(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_LifeCycle_Destroy(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_LifeCycle_Destroy = Event_LifeCycle_Destroy;
            function Event_LifeCycle_Enable(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_LifeCycle_Enable(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_LifeCycle_Enable = Event_LifeCycle_Enable;
            function Event_LifeCycle_Disable(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_LifeCycle_Disable(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_LifeCycle_Disable = Event_LifeCycle_Disable;
            function Event_Page_Enter(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Page_Enter(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Page_Enter = Event_Page_Enter;
            function Event_Page_Show(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Page_Show(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Page_Show = Event_Page_Show;
            function Event_Page_Leave(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Page_Leave(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Page_Leave = Event_Page_Leave;
            function Event_Button_Show(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Button_Show(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Button_Show = Event_Button_Show;
            function Event_Button_Click(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Button_Click(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Button_Click = Event_Button_Click;
            function Event_Level_Start(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Level_Start(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Level_Start = Event_Level_Start;
            function Event_Level_Finish(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Level_Finish(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Level_Finish = Event_Level_Finish;
            function Event_Level_Fail(param) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(ITA); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Event_Level_Fail(param);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            TA.Event_Level_Fail = Event_Level_Fail;
        })(TA = API.TA || (API.TA = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var API;
    (function (API) {
        var Vibrate;
        (function (Vibrate) {
            var IVibrate = /** @class */ (function (_super) {
                __extends(IVibrate, _super);
                function IVibrate() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                IVibrate.prototype.Short = function () { };
                IVibrate.prototype.Long = function () { };
                IVibrate.prototype.Time = function (seconds) { };
                return IVibrate;
            }(TJ.Common.Component.Interface));
            Vibrate.IVibrate = IVibrate;
            function Short() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IVibrate); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Short();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Vibrate.Short = Short;
            function Long() {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IVibrate); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Long();
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Vibrate.Long = Long;
            function Time(seconds) {
                for (var _i = 0, _a = TJ.Common.Component.Manager.GetComponentsWithInit(IVibrate); _i < _a.length; _i++) {
                    var item = _a[_i];
                    try {
                        item.Time(seconds);
                    }
                    catch (e) {
                        console.log(JSON.stringify(e));
                    }
                }
            }
            Vibrate.Time = Time;
        })(Vibrate = API.Vibrate || (API.Vibrate = {}));
    })(API = TJ.API || (TJ.API = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var ABTest;
        (function (ABTest) {
            function Init(checkVersion) {
                if (checkVersion === void 0) { checkVersion = false; }
                var pk = "ABTest.plan";
                var vk = "ABTest.version";
                if (checkVersion) {
                    var ver = TJ.Common.Prefs.System.GetString(vk);
                    if (ver != TJ.API.AppInfo.VersionName()) {
                        ABTest.plan = null;
                        TJ.Common.Prefs.System.SetString(vk, TJ.API.AppInfo.VersionName());
                    }
                    else {
                        if (ABTest.plan != null) {
                            return;
                        }
                        else {
                            ABTest.plan = TJ.Common.Prefs.System.GetString(pk);
                        }
                    }
                }
                else {
                    if (ABTest.plan != null) {
                        return;
                    }
                    else {
                        ABTest.plan = TJ.Common.Prefs.System.GetString(pk);
                    }
                }
                if (ABTest.plan == null) {
                    if (ABTest.plans != null && ABTest.plans.length > 0) {
                        var i = Math.random() * ABTest.plans.length;
                        ABTest.plan = ABTest.plans[Math.floor(i)];
                    }
                }
                if (ABTest.plan == null) {
                    ABTest.plan = "A";
                }
                else {
                    ABTest.plan = ABTest.plan.toUpperCase();
                }
                TJ.Common.Prefs.System.SetString(pk, ABTest.plan);
            }
            ABTest.Init = Init;
        })(ABTest = Develop.ABTest || (Develop.ABTest = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var ReYun;
        (function (ReYun) {
            var Raw;
            (function (Raw) {
                var url = "https://log.reyun.com/receive/rest/";
                Raw.log = true;
                function Request(api, data) {
                    return __awaiter(this, void 0, void 0, function () {
                        var www;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    www = new TJ.Common.WWW(url + api, data);
                                    www.logText = Raw.log;
                                    www.logSend = Raw.log;
                                    return [4 /*yield*/, www.Send("post", "json")];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                function Install(appid, deviceid, channelid) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    Request("install", data);
                }
                Raw.Install = Install;
                function Startup(appid, deviceid, channelid) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    Request("startup", data);
                }
                Raw.Startup = Startup;
                function Register(appid, deviceid, channelid, who) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    Request("register", data);
                }
                Raw.Register = Register;
                function Loggedin(appid, deviceid, channelid, who) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    Request("loggedin", data);
                }
                Raw.Loggedin = Loggedin;
                function Payment(appid, deviceid, channelid, who, currencyAmount, currencytype, iapamount, iapname, paymenttype, transactionid, virtualcoinamount) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    context["currencyAmount"] = currencyAmount;
                    context["currencytype"] = currencytype;
                    context["iapamount"] = iapamount;
                    context["iapname"] = iapname;
                    context["paymenttype"] = paymenttype;
                    context["transactionid"] = transactionid;
                    context["virtualcoinamount"] = virtualcoinamount;
                    Request("payment", data);
                }
                Raw.Payment = Payment;
                function Economy(appid, deviceid, channelid, who, itemamount, itemname, itemtotalprice) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    context["itemamount"] = itemamount;
                    context["itemname"] = itemname;
                    context["itemtotalprice"] = itemtotalprice;
                    Request("economy", data);
                }
                Raw.Economy = Economy;
                function Quest(appid, deviceid, channelid, who, questid, queststatus, questtype) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    context["questid"] = questid;
                    context["queststatus"] = queststatus;
                    context["questtype"] = questtype;
                    Request("quest", data);
                }
                Raw.Quest = Quest;
                function Event(appid, deviceid, channelid, who, what) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    data["what"] = what;
                    Request("event", data);
                }
                Raw.Event = Event;
                function Heartbeat(appid, deviceid, channelid, who) {
                    var data = {};
                    var context = {};
                    context["deviceid"] = deviceid;
                    context["channelid"] = channelid;
                    data["appid"] = appid;
                    data["context"] = context;
                    data["who"] = who;
                    Request("heartbeat", data);
                }
                Raw.Heartbeat = Heartbeat;
            })(Raw = ReYun.Raw || (ReYun.Raw = {}));
            var Data = /** @class */ (function () {
                function Data() {
                    this.log = true;
                }
                return Data;
            }());
            ReYun.Data = Data;
            function Install(data) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Install(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid);
            }
            ReYun.Install = Install;
            function Startup(data) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Startup(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid);
            }
            ReYun.Startup = Startup;
            function Register(data) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Register(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who);
            }
            ReYun.Register = Register;
            function Loggedin(data) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Loggedin(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who);
            }
            ReYun.Loggedin = Loggedin;
            function Payment(data, currencyAmount, currencytype, iapamount, iapname, paymenttype, transactionid, virtualcoinamount) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Payment(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who, currencyAmount, currencytype, iapamount, iapname, paymenttype, transactionid, virtualcoinamount);
            }
            ReYun.Payment = Payment;
            function Economy(data, itemamount, itemname, itemtotalprice) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Economy(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who, itemamount, itemname, itemtotalprice);
            }
            ReYun.Economy = Economy;
            function Quest(data, questid, queststatus, questtype) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Quest(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who, questid, queststatus, questtype);
            }
            ReYun.Quest = Quest;
            function Event(data, what) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Event(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who, what);
            }
            ReYun.Event = Event;
            function Heartbeat(data) {
                if (data == null)
                    return;
                Raw.log = data.log;
                Raw.Heartbeat(data.appid, TJ.Common.SystemInfo.clientGuid, data.channelid, data.who);
            }
            ReYun.Heartbeat = Heartbeat;
        })(ReYun = Develop.ReYun || (Develop.ReYun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Storage;
            (function (Storage) {
                var Player;
                (function (Player) {
                    var apiUrl = "https://yxapi.tomatojoy.cn/player";
                    var Result = /** @class */ (function () {
                        function Result() {
                        }
                        return Result;
                    }());
                    function GetData() {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "Player.GetData";
                                        p = {};
                                        p.userguid = TJ.Common.SystemInfo.userGuid;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(apiUrl, req);
                                        return [4 /*yield*/, www.Send("post", "form")];
                                    case 1:
                                        _a.sent();
                                        if (www.error == null) {
                                            res = JSON.parse(www.text);
                                            if (res.E == null) {
                                                return [2 /*return*/, res.P];
                                            }
                                            else {
                                                console.log("E = " + res.E);
                                            }
                                        }
                                        return [2 /*return*/, {}];
                                }
                            });
                        });
                    }
                    Player.GetData = GetData;
                    function SaveData(data) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (TJ.Common.SystemInfo.userGuid == null)
                                            return [2 /*return*/];
                                        req = {};
                                        req.A = "Player.SaveData";
                                        p = {};
                                        p.userguid = TJ.Common.SystemInfo.userGuid;
                                        p.data = data;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(apiUrl, req);
                                        return [4 /*yield*/, www.Send("post", "form")];
                                    case 1:
                                        _a.sent();
                                        if (www.error == null) {
                                            res = JSON.parse(www.text);
                                            if (res.E == null) {
                                            }
                                            else {
                                                console.log("E = " + res.E);
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }
                    Player.SaveData = SaveData;
                    function ClearData(keys) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (TJ.Common.SystemInfo.userGuid == null)
                                            return [2 /*return*/];
                                        req = {};
                                        req.A = "Player.ClearData";
                                        p = {};
                                        p.userguid = TJ.Common.SystemInfo.userGuid;
                                        p.keys = keys;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(apiUrl, req);
                                        return [4 /*yield*/, www.Send("post", "form")];
                                    case 1:
                                        _a.sent();
                                        if (www.error == null) {
                                            res = JSON.parse(www.text);
                                            if (res.E == null) {
                                            }
                                            else {
                                                console.log("E = " + res.E);
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }
                    Player.ClearData = ClearData;
                })(Player = Storage.Player || (Storage.Player = {}));
            })(Storage = Yun.Storage || (Yun.Storage = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            Yun.apiUrl = "https://yxapi.tomatojoy.cn";
            var Result = /** @class */ (function () {
                function Result() {
                }
                return Result;
            }());
            Yun.Result = Result;
            function GetResult(www) {
                return __awaiter(this, void 0, void 0, function () {
                    var res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                www.logSend = true;
                                www.logText = true;
                                return [4 /*yield*/, www.Send("post", "form")];
                            case 1:
                                _a.sent();
                                if (www.error == null) {
                                    res = JSON.parse(www.text);
                                    if (res.E != null) {
                                        console.error("E = " + res.E);
                                    }
                                    else {
                                        return [2 /*return*/, res.P];
                                    }
                                }
                                return [2 /*return*/, null];
                        }
                    });
                });
            }
            Yun.GetResult = GetResult;
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Config;
            (function (Config) {
                function GameCfg() {
                    return __awaiter(this, void 0, void 0, function () {
                        var www;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    www = new TJ.Common.WWW("https://h5.tomatojoy.cn/res/" + TJ.API.AppInfo.AppGuid() + "/config/game.json");
                                    return [4 /*yield*/, www.Send()];
                                case 1:
                                    _a.sent();
                                    if (www.error == null && www.text != null) {
                                        return [2 /*return*/, JSON.parse(www.text)];
                                    }
                                    return [2 /*return*/, null];
                            }
                        });
                    });
                }
                Config.GameCfg = GameCfg;
            })(Config = Yun.Config || (Yun.Config = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var DouYin;
            (function (DouYin) {
                DouYin.apiUrl = "https://yxapi.tomatojoy.cn/douyin";
                function ReportVideoIdInfo(videoIdInfo) {
                    return __awaiter(this, void 0, void 0, function () {
                        var req, p, www;
                        return __generator(this, function (_a) {
                            req = {};
                            req.A = "DouYin.ReportVideoIdInfo";
                            p = {};
                            p.appguid = TJ.API.AppInfo.AppGuid();
                            p.videoIdInfo = videoIdInfo;
                            req.P = JSON.stringify(p);
                            www = new TJ.Common.WWW(DouYin.apiUrl, req);
                            Yun.GetResult(www);
                            return [2 /*return*/];
                        });
                    });
                }
                DouYin.ReportVideoIdInfo = ReportVideoIdInfo;
                function GetVideosByTime(startTime, endTime) {
                    return __awaiter(this, void 0, void 0, function () {
                        var req, p, www, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    req = {};
                                    req.A = "DouYin.GetVideosByTime";
                                    p = {};
                                    p.appguid = TJ.API.AppInfo.AppGuid();
                                    p.startTime = startTime;
                                    p.endTime = endTime;
                                    req.P = JSON.stringify(p);
                                    www = new TJ.Common.WWW(DouYin.apiUrl, req);
                                    return [4 /*yield*/, Yun.GetResult(www)];
                                case 1:
                                    res = _a.sent();
                                    if (res == null || res.data == null)
                                        return [2 /*return*/, []];
                                    return [2 /*return*/, res.data];
                            }
                        });
                    });
                }
                DouYin.GetVideosByTime = GetVideosByTime;
                function ReportVideoInfo(videoInfo) {
                    return __awaiter(this, void 0, void 0, function () {
                        var req, p, www;
                        return __generator(this, function (_a) {
                            req = {};
                            req.A = "DouYin.ReportVideoInfo";
                            p = {};
                            p.appguid = TJ.API.AppInfo.AppGuid();
                            p.videoInfo = videoInfo;
                            req.P = JSON.stringify(p);
                            www = new TJ.Common.WWW(DouYin.apiUrl, req);
                            Yun.GetResult(www);
                            return [2 /*return*/];
                        });
                    });
                }
                DouYin.ReportVideoInfo = ReportVideoInfo;
            })(DouYin = Yun.DouYin || (Yun.DouYin = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Location;
            (function (Location) {
                TJ.Common.PriorityInit.Add(10, function () {
                    if (TJ.Engine.RuntimeInfo.platform == TJ.Define.Platform.Unknown)
                        return;
                    setInterval(function () { Sync(); }, 1000 * 60 * 10);
                    Sync();
                });
                Location.ip = null;
                Location.country = null;
                Location.province = null;
                Location.city = null;
                var server_time = 0;
                function NowTime() {
                    return Date.now() - syncTime + server_time;
                }
                Location.NowTime = NowTime;
                var syncTime = 0;
                var syncResolve;
                Location.syncPromise = new Promise(function (r) { syncResolve = r; });
                function Sync() {
                    return __awaiter(this, void 0, void 0, function () {
                        var url, www, res, citys, _i, citys_1, c;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    url = "https://yxapi.tomatojoy.cn/getIp";
                                    www = new TJ.Common.WWW(url);
                                    www.logText = true;
                                    return [4 /*yield*/, www.Send()];
                                case 1:
                                    _a.sent();
                                    if (!(www.error == null)) return [3 /*break*/, 4];
                                    res = JSON.parse(www.text);
                                    if (!(res.code == 200)) return [3 /*break*/, 4];
                                    Location.ip = res.data.ip;
                                    Location.country = res.data.country;
                                    Location.province = res.data.province;
                                    Location.city = res.data.city;
                                    server_time = res.data.server_time * 1000;
                                    syncTime = Date.now();
                                    if (!(Location.city != null)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, GetShieldCity()];
                                case 2:
                                    citys = _a.sent();
                                    if (citys != null) {
                                        Location.shield = false;
                                        for (_i = 0, citys_1 = citys; _i < citys_1.length; _i++) {
                                            c = citys_1[_i];
                                            if (Location.city.search(c) != -1 || c.search(Location.city) != -1) {
                                                Location.shield = true;
                                                break;
                                            }
                                        }
                                    }
                                    _a.label = 3;
                                case 3:
                                    syncResolve();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                }
                Location.Sync = Sync;
                Location.shield = true;
                function GetShieldCity() {
                    return __awaiter(this, void 0, void 0, function () {
                        var citys, channel, url, www, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    citys = null;
                                    channel = TJ.API.AppInfo.Channel();
                                    if (!(channel != null && channel.length > 0)) return [3 /*break*/, 4];
                                    if (!(channel == TJ.Define.Channel.AppRt.OPPO_AppRt)) return [3 /*break*/, 2];
                                    url = "https://h5.tomatojoy.cn/res/" + TJ.API.AppInfo.Channel() + "/config.json";
                                    www = new TJ.Common.WWW(url);
                                    www.logText = true;
                                    return [4 /*yield*/, www.Send()];
                                case 1:
                                    _a.sent();
                                    if (www.error == null) {
                                        res = JSON.parse(www.text);
                                        if (res.shield_city != null) {
                                            citys = res.shield_city;
                                        }
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    citys = [];
                                    _a.label = 3;
                                case 3: return [3 /*break*/, 5];
                                case 4:
                                    citys = [];
                                    _a.label = 5;
                                case 5: return [2 /*return*/, citys];
                            }
                        });
                    });
                }
            })(Location = Yun.Location || (Yun.Location = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Login;
            (function (Login) {
                Login.apiUrl = Yun.apiUrl + "/login";
            })(Login = Yun.Login || (Yun.Login = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Login;
            (function (Login) {
                var CLogin;
                (function (CLogin) {
                    function QQAppRT(exInfo) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "CLogin.QQAppRT";
                                        p = {};
                                        p.appguid = TJ.API.AppInfo.AppGuid();
                                        p.exInfo = exInfo;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Login.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        });
                    }
                    CLogin.QQAppRT = QQAppRT;
                    function TTAppRT(exInfo) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "CLogin.TTAppRT";
                                        p = {};
                                        p.appguid = TJ.API.AppInfo.AppGuid();
                                        p.exInfo = exInfo;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Login.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        });
                    }
                    CLogin.TTAppRT = TTAppRT;
                    function WXLogin(exInfo) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "CLogin.WXLogin";
                                        p = {};
                                        p.appguid = TJ.API.AppInfo.AppGuid();
                                        p.exInfo = exInfo;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Login.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        });
                    }
                    CLogin.WXLogin = WXLogin;
                    function VIVOAppRT(exInfo) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "CLogin.VIVOAppRT";
                                        p = {};
                                        p.appguid = TJ.API.AppInfo.AppGuid();
                                        p.exInfo = exInfo;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Login.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        });
                    }
                    CLogin.VIVOAppRT = VIVOAppRT;
                    function QTTAppRT(exInfo) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "CLogin.QTTAppRT";
                                        p = {};
                                        p.appguid = TJ.API.AppInfo.AppGuid();
                                        p.exInfo = exInfo;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Login.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        });
                    }
                    CLogin.QTTAppRT = QTTAppRT;
                })(CLogin = Login.CLogin || (Login.CLogin = {}));
            })(Login = Yun.Login || (Yun.Login = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Login;
            (function (Login) {
                var Public;
                (function (Public) {
                    function GetUserguid(userId) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "Public.GetUserguid";
                                        p = {};
                                        p.appguid = TJ.API.AppInfo.AppGuid();
                                        p.channelId = TJ.API.AppInfo.Channel();
                                        p.userId = userId;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Login.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        res = _a.sent();
                                        if (res != null) {
                                            return [2 /*return*/, res.userguid];
                                        }
                                        return [2 /*return*/, null];
                                }
                            });
                        });
                    }
                    Public.GetUserguid = GetUserguid;
                })(Public = Login.Public || (Login.Public = {}));
            })(Login = Yun.Login || (Yun.Login = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Player;
            (function (Player) {
                Player.apiUrl = Yun.apiUrl + "/player";
            })(Player = Yun.Player || (Yun.Player = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Player;
            (function (Player_1) {
                var Player;
                (function (Player) {
                    function ReportUserInfo(userInfo) {
                        return __awaiter(this, void 0, void 0, function () {
                            var req, p, www;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        req = {};
                                        req.A = "Player.ReportUserInfo";
                                        p = {};
                                        p.userguid = TJ.Common.SystemInfo.userGuid;
                                        p.channelId = TJ.API.AppInfo.Channel();
                                        p.userInfo = userInfo;
                                        req.P = JSON.stringify(p);
                                        www = new TJ.Common.WWW(Player_1.apiUrl, req);
                                        return [4 /*yield*/, Yun.GetResult(www)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }
                    Player.ReportUserInfo = ReportUserInfo;
                })(Player = Player_1.Player || (Player_1.Player = {}));
            })(Player = Yun.Player || (Yun.Player = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Prefs;
            (function (Prefs) {
                var Player;
                (function (Player) {
                    function Get(key) {
                        return TJ.Common.Prefs.Player.Get(key);
                    }
                    Player.Get = Get;
                    function Set(key, value) {
                        TJ.Common.Prefs.Player.Set(key, value);
                        UploadData();
                    }
                    Player.Set = Set;
                    function GetInt(key, defaultValue) {
                        if (defaultValue === void 0) { defaultValue = 0; }
                        return TJ.Common.Prefs.Player.GetInt(key, defaultValue);
                    }
                    Player.GetInt = GetInt;
                    function SetInt(key, value) {
                        TJ.Common.Prefs.Player.SetInt(key, value);
                        UploadData();
                    }
                    Player.SetInt = SetInt;
                    function GetFloat(key, defaultValue) {
                        if (defaultValue === void 0) { defaultValue = 0; }
                        return TJ.Common.Prefs.Player.GetFloat(key, defaultValue);
                    }
                    Player.GetFloat = GetFloat;
                    function SetFloat(key, value) {
                        TJ.Common.Prefs.Player.SetFloat(key, value);
                        UploadData();
                    }
                    Player.SetFloat = SetFloat;
                    function GetString(key, defaultValue) {
                        if (defaultValue === void 0) { defaultValue = null; }
                        return TJ.Common.Prefs.Player.GetString(key, defaultValue);
                    }
                    Player.GetString = GetString;
                    function SetString(key, value) {
                        TJ.Common.Prefs.Player.SetString(key, value);
                        UploadData();
                    }
                    Player.SetString = SetString;
                    function GetBool(key, defaultValue) {
                        if (defaultValue === void 0) { defaultValue = false; }
                        return TJ.Common.Prefs.Player.GetBool(key, defaultValue);
                    }
                    Player.GetBool = GetBool;
                    function SetBool(key, value) {
                        TJ.Common.Prefs.Player.SetBool(key, value);
                        UploadData();
                    }
                    Player.SetBool = SetBool;
                    function DeleteAll() {
                        TJ.Common.Prefs.Player.DeleteAll();
                        Yun.Storage.Player.ClearData(TJ.Common.Prefs.Raw.changeKeys);
                    }
                    Player.DeleteAll = DeleteAll;
                    function DeleteKey(key) {
                        TJ.Common.Prefs.Player.DeleteKey(key);
                        Yun.Storage.Player.ClearData(TJ.Common.Prefs.Raw.changeKeys);
                    }
                    Player.DeleteKey = DeleteKey;
                    function HasKey(key) {
                        return TJ.Common.Prefs.Player.HasKey(key);
                    }
                    Player.HasKey = HasKey;
                    function UploadData(key) {
                        if (key === void 0) { key = null; }
                        if (key == null)
                            key = TJ.Common.Prefs.Raw.changeKey;
                        var data = {};
                        data[key] = TJ.Common.Prefs.Raw.GetRaw(key);
                        if (data[key] != null)
                            Yun.Storage.Player.SaveData(data);
                    }
                    Player.UploadData = UploadData;
                    function Sync() {
                        return __awaiter(this, void 0, void 0, function () {
                            var storage, key, json, data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Yun.Storage.Player.GetData()];
                                    case 1:
                                        storage = _a.sent();
                                        for (key in storage) {
                                            json = storage[key];
                                            if (json != null) {
                                                data = JSON.parse(json);
                                                data = TJ.Common.Prefs.Raw.SetRawData(key, data);
                                                if (data != null) {
                                                    UploadData(key);
                                                }
                                            }
                                            else {
                                                UploadData(key);
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }
                    Player.Sync = Sync;
                })(Player = Prefs.Player || (Prefs.Player = {}));
            })(Prefs = Yun.Prefs || (Yun.Prefs = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Promo;
            (function (Promo) {
                var Data = /** @class */ (function () {
                    function Data() {
                        this.loaded = false;
                        this.showed = false;
                        this.clicked = false;
                        this.opened = false;
                    }
                    Object.defineProperty(Data, "dataUrl", {
                        get: function () {
                            return "https://h5.tomatojoy.cn/res/" + TJ.API.AppInfo.AppGuid() + "/promo/config.json";
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Data.LoadList = function (style) {
                        if (style === void 0) { style = null; }
                        return __awaiter(this, void 0, void 0, function () {
                            var list, promos, _i, promos_1, pd, temp, key;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (this.www == null) {
                                            this.www = new TJ.Common.WWW(this.dataUrl);
                                        }
                                        if (!(this.www.text == null)) return [3 /*break*/, 2];
                                        if (this.send == null) {
                                            this.send = this.www.Send();
                                        }
                                        return [4 /*yield*/, this.send];
                                    case 1:
                                        _a.sent();
                                        this.send = null;
                                        _a.label = 2;
                                    case 2:
                                        list = [];
                                        if (this.www.text != null) {
                                            promos = JSON.parse(this.www.text);
                                            if (promos != null) {
                                                for (_i = 0, promos_1 = promos; _i < promos_1.length; _i++) {
                                                    pd = promos_1[_i];
                                                    if (style == null || pd.promoStyle == null || pd.promoStyle[style] != false) {
                                                        temp = new Data();
                                                        temp.style = style;
                                                        for (key in pd) {
                                                            temp[key] = pd[key];
                                                        }
                                                        list.push(temp);
                                                    }
                                                }
                                            }
                                        }
                                        return [2 /*return*/, list];
                                }
                            });
                        });
                    };
                    Object.defineProperty(Data.prototype, "icon", {
                        get: function () {
                            return "https://h5.tomatojoy.cn/png/" + this.iconMD5 + ".png";
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Data.ReportAwake = function (style) {
                        if (style === void 0) { style = null; }
                        this.Event(style, "Awake");
                    };
                    Data.ReportStart = function (style) {
                        if (style === void 0) { style = null; }
                        this.Event(style, "Start");
                    };
                    Data.prototype.ReportLoad = function () {
                        if (!this.loaded) {
                            this.loaded = true;
                            this.Event("Load");
                        }
                    };
                    Data.prototype.ReportShow = function () {
                        if (!this.showed) {
                            this.showed = true;
                            this.Event("Show");
                        }
                    };
                    Data.prototype.ReportClick = function () {
                        if (!this.clicked) {
                            this.clicked = true;
                            this.Event("Click");
                        }
                    };
                    Data.prototype.ReportOpen = function () {
                        if (!this.opened) {
                            this.opened = true;
                            this.Event("Open");
                        }
                    };
                    Data.prototype.Event = function (event) {
                        // let p = new API.TA.Param();
                        // p.id = this.promoGuid;
                        // p.type = event;
                        // p.style = this.style;
                        // p.icon = this.iconMD5;
                        // // API.TA.PromoEvent(p);
                        // promoEvents.push(p);
                        Develop.ReYun.Event(Data.reyunData, "[promo]-" + Data.formatLogApp + "-" + this.formatLogPromo + "-" + Data.FormatLogEvent(event));
                        Develop.ReYun.Event(Data.reyunData, "[icon]-" + Data.formatLogApp + "-" + this.formatLogIcon + "-" + Data.FormatLogEvent(event));
                        Develop.ReYun.Event(Data.reyunData, "[app]-" + Data.formatLogApp + "-" + Data.FormatLogEvent(event));
                        Develop.ReYun.Event(Data.reyunData, "[global-icon]-" + this.formatLogIcon + "-" + Data.FormatLogEvent(event));
                    };
                    Data.Event = function (style, event) {
                        // let p = new API.TA.Param();
                        // p.type = event;
                        // p.style = style;
                        // // API.TA.PromoEvent(p);
                        // promoEvents.push(p);
                        Develop.ReYun.Event(Data.reyunData, Data.formatLogApp + "-" + Data.FormatLogStyle(style) + "-" + Data.FormatLogEvent(event));
                    };
                    Data.prototype.Load = function () {
                        if (Develop.Yun.Location.shield) {
                            this.iconMD5 = this.promoOriginIcon;
                        }
                        else {
                            if (this.iconList.length > 0) {
                                var i = Math.random() * this.iconList.length;
                                i = Math.floor(i);
                                this.iconMD5 = this.iconList[i];
                            }
                            else {
                                this.iconMD5 = null;
                            }
                        }
                        this.loaded = false;
                        this.showed = false;
                        this.clicked = false;
                        this.opened = false;
                        this.ReportLoad();
                    };
                    Data.prototype.Click = function () {
                        var _this = this;
                        this.ReportClick();
                        var param = new TJ.API.Promo.Param();
                        param.appId = this.appId;
                        param.appPackage = this.appPackageName;
                        param.storePackage = this.channelPackageName;
                        if (this.path != null && this.path.length > 0) {
                            param.path = this.path;
                        }
                        param.extraData = { "TJ_Promo": this.promoGuid, "TJ_App": TJ.API.AppInfo.AppGuid() };
                        param.uri = TJ.Common.String_.Format(this.channelRule, this.appPackageName);
                        param.cbi.Add(TJ.Define.Event.Success, function () { _this.ReportOpen(); });
                        TJ.API.Promo.Pop(param);
                    };
                    Object.defineProperty(Data, "formatLogApp", {
                        get: function () {
                            var app = TJ.API.AppInfo.AppGuid();
                            if (app == null)
                                app = '';
                            return "app{" + app + "}";
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Data.FormatLogStyle = function (style) {
                        if (style == null)
                            style = '';
                        return "style{" + style + "}";
                    };
                    Object.defineProperty(Data.prototype, "formatLogStyle", {
                        get: function () {
                            return Data.FormatLogStyle(this.style);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Data.prototype, "formatLogPromo", {
                        get: function () {
                            var promo = this.promoGuid;
                            if (promo == null)
                                promo = '';
                            return "promo{" + promo + "}";
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Data.prototype, "formatLogIcon", {
                        get: function () {
                            var icon = this.iconMD5;
                            if (icon == null)
                                icon = '';
                            return "icon{" + icon + "}";
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Data.FormatLogEvent = function (event) {
                        if (event == null)
                            event = '';
                        return "event{" + event + "}";
                    };
                    Object.defineProperty(Data, "reyunData", {
                        get: function () {
                            var data = new Develop.ReYun.Data();
                            data.appid = "2af775abf83e6493fdeb60700734f21d";
                            data.channelid = TJ.API.AppInfo.AppGuid();
                            data.who = TJ.Common.SystemInfo.clientGuid;
                            data.log = false;
                            return data;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return Data;
                }());
                Promo.Data = Data;
                window.setTimeout(function () {
                    if (TJ.Engine.RuntimeInfo.platform == TJ.Define.Platform.Unknown)
                        return;
                    Develop.ReYun.Install(Data.reyunData);
                    Develop.ReYun.Startup(Data.reyunData);
                    Develop.ReYun.Event(Data.reyunData, "TJ.Init");
                }, 0);
                // let promoEvents = [];
                // window.setInterval(() => 
                // {
                //     if (promoEvents.length > 0)
                //     {
                //         API.TA.PromoEvents(promoEvents);
                //         promoEvents = [];
                //     }
                // }, 1000);
            })(Promo = Yun.Promo || (Yun.Promo = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Promo;
            (function (Promo) {
                var List = /** @class */ (function () {
                    function List() {
                        this.datas = [];
                        this.loaded = [];
                    }
                    List.prototype.Add = function (data) {
                        if (data == null)
                            return;
                        var i = this.datas.indexOf(data);
                        if (i < 0)
                            this.datas.push(data);
                    };
                    List.prototype.Remove = function (data) {
                        if (data == null)
                            return;
                        var i = this.datas.indexOf(data);
                        if (i >= 0)
                            this.datas.splice(i, 1);
                    };
                    Object.defineProperty(List.prototype, "count", {
                        get: function () {
                            return this.datas.length;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    List.prototype.Load = function (reuse) {
                        if (reuse === void 0) { reuse = false; }
                        var data;
                        var list = [];
                        for (var _i = 0, _a = this.datas; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var i = this.loaded.indexOf(item);
                            if (i < 0)
                                list.push(item);
                        }
                        if (list.length > 0) {
                            var ratios = [];
                            for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
                                var item = list_1[_b];
                                ratios.push(item.weight);
                            }
                            var i = List.Random(ratios);
                            data = list[i];
                        }
                        if (data != null) {
                            data.Load();
                            if (!reuse) {
                                var i = this.loaded.indexOf(data);
                                if (i < 0)
                                    this.loaded.push(data);
                            }
                        }
                        return data;
                    };
                    List.prototype.Unload = function (data) {
                        if (data == null)
                            return;
                        var i = this.loaded.indexOf(data);
                        if (i >= 0)
                            this.loaded.splice(i, 1);
                    };
                    List.Random = function (ratios) {
                        if (ratios != null) {
                            var max = 0, sum = 0;
                            for (var _i = 0, ratios_1 = ratios; _i < ratios_1.length; _i++) {
                                var item = ratios_1[_i];
                                max += item;
                            }
                            var ratio = Math.random() * max;
                            for (var i = 0; i < ratios.length; i++) {
                                sum += ratios[i];
                                if (sum > ratio)
                                    return i;
                            }
                        }
                        return 0;
                    };
                    List.Get = function (style) {
                        if (style === void 0) { style = null; }
                        return __awaiter(this, void 0, void 0, function () {
                            var list, _i, _a, pd;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        list = new List();
                                        _i = 0;
                                        return [4 /*yield*/, Promo.Data.LoadList(style)];
                                    case 1:
                                        _a = _b.sent();
                                        _b.label = 2;
                                    case 2:
                                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                                        pd = _a[_i];
                                        list.Add(pd);
                                        _b.label = 3;
                                    case 3:
                                        _i++;
                                        return [3 /*break*/, 2];
                                    case 4: return [2 /*return*/, list];
                                }
                            });
                        });
                    };
                    return List;
                }());
                Promo.List = List;
            })(Promo = Yun.Promo || (Yun.Promo = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Develop;
    (function (Develop) {
        var Yun;
        (function (Yun) {
            var Rank;
            (function (Rank) {
                var apiUrl = "https://yxapi.tomatojoy.cn/player";
                var UserInfo = /** @class */ (function () {
                    function UserInfo() {
                    }
                    return UserInfo;
                }());
                var ResultRankListData = /** @class */ (function () {
                    function ResultRankListData() {
                    }
                    return ResultRankListData;
                }());
                var ResultParamData = /** @class */ (function () {
                    function ResultParamData() {
                    }
                    return ResultParamData;
                }());
                var ResultParam = /** @class */ (function () {
                    function ResultParam() {
                    }
                    return ResultParam;
                }());
                var Result = /** @class */ (function () {
                    function Result() {
                    }
                    return Result;
                }());
                var RankData = /** @class */ (function () {
                    function RankData() {
                        this.score = 0;
                        this.rank = 0;
                    }
                    return RankData;
                }());
                Rank.RankData = RankData;
                function ResultRankListData2RankData(data) {
                    var rankData = new RankData();
                    if (data != null) {
                        rankData.userguid = data.userguid;
                        rankData.score = data.score;
                        rankData.userName = data.userInfo.userName;
                        rankData.avatar = data.userInfo.avatar;
                    }
                    return rankData;
                }
                var selfRanks = {};
                function GetSelfRank(rankguid) {
                    if (selfRanks[rankguid] != null) {
                        return selfRanks[rankguid];
                    }
                    return new RankData();
                }
                Rank.GetSelfRank = GetSelfRank;
                function GetRankList(rankguid) {
                    return __awaiter(this, void 0, void 0, function () {
                        var list, req, p, www, res_1, size, i, rd, rd, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    list = [];
                                    req = {};
                                    req.A = "Rank.GetRankList";
                                    p = {};
                                    p.rankguid = rankguid;
                                    p.userguid = TJ.Common.SystemInfo.userGuid;
                                    if (p.userguid == null)
                                        p.userguid = "";
                                    req.P = JSON.stringify(p);
                                    www = new TJ.Common.WWW(apiUrl, req);
                                    www.logText = true;
                                    return [4 /*yield*/, www.Send("post", "form")];
                                case 1:
                                    _a.sent();
                                    if (www.error == null) {
                                        res_1 = JSON.parse(www.text);
                                        if (res_1.E == null) {
                                            if (res_1.P.data != null) {
                                                size = 0;
                                                selfRanks[rankguid] = null;
                                                if (res_1.P.data.list != null) {
                                                    size = res_1.P.data.list.length;
                                                    for (i = 0; i < res_1.P.data.list.length; i++) {
                                                        rd = ResultRankListData2RankData(res_1.P.data.list[i]);
                                                        list.push(rd);
                                                        if (rd.userguid == TJ.Common.SystemInfo.userGuid) {
                                                            selfRanks[rankguid] = rd;
                                                        }
                                                    }
                                                }
                                                if (res_1.P.data.self != null) {
                                                    rd = ResultRankListData2RankData(res_1.P.data.self);
                                                    if (selfRanks[rankguid] != null) {
                                                        selfRanks[rankguid].score = rd.score;
                                                        selfRanks[rankguid].userName = rd.userName;
                                                        selfRanks[rankguid].avatar = rd.avatar;
                                                    }
                                                    else {
                                                        selfRanks[rankguid] = rd;
                                                        list.push(rd);
                                                    }
                                                }
                                                list.sort(function (a, b) {
                                                    if (a.score > b.score) {
                                                        return res_1.P.data.sortType;
                                                    }
                                                    else if (a.score < b.score) {
                                                        return -res_1.P.data.sortType;
                                                    }
                                                    return 0;
                                                });
                                                if (size > 0 && list.length > size) {
                                                    list.splice(size, list.length - size);
                                                }
                                                for (i = 0; i < list.length; i++) {
                                                    list[i].rank = i + 1;
                                                }
                                            }
                                        }
                                        else {
                                            console.log("E = " + res_1.E);
                                        }
                                    }
                                    return [2 /*return*/, list];
                            }
                        });
                    });
                }
                Rank.GetRankList = GetRankList;
                function ReportScore(rankguid, score, userguid) {
                    if (userguid === void 0) { userguid = null; }
                    return __awaiter(this, void 0, void 0, function () {
                        var req, p, www;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    req = {};
                                    req.A = "Rank.ReportScore";
                                    p = {};
                                    p.rankguid = rankguid;
                                    p.userguid = userguid != null ? userguid : TJ.Common.SystemInfo.userGuid;
                                    p.score = score;
                                    req.P = JSON.stringify(p);
                                    www = new TJ.Common.WWW(apiUrl, req);
                                    www.logText = true;
                                    return [4 /*yield*/, www.Send("post", "form")];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                Rank.ReportScore = ReportScore;
            })(Rank = Yun.Rank || (Yun.Rank = {}));
        })(Yun = Develop.Yun || (Develop.Yun = {}));
    })(Develop = TJ.Develop || (TJ.Develop = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var Extern;
            (function (Extern) {
                var ADS;
                (function (ADS) {
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.Android.ADS.ExApi." + fn + " -> " + ps);
                        };
                        ExApi.ShowBanner = function (json) {
                            this.Debug("ShowBanner", json);
                            this.jc.CallStatic("ShowBanner", new TJ.Common.String_(json));
                        };
                        ExApi.RemoveBanner = function (json) {
                            this.Debug("RemoveBanner", json);
                            this.jc.CallStatic("RemoveBanner", new TJ.Common.String_(json));
                        };
                        ExApi.NormalReady = function (json) {
                            this.Debug("NormalReady", json);
                            return this.jc.CallStatic(TJ.Common.Bool_, "NormalReady", new TJ.Common.String_(json)).value;
                        };
                        ExApi.ShowNormal = function (json) {
                            this.Debug("ShowNormal", json);
                            this.jc.CallStatic("ShowNormal", new TJ.Common.String_(json));
                        };
                        ExApi.RewardReady = function (json) {
                            this.Debug("RewardReady", json);
                            return this.jc.CallStatic(TJ.Common.Bool_, "RewardReady", new TJ.Common.String_(json)).value;
                        };
                        ExApi.ShowReward = function (json) {
                            this.Debug("ShowReward", json);
                            this.jc.CallStatic("ShowReward", new TJ.Common.String_(json));
                        };
                        ExApi.Exist = function () {
                            this.Debug("Exist");
                            return this.jc.CallStatic(TJ.Common.Bool_, "Exist").value;
                        };
                        ExApi.jc = new TJ.Common.Android.JavaClass("tj.ADS.ExApi");
                        return ExApi;
                    }());
                    ADS.ExApi = ExApi;
                })(ADS = Extern.ADS || (Extern.ADS = {}));
            })(Extern = Android.Extern || (Android.Extern = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var Extern;
            (function (Extern) {
                var APP;
                (function (APP) {
                    var Api = /** @class */ (function () {
                        function Api() {
                        }
                        Api.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.Android.APP.Api." + fn + " -> " + ps);
                        };
                        Api.AppGuid = function () {
                            this.Debug("AppGuid");
                            return this.jc.CallStatic(TJ.Common.String_, "AppGuid").value;
                        };
                        Api.jc = new TJ.Common.Android.JavaClass("tj.APP.Api");
                        return Api;
                    }());
                    APP.Api = Api;
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.Android.APP.ExApi." + fn + " -> " + ps);
                        };
                        ExApi.Quit = function () {
                            this.Debug("Quit");
                            this.jc.CallStatic("Quit");
                        };
                        ExApi.ProductName = function () {
                            this.Debug("ProductName");
                            return this.jc.CallStatic(TJ.Common.String_, "ProductName").value;
                        };
                        ExApi.PackageName = function () {
                            this.Debug("PackageName");
                            return this.jc.CallStatic(TJ.Common.String_, "PackageName").value;
                        };
                        ExApi.VersionName = function () {
                            this.Debug("VersionName");
                            return this.jc.CallStatic(TJ.Common.String_, "VersionName").value;
                        };
                        ExApi.VersionCode = function () {
                            this.Debug("VersionCode");
                            return this.jc.CallStatic(TJ.Common.Int_, "VersionCode").value;
                        };
                        ExApi.Channel = function () {
                            this.Debug("Channel");
                            return this.jc.CallStatic(TJ.Common.String_, "Channel").value;
                        };
                        ExApi.UserAgreement = function () {
                            this.Debug("UserAgreement");
                            this.jc.CallStatic("UserAgreement");
                        };
                        ExApi.PrivacyPolicy = function () {
                            this.Debug("PrivacyPolicy");
                            this.jc.CallStatic("PrivacyPolicy");
                        };
                        ExApi.jc = new TJ.Common.Android.JavaClass("tj.APP.ExApi");
                        return ExApi;
                    }());
                    APP.ExApi = ExApi;
                })(APP = Extern.APP || (Extern.APP = {}));
            })(Extern = Android.Extern || (Android.Extern = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var Extern;
            (function (Extern) {
                var GSA;
                (function (GSA) {
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.Android.GSA.ExApi." + fn + " -> " + ps);
                        };
                        ExApi.Event = function (json) {
                            this.Debug("Event", json);
                            this.jc.CallStatic("Event", new TJ.Common.String_(json));
                        };
                        ExApi.EventBegin = function (json) {
                            this.Debug("EventBegin", json);
                            this.jc.CallStatic("EventBegin", new TJ.Common.String_(json));
                        };
                        ExApi.EventEnd = function (json) {
                            this.Debug("EventEnd", json);
                            this.jc.CallStatic("EventEnd", new TJ.Common.String_(json));
                        };
                        ExApi.PageBegin = function (json) {
                            this.Debug("PageBegin", json);
                            this.jc.CallStatic("PageBegin", new TJ.Common.String_(json));
                        };
                        ExApi.PageEnd = function (json) {
                            this.Debug("PageEnd", json);
                            this.jc.CallStatic("PageEnd", new TJ.Common.String_(json));
                        };
                        ExApi.LevelStart = function (json) {
                            this.Debug("LevelStart", json);
                            this.jc.CallStatic("LevelStart", new TJ.Common.String_(json));
                        };
                        ExApi.LevelFinish = function (json) {
                            this.Debug("LevelFinish", json);
                            this.jc.CallStatic("LevelFinish", new TJ.Common.String_(json));
                        };
                        ExApi.LevelFail = function (json) {
                            this.Debug("LevelFail", json);
                            this.jc.CallStatic("LevelFail", new TJ.Common.String_(json));
                        };
                        ExApi.Pay = function (json) {
                            this.Debug("Pay", json);
                            this.jc.CallStatic("Pay", new TJ.Common.String_(json));
                        };
                        ExApi.Buy = function (json) {
                            this.Debug("Buy", json);
                            this.jc.CallStatic("Buy", new TJ.Common.String_(json));
                        };
                        ExApi.Use = function (json) {
                            this.Debug("Use", json);
                            this.jc.CallStatic("Use", new TJ.Common.String_(json));
                        };
                        ExApi.Bonus = function (json) {
                            this.Debug("Bonus", json);
                            this.jc.CallStatic("Bonus", new TJ.Common.String_(json));
                        };
                        ExApi.jc = new TJ.Common.Android.JavaClass("tj.GSA.ExApi");
                        return ExApi;
                    }());
                    GSA.ExApi = ExApi;
                })(GSA = Extern.GSA || (Extern.GSA = {}));
            })(Extern = Android.Extern || (Android.Extern = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var Extern;
            (function (Extern) {
                var IAP;
                (function (IAP) {
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.Android.IAP.ExApi." + fn + " -> " + ps);
                        };
                        ExApi.Purchase = function (json) {
                            this.Debug("Purchase", json);
                            this.jc.CallStatic("Purchase", new TJ.Common.String_(json));
                        };
                        ExApi.QueryAll = function (json) {
                            this.Debug("QueryAll", json);
                            this.jc.CallStatic("QueryAll", new TJ.Common.String_(json));
                        };
                        ExApi.Consume = function (json) {
                            this.Debug("Consume", json);
                            this.jc.CallStatic("Consume", new TJ.Common.String_(json));
                        };
                        ExApi.Exist = function () {
                            this.Debug("Exist");
                            return this.jc.CallStatic(TJ.Common.Bool_, "Exist").value;
                        };
                        ExApi.jc = new TJ.Common.Android.JavaClass("tj.IAP.ExApi");
                        return ExApi;
                    }());
                    IAP.ExApi = ExApi;
                })(IAP = Extern.IAP || (Extern.IAP = {}));
            })(Extern = Android.Extern || (Android.Extern = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var Extern;
            (function (Extern) {
                var oppo;
                (function (oppo) {
                    var mobad;
                    (function (mobad) {
                        var Act = /** @class */ (function () {
                            function Act() {
                            }
                            Act.Debug = function (fn) {
                                var ps = [];
                                for (var _i = 1; _i < arguments.length; _i++) {
                                    ps[_i - 1] = arguments[_i];
                                }
                                console.log("call TJ.Platform.Android.Extern.oppo.mobad." + fn + " -> " + ps);
                            };
                            Act.GetNativeCustom = function () {
                                this.Debug("GetNativeCustom");
                                return this.jc.CallStatic(TJ.Common.String_, "GetNativeCustom").value;
                            };
                            Act.ShowNativeCustom = function (guid) {
                                this.Debug("ShowNativeCustom", guid);
                                this.jc.CallStatic("ShowNativeCustom", new TJ.Common.String_(guid));
                            };
                            Act.ClickNativeCustom = function (guid) {
                                this.Debug("ClickNativeCustom", guid);
                                this.jc.CallStatic("ClickNativeCustom", new TJ.Common.String_(guid));
                            };
                            Act.jc = new TJ.Common.Android.JavaClass("tj.sdk.oppo.mobad.Act");
                            return Act;
                        }());
                        mobad.Act = Act;
                    })(mobad = oppo.mobad || (oppo.mobad = {}));
                })(oppo = Extern.oppo || (Extern.oppo = {}));
            })(Extern = Android.Extern || (Android.Extern = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var Extern;
            (function (Extern) {
                var Tools;
                (function (Tools) {
                    var App = /** @class */ (function () {
                        function App() {
                        }
                        App.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.Android.Tools.App." + fn + " -> " + ps);
                        };
                        App.StartUri = function (uri, pkg) {
                            this.Debug("StartUri", uri, pkg);
                            this.jc.CallStatic("StartUri", new TJ.Common.String_(uri), new TJ.Common.String_(pkg));
                        };
                        App.jc = new TJ.Common.Android.JavaClass("tj.tools.App");
                        return App;
                    }());
                    Tools.App = App;
                })(Tools = Extern.Tools || (Extern.Tools = {}));
            })(Extern = Android.Extern || (Android.Extern = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var AdService;
                (function (AdService) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OAdService).DoInit();
                                break;
                        }
                    });
                    var OAdService = /** @class */ (function (_super) {
                        __extends(OAdService, _super);
                        function OAdService() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAdService.prototype.ShowBanner = function (param) {
                            Android.Extern.ADS.ExApi.ShowBanner(param.ToJson());
                        };
                        OAdService.prototype.RemoveBanner = function (param) {
                            Android.Extern.ADS.ExApi.RemoveBanner(param.ToJson());
                        };
                        OAdService.prototype.NormalReady = function (param) {
                            return Android.Extern.ADS.ExApi.NormalReady(param.ToJson());
                        };
                        OAdService.prototype.ShowNormal = function (param) {
                            Android.Extern.ADS.ExApi.ShowNormal(param.ToJson());
                        };
                        OAdService.prototype.RewardReady = function (param) {
                            return Android.Extern.ADS.ExApi.RewardReady(param.ToJson());
                        };
                        OAdService.prototype.ShowReward = function (param) {
                            Android.Extern.ADS.ExApi.ShowReward(param.ToJson());
                        };
                        OAdService.prototype.Exist = function () {
                            return Android.Extern.ADS.ExApi.Exist();
                        };
                        return OAdService;
                    }(TJ.API.AdService.IAdService));
                })(AdService = SDK.AdService || (SDK.AdService = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var Analytics;
                (function (Analytics) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OAnalytics).DoInit();
                                break;
                        }
                    });
                    var OAnalytics = /** @class */ (function (_super) {
                        __extends(OAnalytics, _super);
                        function OAnalytics() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAnalytics.prototype.Event = function (param) {
                            Android.Extern.GSA.ExApi.Event(param.ToJson());
                        };
                        OAnalytics.prototype.EventBegin = function (param) {
                            Android.Extern.GSA.ExApi.EventBegin(param.ToJson());
                        };
                        OAnalytics.prototype.EventEnd = function (param) {
                            Android.Extern.GSA.ExApi.EventEnd(param.ToJson());
                        };
                        OAnalytics.prototype.PageBegin = function (param) {
                            Android.Extern.GSA.ExApi.PageBegin(param.ToJson());
                        };
                        OAnalytics.prototype.PageEnd = function (param) {
                            Android.Extern.GSA.ExApi.PageEnd(param.ToJson());
                        };
                        OAnalytics.prototype.LevelStart = function (param) {
                            Android.Extern.GSA.ExApi.LevelStart(param.ToJson());
                        };
                        OAnalytics.prototype.LevelFinish = function (param) {
                            Android.Extern.GSA.ExApi.LevelFinish(param.ToJson());
                        };
                        OAnalytics.prototype.LevelFail = function (param) {
                            Android.Extern.GSA.ExApi.LevelFail(param.ToJson());
                        };
                        OAnalytics.prototype.Pay = function (param) {
                            Android.Extern.GSA.ExApi.Pay(param.ToJson());
                        };
                        OAnalytics.prototype.Buy = function (param) {
                            Android.Extern.GSA.ExApi.Buy(param.ToJson());
                        };
                        OAnalytics.prototype.Use = function (param) {
                            Android.Extern.GSA.ExApi.Use(param.ToJson());
                        };
                        OAnalytics.prototype.Bonus = function (param) {
                            Android.Extern.GSA.ExApi.Bonus(param.ToJson());
                        };
                        return OAnalytics;
                    }(TJ.API.Analytics.IAnalytics));
                })(Analytics = SDK.Analytics || (SDK.Analytics = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var AppCtl;
                (function (AppCtl) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OAppCtl).DoInit();
                                break;
                        }
                    });
                    var OAppCtl = /** @class */ (function (_super) {
                        __extends(OAppCtl, _super);
                        function OAppCtl() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAppCtl.prototype.UserAgreement = function () {
                            Android.Extern.APP.ExApi.UserAgreement();
                        };
                        OAppCtl.prototype.PrivacyPolicy = function () {
                            Android.Extern.APP.ExApi.PrivacyPolicy();
                        };
                        OAppCtl.prototype.Review = function () {
                            var market = null;
                            switch (Android.Extern.APP.ExApi.Channel()) {
                                case TJ.Define.Channel.Android.GooglePlay:
                                    market = "com.android.vending"; //Google Play商店
                                    break;
                                case TJ.Define.Channel.Android.oppo:
                                    market = "com.oppo.market"; //OPPO软件商店
                                    break;
                                case TJ.Define.Channel.Android.huawei:
                                    market = "com.huawei.appmarket"; //华为应用市场
                                    break;
                                case TJ.Define.Channel.Android.vivo:
                                    market = "com.bbk.appstore"; //VIVO应用商店
                                    break;
                                case TJ.Define.Channel.Android.meizu:
                                    market = "com.meizu.flyme.gamecenter"; //魅族游戏中心
                                    break;
                                case TJ.Define.Channel.Android.jinli:
                                    market = "com.gionee.aora.market"; //金立软件商店
                                    break;
                                case TJ.Define.Channel.Android.lenovo:
                                    market = "com.lenovo.leos.appstore"; //联想应用中心
                                    break;
                                case TJ.Define.Channel.Android.coolpad:
                                    market = "com.yulong.android.coolmart"; //酷派应用商店
                                    break;
                                case TJ.Define.Channel.Android.yyb:
                                    market = "com.tencent.android.qqdownloader"; //应用宝
                                    break;
                                case TJ.Define.Channel.Android.qihoo:
                                    market = "com.qihoo.appstore"; //360手机助手
                                    break;
                                case TJ.Define.Channel.Android.xiaomi:
                                    market = "com.xiaomi.market"; //小米应用商店
                                    break;
                                case "xiaomiGame":
                                    market = "com.xiaomi.gamecenter"; //小米游戏中心
                                    break;
                                case TJ.Define.Channel.Android._4399:
                                case TJ.Define.Channel.Android._43992:
                                    market = "com.m4399.gamecenter"; //4399游戏盒
                                    break;
                                case TJ.Define.Channel.Android.jiuyou:
                                    market = "cn.ninegame.gamemanager"; //九游
                                    break;
                                case TJ.Define.Channel.Android.baidu:
                                case TJ.Define.Channel.Android.baidu2:
                                    market = "com.baidu.appsearch"; //百度手机助手
                                    break;
                                case TJ.Define.Channel.Android.nby:
                                    market = "cn.nubia.neostore"; //努比亚应用中心
                                    break;
                                case TJ.Define.Channel.Android.samsung:
                                    market = "com.sec.android.app.samsungapps"; //三星应用商店
                                    break;
                                case TJ.Define.Channel.Android.taptap:
                                    market = "com.taptap"; //TapTap
                                    break;
                                case TJ.Define.Channel.Android.haoyou:
                                    market = "com.xmcy.hykb"; //好游快爆
                                    break;
                                case TJ.Define.Channel.Android.xiaoqi:
                                    market = "com.smwl.x7center"; //小7手游中心
                                    break;
                                case "youyi":
                                    market = "com.eoemobile.netmarket"; //优亿市场
                                    break;
                                case "sougou":
                                    market = "com.sogou.androidtool"; //搜狗手机助手
                                    break;
                                case "anzhi":
                                    market = "cn.goapk.market"; //安智市场
                                    break;
                                case "ppzs":
                                    market = "com.pp.assistant"; //PP助手
                                    break;
                                case "mmy":
                                    market = "com.mumayi.market.ui"; //木蚂蚁市场
                                    break;
                                case "dangle":
                                    market = "com.diguayouxi"; //当乐
                                    break;
                                case "cczs":
                                    market = "com.lion.market"; //虫虫助手
                                    break;
                                case "guopan":
                                    market = "com.flamingo.gpgame"; //果盘游戏
                                    break;
                                case TJ.Define.Channel.Android.yyh:
                                    market = "com.yingyonghui.market"; //应用汇
                                    break;
                                case "mzw":
                                    market = "com.muzhiwan.market"; //拇指玩
                                    break;
                                case "tongbu":
                                    market = "com.tongbu.tui"; //同步推
                                    break;
                                case "yiwan":
                                    market = "com.cw.ywsyzx"; //益玩手游中心
                                    break;
                                case TJ.Define.Channel.Android.zhongxing:
                                    market = "zte.com.market"; //中兴应用商店
                                    break;
                            }
                            if (market != null) {
                                Android.Extern.Tools.App.StartUri(TJ.Common.String_.Format("market://details?id={0}", Android.Extern.APP.ExApi.PackageName()), market);
                            }
                        };
                        OAppCtl.prototype.Quit = function () {
                            Android.Extern.APP.ExApi.Quit();
                        };
                        return OAppCtl;
                    }(TJ.API.AppCtl.IAppCtl));
                })(AppCtl = SDK.AppCtl || (SDK.AppCtl = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var AppInfo;
                (function (AppInfo) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OAppInfo).DoInit();
                                break;
                        }
                    });
                    var OAppInfo = /** @class */ (function (_super) {
                        __extends(OAppInfo, _super);
                        function OAppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAppInfo.prototype.AppGuid = function () {
                            return Android.Extern.APP.Api.AppGuid();
                        };
                        OAppInfo.prototype.ProductName = function () {
                            return Android.Extern.APP.ExApi.ProductName();
                        };
                        OAppInfo.prototype.PackageName = function () {
                            return Android.Extern.APP.ExApi.PackageName();
                        };
                        OAppInfo.prototype.VersionName = function () {
                            return Android.Extern.APP.ExApi.VersionName();
                        };
                        OAppInfo.prototype.VersionCode = function () {
                            return Android.Extern.APP.ExApi.VersionCode();
                        };
                        OAppInfo.prototype.Channel = function () {
                            return Android.Extern.APP.ExApi.Channel();
                        };
                        return OAppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                })(AppInfo = SDK.AppInfo || (SDK.AppInfo = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var Billing;
                (function (Billing) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OBilling).DoInit();
                                break;
                        }
                    });
                    var OBilling = /** @class */ (function (_super) {
                        __extends(OBilling, _super);
                        function OBilling() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OBilling.prototype.Purchase = function (param) {
                            Android.Extern.IAP.ExApi.Purchase(param.ToJson());
                        };
                        OBilling.prototype.QueryAll = function (param) {
                            var cbi = param.cbi.Clone();
                            param.cbi.Set(TJ.Define.Event.Complete, function (json) {
                                var list = [];
                                for (var _i = 0, _a = JSON.parse(json); _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var p = new TJ.API.Billing.Param();
                                    p.product = item.product;
                                    p.order.id = item.order.id;
                                    p.order.date = new Date(Number.parseInt(item.order.date));
                                    list.push(p);
                                }
                                cbi.Run(TJ.Define.Event.Complete, list);
                            });
                            Android.Extern.IAP.ExApi.QueryAll(param.ToJson());
                        };
                        OBilling.prototype.Consume = function (param) {
                            Android.Extern.IAP.ExApi.Consume(param.ToJson());
                        };
                        OBilling.prototype.Exist = function () {
                            return Android.Extern.IAP.ExApi.Exist();
                        };
                        return OBilling;
                    }(TJ.API.Billing.IBilling));
                })(Billing = SDK.Billing || (SDK.Billing = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var oppo;
                (function (oppo) {
                    var mobad;
                    (function (mobad) {
                        TJ.Common.PriorityInit.Add(10, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.Android)
                                return;
                            switch (TJ.API.AppInfo.Channel()) {
                                case TJ.Define.Channel.Android.oppo:
                                    TJ.Common.Component.Manager.AddComponent(NativeAd).DoInit();
                                    break;
                            }
                        });
                        var NativeAd = /** @class */ (function (_super) {
                            __extends(NativeAd, _super);
                            function NativeAd() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            NativeAd.prototype.OnInit = function () {
                            };
                            NativeAd.prototype.LoadNative = function (param) {
                                var json = Android.Extern.oppo.mobad.Act.GetNativeCustom();
                                console.log("native json = " + json);
                                if (!TJ.Common.String_.IsNullOrEmpty(json)) {
                                    var item = new TJ.API.AdService.NativeItem();
                                    var data_1 = JSON.parse(json);
                                    item.OnShow = function () {
                                        Android.Extern.oppo.mobad.Act.ShowNativeCustom(data_1.guid);
                                    };
                                    item.OnClick = function () {
                                        Android.Extern.oppo.mobad.Act.ClickNativeCustom(data_1.guid);
                                    };
                                    item.title = data_1.title;
                                    item.desc = data_1.desc;
                                    item.logoUrl = data_1.logoUrl;
                                    item.iconUrl = data_1.iconUrl;
                                    item.imgUrl = data_1.imgUrl;
                                    return item;
                                }
                                return null;
                            };
                            return NativeAd;
                        }(TJ.API.AdService.IAdService));
                    })(mobad = oppo.mobad || (oppo.mobad = {}));
                })(oppo = SDK.oppo || (SDK.oppo = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var Promo;
                (function (Promo) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OPromo).DoInit();
                                break;
                        }
                    });
                    var OPromo = /** @class */ (function (_super) {
                        __extends(OPromo, _super);
                        function OPromo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OPromo.prototype.Pop = function (param) {
                            Android.Extern.Tools.App.StartUri(param.uri, param.storePackage);
                        };
                        return OPromo;
                    }(TJ.API.Promo.IPromo));
                })(Promo = SDK.Promo || (SDK.Promo = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var Android;
        (function (Android) {
            var SDK;
            (function (SDK) {
                var Vibrate;
                (function (Vibrate) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.Android:
                                TJ.Common.Component.Manager.AddComponent(OVibrate).DoInit();
                                break;
                        }
                    });
                    var OVibrate = /** @class */ (function (_super) {
                        __extends(OVibrate, _super);
                        function OVibrate() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OVibrate.prototype.OnInit = function () {
                            var jc = new TJ.Common.Android.JavaClass("tj.application.main");
                            var app = jc.CallStatic(TJ.Common.Android.JavaObject, "GetIns");
                            this.jo = app.Call(TJ.Common.Android.JavaObject, "getSystemService", new TJ.Common.String_("vibrator"));
                        };
                        OVibrate.prototype.Short = function () {
                            this.Time(0.02);
                        };
                        OVibrate.prototype.Long = function () {
                            this.Time(0.4);
                        };
                        OVibrate.prototype.Time = function (seconds) {
                            this.jo.Call("vibrate", new TJ.Common.Long_(seconds * 1000));
                        };
                        return OVibrate;
                    }(TJ.API.Vibrate.IVibrate));
                })(Vibrate = SDK.Vibrate || (SDK.Vibrate = {}));
            })(SDK = Android.SDK || (Android.SDK = {}));
        })(Android = Platform.Android || (Platform.Android = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var _4399;
                (function (_4399) {
                    function Exist() {
                        return typeof h5api != 'undefined';
                    }
                    _4399.Exist = Exist;
                    var CanPlayAdResult = /** @class */ (function () {
                        function CanPlayAdResult() {
                        }
                        return CanPlayAdResult;
                    }());
                    var PlayAdResult = /** @class */ (function () {
                        function PlayAdResult() {
                        }
                        return PlayAdResult;
                    }());
                    function CanPlayAd(callback) {
                        h5api.canPlayAd(callback);
                    }
                    _4399.CanPlayAd = CanPlayAd;
                    function PlayAd(callback) {
                        h5api.playAd(callback);
                    }
                    _4399.PlayAd = PlayAd;
                })(_4399 = Extern._4399 || (Extern._4399 = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var Adwending;
                (function (Adwending) {
                    function Exist() {
                        return typeof window.parent != 'undefined';
                    }
                    Adwending.Exist = Exist;
                    var Parm = /** @class */ (function () {
                        function Parm() {
                        }
                        return Parm;
                    }());
                    Adwending.Parm = Parm;
                    function PlayVideo(parm) {
                        window.parent.postMessage({ cmd: "playvideo", data: parm }, '*');
                    }
                    Adwending.PlayVideo = PlayVideo;
                    function Message(callback) {
                        window.addEventListener('message', function (e) {
                            if (callback != null)
                                callback(e.data);
                        });
                    }
                    Adwending.Message = Message;
                    function GameOut(parm) {
                        window.parent.postMessage({ cmd: "gameout", data: parm }, '*');
                    }
                    Adwending.GameOut = GameOut;
                    function GameInto(parm) {
                        window.parent.postMessage({ cmd: "gameinto", data: parm }, '*');
                    }
                    Adwending.GameInto = GameInto;
                    function GameStart(parm) {
                        window.parent.postMessage({ cmd: "gamestart", data: parm }, '*');
                    }
                    Adwending.GameStart = GameStart;
                    function GameOver(parm) {
                        window.parent.postMessage({ cmd: "gameover", data: parm }, '*');
                    }
                    Adwending.GameOver = GameOver;
                })(Adwending = Extern.Adwending || (Extern.Adwending = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var HBS;
                (function (HBS) {
                    function Exist() {
                        return typeof hbs != 'undefined';
                    }
                    HBS.Exist = Exist;
                    var CallbackParam = /** @class */ (function () {
                        function CallbackParam() {
                        }
                        return CallbackParam;
                    }());
                    HBS.CallbackParam = CallbackParam;
                    var GameLoginResult = /** @class */ (function () {
                        function GameLoginResult() {
                        }
                        return GameLoginResult;
                    }());
                    HBS.GameLoginResult = GameLoginResult;
                    var GameLoginParam = /** @class */ (function (_super) {
                        __extends(GameLoginParam, _super);
                        function GameLoginParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GameLoginParam;
                    }(CallbackParam));
                    HBS.GameLoginParam = GameLoginParam;
                    function GameLogin(param) {
                        hbs.gameLogin(param);
                    }
                    HBS.GameLogin = GameLogin;
                    function ExitApplication(param) {
                        hbs.exitApplication(param);
                    }
                    HBS.ExitApplication = ExitApplication;
                    var LaunchOption = /** @class */ (function () {
                        function LaunchOption() {
                        }
                        return LaunchOption;
                    }());
                    function GetLaunchOptionsSync() {
                        return hbs.getLaunchOptionsSync();
                    }
                    HBS.GetLaunchOptionsSync = GetLaunchOptionsSync;
                })(HBS = Extern.HBS || (Extern.HBS = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var HG;
                (function (HG) {
                    function Exist() {
                        return typeof hg != 'undefined';
                    }
                    HG.Exist = Exist;
                    function GameLoadResult(parm) {
                        hg.gameLoadResult(parm);
                    }
                    HG.GameLoadResult = GameLoadResult;
                    var RewardedVideoAd = /** @class */ (function () {
                        function RewardedVideoAd(obj) {
                            this.rewardedVideoAd = obj;
                        }
                        RewardedVideoAd.prototype.Show = function () {
                            return this.rewardedVideoAd.show();
                        };
                        Object.defineProperty(RewardedVideoAd.prototype, "onError", {
                            get: function () {
                                return this.rewardedVideoAd.onClose;
                            },
                            set: function (callback) {
                                this.rewardedVideoAd.onError = callback;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(RewardedVideoAd.prototype, "onClose", {
                            get: function () {
                                return this.rewardedVideoAd.onClose;
                            },
                            set: function (callback) {
                                this.rewardedVideoAd.onClose = callback;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        return RewardedVideoAd;
                    }());
                    HG.RewardedVideoAd = RewardedVideoAd;
                    function CreateRewardedVideoAd(param) {
                        var obj = hg.createRewardedVideoAd(param);
                        return new RewardedVideoAd(obj);
                    }
                    HG.CreateRewardedVideoAd = CreateRewardedVideoAd;
                })(HG = Extern.HG || (Extern.HG = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var Kwai;
                (function (Kwai) {
                    function Exist() {
                        return typeof kwaigame != 'undefined';
                    }
                    Kwai.Exist = Exist;
                    function ReadyGo() {
                        kwaigame.readyGo();
                    }
                    Kwai.ReadyGo = ReadyGo;
                    function WillClose() {
                        kwaigame.willClose();
                    }
                    Kwai.WillClose = WillClose;
                    function Init(param) {
                        kwaigame.init(param);
                    }
                    Kwai.Init = Init;
                    var MediaRecoder = /** @class */ (function () {
                        function MediaRecoder(obj) {
                            this.obj = obj;
                        }
                        MediaRecoder.prototype.Init = function (param) {
                            this.obj.init(param);
                        };
                        MediaRecoder.prototype.Destory = function (param) {
                            this.obj.destory(param);
                        };
                        MediaRecoder.prototype.Start = function (param) {
                            this.obj.start(param);
                        };
                        MediaRecoder.prototype.Stop = function (param) {
                            this.obj.stop(param);
                        };
                        MediaRecoder.prototype.Pause = function (param) {
                            this.obj.pause(param);
                        };
                        MediaRecoder.prototype.Resume = function (param) {
                            this.obj.resume(param);
                        };
                        MediaRecoder.prototype.PublishVideo = function (param) {
                            this.obj.publishVideo(param);
                        };
                        MediaRecoder.prototype.OnError = function (param) {
                            this.obj.onError(param);
                        };
                        return MediaRecoder;
                    }());
                    Kwai.MediaRecoder = MediaRecoder;
                    function CreateMediaRecorder() {
                        if (kwaigame.createMediaRecorder == null)
                            return null;
                        var obj = kwaigame.createMediaRecorder();
                        if (obj == null)
                            return null;
                        return new MediaRecoder(obj);
                    }
                    Kwai.CreateMediaRecorder = CreateMediaRecorder;
                    var RewardVideo = /** @class */ (function () {
                        function RewardVideo(obj) {
                            this.rewardVideo = obj;
                        }
                        RewardVideo.prototype.Show = function (param) {
                            this.rewardVideo.show(param);
                        };
                        RewardVideo.prototype.OnReward = function (callback) {
                            this.rewardVideo.onReward(callback);
                        };
                        RewardVideo.prototype.OnClose = function (callback) {
                            this.rewardVideo.onClose(callback);
                        };
                        return RewardVideo;
                    }());
                    Kwai.RewardVideo = RewardVideo;
                    function CreateRewardedVideoAd(param) {
                        if (kwaigame.createRewardedVideoAd == null)
                            return null;
                        var obj = kwaigame.createRewardedVideoAd(param);
                        return new RewardVideo(obj);
                    }
                    Kwai.CreateRewardedVideoAd = CreateRewardedVideoAd;
                })(Kwai = Extern.Kwai || (Extern.Kwai = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var MZ;
                (function (MZ) {
                    function Exist() {
                        return typeof mz_jsb != 'undefined';
                    }
                    MZ.Exist = Exist;
                    var CallbackParam = /** @class */ (function () {
                        function CallbackParam() {
                        }
                        return CallbackParam;
                    }());
                    MZ.CallbackParam = CallbackParam;
                    function VibrateShort(parm) {
                        mz.vibrateShort(parm);
                    }
                    MZ.VibrateShort = VibrateShort;
                    function VibrateLong(parm) {
                        mz.vibrateLong(parm);
                    }
                    MZ.VibrateLong = VibrateLong;
                    var BannerAdStyle = /** @class */ (function () {
                        function BannerAdStyle() {
                        }
                        return BannerAdStyle;
                    }());
                    MZ.BannerAdStyle = BannerAdStyle;
                    var BannerAd = /** @class */ (function () {
                        function BannerAd(obj) {
                            this.bannerAd = obj;
                        }
                        Object.defineProperty(BannerAd.prototype, "style", {
                            get: function () {
                                return this.bannerAd.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        BannerAd.prototype.Show = function () {
                            return this.bannerAd.show();
                        };
                        BannerAd.prototype.Hide = function () {
                            return this.bannerAd.hide();
                        };
                        BannerAd.prototype.OnClose = function (callback) {
                            this.bannerAd.onClose(callback);
                        };
                        BannerAd.prototype.OffClose = function (callback) {
                            this.bannerAd.offClose(callback);
                        };
                        BannerAd.prototype.OnLoad = function (callback) {
                            this.bannerAd.onLoad(callback);
                        };
                        BannerAd.prototype.OffLoad = function (callback) {
                            this.bannerAd.offLoad(callback);
                        };
                        BannerAd.prototype.OnError = function (callback) {
                            this.bannerAd.onError(callback);
                        };
                        BannerAd.prototype.OffError = function (callback) {
                            this.bannerAd.offError(callback);
                        };
                        BannerAd.prototype.OnResize = function (callback) {
                            this.bannerAd.onResize(callback);
                        };
                        BannerAd.prototype.OffResize = function (callback) {
                            this.bannerAd.offResize(callback);
                        };
                        BannerAd.prototype.Destroy = function () {
                            this.bannerAd.destroy();
                        };
                        return BannerAd;
                    }());
                    MZ.BannerAd = BannerAd;
                    function CreateBannerAd(adUnitId, style) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        param.style = style;
                        var obj = qg.createBannerAd(param);
                        return new BannerAd(obj);
                    }
                    MZ.CreateBannerAd = CreateBannerAd;
                    var InsertAd = /** @class */ (function () {
                        function InsertAd(obj) {
                            this.insertAd = obj;
                        }
                        InsertAd.prototype.Load = function () {
                            return this.insertAd.load();
                        };
                        InsertAd.prototype.Show = function () {
                            return this.insertAd.show();
                        };
                        InsertAd.prototype.OnLoad = function (callback) {
                            this.insertAd.onLoad(callback);
                        };
                        InsertAd.prototype.OffLoad = function (callback) {
                            this.insertAd.offLoad(callback);
                        };
                        InsertAd.prototype.OnClose = function (callback) {
                            this.insertAd.onClose(callback);
                        };
                        InsertAd.prototype.OffClose = function (callback) {
                            this.insertAd.offClose(callback);
                        };
                        InsertAd.prototype.OnError = function (callback) {
                            this.insertAd.onError(callback);
                        };
                        InsertAd.prototype.OffError = function (callback) {
                            this.insertAd.offError(callback);
                        };
                        return InsertAd;
                    }());
                    MZ.InsertAd = InsertAd;
                    function CreateInsertAd(adUnitId) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = qg.createInsertAd(param);
                        return new InsertAd(obj);
                    }
                    MZ.CreateInsertAd = CreateInsertAd;
                    var RewardedVideoAd = /** @class */ (function () {
                        function RewardedVideoAd(obj) {
                            this.rewardedVideoAd = obj;
                        }
                        RewardedVideoAd.prototype.Load = function () {
                            this.rewardedVideoAd.load();
                        };
                        RewardedVideoAd.prototype.Show = function () {
                            this.rewardedVideoAd.show();
                        };
                        RewardedVideoAd.prototype.OnLoad = function (callback) {
                            this.rewardedVideoAd.onLoad(callback);
                        };
                        RewardedVideoAd.prototype.OffLoad = function (callback) {
                            this.rewardedVideoAd.offLoad(callback);
                        };
                        RewardedVideoAd.prototype.OnRewarded = function (callback) {
                            this.rewardedVideoAd.onRewarded(callback);
                        };
                        RewardedVideoAd.prototype.OffRewarded = function (callback) {
                            this.rewardedVideoAd.offRewarded(callback);
                        };
                        RewardedVideoAd.prototype.OnError = function (callback) {
                            this.rewardedVideoAd.onError(callback);
                        };
                        RewardedVideoAd.prototype.OffError = function (callback) {
                            this.rewardedVideoAd.offError(callback);
                        };
                        RewardedVideoAd.prototype.OnClose = function (callback) {
                            this.rewardedVideoAd.onClose(callback);
                        };
                        RewardedVideoAd.prototype.OffClose = function (callback) {
                            this.rewardedVideoAd.offClose(callback);
                        };
                        return RewardedVideoAd;
                    }());
                    MZ.RewardedVideoAd = RewardedVideoAd;
                    function CreateRewardedVideoAd(adUnitId) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = qg.createRewardedVideoAd(param);
                        return new RewardedVideoAd(obj);
                    }
                    MZ.CreateRewardedVideoAd = CreateRewardedVideoAd;
                })(MZ = Extern.MZ || (Extern.MZ = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        function Exist() {
                            return typeof qg != 'undefined';
                        }
                        QG.Exist = Exist;
                        var CallbackResult = /** @class */ (function () {
                            function CallbackResult() {
                            }
                            return CallbackResult;
                        }());
                        QG.CallbackResult = CallbackResult;
                        var CallbackParam = /** @class */ (function () {
                            function CallbackParam() {
                            }
                            return CallbackParam;
                        }());
                        QG.CallbackParam = CallbackParam;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = Extern.OPPO || (Extern.OPPO = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        var InitAdServiceParam = /** @class */ (function (_super) {
                            __extends(InitAdServiceParam, _super);
                            function InitAdServiceParam() {
                                var _this = _super !== null && _super.apply(this, arguments) || this;
                                _this.isDebug = false;
                                return _this;
                            }
                            return InitAdServiceParam;
                        }(QG.CallbackParam));
                        QG.InitAdServiceParam = InitAdServiceParam;
                        function InitAdService(param) {
                            qg.initAdService(param);
                        }
                        QG.InitAdService = InitAdService;
                        var BannerAd = /** @class */ (function () {
                            function BannerAd(obj) {
                                this.obj = obj;
                            }
                            BannerAd.prototype.Show = function () {
                                this.obj.show();
                            };
                            BannerAd.prototype.Hide = function () {
                                this.obj.hide();
                            };
                            BannerAd.prototype.OnShow = function (callback) {
                                this.obj.onShow(callback);
                            };
                            BannerAd.prototype.OffShow = function (callback) {
                                this.obj.offShow(callback);
                            };
                            BannerAd.prototype.OnHide = function (callback) {
                                this.obj.onHide(callback);
                            };
                            BannerAd.prototype.OffHide = function (callback) {
                                this.obj.offHide(callback);
                            };
                            BannerAd.prototype.OnError = function (callback) {
                                this.obj.onError(callback);
                            };
                            BannerAd.prototype.OffError = function (callback) {
                                this.obj.offError(callback);
                            };
                            BannerAd.prototype.OnResize = function (callback) {
                                this.obj.onResize(callback);
                            };
                            BannerAd.prototype.OffResize = function () {
                                this.obj.offResize();
                            };
                            BannerAd.prototype.Destroy = function () {
                                this.obj.destroy();
                            };
                            return BannerAd;
                        }());
                        QG.BannerAd = BannerAd;
                        function CreateBannerAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createBannerAd(param);
                            return new BannerAd(obj);
                        }
                        QG.CreateBannerAd = CreateBannerAd;
                        var InsertAd = /** @class */ (function () {
                            function InsertAd(obj) {
                                this.obj = obj;
                            }
                            InsertAd.prototype.Load = function () {
                                this.obj.load();
                            };
                            InsertAd.prototype.Show = function () {
                                this.obj.show();
                            };
                            InsertAd.prototype.OnLoad = function (callback) {
                                this.obj.onLoad(callback);
                            };
                            InsertAd.prototype.OffLoad = function () {
                                this.obj.offLoad();
                            };
                            InsertAd.prototype.OnShow = function (callback) {
                                this.obj.onShow(callback);
                            };
                            InsertAd.prototype.OffShow = function () {
                                this.obj.offShow();
                            };
                            InsertAd.prototype.OnError = function (callback) {
                                this.obj.onError(callback);
                            };
                            InsertAd.prototype.OffError = function () {
                                this.obj.offError();
                            };
                            InsertAd.prototype.Destroy = function () {
                                this.obj.destroy();
                            };
                            return InsertAd;
                        }());
                        QG.InsertAd = InsertAd;
                        function CreateInsertAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createInsertAd(param);
                            return new InsertAd(obj);
                        }
                        QG.CreateInsertAd = CreateInsertAd;
                        var RewardedVideoAdCloseResult = /** @class */ (function (_super) {
                            __extends(RewardedVideoAdCloseResult, _super);
                            function RewardedVideoAdCloseResult() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return RewardedVideoAdCloseResult;
                        }(QG.CallbackResult));
                        var RewardedVideoAd = /** @class */ (function () {
                            function RewardedVideoAd(obj) {
                                this.obj = obj;
                            }
                            RewardedVideoAd.prototype.Load = function () {
                                this.obj.load();
                            };
                            RewardedVideoAd.prototype.Show = function () {
                                this.obj.show();
                            };
                            RewardedVideoAd.prototype.OnLoad = function (callback) {
                                this.obj.onLoad(callback);
                            };
                            RewardedVideoAd.prototype.OffLoad = function () {
                                this.obj.offLoad();
                            };
                            RewardedVideoAd.prototype.OnVideoStart = function (callback) {
                                this.obj.onVideoStart(callback);
                            };
                            RewardedVideoAd.prototype.OffVideoStart = function () {
                                this.obj.offVideoStart();
                            };
                            RewardedVideoAd.prototype.OnRewarded = function (callback) {
                                this.obj.onRewarded(callback);
                            };
                            RewardedVideoAd.prototype.OffRewarded = function () {
                                this.obj.offRewarded();
                            };
                            RewardedVideoAd.prototype.OnClose = function (callback) {
                                this.obj.onClose(callback);
                            };
                            RewardedVideoAd.prototype.OffClose = function () {
                                this.obj.offClose();
                            };
                            RewardedVideoAd.prototype.OnError = function (callback) {
                                this.obj.onError(callback);
                            };
                            RewardedVideoAd.prototype.OffError = function () {
                                this.obj.offError();
                            };
                            RewardedVideoAd.prototype.Destroy = function () {
                                this.obj.destroy();
                            };
                            return RewardedVideoAd;
                        }());
                        QG.RewardedVideoAd = RewardedVideoAd;
                        function CreateRewardedVideoAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createRewardedVideoAd(param);
                            return new RewardedVideoAd(obj);
                        }
                        QG.CreateRewardedVideoAd = CreateRewardedVideoAd;
                        var NativeAdData = /** @class */ (function () {
                            function NativeAdData() {
                            }
                            return NativeAdData;
                        }());
                        QG.NativeAdData = NativeAdData;
                        var NativeAd = /** @class */ (function () {
                            function NativeAd(obj) {
                                this.obj = obj;
                            }
                            NativeAd.prototype.Load = function () {
                                this.obj.load();
                            };
                            NativeAd.prototype.ReportAdShow = function (adId) {
                                var obj = {};
                                obj.adId = adId;
                                this.obj.reportAdShow(obj);
                            };
                            NativeAd.prototype.ReportAdClick = function (adId) {
                                var obj = {};
                                obj.adId = adId;
                                this.obj.reportAdClick(obj);
                            };
                            NativeAd.prototype.OnLoad = function (callback) {
                                this.obj.onLoad(callback);
                            };
                            NativeAd.prototype.OffLoad = function () {
                                this.obj.offLoad();
                            };
                            NativeAd.prototype.OnError = function (callback) {
                                this.obj.onError(callback);
                            };
                            NativeAd.prototype.OffError = function () {
                                this.obj.offError();
                            };
                            NativeAd.prototype.Destroy = function () {
                                this.obj.destroy();
                            };
                            return NativeAd;
                        }());
                        QG.NativeAd = NativeAd;
                        function CreateNativeAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createNativeAd(param);
                            return new NativeAd(obj);
                        }
                        QG.CreateNativeAd = CreateNativeAd;
                        var GameBannerAd = /** @class */ (function () {
                            function GameBannerAd(obj) {
                                this.obj = obj;
                            }
                            GameBannerAd.prototype.Show = function () {
                                return this.obj.show();
                            };
                            GameBannerAd.prototype.Hide = function () {
                                return this.obj.hide();
                            };
                            GameBannerAd.prototype.OnLoad = function (callback) {
                                this.obj.onLoad(callback);
                            };
                            GameBannerAd.prototype.OffLoad = function (callback) {
                                this.obj.offLoad(callback);
                            };
                            GameBannerAd.prototype.OnError = function (callback) {
                                this.obj.onError(callback);
                            };
                            GameBannerAd.prototype.OffError = function (callback) {
                                this.obj.offError(callback);
                            };
                            GameBannerAd.prototype.Destroy = function () {
                                return this.obj.destroy();
                            };
                            return GameBannerAd;
                        }());
                        QG.GameBannerAd = GameBannerAd;
                        function CreateGameBannerAd(param) {
                            if (typeof qg.createGameBannerAd != 'function')
                                return null;
                            var obj = qg.createGameBannerAd(param);
                            return new GameBannerAd(obj);
                        }
                        QG.CreateGameBannerAd = CreateGameBannerAd;
                        var GamePortalAd = /** @class */ (function () {
                            function GamePortalAd(obj) {
                                this.obj = obj;
                            }
                            GamePortalAd.prototype.Load = function () {
                                return this.obj.load();
                            };
                            GamePortalAd.prototype.Show = function () {
                                return this.obj.show();
                            };
                            GamePortalAd.prototype.OnLoad = function (callback) {
                                this.obj.onLoad(callback);
                            };
                            GamePortalAd.prototype.OffLoad = function (callback) {
                                this.obj.offLoad(callback);
                            };
                            GamePortalAd.prototype.OnClose = function (callback) {
                                this.obj.onClose(callback);
                            };
                            GamePortalAd.prototype.OffClose = function (callback) {
                                this.obj.offClose(callback);
                            };
                            GamePortalAd.prototype.OnError = function (callback) {
                                this.obj.onError(callback);
                            };
                            GamePortalAd.prototype.OffError = function (callback) {
                                this.obj.offError(callback);
                            };
                            GamePortalAd.prototype.Destroy = function () {
                                return this.obj.destroy();
                            };
                            return GamePortalAd;
                        }());
                        QG.GamePortalAd = GamePortalAd;
                        function CreateGamePortalAd(param) {
                            if (typeof qg.createGamePortalAd != 'function')
                                return null;
                            var obj = qg.createGamePortalAd(param);
                            return new GamePortalAd(obj);
                        }
                        QG.CreateGamePortalAd = CreateGamePortalAd;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = Extern.OPPO || (Extern.OPPO = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        function InstallShortcut(param) {
                            qg.installShortcut(param);
                        }
                        QG.InstallShortcut = InstallShortcut;
                        var HasShortcutInstalledParam = /** @class */ (function () {
                            function HasShortcutInstalledParam() {
                            }
                            return HasShortcutInstalledParam;
                        }());
                        QG.HasShortcutInstalledParam = HasShortcutInstalledParam;
                        function HasShortcutInstalled(param) {
                            qg.hasShortcutInstalled(param);
                        }
                        QG.HasShortcutInstalled = HasShortcutInstalled;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = Extern.OPPO || (Extern.OPPO = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        var NavigateToMiniGameParam = /** @class */ (function (_super) {
                            __extends(NavigateToMiniGameParam, _super);
                            function NavigateToMiniGameParam() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return NavigateToMiniGameParam;
                        }(QG.CallbackParam));
                        QG.NavigateToMiniGameParam = NavigateToMiniGameParam;
                        function NavigateToMiniGame(param) {
                            qg.navigateToMiniGame(param);
                        }
                        QG.NavigateToMiniGame = NavigateToMiniGame;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = Extern.OPPO || (Extern.OPPO = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        var LoginResultData = /** @class */ (function () {
                            function LoginResultData() {
                            }
                            return LoginResultData;
                        }());
                        QG.LoginResultData = LoginResultData;
                        var LoginResult = /** @class */ (function (_super) {
                            __extends(LoginResult, _super);
                            function LoginResult() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return LoginResult;
                        }(QG.CallbackResult));
                        QG.LoginResult = LoginResult;
                        var LoginParam = /** @class */ (function (_super) {
                            __extends(LoginParam, _super);
                            function LoginParam() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return LoginParam;
                        }(QG.CallbackParam));
                        QG.LoginParam = LoginParam;
                        function Login(param) {
                            qg.login(param);
                        }
                        QG.Login = Login;
                        function SetLoadingProgress(progress) {
                            var obj = {};
                            obj.progress = progress;
                            qg.setLoadingProgress(obj);
                        }
                        QG.SetLoadingProgress = SetLoadingProgress;
                        function LoadingComplete(param) {
                            qg.loadingComplete(param);
                        }
                        QG.LoadingComplete = LoadingComplete;
                        var ReferrerInfo = /** @class */ (function () {
                            function ReferrerInfo() {
                            }
                            return ReferrerInfo;
                        }());
                        var LaunchOption = /** @class */ (function () {
                            function LaunchOption() {
                            }
                            return LaunchOption;
                        }());
                        function GetLaunchOptionsSync() {
                            return qg.getLaunchOptionsSync();
                        }
                        QG.GetLaunchOptionsSync = GetLaunchOptionsSync;
                        function VibrateShort(parm) {
                            qg.vibrateShort(parm);
                        }
                        QG.VibrateShort = VibrateShort;
                        function VibrateLong(parm) {
                            qg.vibrateLong(parm);
                        }
                        QG.VibrateLong = VibrateLong;
                        function ReportMonitor(name, value) {
                            if (name === void 0) { name = "game_scene"; }
                            if (value === void 0) { value = 0; }
                            qg.reportMonitor(name, value);
                        }
                        QG.ReportMonitor = ReportMonitor;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = Extern.OPPO || (Extern.OPPO = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var QQ;
                (function (QQ) {
                    function Exist() {
                        return typeof qq != 'undefined';
                    }
                    QQ.Exist = Exist;
                    var CallbackResult = /** @class */ (function () {
                        function CallbackResult() {
                        }
                        return CallbackResult;
                    }());
                    var CallbackParam = /** @class */ (function () {
                        function CallbackParam() {
                        }
                        return CallbackParam;
                    }());
                    var LoginSuccessResult = /** @class */ (function (_super) {
                        __extends(LoginSuccessResult, _super);
                        function LoginSuccessResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return LoginSuccessResult;
                    }(CallbackResult));
                    var LoginParam = /** @class */ (function (_super) {
                        __extends(LoginParam, _super);
                        function LoginParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return LoginParam;
                    }(CallbackParam));
                    QQ.LoginParam = LoginParam;
                    function Login(param) {
                        qq.login(param);
                    }
                    QQ.Login = Login;
                    var UserInfo = /** @class */ (function () {
                        function UserInfo() {
                        }
                        return UserInfo;
                    }());
                    QQ.UserInfo = UserInfo;
                    var GetUserInfoSuccessResult = /** @class */ (function (_super) {
                        __extends(GetUserInfoSuccessResult, _super);
                        function GetUserInfoSuccessResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetUserInfoSuccessResult;
                    }(CallbackResult));
                    var GetUserInfoParam = /** @class */ (function (_super) {
                        __extends(GetUserInfoParam, _super);
                        function GetUserInfoParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetUserInfoParam;
                    }(CallbackParam));
                    QQ.GetUserInfoParam = GetUserInfoParam;
                    function GetUserInfo(param) {
                        qq.getUserInfo(param);
                    }
                    QQ.GetUserInfo = GetUserInfo;
                    var UserInfoButtonStyle = /** @class */ (function () {
                        function UserInfoButtonStyle() {
                        }
                        return UserInfoButtonStyle;
                    }());
                    var CreateUserInfoButtonParam = /** @class */ (function () {
                        function CreateUserInfoButtonParam() {
                            this.style = new UserInfoButtonStyle(); //按钮的样式
                        }
                        return CreateUserInfoButtonParam;
                    }());
                    QQ.CreateUserInfoButtonParam = CreateUserInfoButtonParam;
                    function CreateUserInfoButton(param) {
                        if (qq.createUserInfoButton == null)
                            return null;
                        var obj = qq.createUserInfoButton(param);
                        return new UserInfoButton(obj);
                    }
                    QQ.CreateUserInfoButton = CreateUserInfoButton;
                    var UserInfoButton = /** @class */ (function () {
                        function UserInfoButton(obj) {
                            this.userInfoButton = obj;
                        }
                        Object.defineProperty(UserInfoButton.prototype, "type", {
                            get: function () {
                                return this.userInfoButton.type;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(UserInfoButton.prototype, "text", {
                            get: function () {
                                return this.userInfoButton.text;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(UserInfoButton.prototype, "image", {
                            get: function () {
                                return this.userInfoButton.image;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(UserInfoButton.prototype, "style", {
                            get: function () {
                                return this.userInfoButton.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        UserInfoButton.prototype.Show = function () {
                            return this.userInfoButton.show();
                        };
                        UserInfoButton.prototype.Hide = function () {
                            return this.userInfoButton.hide();
                        };
                        UserInfoButton.prototype.OnTap = function (callback) {
                            this.userInfoButton.onTap(callback);
                        };
                        UserInfoButton.prototype.OffTap = function (callback) {
                            this.userInfoButton.offTap(callback);
                        };
                        UserInfoButton.prototype.Destroy = function () {
                            this.userInfoButton.destroy();
                        };
                        return UserInfoButton;
                    }());
                    QQ.UserInfoButton = UserInfoButton;
                    var ShowShareMenuParam = /** @class */ (function (_super) {
                        __extends(ShowShareMenuParam, _super);
                        function ShowShareMenuParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ShowShareMenuParam;
                    }(CallbackParam));
                    QQ.ShowShareMenuParam = ShowShareMenuParam;
                    function ShowShareMenu(param) {
                        qq.showShareMenu(param);
                    }
                    QQ.ShowShareMenu = ShowShareMenu;
                    var ShareAppMessageParam = /** @class */ (function (_super) {
                        __extends(ShareAppMessageParam, _super);
                        function ShareAppMessageParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ShareAppMessageParam;
                    }(CallbackParam));
                    QQ.ShareAppMessageParam = ShareAppMessageParam;
                    function ShareAppMessage(param) {
                        qq.shareAppMessage(param);
                    }
                    QQ.ShareAppMessage = ShareAppMessage;
                    function OnShareAppMessage(callback) {
                        qq.onShareAppMessage(callback);
                    }
                    QQ.OnShareAppMessage = OnShareAppMessage;
                    function OffShareAppMessage(callback) {
                        qq.offShareAppMessage(callback);
                    }
                    QQ.OffShareAppMessage = OffShareAppMessage;
                    var UpdateShareMenuParam = /** @class */ (function (_super) {
                        __extends(UpdateShareMenuParam, _super);
                        function UpdateShareMenuParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return UpdateShareMenuParam;
                    }(CallbackParam));
                    QQ.UpdateShareMenuParam = UpdateShareMenuParam;
                    function UpdateShareMenu(param) {
                        qq.updateShareMenu(param);
                    }
                    QQ.UpdateShareMenu = UpdateShareMenu;
                    var HideShareMenuParam = /** @class */ (function (_super) {
                        __extends(HideShareMenuParam, _super);
                        function HideShareMenuParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return HideShareMenuParam;
                    }(CallbackParam));
                    QQ.HideShareMenuParam = HideShareMenuParam;
                    function HideShareMenu(param) {
                        qq.hideShareMenu(param);
                    }
                    QQ.HideShareMenu = HideShareMenu;
                    var GetShareInfoResult = /** @class */ (function (_super) {
                        __extends(GetShareInfoResult, _super);
                        function GetShareInfoResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetShareInfoResult;
                    }(CallbackResult));
                    var GetShareInfoParam = /** @class */ (function (_super) {
                        __extends(GetShareInfoParam, _super);
                        function GetShareInfoParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetShareInfoParam;
                    }(CallbackParam));
                    QQ.GetShareInfoParam = GetShareInfoParam;
                    function GetShareInfo(param) {
                        qq.getShareInfo(param);
                    }
                    QQ.GetShareInfo = GetShareInfo;
                    var NavigateToMiniProgramParam = /** @class */ (function (_super) {
                        __extends(NavigateToMiniProgramParam, _super);
                        function NavigateToMiniProgramParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.envVersion = "release"; //要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
                            return _this;
                        }
                        return NavigateToMiniProgramParam;
                    }(CallbackParam));
                    QQ.NavigateToMiniProgramParam = NavigateToMiniProgramParam;
                    function NavigateToMiniProgram(param) {
                        qq.navigateToMiniProgram(param);
                    }
                    QQ.NavigateToMiniProgram = NavigateToMiniProgram;
                    var ShowModalResultSuccess = /** @class */ (function (_super) {
                        __extends(ShowModalResultSuccess, _super);
                        function ShowModalResultSuccess() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ShowModalResultSuccess;
                    }(CallbackResult));
                    var ShowModalParam = /** @class */ (function (_super) {
                        __extends(ShowModalParam, _super);
                        function ShowModalParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.showCancel = true; //是否显示取消按钮
                            _this.cancelText = "取消"; //取消按钮的文字，最多 4 个字符
                            _this.cancelColor = "#000000"; //取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
                            _this.confirmText = "确定"; //确认按钮的文字，最多 4 个字符
                            _this.confirmColor = "#576B95"; //确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
                            return _this;
                        }
                        return ShowModalParam;
                    }(CallbackParam));
                    QQ.ShowModalParam = ShowModalParam;
                    function ShowModal(param) {
                        qq.showModal(param);
                    }
                    QQ.ShowModal = ShowModal;
                    function AddColorSign(parm) {
                        qq.addColorSign(parm);
                    }
                    QQ.AddColorSign = AddColorSign;
                    function IsColorSignExistSync() {
                        return qq.isColorSignExistSync();
                    }
                    QQ.IsColorSignExistSync = IsColorSignExistSync;
                    function VibrateShort(parm) {
                        qq.vibrateShort(parm);
                    }
                    QQ.VibrateShort = VibrateShort;
                    function VibrateLong(parm) {
                        qq.vibrateLong(parm);
                    }
                    QQ.VibrateLong = VibrateLong;
                    var BannerAdStyle = /** @class */ (function () {
                        function BannerAdStyle() {
                        }
                        return BannerAdStyle;
                    }());
                    QQ.BannerAdStyle = BannerAdStyle;
                    var BannerAd = /** @class */ (function () {
                        function BannerAd(obj) {
                            this.bannerAd = obj;
                        }
                        Object.defineProperty(BannerAd.prototype, "style", {
                            get: function () {
                                return this.bannerAd.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        BannerAd.prototype.Show = function () {
                            return this.bannerAd.show();
                        };
                        BannerAd.prototype.Hide = function () {
                            return this.bannerAd.hide();
                        };
                        BannerAd.prototype.OnLoad = function (callback) {
                            this.bannerAd.onLoad(callback);
                        };
                        BannerAd.prototype.OffLoad = function (callback) {
                            this.bannerAd.offLoad(callback);
                        };
                        BannerAd.prototype.OnError = function (callback) {
                            this.bannerAd.onError(callback);
                        };
                        BannerAd.prototype.OffError = function (callback) {
                            this.bannerAd.offError(callback);
                        };
                        BannerAd.prototype.OnResize = function (callback) {
                            this.bannerAd.onResize(callback);
                        };
                        BannerAd.prototype.OffResize = function (callback) {
                            this.bannerAd.offResize(callback);
                        };
                        BannerAd.prototype.Destroy = function () {
                            this.bannerAd.destroy();
                        };
                        return BannerAd;
                    }());
                    QQ.BannerAd = BannerAd;
                    function CreateBannerAd(adUnitId, style) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        param.style = style;
                        var obj = qq.createBannerAd(param);
                        return new BannerAd(obj);
                    }
                    QQ.CreateBannerAd = CreateBannerAd;
                    var InterstitialAd = /** @class */ (function () {
                        function InterstitialAd(obj) {
                            this.interstitialAd = obj;
                        }
                        InterstitialAd.prototype.Load = function () {
                            return this.interstitialAd.load();
                        };
                        InterstitialAd.prototype.Show = function () {
                            return this.interstitialAd.show();
                        };
                        InterstitialAd.prototype.OnLoad = function (callback) {
                            this.interstitialAd.onLoad(callback);
                        };
                        InterstitialAd.prototype.OffLoad = function (callback) {
                            this.interstitialAd.offLoad(callback);
                        };
                        InterstitialAd.prototype.OnClose = function (callback) {
                            this.interstitialAd.onClose(callback);
                        };
                        InterstitialAd.prototype.OffClose = function (callback) {
                            this.interstitialAd.offClose(callback);
                        };
                        InterstitialAd.prototype.OnError = function (callback) {
                            this.interstitialAd.onError(callback);
                        };
                        InterstitialAd.prototype.OffError = function (callback) {
                            this.interstitialAd.offError(callback);
                        };
                        InterstitialAd.prototype.Destroy = function () {
                            this.interstitialAd.destroy();
                        };
                        return InterstitialAd;
                    }());
                    QQ.InterstitialAd = InterstitialAd;
                    function CreateInterstitialAd(adUnitId) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        if (qq.createInterstitialAd != null) {
                            var obj = qq.createInterstitialAd(param);
                            return new InterstitialAd(obj);
                        }
                        return null;
                    }
                    QQ.CreateInterstitialAd = CreateInterstitialAd;
                    var RewardedVideoAd = /** @class */ (function () {
                        function RewardedVideoAd(obj) {
                            this.rewardedVideoAd = obj;
                        }
                        RewardedVideoAd.prototype.Load = function () {
                            return this.rewardedVideoAd.load();
                        };
                        RewardedVideoAd.prototype.Show = function () {
                            return this.rewardedVideoAd.show();
                        };
                        RewardedVideoAd.prototype.OnLoad = function (callback) {
                            this.rewardedVideoAd.onLoad(callback);
                        };
                        RewardedVideoAd.prototype.OffLoad = function (callback) {
                            this.rewardedVideoAd.offLoad(callback);
                        };
                        RewardedVideoAd.prototype.OnError = function (callback) {
                            this.rewardedVideoAd.onError(callback);
                        };
                        RewardedVideoAd.prototype.OffError = function (callback) {
                            this.rewardedVideoAd.offError(callback);
                        };
                        RewardedVideoAd.prototype.OnClose = function (callback) {
                            this.rewardedVideoAd.onClose(callback);
                        };
                        RewardedVideoAd.prototype.OffClose = function (callback) {
                            this.rewardedVideoAd.offClose(callback);
                        };
                        return RewardedVideoAd;
                    }());
                    QQ.RewardedVideoAd = RewardedVideoAd;
                    function CreateRewardedVideoAd(adUnitId) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = qq.createRewardedVideoAd(param);
                        return new RewardedVideoAd(obj);
                    }
                    QQ.CreateRewardedVideoAd = CreateRewardedVideoAd;
                    var AppBox = /** @class */ (function () {
                        function AppBox(obj) {
                            this.appBox = obj;
                        }
                        AppBox.prototype.Load = function () {
                            return this.appBox.load();
                        };
                        AppBox.prototype.Show = function () {
                            return this.appBox.show();
                        };
                        AppBox.prototype.Destroy = function () {
                            return this.appBox.destroy();
                        };
                        AppBox.prototype.OnClose = function (callback) {
                            this.appBox.onClose(callback);
                        };
                        AppBox.prototype.OffClose = function (callback) {
                            this.appBox.offClose(callback);
                        };
                        return AppBox;
                    }());
                    QQ.AppBox = AppBox;
                    function CreateAppBox(adUnitId) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = qq.createAppBox(param);
                        return new AppBox(obj);
                    }
                    QQ.CreateAppBox = CreateAppBox;
                })(QQ = Extern.QQ || (Extern.QQ = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var QTTGame;
                (function (QTTGame) {
                    function Exist() {
                        return typeof qttGame != 'undefined';
                    }
                    QTTGame.Exist = Exist;
                    function ShowBanner() {
                        qttGame.showBanner();
                    }
                    QTTGame.ShowBanner = ShowBanner;
                    function HideBanner() {
                        qttGame.hideBanner();
                    }
                    QTTGame.HideBanner = HideBanner;
                    var VideoOptionsData = /** @class */ (function () {
                        function VideoOptionsData() {
                            this.title = "刷新道具"; //互动抽中奖后的道具提示文字
                            this.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png"; //互动抽中奖后的道具图标(可选)
                        }
                        return VideoOptionsData;
                    }());
                    var VideoOptions = /** @class */ (function () {
                        function VideoOptions() {
                            this.gametype = 1; //互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)
                            this.rewardtype = 1; //互动广告框，只有 1
                            this.data = new VideoOptionsData();
                        }
                        return VideoOptions;
                    }());
                    QTTGame.VideoOptions = VideoOptions;
                    function ShowVideo(callback, options) {
                        if (options === void 0) { options = new VideoOptions(); }
                        qttGame.showVideo(callback, options);
                    }
                    QTTGame.ShowVideo = ShowVideo;
                    function ShowHDAD(options) {
                        if (options === void 0) { options = new VideoOptions(); }
                        qttGame.showHDAD(options);
                    }
                    QTTGame.ShowHDAD = ShowHDAD;
                    function ShowHDReward(options) {
                        if (options === void 0) { options = new VideoOptions(); }
                        qttGame.showHDReward(options);
                    }
                    QTTGame.ShowHDReward = ShowHDReward;
                    var ReportDataParam = /** @class */ (function () {
                        function ReportDataParam() {
                        }
                        return ReportDataParam;
                    }());
                    QTTGame.ReportDataParam = ReportDataParam;
                    function ReportData(param) {
                        qttGame.reportData(param);
                    }
                    QTTGame.ReportData = ReportData;
                })(QTTGame = Extern.QTTGame || (Extern.QTTGame = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var TT;
                (function (TT) {
                    function Exist() {
                        return typeof tt != 'undefined';
                    }
                    TT.Exist = Exist;
                    var SystemInfo = /** @class */ (function () {
                        function SystemInfo() {
                        }
                        return SystemInfo;
                    }());
                    function GetSystemInfoSync() {
                        return tt.getSystemInfoSync();
                    }
                    TT.GetSystemInfoSync = GetSystemInfoSync;
                    var CallbackResult = /** @class */ (function () {
                        function CallbackResult() {
                        }
                        return CallbackResult;
                    }());
                    var CallbackParam = /** @class */ (function () {
                        function CallbackParam() {
                        }
                        return CallbackParam;
                    }());
                    TT.CallbackParam = CallbackParam;
                    var LoginResult = /** @class */ (function (_super) {
                        __extends(LoginResult, _super);
                        function LoginResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return LoginResult;
                    }(CallbackResult));
                    var LoginParam = /** @class */ (function (_super) {
                        __extends(LoginParam, _super);
                        function LoginParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.force = true;
                            return _this;
                        }
                        return LoginParam;
                    }(CallbackParam));
                    TT.LoginParam = LoginParam;
                    function Login(param) {
                        tt.login(param);
                    }
                    TT.Login = Login;
                    var UserInfo = /** @class */ (function () {
                        function UserInfo() {
                        }
                        return UserInfo;
                    }());
                    TT.UserInfo = UserInfo;
                    var GetUserInfoResult = /** @class */ (function (_super) {
                        __extends(GetUserInfoResult, _super);
                        function GetUserInfoResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetUserInfoResult;
                    }(CallbackResult));
                    var GetUserInfoParam = /** @class */ (function (_super) {
                        __extends(GetUserInfoParam, _super);
                        function GetUserInfoParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.withCredentials = false; //是否需要返回敏感数据
                            return _this;
                        }
                        return GetUserInfoParam;
                    }(CallbackParam));
                    TT.GetUserInfoParam = GetUserInfoParam;
                    function GetUserInfo(param) {
                        tt.getUserInfo(param);
                    }
                    TT.GetUserInfo = GetUserInfo;
                    var NavigateToMiniProgramParam = /** @class */ (function (_super) {
                        __extends(NavigateToMiniProgramParam, _super);
                        function NavigateToMiniProgramParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.envVersion = "current"; //要打开的小程序版本。合法的值有current--线上版；latest--测试版。仅在当前小程序为开发版或测试版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
                            return _this;
                        }
                        return NavigateToMiniProgramParam;
                    }(CallbackParam));
                    TT.NavigateToMiniProgramParam = NavigateToMiniProgramParam;
                    function NavigateToMiniProgram(param) {
                        tt.navigateToMiniProgram(param);
                    }
                    TT.NavigateToMiniProgram = NavigateToMiniProgram;
                    var NavigateToVideoViewParam = /** @class */ (function (_super) {
                        __extends(NavigateToVideoViewParam, _super);
                        function NavigateToVideoViewParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return NavigateToVideoViewParam;
                    }(CallbackParam));
                    TT.NavigateToVideoViewParam = NavigateToVideoViewParam;
                    function NavigateToVideoView(param) {
                        tt.navigateToVideoView(param);
                    }
                    TT.NavigateToVideoView = NavigateToVideoView;
                    var RecordClipResult = /** @class */ (function (_super) {
                        __extends(RecordClipResult, _super);
                        function RecordClipResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return RecordClipResult;
                    }(CallbackResult));
                    var RecordClipParam = /** @class */ (function (_super) {
                        __extends(RecordClipParam, _super);
                        function RecordClipParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return RecordClipParam;
                    }(CallbackParam));
                    TT.RecordClipParam = RecordClipParam;
                    var ClipVideoResult = /** @class */ (function (_super) {
                        __extends(ClipVideoResult, _super);
                        function ClipVideoResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ClipVideoResult;
                    }(CallbackResult));
                    var ClipVideoParam = /** @class */ (function (_super) {
                        __extends(ClipVideoParam, _super);
                        function ClipVideoParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ClipVideoParam;
                    }(CallbackParam));
                    TT.ClipVideoParam = ClipVideoParam;
                    var GameRecorderManager = /** @class */ (function () {
                        function GameRecorderManager(obj) {
                            this.gameRecorderManager = obj;
                        }
                        GameRecorderManager.prototype.Start = function (duration) {
                            var param = {};
                            param.duration = duration;
                            this.gameRecorderManager.start(param);
                        };
                        GameRecorderManager.prototype.OnStart = function (callback) {
                            this.gameRecorderManager.onStart(callback);
                        };
                        GameRecorderManager.prototype.RecordClip = function (param) {
                            this.gameRecorderManager.recordClip(param);
                        };
                        GameRecorderManager.prototype.Stop = function () {
                            this.gameRecorderManager.stop();
                        };
                        GameRecorderManager.prototype.OnStop = function (callback) {
                            this.gameRecorderManager.onStop(callback);
                        };
                        GameRecorderManager.prototype.ClipVideo = function (param) {
                            this.gameRecorderManager.clipVideo(param);
                        };
                        return GameRecorderManager;
                    }());
                    TT.GameRecorderManager = GameRecorderManager;
                    function GetGameRecorderManager() {
                        if (tt.getGameRecorderManager == null)
                            return null;
                        var obj = tt.getGameRecorderManager();
                        return new GameRecorderManager(obj);
                    }
                    TT.GetGameRecorderManager = GetGameRecorderManager;
                    var ShareAppMessageResult = /** @class */ (function (_super) {
                        __extends(ShareAppMessageResult, _super);
                        function ShareAppMessageResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ShareAppMessageResult;
                    }(CallbackResult));
                    var ShareAppMessageParamExtra = /** @class */ (function () {
                        function ShareAppMessageParamExtra() {
                            this.createChallenge = false; //是否分享为挑战视频 (头条支持)
                            this.video_title = ""; //生成输入的默认文案
                        }
                        return ShareAppMessageParamExtra;
                    }());
                    var ShareAppMessageParam = /** @class */ (function (_super) {
                        __extends(ShareAppMessageParam, _super);
                        function ShareAppMessageParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.extra = new ShareAppMessageParamExtra(); //	附加信息
                            return _this;
                        }
                        return ShareAppMessageParam;
                    }(CallbackParam));
                    TT.ShareAppMessageParam = ShareAppMessageParam;
                    function ShareAppMessage(param) {
                        tt.shareAppMessage(param);
                    }
                    TT.ShareAppMessage = ShareAppMessage;
                    function OnShareAppMessage(callback) {
                        tt.onShareAppMessage(callback);
                    }
                    TT.OnShareAppMessage = OnShareAppMessage;
                    function ReportAnalytics(eventName, data) {
                        tt.reportAnalytics(eventName, data);
                    }
                    TT.ReportAnalytics = ReportAnalytics;
                    var ReferrerInfo = /** @class */ (function () {
                        function ReferrerInfo() {
                        }
                        return ReferrerInfo;
                    }());
                    var LaunchOption = /** @class */ (function () {
                        function LaunchOption() {
                        }
                        return LaunchOption;
                    }());
                    function GetLaunchOptionsSync() {
                        return tt.getLaunchOptionsSync();
                    }
                    TT.GetLaunchOptionsSync = GetLaunchOptionsSync;
                    var OnNavigateToMiniGameResult = /** @class */ (function () {
                        function OnNavigateToMiniGameResult() {
                        }
                        return OnNavigateToMiniGameResult;
                    }());
                    var AppLaunchOptions = /** @class */ (function () {
                        function AppLaunchOptions() {
                        }
                        return AppLaunchOptions;
                    }());
                    TT.AppLaunchOptions = AppLaunchOptions;
                    var MoreGamesButtonStyle = /** @class */ (function () {
                        function MoreGamesButtonStyle() {
                        }
                        return MoreGamesButtonStyle;
                    }());
                    var CreateMoreGamesButtonParam = /** @class */ (function () {
                        function CreateMoreGamesButtonParam() {
                            this.style = new MoreGamesButtonStyle(); //按钮的样式
                            this.appLaunchOptions = []; //小游戏的启动参数
                        }
                        return CreateMoreGamesButtonParam;
                    }());
                    TT.CreateMoreGamesButtonParam = CreateMoreGamesButtonParam;
                    function CreateMoreGamesButton(param) {
                        if (tt.createMoreGamesButton == null)
                            return null;
                        var obj = tt.createMoreGamesButton(param);
                        console.log("createMoreGamesButton = " + JSON.stringify(obj));
                        return new MoreGamesButton(obj);
                    }
                    TT.CreateMoreGamesButton = CreateMoreGamesButton;
                    var MoreGamesButton = /** @class */ (function () {
                        function MoreGamesButton(obj) {
                            this.moreGamesButton = obj;
                        }
                        Object.defineProperty(MoreGamesButton.prototype, "buttonId", {
                            get: function () {
                                return this.moreGamesButton.buttonId;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        MoreGamesButton.prototype.Show = function () {
                            return this.moreGamesButton.show();
                        };
                        MoreGamesButton.prototype.Hide = function () {
                            return this.moreGamesButton.hide();
                        };
                        MoreGamesButton.prototype.OnTap = function (callback) {
                            this.moreGamesButton.onTap(callback);
                        };
                        MoreGamesButton.prototype.OffTap = function (callback) {
                            this.moreGamesButton.offTap(callback);
                        };
                        MoreGamesButton.prototype.Destroy = function () {
                            this.moreGamesButton.destroy();
                        };
                        return MoreGamesButton;
                    }());
                    TT.MoreGamesButton = MoreGamesButton;
                    var ShowMoreGamesModalParam = /** @class */ (function (_super) {
                        __extends(ShowMoreGamesModalParam, _super);
                        function ShowMoreGamesModalParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.appLaunchOptions = []; //小游戏的启动参数
                            return _this;
                        }
                        return ShowMoreGamesModalParam;
                    }(CallbackParam));
                    TT.ShowMoreGamesModalParam = ShowMoreGamesModalParam;
                    function ShowMoreGamesModal(param) {
                        if (tt.showMoreGamesModal != null)
                            tt.showMoreGamesModal(param);
                    }
                    TT.ShowMoreGamesModal = ShowMoreGamesModal;
                    function SetMoreGamesInfo(param) {
                        if (tt.setMoreGamesInfo != null)
                            tt.setMoreGamesInfo(param);
                    }
                    TT.SetMoreGamesInfo = SetMoreGamesInfo;
                    function VibrateShort(parm) {
                        tt.vibrateShort(parm);
                    }
                    TT.VibrateShort = VibrateShort;
                    function VibrateLong(parm) {
                        tt.vibrateLong(parm);
                    }
                    TT.VibrateLong = VibrateLong;
                    var CheckFollowAwemeStateResult = /** @class */ (function (_super) {
                        __extends(CheckFollowAwemeStateResult, _super);
                        function CheckFollowAwemeStateResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return CheckFollowAwemeStateResult;
                    }(CallbackResult));
                    var CheckFollowAwemeStateParam = /** @class */ (function (_super) {
                        __extends(CheckFollowAwemeStateParam, _super);
                        function CheckFollowAwemeStateParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return CheckFollowAwemeStateParam;
                    }(CallbackParam));
                    TT.CheckFollowAwemeStateParam = CheckFollowAwemeStateParam;
                    function CheckFollowAwemeState(param) {
                        tt.checkFollowAwemeState(param);
                    }
                    TT.CheckFollowAwemeState = CheckFollowAwemeState;
                    var OpenAwemeUserProfileResult = /** @class */ (function (_super) {
                        __extends(OpenAwemeUserProfileResult, _super);
                        function OpenAwemeUserProfileResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return OpenAwemeUserProfileResult;
                    }(CallbackResult));
                    var OpenAwemeUserProfileParam = /** @class */ (function (_super) {
                        __extends(OpenAwemeUserProfileParam, _super);
                        function OpenAwemeUserProfileParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return OpenAwemeUserProfileParam;
                    }(CallbackParam));
                    TT.OpenAwemeUserProfileParam = OpenAwemeUserProfileParam;
                    function OpenAwemeUserProfile(param) {
                        tt.openAwemeUserProfile(param);
                    }
                    TT.OpenAwemeUserProfile = OpenAwemeUserProfile;
                    function StartAccelerometer(param) {
                        tt.startAccelerometer(param);
                    }
                    TT.StartAccelerometer = StartAccelerometer;
                    function StopAccelerometer(param) {
                        tt.stopAccelerometer(param);
                    }
                    TT.StopAccelerometer = StopAccelerometer;
                    var OnAccelerometerChangeResult = /** @class */ (function () {
                        function OnAccelerometerChangeResult() {
                        }
                        return OnAccelerometerChangeResult;
                    }());
                    TT.OnAccelerometerChangeResult = OnAccelerometerChangeResult;
                    function OnAccelerometerChange(callback) {
                        tt.onAccelerometerChange(callback);
                    }
                    TT.OnAccelerometerChange = OnAccelerometerChange;
                    var BannerAdStyle = /** @class */ (function () {
                        function BannerAdStyle() {
                        }
                        return BannerAdStyle;
                    }());
                    TT.BannerAdStyle = BannerAdStyle;
                    var BannerAd = /** @class */ (function () {
                        function BannerAd(obj) {
                            this.bannerAd = obj;
                        }
                        Object.defineProperty(BannerAd.prototype, "style", {
                            get: function () {
                                return this.bannerAd.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        BannerAd.prototype.Show = function () {
                            return this.bannerAd.show();
                        };
                        BannerAd.prototype.Hide = function () {
                            return this.bannerAd.hide();
                        };
                        BannerAd.prototype.OnLoad = function (callback) {
                            this.bannerAd.onLoad(callback);
                        };
                        BannerAd.prototype.OffLoad = function (callback) {
                            this.bannerAd.offLoad(callback);
                        };
                        BannerAd.prototype.OnError = function (callback) {
                            this.bannerAd.onError(callback);
                        };
                        BannerAd.prototype.OffError = function (callback) {
                            this.bannerAd.offError(callback);
                        };
                        BannerAd.prototype.OnResize = function (callback) {
                            this.bannerAd.onResize(callback);
                        };
                        BannerAd.prototype.OffResize = function (callback) {
                            this.bannerAd.offResize(callback);
                        };
                        BannerAd.prototype.Destroy = function () {
                            this.bannerAd.destroy();
                        };
                        return BannerAd;
                    }());
                    TT.BannerAd = BannerAd;
                    function CreateBannerAd(adUnitId, style) {
                        if (tt.createBannerAd == null)
                            return null;
                        var param = {};
                        param.adUnitId = adUnitId;
                        param.style = style;
                        var obj = tt.createBannerAd(param);
                        return new BannerAd(obj);
                    }
                    TT.CreateBannerAd = CreateBannerAd;
                    var InterstitialAd = /** @class */ (function () {
                        function InterstitialAd(obj) {
                            this.interstitialAd = obj;
                        }
                        InterstitialAd.prototype.Show = function () {
                            return this.interstitialAd.show();
                        };
                        InterstitialAd.prototype.Load = function () {
                            return this.interstitialAd.load();
                        };
                        InterstitialAd.prototype.Destroy = function () {
                            this.interstitialAd.destroy();
                        };
                        InterstitialAd.prototype.OnLoad = function (callback) {
                            this.interstitialAd.onLoad(callback);
                        };
                        InterstitialAd.prototype.OffLoad = function (callback) {
                            this.interstitialAd.offLoad(callback);
                        };
                        InterstitialAd.prototype.OnError = function (callback) {
                            this.interstitialAd.onError(callback);
                        };
                        InterstitialAd.prototype.OffError = function (callback) {
                            this.interstitialAd.offError(callback);
                        };
                        InterstitialAd.prototype.OnClose = function (callback) {
                            this.interstitialAd.onClose(callback);
                        };
                        InterstitialAd.prototype.OffClose = function (callback) {
                            this.interstitialAd.offClose(callback);
                        };
                        return InterstitialAd;
                    }());
                    TT.InterstitialAd = InterstitialAd;
                    function CreateInterstitialAd(adUnitId) {
                        if (tt.createInterstitialAd == null)
                            return null;
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = tt.createInterstitialAd(param);
                        return new InterstitialAd(obj);
                    }
                    TT.CreateInterstitialAd = CreateInterstitialAd;
                    var RewardedVideoAd = /** @class */ (function () {
                        function RewardedVideoAd(obj) {
                            this.rewardedVideoAd = obj;
                        }
                        RewardedVideoAd.prototype.Load = function () {
                            return this.rewardedVideoAd.load();
                        };
                        RewardedVideoAd.prototype.Show = function () {
                            return this.rewardedVideoAd.show();
                        };
                        RewardedVideoAd.prototype.OnLoad = function (callback) {
                            this.rewardedVideoAd.onLoad(callback);
                        };
                        RewardedVideoAd.prototype.OffLoad = function (callback) {
                            this.rewardedVideoAd.offLoad(callback);
                        };
                        RewardedVideoAd.prototype.OnError = function (callback) {
                            this.rewardedVideoAd.onError(callback);
                        };
                        RewardedVideoAd.prototype.OffError = function (callback) {
                            this.rewardedVideoAd.offError(callback);
                        };
                        RewardedVideoAd.prototype.OnClose = function (callback) {
                            this.rewardedVideoAd.onClose(callback);
                        };
                        RewardedVideoAd.prototype.OffClose = function (callback) {
                            this.rewardedVideoAd.offClose(callback);
                        };
                        return RewardedVideoAd;
                    }());
                    TT.RewardedVideoAd = RewardedVideoAd;
                    function CreateRewardedVideoAd(adUnitId) {
                        if (tt.createRewardedVideoAd == null)
                            return null;
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = tt.createRewardedVideoAd(param);
                        return new RewardedVideoAd(obj);
                    }
                    TT.CreateRewardedVideoAd = CreateRewardedVideoAd;
                    var CreatMoreGamesBannerParam = /** @class */ (function () {
                        function CreatMoreGamesBannerParam() {
                            this.style = new MoreGamesBannerStyle();
                            this.appLaunchOptions = [];
                        }
                        return CreatMoreGamesBannerParam;
                    }());
                    TT.CreatMoreGamesBannerParam = CreatMoreGamesBannerParam;
                    function CreatMoreGamesBanner(param) {
                        if (tt.createMoreGamesBanner == null)
                            return;
                        var obj = tt.createMoreGamesBanner(param);
                        console.log("createMoreGamesButton = " + JSON.stringify(obj));
                        return new MoreGameBnaner(obj);
                    }
                    TT.CreatMoreGamesBanner = CreatMoreGamesBanner;
                    var MoreGamesBannerStyle = /** @class */ (function () {
                        function MoreGamesBannerStyle() {
                        }
                        return MoreGamesBannerStyle;
                    }());
                    TT.MoreGamesBannerStyle = MoreGamesBannerStyle;
                    var MoreGameBnaner = /** @class */ (function () {
                        function MoreGameBnaner(obj) {
                            this.moreGamesBnaner = obj;
                        }
                        MoreGameBnaner.prototype.Show = function () {
                            return this.moreGamesBnaner.show();
                        };
                        MoreGameBnaner.prototype.Hide = function () {
                            return this.moreGamesBnaner.hide();
                        };
                        MoreGameBnaner.prototype.OnResize = function (callback) {
                            this.moreGamesBnaner.onResize(callback);
                        };
                        MoreGameBnaner.prototype.OffResize = function (callback) {
                            this.moreGamesBnaner.offResize(callback);
                        };
                        MoreGameBnaner.prototype.OnTap = function (callback) {
                            this.moreGamesBnaner.onTap(callback);
                        };
                        MoreGameBnaner.prototype.OffTap = function (callback) {
                            this.moreGamesBnaner.offTap(callback);
                        };
                        MoreGameBnaner.prototype.OnError = function (callback) {
                            this.moreGamesBnaner.onError(callback);
                        };
                        MoreGameBnaner.prototype.OffError = function (callback) {
                            this.moreGamesBnaner.offError(callback);
                        };
                        MoreGameBnaner.prototype.Destroy = function () {
                            this.moreGamesBnaner.destroy();
                        };
                        return MoreGameBnaner;
                    }());
                    TT.MoreGameBnaner = MoreGameBnaner;
                })(TT = Extern.TT || (Extern.TT = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var UC;
                (function (UC) {
                    function Exist() {
                        return typeof uc != 'undefined';
                    }
                    UC.Exist = Exist;
                    var BannerAdStyle = /** @class */ (function () {
                        function BannerAdStyle() {
                        }
                        return BannerAdStyle;
                    }());
                    UC.BannerAdStyle = BannerAdStyle;
                    var BannerAd = /** @class */ (function () {
                        function BannerAd(obj) {
                            this.bannerAd = obj;
                        }
                        // public get style(): BannerAdStyle
                        // {
                        //     return this.bannerAd.style;
                        // }
                        BannerAd.prototype.Show = function () {
                            return this.bannerAd.show();
                        };
                        BannerAd.prototype.Hide = function () {
                            return this.bannerAd.hide();
                        };
                        BannerAd.prototype.OnLoad = function (callback) {
                            this.bannerAd.onLoad(callback);
                        };
                        BannerAd.prototype.OnError = function (callback) {
                            this.bannerAd.onError(callback);
                        };
                        BannerAd.prototype.Destroy = function () {
                            this.bannerAd.destroy();
                        };
                        return BannerAd;
                    }());
                    UC.BannerAd = BannerAd;
                    function CreateBannerAd(style) {
                        var param = {};
                        param.style = style;
                        var obj = uc.createBannerAd(param);
                        return new BannerAd(obj);
                    }
                    UC.CreateBannerAd = CreateBannerAd;
                    var RewardedVideoAd = /** @class */ (function () {
                        function RewardedVideoAd(obj) {
                            this.rewardedVideoAd = obj;
                        }
                        RewardedVideoAd.prototype.Load = function () {
                            return this.rewardedVideoAd.load();
                        };
                        RewardedVideoAd.prototype.Show = function () {
                            return this.rewardedVideoAd.show();
                        };
                        RewardedVideoAd.prototype.OnShow = function (callback) {
                            this.rewardedVideoAd.onShow(callback);
                        };
                        RewardedVideoAd.prototype.OnLoad = function (callback) {
                            this.rewardedVideoAd.onLoad(callback);
                        };
                        RewardedVideoAd.prototype.OffLoad = function (callback) {
                            this.rewardedVideoAd.offLoad(callback);
                        };
                        RewardedVideoAd.prototype.OnError = function (callback) {
                            this.rewardedVideoAd.onError(callback);
                        };
                        RewardedVideoAd.prototype.OffError = function (callback) {
                            this.rewardedVideoAd.offError(callback);
                        };
                        RewardedVideoAd.prototype.OnClose = function (callback) {
                            this.rewardedVideoAd.onClose(callback);
                        };
                        RewardedVideoAd.prototype.OffClose = function (callback) {
                            this.rewardedVideoAd.offClose(callback);
                        };
                        return RewardedVideoAd;
                    }());
                    UC.RewardedVideoAd = RewardedVideoAd;
                    function CreateRewardVideoAd() {
                        var obj = uc.createRewardVideoAd();
                        return new RewardedVideoAd(obj);
                    }
                    UC.CreateRewardVideoAd = CreateRewardVideoAd;
                })(UC = Extern.UC || (Extern.UC = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var VIVO;
                (function (VIVO) {
                    var QG;
                    (function (QG) {
                        function Exist() {
                            return typeof qg != 'undefined';
                        }
                        QG.Exist = Exist;
                        var AuthorizeResult = /** @class */ (function () {
                            function AuthorizeResult() {
                            }
                            return AuthorizeResult;
                        }());
                        var AuthorizeParam = /** @class */ (function () {
                            function AuthorizeParam() {
                                this.type = "token";
                            }
                            return AuthorizeParam;
                        }());
                        QG.AuthorizeParam = AuthorizeParam;
                        function Authorize(param) {
                            qg.authorize(param);
                        }
                        QG.Authorize = Authorize;
                        var GetProfileResult = /** @class */ (function () {
                            function GetProfileResult() {
                            }
                            return GetProfileResult;
                        }());
                        var GetProfileParam = /** @class */ (function () {
                            function GetProfileParam() {
                            }
                            return GetProfileParam;
                        }());
                        QG.GetProfileParam = GetProfileParam;
                        function GetProfile(param) {
                            qg.getProfile(param);
                        }
                        QG.GetProfile = GetProfile;
                        var LoginResultData = /** @class */ (function () {
                            function LoginResultData() {
                            }
                            return LoginResultData;
                        }());
                        QG.LoginResultData = LoginResultData;
                        var LoginResult = /** @class */ (function () {
                            function LoginResult() {
                            }
                            return LoginResult;
                        }());
                        var LoginParam = /** @class */ (function () {
                            function LoginParam() {
                            }
                            return LoginParam;
                        }());
                        QG.LoginParam = LoginParam;
                        function Login(param) {
                            qg.login(param);
                        }
                        QG.Login = Login;
                        var BannerAd = /** @class */ (function () {
                            function BannerAd(obj) {
                                this.bannerAd = obj;
                            }
                            BannerAd.prototype.Show = function () {
                                return this.bannerAd.show();
                            };
                            BannerAd.prototype.Hide = function () {
                                return this.bannerAd.hide();
                            };
                            BannerAd.prototype.OnLoad = function (callback) {
                                this.bannerAd.onLoad(callback);
                            };
                            BannerAd.prototype.OffLoad = function (callback) {
                                this.bannerAd.offLoad(callback);
                            };
                            BannerAd.prototype.OnError = function (callback) {
                                this.bannerAd.onError(callback);
                            };
                            BannerAd.prototype.OffError = function (callback) {
                                this.bannerAd.offError(callback);
                            };
                            BannerAd.prototype.OnClose = function (callback) {
                                this.bannerAd.onClose(callback);
                            };
                            BannerAd.prototype.OffClose = function (callback) {
                                this.bannerAd.offClose(callback);
                            };
                            BannerAd.prototype.OnSize = function (callback) {
                                this.bannerAd.onSize(callback);
                            };
                            BannerAd.prototype.OffSize = function (callback) {
                                this.bannerAd.offSize(callback);
                            };
                            return BannerAd;
                        }());
                        QG.BannerAd = BannerAd;
                        function CreateBannerAd(posId) {
                            var param = {};
                            param.posId = posId;
                            param.style = {};
                            var obj = qg.createBannerAd(param);
                            return new BannerAd(obj);
                        }
                        QG.CreateBannerAd = CreateBannerAd;
                        var InterstitialAd = /** @class */ (function () {
                            function InterstitialAd(obj) {
                                this.interstitialAd = obj;
                            }
                            InterstitialAd.prototype.Show = function () {
                                return this.interstitialAd.show();
                            };
                            InterstitialAd.prototype.OnLoad = function (callback) {
                                this.interstitialAd.onLoad(callback);
                            };
                            InterstitialAd.prototype.OffLoad = function (callback) {
                                this.interstitialAd.offLoad(callback);
                            };
                            InterstitialAd.prototype.OnError = function (callback) {
                                this.interstitialAd.onError(callback);
                            };
                            InterstitialAd.prototype.OffError = function (callback) {
                                this.interstitialAd.offError(callback);
                            };
                            InterstitialAd.prototype.OnClose = function (callback) {
                                this.interstitialAd.onClose(callback);
                            };
                            InterstitialAd.prototype.OffClose = function (callback) {
                                this.interstitialAd.offClose(callback);
                            };
                            return InterstitialAd;
                        }());
                        QG.InterstitialAd = InterstitialAd;
                        function CreateInterstitialAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createInterstitialAd(param);
                            return new InterstitialAd(obj);
                        }
                        QG.CreateInterstitialAd = CreateInterstitialAd;
                        var RewardedVideoAd = /** @class */ (function () {
                            function RewardedVideoAd(obj) {
                                this.rewardedVideoAd = obj;
                            }
                            RewardedVideoAd.prototype.Load = function () {
                                return this.rewardedVideoAd.load();
                            };
                            RewardedVideoAd.prototype.Show = function () {
                                return this.rewardedVideoAd.show();
                            };
                            RewardedVideoAd.prototype.OnLoad = function (callback) {
                                this.rewardedVideoAd.onLoad(callback);
                            };
                            RewardedVideoAd.prototype.OffLoad = function (callback) {
                                this.rewardedVideoAd.offLoad(callback);
                            };
                            RewardedVideoAd.prototype.OnError = function (callback) {
                                this.rewardedVideoAd.onError(callback);
                            };
                            RewardedVideoAd.prototype.OffError = function (callback) {
                                this.rewardedVideoAd.offError(callback);
                            };
                            RewardedVideoAd.prototype.OnClose = function (callback) {
                                this.rewardedVideoAd.onClose(callback);
                            };
                            RewardedVideoAd.prototype.OffClose = function (callback) {
                                this.rewardedVideoAd.offClose(callback);
                            };
                            return RewardedVideoAd;
                        }());
                        QG.RewardedVideoAd = RewardedVideoAd;
                        function CreateRewardedVideoAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createRewardedVideoAd(param);
                            return new RewardedVideoAd(obj);
                        }
                        QG.CreateRewardedVideoAd = CreateRewardedVideoAd;
                        var NativeAdData = /** @class */ (function () {
                            function NativeAdData() {
                            }
                            return NativeAdData;
                        }());
                        QG.NativeAdData = NativeAdData;
                        var NativeAd = /** @class */ (function () {
                            function NativeAd(obj) {
                                this.nativeAd = obj;
                            }
                            NativeAd.prototype.Load = function () {
                                this.nativeAd.load();
                            };
                            NativeAd.prototype.ReportAdShow = function (adId) {
                                var obj = {};
                                obj.adId = adId;
                                this.nativeAd.reportAdShow(obj);
                            };
                            NativeAd.prototype.ReportAdClick = function (adId) {
                                var obj = {};
                                obj.adId = adId;
                                this.nativeAd.reportAdClick(obj);
                            };
                            NativeAd.prototype.OnLoad = function (callback) {
                                this.nativeAd.onLoad(callback);
                            };
                            NativeAd.prototype.OffLoad = function () {
                                this.nativeAd.offLoad();
                            };
                            NativeAd.prototype.OnError = function (callback) {
                                this.nativeAd.onError(callback);
                            };
                            NativeAd.prototype.OffError = function () {
                                this.nativeAd.offError();
                            };
                            return NativeAd;
                        }());
                        QG.NativeAd = NativeAd;
                        function CreateNativeAd(posId) {
                            var param = {};
                            param.posId = posId;
                            var obj = qg.createNativeAd(param);
                            return new NativeAd(obj);
                        }
                        QG.CreateNativeAd = CreateNativeAd;
                        var RequestParam = /** @class */ (function () {
                            function RequestParam() {
                                this.dataType = "json";
                            }
                            return RequestParam;
                        }());
                        QG.RequestParam = RequestParam;
                        function Request(param) {
                            return qg.request(param);
                        }
                        QG.Request = Request;
                    })(QG = VIVO.QG || (VIVO.QG = {}));
                })(VIVO = Extern.VIVO || (Extern.VIVO = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var WX;
                (function (WX) {
                    function Exist() {
                        return typeof wx != 'undefined';
                    }
                    WX.Exist = Exist;
                    var CallbackResult = /** @class */ (function () {
                        function CallbackResult() {
                        }
                        return CallbackResult;
                    }());
                    WX.CallbackResult = CallbackResult;
                    var CallbackParam = /** @class */ (function () {
                        function CallbackParam() {
                        }
                        return CallbackParam;
                    }());
                    WX.CallbackParam = CallbackParam;
                })(WX = Extern.WX || (Extern.WX = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var WX;
                (function (WX) {
                    var NavigateToMiniProgramParam = /** @class */ (function (_super) {
                        __extends(NavigateToMiniProgramParam, _super);
                        function NavigateToMiniProgramParam() {
                            var _this = _super !== null && _super.apply(this, arguments) || this;
                            _this.envVersion = "release"; //要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
                            return _this;
                        }
                        return NavigateToMiniProgramParam;
                    }(WX.CallbackParam));
                    WX.NavigateToMiniProgramParam = NavigateToMiniProgramParam;
                    function NavigateToMiniProgram(param) {
                        wx.navigateToMiniProgram(param);
                    }
                    WX.NavigateToMiniProgram = NavigateToMiniProgram;
                })(WX = Extern.WX || (Extern.WX = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var WX;
                (function (WX) {
                    var AuthorizeParam = /** @class */ (function (_super) {
                        __extends(AuthorizeParam, _super);
                        function AuthorizeParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return AuthorizeParam;
                    }(WX.CallbackParam));
                    WX.AuthorizeParam = AuthorizeParam;
                    function Authorize(param) {
                        wx.authorize(param);
                    }
                    WX.Authorize = Authorize;
                    var UserInfoButtonStyle = /** @class */ (function () {
                        function UserInfoButtonStyle() {
                        }
                        return UserInfoButtonStyle;
                    }());
                    var CreateUserInfoButtonParam = /** @class */ (function () {
                        function CreateUserInfoButtonParam() {
                            this.style = new UserInfoButtonStyle(); //按钮的样式
                        }
                        return CreateUserInfoButtonParam;
                    }());
                    WX.CreateUserInfoButtonParam = CreateUserInfoButtonParam;
                    function CreateUserInfoButton(param) {
                        if (wx.createUserInfoButton == null)
                            return null;
                        var obj = wx.createUserInfoButton(param);
                        return new UserInfoButton(obj);
                    }
                    WX.CreateUserInfoButton = CreateUserInfoButton;
                    var UserInfoButton = /** @class */ (function () {
                        function UserInfoButton(obj) {
                            this.userInfoButton = obj;
                        }
                        Object.defineProperty(UserInfoButton.prototype, "type", {
                            get: function () {
                                return this.userInfoButton.type;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(UserInfoButton.prototype, "text", {
                            get: function () {
                                return this.userInfoButton.text;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(UserInfoButton.prototype, "image", {
                            get: function () {
                                return this.userInfoButton.image;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(UserInfoButton.prototype, "style", {
                            get: function () {
                                return this.userInfoButton.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        UserInfoButton.prototype.Show = function () {
                            return this.userInfoButton.show();
                        };
                        UserInfoButton.prototype.Hide = function () {
                            return this.userInfoButton.hide();
                        };
                        UserInfoButton.prototype.OnTap = function (callback) {
                            this.userInfoButton.onTap(callback);
                        };
                        UserInfoButton.prototype.OffTap = function (callback) {
                            this.userInfoButton.offTap(callback);
                        };
                        UserInfoButton.prototype.Destroy = function () {
                            this.userInfoButton.destroy();
                        };
                        return UserInfoButton;
                    }());
                    WX.UserInfoButton = UserInfoButton;
                    var LoginSuccessResult = /** @class */ (function (_super) {
                        __extends(LoginSuccessResult, _super);
                        function LoginSuccessResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return LoginSuccessResult;
                    }(WX.CallbackResult));
                    var LoginParam = /** @class */ (function (_super) {
                        __extends(LoginParam, _super);
                        function LoginParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return LoginParam;
                    }(WX.CallbackParam));
                    WX.LoginParam = LoginParam;
                    function Login(param) {
                        wx.login(param);
                    }
                    WX.Login = Login;
                    var UserInfo = /** @class */ (function () {
                        function UserInfo() {
                        }
                        return UserInfo;
                    }());
                    WX.UserInfo = UserInfo;
                    var GetUserInfoSuccessResult = /** @class */ (function (_super) {
                        __extends(GetUserInfoSuccessResult, _super);
                        function GetUserInfoSuccessResult() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetUserInfoSuccessResult;
                    }(WX.CallbackResult));
                    var GetUserInfoParam = /** @class */ (function (_super) {
                        __extends(GetUserInfoParam, _super);
                        function GetUserInfoParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return GetUserInfoParam;
                    }(WX.CallbackParam));
                    WX.GetUserInfoParam = GetUserInfoParam;
                    function GetUserInfo(param) {
                        wx.getUserInfo(param);
                    }
                    WX.GetUserInfo = GetUserInfo;
                    function OnShow(callback) {
                        wx.onShow(callback);
                    }
                    WX.OnShow = OnShow;
                    function OffShow(callback) {
                        wx.offShow(callback);
                    }
                    WX.OffShow = OffShow;
                    function OnHide(callback) {
                        wx.onHide(callback);
                    }
                    WX.OnHide = OnHide;
                    function OffHide(callback) {
                        wx.offHide(callback);
                    }
                    WX.OffHide = OffHide;
                    var ReferrerInfo = /** @class */ (function () {
                        function ReferrerInfo() {
                        }
                        return ReferrerInfo;
                    }());
                    var LaunchOption = /** @class */ (function () {
                        function LaunchOption() {
                        }
                        return LaunchOption;
                    }());
                    function GetLaunchOptionsSync() {
                        return wx.getLaunchOptionsSync();
                    }
                    WX.GetLaunchOptionsSync = GetLaunchOptionsSync;
                    function VibrateShort(parm) {
                        wx.vibrateShort(parm);
                    }
                    WX.VibrateShort = VibrateShort;
                    function VibrateLong(parm) {
                        wx.vibrateLong(parm);
                    }
                    WX.VibrateLong = VibrateLong;
                    var BannerAdStyle = /** @class */ (function () {
                        function BannerAdStyle() {
                        }
                        return BannerAdStyle;
                    }());
                    WX.BannerAdStyle = BannerAdStyle;
                    var BannerAd = /** @class */ (function () {
                        function BannerAd(obj) {
                            this.bannerAd = obj;
                        }
                        Object.defineProperty(BannerAd.prototype, "style", {
                            get: function () {
                                return this.bannerAd.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        BannerAd.prototype.Show = function () {
                            return this.bannerAd.show();
                        };
                        BannerAd.prototype.Hide = function () {
                            return this.bannerAd.hide();
                        };
                        BannerAd.prototype.OnLoad = function (callback) {
                            this.bannerAd.onLoad(callback);
                        };
                        BannerAd.prototype.OffLoad = function (callback) {
                            this.bannerAd.offLoad(callback);
                        };
                        BannerAd.prototype.OnError = function (callback) {
                            this.bannerAd.onError(callback);
                        };
                        BannerAd.prototype.OffError = function (callback) {
                            this.bannerAd.offError(callback);
                        };
                        BannerAd.prototype.OnResize = function (callback) {
                            this.bannerAd.onResize(callback);
                        };
                        BannerAd.prototype.OffResize = function (callback) {
                            this.bannerAd.offResize(callback);
                        };
                        BannerAd.prototype.Destroy = function () {
                            this.bannerAd.destroy();
                        };
                        return BannerAd;
                    }());
                    WX.BannerAd = BannerAd;
                    function CreateBannerAd(adUnitId, style, adIntervals) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        param.style = style;
                        param.adIntervals = adIntervals;
                        var obj = wx.createBannerAd(param);
                        return new BannerAd(obj);
                    }
                    WX.CreateBannerAd = CreateBannerAd;
                    var InterstitialAd = /** @class */ (function () {
                        function InterstitialAd(obj) {
                            this.interstitialAd = obj;
                        }
                        InterstitialAd.prototype.Load = function () {
                            return this.interstitialAd.load();
                        };
                        InterstitialAd.prototype.Show = function () {
                            return this.interstitialAd.show();
                        };
                        InterstitialAd.prototype.OnLoad = function (callback) {
                            this.interstitialAd.onLoad(callback);
                        };
                        InterstitialAd.prototype.OffLoad = function (callback) {
                            this.interstitialAd.offLoad(callback);
                        };
                        InterstitialAd.prototype.OnClose = function (callback) {
                            this.interstitialAd.onClose(callback);
                        };
                        InterstitialAd.prototype.OffClose = function (callback) {
                            this.interstitialAd.offClose(callback);
                        };
                        InterstitialAd.prototype.OnError = function (callback) {
                            this.interstitialAd.onError(callback);
                        };
                        InterstitialAd.prototype.OffError = function (callback) {
                            this.interstitialAd.offError(callback);
                        };
                        InterstitialAd.prototype.Destroy = function () {
                            this.interstitialAd.destroy();
                        };
                        return InterstitialAd;
                    }());
                    WX.InterstitialAd = InterstitialAd;
                    function CreateInterstitialAd(adUnitId) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        var obj = wx.createInterstitialAd(param);
                        return new InterstitialAd(obj);
                    }
                    WX.CreateInterstitialAd = CreateInterstitialAd;
                    var RewardedVideoAd = /** @class */ (function () {
                        function RewardedVideoAd(obj) {
                            this.rewardedVideoAd = obj;
                        }
                        RewardedVideoAd.prototype.Load = function () {
                            return this.rewardedVideoAd.load();
                        };
                        RewardedVideoAd.prototype.Show = function () {
                            return this.rewardedVideoAd.show();
                        };
                        RewardedVideoAd.prototype.OnLoad = function (callback) {
                            this.rewardedVideoAd.onLoad(callback);
                        };
                        RewardedVideoAd.prototype.OffLoad = function (callback) {
                            this.rewardedVideoAd.offLoad(callback);
                        };
                        RewardedVideoAd.prototype.OnError = function (callback) {
                            this.rewardedVideoAd.onError(callback);
                        };
                        RewardedVideoAd.prototype.OffError = function (callback) {
                            this.rewardedVideoAd.offError(callback);
                        };
                        RewardedVideoAd.prototype.OnClose = function (callback) {
                            this.rewardedVideoAd.onClose(callback);
                        };
                        RewardedVideoAd.prototype.OffClose = function (callback) {
                            this.rewardedVideoAd.offClose(callback);
                        };
                        RewardedVideoAd.prototype.Destroy = function () {
                            this.rewardedVideoAd.destroy();
                        };
                        return RewardedVideoAd;
                    }());
                    WX.RewardedVideoAd = RewardedVideoAd;
                    function CreateRewardedVideoAd(adUnitId, multiton) {
                        var param = {};
                        param.adUnitId = adUnitId;
                        param.multiton = multiton;
                        var obj = wx.createRewardedVideoAd(param);
                        return new RewardedVideoAd(obj);
                    }
                    WX.CreateRewardedVideoAd = CreateRewardedVideoAd;
                    var GridAdStyle = /** @class */ (function () {
                        function GridAdStyle() {
                        }
                        return GridAdStyle;
                    }());
                    WX.GridAdStyle = GridAdStyle;
                    var GridAd = /** @class */ (function () {
                        function GridAd(obj) {
                            this.gridAd = obj;
                        }
                        Object.defineProperty(GridAd.prototype, "style", {
                            get: function () {
                                return this.gridAd.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        GridAd.prototype.Show = function () {
                            return this.gridAd.show();
                        };
                        GridAd.prototype.Hide = function () {
                            return this.gridAd.hide();
                        };
                        GridAd.prototype.OnLoad = function (callback) {
                            this.gridAd.onLoad(callback);
                        };
                        GridAd.prototype.OffLoad = function (callback) {
                            this.gridAd.offLoad(callback);
                        };
                        GridAd.prototype.OnError = function (callback) {
                            this.gridAd.onError(callback);
                        };
                        GridAd.prototype.OffError = function (callback) {
                            this.gridAd.offError(callback);
                        };
                        GridAd.prototype.OnResize = function (callback) {
                            this.gridAd.onResize(callback);
                        };
                        GridAd.prototype.OffResize = function (callback) {
                            this.gridAd.offResize(callback);
                        };
                        GridAd.prototype.Destroy = function () {
                            this.gridAd.destroy();
                        };
                        return GridAd;
                    }());
                    WX.GridAd = GridAd;
                    var CreateGridAdParam = /** @class */ (function () {
                        function CreateGridAdParam() {
                            this.style = new GridAdStyle(); //grid(格子) 广告组件的样式
                            this.gridCount = 5; //grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5
                        }
                        return CreateGridAdParam;
                    }());
                    WX.CreateGridAdParam = CreateGridAdParam;
                    function CreateGridAd(param) {
                        if (typeof wx.createGridAd != 'function')
                            return null;
                        var obj = wx.createGridAd(param);
                        return new GridAd(obj);
                    }
                    WX.CreateGridAd = CreateGridAd;
                    var CustomAd = /** @class */ (function () {
                        function CustomAd(obj) {
                            this.customAd = obj;
                        }
                        Object.defineProperty(CustomAd.prototype, "style", {
                            get: function () {
                                return this.customAd.style;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        CustomAd.prototype.IsShow = function () {
                            return this.customAd.isShow();
                        };
                        CustomAd.prototype.Show = function () {
                            return this.customAd.show();
                        };
                        CustomAd.prototype.Hide = function () {
                            return this.customAd.hide();
                        };
                        CustomAd.prototype.OnLoad = function (callback) {
                            this.customAd.onLoad(callback);
                        };
                        CustomAd.prototype.OffLoad = function (callback) {
                            this.customAd.offLoad(callback);
                        };
                        CustomAd.prototype.OnError = function (callback) {
                            this.customAd.onError(callback);
                        };
                        CustomAd.prototype.OffError = function (callback) {
                            this.customAd.offError(callback);
                        };
                        CustomAd.prototype.OnClose = function (callback) {
                            this.customAd.onClose(callback);
                        };
                        CustomAd.prototype.OffClose = function (callback) {
                            this.customAd.offClose(callback);
                        };
                        CustomAd.prototype.Destroy = function () {
                            this.customAd.destroy();
                        };
                        return CustomAd;
                    }());
                    WX.CustomAd = CustomAd;
                    var CreateCustomAdParam = /** @class */ (function () {
                        function CreateCustomAdParam() {
                        }
                        return CreateCustomAdParam;
                    }());
                    WX.CreateCustomAdParam = CreateCustomAdParam;
                    function CreateCustomAd(param) {
                        if (typeof wx.createCustomAd != 'function')
                            return null;
                        var obj = wx.createCustomAd(param);
                        return new CustomAd(obj);
                    }
                    WX.CreateCustomAd = CreateCustomAd;
                    var ShareAppMessageParam = /** @class */ (function () {
                        function ShareAppMessageParam() {
                        }
                        return ShareAppMessageParam;
                    }());
                    WX.ShareAppMessageParam = ShareAppMessageParam;
                    function ShareAppMessage(param) {
                        wx.shareAppMessage(param);
                    }
                    WX.ShareAppMessage = ShareAppMessage;
                    var OnShareAppMessageParam = /** @class */ (function () {
                        function OnShareAppMessageParam() {
                        }
                        return OnShareAppMessageParam;
                    }());
                    WX.OnShareAppMessageParam = OnShareAppMessageParam;
                    function OnShareAppMessage(param) {
                        wx.onShareAppMessage(param);
                    }
                    WX.OnShareAppMessage = OnShareAppMessage;
                    function ShowShareMenu(param) {
                        wx.showShareMenu(param);
                    }
                    WX.ShowShareMenu = ShowShareMenu;
                    var ShowShareMenusParam = /** @class */ (function (_super) {
                        __extends(ShowShareMenusParam, _super);
                        function ShowShareMenusParam() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return ShowShareMenusParam;
                    }(WX.CallbackParam));
                    WX.ShowShareMenusParam = ShowShareMenusParam;
                })(WX = Extern.WX || (Extern.WX = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Extern;
            (function (Extern) {
                var XIAOMI;
                (function (XIAOMI) {
                    var QG;
                    (function (QG) {
                        function Exist() {
                            return typeof qg != 'undefined';
                        }
                        QG.Exist = Exist;
                        var InsertAd = /** @class */ (function () {
                            function InsertAd(obj) {
                                this.insertAd = obj;
                            }
                            InsertAd.prototype.Show = function () {
                                return this.insertAd.show();
                            };
                            InsertAd.prototype.OnLoad = function (callback) {
                                this.insertAd.onLoad(callback);
                            };
                            InsertAd.prototype.OffLoad = function (callback) {
                                this.insertAd.offLoad(callback);
                            };
                            InsertAd.prototype.OnError = function (callback) {
                                this.insertAd.onError(callback);
                            };
                            InsertAd.prototype.OffError = function (callback) {
                                this.insertAd.offError(callback);
                            };
                            InsertAd.prototype.OnClose = function (callback) {
                                this.insertAd.onClose(callback);
                            };
                            InsertAd.prototype.OffClose = function (callback) {
                                this.insertAd.offClose(callback);
                            };
                            return InsertAd;
                        }());
                        QG.InsertAd = InsertAd;
                        function CreateInsertAd(posId) {
                            var param = {};
                            param.adUnitId = posId;
                            var obj = qg.createInterstitialAd(param);
                            return new InsertAd(obj);
                        }
                        QG.CreateInsertAd = CreateInsertAd;
                        var RewardedVideoAd = /** @class */ (function () {
                            function RewardedVideoAd(obj) {
                                this.videoAd = obj;
                            }
                            RewardedVideoAd.prototype.Show = function () {
                                return this.videoAd.show();
                            };
                            RewardedVideoAd.prototype.Load = function () {
                                return this.videoAd.load();
                            };
                            RewardedVideoAd.prototype.OnLoad = function (callback) {
                                this.videoAd.onLoad(callback);
                            };
                            RewardedVideoAd.prototype.OffLoad = function (callback) {
                                this.videoAd.offLoad(callback);
                            };
                            RewardedVideoAd.prototype.OnClose = function (callback) {
                                this.videoAd.onClose(callback);
                            };
                            RewardedVideoAd.prototype.OffClose = function (callback) {
                                this.videoAd.offClose(callback);
                            };
                            RewardedVideoAd.prototype.OnError = function (callback) {
                                this.videoAd.onError(callback);
                            };
                            RewardedVideoAd.prototype.OffError = function (callback) {
                                this.videoAd.offError(callback);
                            };
                            return RewardedVideoAd;
                        }());
                        QG.RewardedVideoAd = RewardedVideoAd;
                        function CreateRewardedVideoAd(posId) {
                            var param = {};
                            param.adUnitId = posId;
                            var obj = qg.createRewardedVideoAd(param);
                            return new RewardedVideoAd(obj);
                        }
                        QG.CreateRewardedVideoAd = CreateRewardedVideoAd;
                    })(QG = XIAOMI.QG || (XIAOMI.QG = {}));
                })(XIAOMI = Extern.XIAOMI || (Extern.XIAOMI = {}));
            })(Extern = AppRt.Extern || (AppRt.Extern = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var HBS;
                (function (HBS) {
                    var Account;
                    (function (Account) {
                        var loginWaiter;
                        var result;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(loginWaiter == null)) return [3 /*break*/, 3];
                                            loginWaiter = new TJ.Common.PromiseWrap();
                                            if (!(TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.HUAWEI_AppRt)) return [3 /*break*/, 2];
                                            param = new AppRt.Extern.HBS.GameLoginParam();
                                            param.success = function (res) {
                                                console.log("HBS.GameLogin success = " + JSON.stringify(res));
                                                result = res;
                                                loginWaiter.Resolve();
                                            };
                                            param.fail = function (res) {
                                                console.log("HBS.GameLogin fail = " + JSON.stringify(res));
                                                loginWaiter.Resolve();
                                            };
                                            AppRt.Extern.HBS.GameLogin(param);
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            loginWaiter.Resolve();
                                            _a.label = 3;
                                        case 3: return [4 /*yield*/, loginWaiter.promise];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, result];
                                    }
                                });
                            });
                        }
                        Account.Login = Login;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, result];
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = HBS.Account || (HBS.Account = {}));
                })(HBS = Develop.HBS || (Develop.HBS = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var Kwai;
                (function (Kwai) {
                    var MediaRecoder = /** @class */ (function () {
                        function MediaRecoder() {
                            this.recording = false;
                            if (this.obj == null)
                                return;
                            this.obj.OnError({
                                listener: function (err) {
                                    console.log("Kwai.MediaRecoder.OnError = " + JSON.stringify(err));
                                }
                            });
                        }
                        Object.defineProperty(MediaRecoder.prototype, "obj", {
                            get: function () {
                                if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.Kwai_AppRt)
                                    return null;
                                if (this._obj == null) {
                                    this._obj = AppRt.Extern.Kwai.CreateMediaRecorder();
                                }
                                return this._obj;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(MediaRecoder.prototype, "hasVideo", {
                            get: function () {
                                if (this.obj == null)
                                    return false;
                                if (!this.recording)
                                    return false;
                                return true;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        MediaRecoder.prototype.Start = function () {
                            var _this = this;
                            if (this._obj == null)
                                return;
                            this.obj.Destory({
                                callback: function (err) {
                                    console.log("Kwai.MediaRecoder.Destory = " + JSON.stringify(err));
                                    _this.recording = false;
                                    _this.obj.Init({
                                        callback: function (err) {
                                            console.log("Kwai.MediaRecoder.Init = " + JSON.stringify(err));
                                            _this.obj.Start({
                                                callback: function (err) {
                                                    console.log("Kwai.MediaRecoder.Start = " + JSON.stringify(err));
                                                    if (err == null || err.code == null) {
                                                        _this.recording = true;
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        };
                        MediaRecoder.prototype.Stop = function (share) {
                            var _this = this;
                            if (share === void 0) { share = false; }
                            if (this._obj == null)
                                return;
                            this.obj.Stop({
                                callback: function (err) {
                                    console.log("Kwai.MediaRecoder.Stop = " + JSON.stringify(err));
                                    if (share)
                                        _this.Share();
                                }
                            });
                        };
                        MediaRecoder.prototype.Share = function () {
                            if (this._obj == null)
                                return;
                            this.obj.PublishVideo({
                                callback: function (err) {
                                    console.log("Kwai.MediaRecoder.PublishVideo = " + JSON.stringify(err));
                                }
                            });
                        };
                        return MediaRecoder;
                    }());
                    Kwai.MediaRecoder = MediaRecoder;
                })(Kwai = Develop.Kwai || (Develop.Kwai = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var OPPO;
                (function (OPPO) {
                    var Account;
                    (function (Account) {
                        var loginWaiter;
                        var result;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(loginWaiter == null)) return [3 /*break*/, 3];
                                            loginWaiter = new TJ.Common.PromiseWrap();
                                            if (!(TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.OPPO_AppRt)) return [3 /*break*/, 2];
                                            param = new AppRt.Extern.OPPO.QG.LoginParam();
                                            param.success = function (res) {
                                                console.log("OPPO.QG.Login success = " + JSON.stringify(res));
                                                result = res;
                                                loginWaiter.Resolve();
                                            };
                                            param.fail = function (res) {
                                                console.log("OPPO.QG.Login fail = " + JSON.stringify(res));
                                                loginWaiter.Resolve();
                                            };
                                            AppRt.Extern.OPPO.QG.Login(param);
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            loginWaiter.Resolve();
                                            _a.label = 3;
                                        case 3: return [4 /*yield*/, loginWaiter.promise];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, result];
                                    }
                                });
                            });
                        }
                        Account.Login = Login;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, result.data];
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = OPPO.Account || (OPPO.Account = {}));
                })(OPPO = Develop.OPPO || (Develop.OPPO = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var OPPO;
                (function (OPPO) {
                    var GameAd;
                    (function (GameAd) {
                        var gameBannerAd;
                        function ShowBanner() {
                            if (DP.OPPO.QG.gameBannerId == null)
                                return;
                            if (gameBannerAd == null) {
                                gameBannerAd = AppRt.Extern.OPPO.QG.CreateGameBannerAd({ adUnitId: DP.OPPO.QG.gameBannerId });
                                if (gameBannerAd == null)
                                    return;
                                gameBannerAd.OnLoad(function (res) {
                                    console.log("OPPO.QG.GameBannerAd OnLoad = " + JSON.stringify(res));
                                });
                                gameBannerAd.OnError(function (res) {
                                    console.log("OPPO.QG.GameBannerAd OnError = " + JSON.stringify(res));
                                });
                            }
                            if (gameBannerAd != null) {
                                gameBannerAd.Show();
                            }
                        }
                        GameAd.ShowBanner = ShowBanner;
                        function RemoveBanner() {
                            if (gameBannerAd != null) {
                                gameBannerAd.Destroy();
                                gameBannerAd = null;
                            }
                        }
                        GameAd.RemoveBanner = RemoveBanner;
                        function ShowPortal() {
                            if (DP.OPPO.QG.gamePortalId == null)
                                return;
                            var ad = AppRt.Extern.OPPO.QG.CreateGamePortalAd({ adUnitId: DP.OPPO.QG.gamePortalId });
                            if (ad == null)
                                return;
                            ad.OnLoad(function (res) {
                                console.log("OPPO.QG.GamePortalAd OnLoad = " + JSON.stringify(res));
                                ad.Show();
                            });
                            ad.OnError(function (res) {
                                console.log("OPPO.QG.GamePortalAd OnError = " + JSON.stringify(res));
                                ad.Destroy();
                            });
                            ad.OnClose(function (res) {
                                console.log("OPPO.QG.GamePortalAd OnClose = " + JSON.stringify(res));
                                ad.Destroy();
                            });
                            ad.Load();
                        }
                        GameAd.ShowPortal = ShowPortal;
                    })(GameAd = OPPO.GameAd || (OPPO.GameAd = {}));
                })(OPPO = Develop.OPPO || (Develop.OPPO = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var QQ;
                (function (QQ) {
                    var Account;
                    (function (Account) {
                        var loginWaiter;
                        var code;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (loginWaiter == null) {
                                                loginWaiter = new TJ.Common.PromiseWrap();
                                                if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.SQ_AppRt) {
                                                    param = new AppRt.Extern.QQ.LoginParam();
                                                    param.success = function (res) {
                                                        code = res.code;
                                                    };
                                                    param.complete = function (res) {
                                                        console.log("QQ.Login complete " + JSON.stringify(res));
                                                        loginWaiter.Resolve();
                                                    };
                                                    AppRt.Extern.QQ.Login(param);
                                                }
                                                else {
                                                    loginWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { code: code }];
                                    }
                                });
                            });
                        }
                        Account.Login = Login;
                        function YLogin() {
                            return __awaiter(this, void 0, void 0, function () {
                                var obj, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Login()];
                                        case 1:
                                            obj = _a.sent();
                                            return [4 /*yield*/, TJ.Develop.Yun.Login.CLogin.QQAppRT(obj)];
                                        case 2:
                                            res = _a.sent();
                                            return [2 /*return*/, res];
                                    }
                                });
                            });
                        }
                        Account.YLogin = YLogin;
                        var userInfoWaiter;
                        var userInfo;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param, btn_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (userInfoWaiter == null) {
                                                userInfoWaiter = new TJ.Common.PromiseWrap();
                                                if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.SQ_AppRt) {
                                                    param = new AppRt.Extern.QQ.CreateUserInfoButtonParam();
                                                    param.type = "image";
                                                    param.style.left = 0;
                                                    param.style.top = 0;
                                                    param.style.width = TJ.Engine.RuntimeInfo.windowSize.width;
                                                    param.style.height = TJ.Engine.RuntimeInfo.windowSize.height;
                                                    btn_1 = AppRt.Extern.QQ.CreateUserInfoButton(param);
                                                    btn_1.OnTap(function (res) {
                                                        userInfo = res.userInfo;
                                                        // if (userInfo != null)
                                                        {
                                                            userInfoWaiter.Resolve();
                                                            btn_1.Destroy();
                                                        }
                                                    });
                                                }
                                                else {
                                                    userInfoWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, userInfoWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = QQ.Account || (QQ.Account = {}));
                })(QQ = Develop.QQ || (Develop.QQ = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var QTT;
                (function (QTT) {
                    var Account;
                    (function (Account) {
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var obj;
                                return __generator(this, function (_a) {
                                    obj = TJ.Common.Url.GetArgs();
                                    return [2 /*return*/, { ticket: obj.ticket, platform: obj.platform }];
                                });
                            });
                        }
                        Account.Login = Login;
                        var userInfo;
                        function YLogin() {
                            return __awaiter(this, void 0, void 0, function () {
                                var obj, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Login()];
                                        case 1:
                                            obj = _a.sent();
                                            return [4 /*yield*/, TJ.Develop.Yun.Login.CLogin.QTTAppRT(obj)];
                                        case 2:
                                            res = _a.sent();
                                            userInfo = res.data;
                                            return [2 /*return*/, res];
                                    }
                                });
                            });
                        }
                        Account.YLogin = YLogin;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, userInfo];
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = QTT.Account || (QTT.Account = {}));
                })(QTT = Develop.QTT || (Develop.QTT = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var TA;
                (function (TA) {
                    function FormatDateTime(date) {
                        if (date === void 0) { date = null; }
                        if (date == null)
                            date = new Date();
                        return TJ.Common.Date_.Format(date, "yyyy-MM-dd HH:mm:ss.SSS");
                    }
                    var Raw;
                    (function (Raw) {
                        var url = "https://sslog.tomatojoy.cn";
                        Raw.log = false;
                        Raw.tryCount = 1;
                        function Send(api, param) {
                            var _this = this;
                            var tryc = Raw.tryCount;
                            Raw.tryCount = 1;
                            var obj = {};
                            obj.appid = "f821f61402ab42f8b563646d9aa9bf99";
                            obj.data = JSON.stringify(param);
                            // obj.debug = 1;
                            if (Raw.log)
                                console.log("ta data = " + obj.data);
                            obj.data = encodeURI(obj.data);
                            var i = 0;
                            var act = function () { return __awaiter(_this, void 0, void 0, function () {
                                var www, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(i++ < tryc)) return [3 /*break*/, 2];
                                            www = new TJ.Common.WWW(url + api, obj);
                                            www.logError = false;
                                            www.logSend = false;
                                            www.logText = false;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            if (www.text != null && www.text.length > 0) {
                                                try {
                                                    res = JSON.parse(www.text);
                                                    if (res.code != 0) {
                                                        window.setTimeout(function () { act(); }, 5000);
                                                    }
                                                }
                                                catch (error) {
                                                    console.log(error);
                                                    window.setTimeout(function () { act(); }, 5000);
                                                }
                                            }
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); };
                            act();
                        }
                        function sync_data(param) {
                            if (param == null)
                                param = {};
                            if (TJ.Common.SystemInfo.userGuid != null)
                                param["#account_id"] = TJ.Common.SystemInfo.userGuid;
                            param["#distinct_id"] = TJ.Common.SystemInfo.clientGuid;
                            param["#time"] = FormatDateTime();
                            param["#uuid"] = TJ.Common.Guid.New();
                            if (TJ.Develop.Yun.Location.ip != null)
                                param["#ip"] = TJ.Develop.Yun.Location.ip;
                            Send("/sync_data", param);
                        }
                        Raw.sync_data = sync_data;
                        function track(event_name, properties) {
                            var param = {};
                            param["#type"] = "track";
                            param["#event_name"] = event_name;
                            param["properties"] = properties;
                            if (TJ.Common.SystemInfo.userGuid != null)
                                properties["user_guid"] = TJ.Common.SystemInfo.userGuid;
                            properties["app_guid"] = TJ.API.AppInfo.AppGuid();
                            properties["app_channel"] = TJ.API.AppInfo.Channel();
                            properties["app_versionName"] = TJ.API.AppInfo.VersionName();
                            properties["app_versionCode"] = "" + TJ.API.AppInfo.VersionCode();
                            properties["client_guid"] = TJ.Common.SystemInfo.clientGuid;
                            properties["startup_guid"] = TJ.Common.SystemInfo.startupGuid;
                            properties["startup_time"] = Math.floor((TJ.Common.Date_.nowSeconds - TJ.Common.SystemInfo.startupTime) * 1000) / 1000;
                            properties["tj_version"] = TJ.Define.SDK.version;
                            if (TJ.Develop.ABTest.plan != null)
                                properties["ab_plan"] = TJ.Develop.ABTest.plan;
                            sync_data(param);
                        }
                        Raw.track = track;
                        function user_set(properties) {
                            var param = {};
                            param["#type"] = "user_set";
                            param["properties"] = properties;
                            sync_data(param);
                        }
                        Raw.user_set = user_set;
                        function user_setOnce(properties) {
                            var param = {};
                            param["#type"] = "user_setOnce";
                            param["properties"] = properties;
                            sync_data(param);
                        }
                        Raw.user_setOnce = user_setOnce;
                    })(Raw = TA.Raw || (TA.Raw = {}));
                    var lastStartupTime;
                    var lastForegroundTime = 0;
                    function Startup() {
                        if (lastStartupTime == null) {
                            lastStartupTime = TJ.Common.SystemInfo.startupTime;
                        }
                        var now = TJ.Common.Date_.nowSeconds;
                        var duration = now - lastStartupTime;
                        lastStartupTime = now;
                        var duration_foreground = TJ.Common.SystemInfo.foregroundTime - lastForegroundTime;
                        lastForegroundTime = TJ.Common.SystemInfo.foregroundTime;
                        Raw.track("Startup", { "duration": Math.floor(duration * 1000) / 1000, "duration_foreground": Math.floor(duration_foreground * 1000) / 1000 });
                    }
                    TA.Startup = Startup;
                    function FirstStartup() {
                        Startup();
                        Raw.tryCount = 10;
                        Raw.user_setOnce({ "first_startup_guid": TJ.Common.SystemInfo.startupGuid });
                        // let i = 0;
                        // let act = () => 
                        // {
                        //     Raw.user_setOnce({ "first_startup_guid": Common.SystemInfo.startupGuid });
                        //     if (++i < 5)
                        //     {
                        //         setTimeout(() => { act(); }, 5000);
                        //     }
                        // };
                        // act();
                    }
                    TA.FirstStartup = FirstStartup;
                    function Event(id) {
                        Raw.tryCount = 2;
                        Raw.track("Event", { "id": id });
                    }
                    TA.Event = Event;
                    function LaunchOptions(ops) {
                        var properties = {};
                        if (ops != null) {
                            properties["launch_options"] = ops;
                        }
                        Raw.tryCount = 10;
                        Raw.track("LaunchOptions", properties);
                    }
                    TA.LaunchOptions = LaunchOptions;
                    function PromoEvent(promoGuid, type, style, icon) {
                        var properties = {};
                        if (promoGuid != null) {
                            properties["promo_guid"] = "" + promoGuid;
                        }
                        if (type != null) {
                            properties["type"] = "" + type;
                        }
                        if (style != null) {
                            properties["style"] = "" + style;
                        }
                        if (icon != null) {
                            properties["icon"] = "" + icon;
                        }
                        Raw.tryCount = 3;
                        Raw.track("PromoEvent", properties);
                    }
                    TA.PromoEvent = PromoEvent;
                    function PromoEvents(list) {
                        var properties = {};
                        if (list != null) {
                            properties["promo_list"] = list;
                        }
                        Raw.tryCount = 3;
                        Raw.track("PromoEvents", properties);
                    }
                    TA.PromoEvents = PromoEvents;
                    var eventTimes = {};
                    function Event_LifeCycle(id, type, duration) {
                        Raw.tryCount = 2;
                        Raw.track("Event_LifeCycle", { "id": id, "type": type, "duration": Math.floor(duration * 1000) / 1000 });
                    }
                    function Event_LifeCycle_Load(id) {
                        var key1 = "Event_LifeCycle_Load-" + id;
                        var key2 = "Event_LifeCycle_Start-" + id;
                        var key3 = "Event_LifeCycle_Destroy-" + id;
                        eventTimes[key1] = TJ.Common.Date_.nowSeconds;
                        eventTimes[key2] = null;
                        eventTimes[key3] = null;
                        Event_LifeCycle(id, "Load", 0);
                    }
                    TA.Event_LifeCycle_Load = Event_LifeCycle_Load;
                    function Event_LifeCycle_Start(id) {
                        var key1 = "Event_LifeCycle_Load-" + id;
                        var key2 = "Event_LifeCycle_Start-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null) {
                            eventTimes[key2] = TJ.Common.Date_.nowSeconds;
                            Event_LifeCycle(id, "Start", eventTimes[key2] - eventTimes[key1]);
                        }
                    }
                    TA.Event_LifeCycle_Start = Event_LifeCycle_Start;
                    function Event_LifeCycle_Destroy(id) {
                        var key1 = "Event_LifeCycle_Load-" + id;
                        var key2 = "Event_LifeCycle_Destroy-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null) {
                            eventTimes[key2] = TJ.Common.Date_.nowSeconds;
                            Event_LifeCycle(id, "Destroy", eventTimes[key2] - eventTimes[key1]);
                        }
                    }
                    TA.Event_LifeCycle_Destroy = Event_LifeCycle_Destroy;
                    function Event_LifeCycle_Enable(id) {
                        var key1 = "Event_LifeCycle_Enable-" + id;
                        var key2 = "Event_LifeCycle_Disable-" + id;
                        eventTimes[key1] = TJ.Common.Date_.nowSeconds;
                        eventTimes[key2] = null;
                        Event_LifeCycle(id, "Enable", 0);
                    }
                    TA.Event_LifeCycle_Enable = Event_LifeCycle_Enable;
                    function Event_LifeCycle_Disable(id) {
                        var key1 = "Event_LifeCycle_Enable-" + id;
                        var key2 = "Event_LifeCycle_Disable-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null) {
                            eventTimes[key2] = TJ.Common.Date_.nowSeconds;
                            Event_LifeCycle(id, "Disable", eventTimes[key2] - eventTimes[key1]);
                        }
                    }
                    TA.Event_LifeCycle_Disable = Event_LifeCycle_Disable;
                    function Event_Page(id, type, duration, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        Raw.tryCount = 2;
                        Raw.track("Event_Page", { "id": id, "type": type, "id_source": id_source, "duration": Math.floor(duration * 1000) / 1000 });
                    }
                    function Event_Page_Enter(id, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        var key1 = "Event_Page_Enter-" + id;
                        var key2 = "Event_Page_Show-" + id;
                        var key3 = "Event_Page_Leave-" + id;
                        eventTimes[key1] = TJ.Common.Date_.nowSeconds;
                        eventTimes[key2] = null;
                        eventTimes[key3] = null;
                        Event_Page(id, "Enter", 0, id_source);
                    }
                    TA.Event_Page_Enter = Event_Page_Enter;
                    function Event_Page_Show(id, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        var key1 = "Event_Page_Enter-" + id;
                        var key2 = "Event_Page_Show-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null) {
                            eventTimes[key2] = TJ.Common.Date_.nowSeconds;
                            Event_Page(id, "Show", eventTimes[key2] - eventTimes[key1], id_source);
                        }
                    }
                    TA.Event_Page_Show = Event_Page_Show;
                    function Event_Page_Leave(id, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        var key1 = "Event_Page_Enter-" + id;
                        var key2 = "Event_Page_Leave-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null) {
                            eventTimes[key2] = TJ.Common.Date_.nowSeconds;
                            Event_Page(id, "Leave", eventTimes[key2] - eventTimes[key1], id_source);
                        }
                    }
                    TA.Event_Page_Leave = Event_Page_Leave;
                    function Event_Button(id, type, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        Raw.tryCount = 2;
                        Raw.track("Event_Button", { "id": id, "type": type, "id_source": id_source });
                    }
                    function Event_Button_Show(id, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        Event_Button(id, "Show", id_source);
                    }
                    TA.Event_Button_Show = Event_Button_Show;
                    function Event_Button_Click(id, id_source) {
                        if (id_source === void 0) { id_source = ""; }
                        Event_Button(id, "Click", id_source);
                    }
                    TA.Event_Button_Click = Event_Button_Click;
                    function Event_Level(id, type, duration) {
                        Raw.tryCount = 2;
                        Raw.track("Event_Level", { "id": id, "type": type, "duration": Math.floor(duration * 1000) / 1000 });
                    }
                    function Event_Level_Start(id) {
                        var key1 = "Event_Level_Start-" + id;
                        var key2 = "Event_Level_Finish-" + id;
                        var key3 = "Event_Level_Fail-" + id;
                        eventTimes[key1] = TJ.Common.Date_.nowSeconds;
                        eventTimes[key2] = null;
                        eventTimes[key3] = null;
                        Event_Level(id, "Start", 0);
                    }
                    TA.Event_Level_Start = Event_Level_Start;
                    function Event_Level_Finish(id) {
                        var key1 = "Event_Level_Start-" + id;
                        var key2 = "Event_Level_Finish-" + id;
                        var key3 = "Event_Level_Fail-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null && eventTimes[key3] == null) {
                            eventTimes[key2] = TJ.Common.Date_.nowSeconds;
                            Event_Level(id, "Finish", eventTimes[key2] - eventTimes[key1]);
                        }
                    }
                    TA.Event_Level_Finish = Event_Level_Finish;
                    function Event_Level_Fail(id) {
                        var key1 = "Event_Level_Start-" + id;
                        var key2 = "Event_Level_Finish-" + id;
                        var key3 = "Event_Level_Fail-" + id;
                        if (eventTimes[key1] != null && eventTimes[key2] == null && eventTimes[key3] == null) {
                            eventTimes[key3] = TJ.Common.Date_.nowSeconds;
                            Event_Level(id, "Fail", eventTimes[key3] - eventTimes[key1]);
                        }
                    }
                    TA.Event_Level_Fail = Event_Level_Fail;
                })(TA = Develop.TA || (Develop.TA = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var TT;
                (function (TT) {
                    var Account;
                    (function (Account) {
                        var loginWaiter;
                        var code;
                        var anonymousCode;
                        function Login(force) {
                            if (force === void 0) { force = false; }
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (loginWaiter == null) {
                                                loginWaiter = new TJ.Common.PromiseWrap();
                                                if (DP.Basic.channel == TJ.Define.Channel.AppRt.ZJTD_AppRt) {
                                                    param = new AppRt.Extern.TT.LoginParam();
                                                    param.force = force;
                                                    param.success = function (res) {
                                                        code = res.code;
                                                        anonymousCode = res.anonymousCode;
                                                    };
                                                    param.complete = function (res) {
                                                        console.log("TT.Login complete " + JSON.stringify(res));
                                                        loginWaiter.Resolve();
                                                    };
                                                    AppRt.Extern.TT.Login(param);
                                                }
                                                else {
                                                    loginWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { code: code, anonymousCode: anonymousCode }];
                                    }
                                });
                            });
                        }
                        Account.Login = Login;
                        function YLogin(force) {
                            if (force === void 0) { force = false; }
                            return __awaiter(this, void 0, void 0, function () {
                                var obj, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Login(force)];
                                        case 1:
                                            obj = _a.sent();
                                            return [4 /*yield*/, TJ.Develop.Yun.Login.CLogin.TTAppRT(obj)];
                                        case 2:
                                            res = _a.sent();
                                            return [2 /*return*/, res];
                                    }
                                });
                            });
                        }
                        Account.YLogin = YLogin;
                        var userInfoWaiter;
                        var userInfo;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (userInfoWaiter == null) {
                                                userInfoWaiter = new TJ.Common.PromiseWrap();
                                                if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.ZJTD_AppRt) {
                                                    param = new AppRt.Extern.TT.GetUserInfoParam();
                                                    param.success = function (res) {
                                                        userInfo = res.userInfo;
                                                    };
                                                    param.complete = function (res) {
                                                        console.log("TT.GetUserInfo complete " + JSON.stringify(res));
                                                        userInfoWaiter.Resolve();
                                                    };
                                                    AppRt.Extern.TT.GetUserInfo(param);
                                                }
                                                else {
                                                    userInfoWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, userInfoWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = TT.Account || (TT.Account = {}));
                })(TT = Develop.TT || (Develop.TT = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var TT;
                (function (TT) {
                    var VideoRank;
                    (function (VideoRank) {
                        var Get_video_Result = /** @class */ (function () {
                            function Get_video_Result() {
                            }
                            return Get_video_Result;
                        }());
                        var Get_top_video_ids_Result_data = /** @class */ (function () {
                            function Get_top_video_ids_Result_data() {
                            }
                            return Get_top_video_ids_Result_data;
                        }());
                        function Get_top_video_ids_by_like(app_id, number_of_top, access_token) {
                            return __awaiter(this, void 0, void 0, function () {
                                var www, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            www = new TJ.Common.WWW("http://gate.snssdk.com/developer/api/get_top_video_ids_by_like", { "app_id": app_id, "number_of_top": number_of_top, "access_token": access_token });
                                            return [4 /*yield*/, www.Send("post", "json")];
                                        case 1:
                                            _a.sent();
                                            if (www.error != null)
                                                return [2 /*return*/, []];
                                            res = JSON.parse(www.text);
                                            console.log("Get_top_video_ids_by_like", res);
                                            if (res.err_no != 0)
                                                return [2 /*return*/, []];
                                            return [2 /*return*/, res.data];
                                    }
                                });
                            });
                        }
                        function Get_top_video_ids_by_time(app_id, number_of_top, access_token) {
                            return __awaiter(this, void 0, void 0, function () {
                                var www, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            www = new TJ.Common.WWW("http://gate.snssdk.com/developer/api/get_top_video_ids_by_time", { "app_id": app_id, "number_of_top": number_of_top, "access_token": access_token });
                                            return [4 /*yield*/, www.Send("post", "json")];
                                        case 1:
                                            _a.sent();
                                            if (www.error != null)
                                                return [2 /*return*/, []];
                                            res = JSON.parse(www.text);
                                            console.log("Get_top_video_ids_by_time", res);
                                            if (res.err_no != 0)
                                                return [2 /*return*/, []];
                                            return [2 /*return*/, res.data];
                                    }
                                });
                            });
                        }
                        var Get_video_info_Result_data_video_info = /** @class */ (function () {
                            function Get_video_info_Result_data_video_info() {
                            }
                            return Get_video_info_Result_data_video_info;
                        }());
                        var Get_video_info_Result_data = /** @class */ (function () {
                            function Get_video_info_Result_data() {
                            }
                            return Get_video_info_Result_data;
                        }());
                        function Get_video_info(alias_ids) {
                            return __awaiter(this, void 0, void 0, function () {
                                var www, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            www = new TJ.Common.WWW("https://gate.snssdk.com/developer/api/get_video_info", { "alias_ids": alias_ids });
                                            return [4 /*yield*/, www.Send("post", "json")];
                                        case 1:
                                            _a.sent();
                                            if (www.error != null)
                                                return [2 /*return*/, []];
                                            res = JSON.parse(www.text);
                                            if (res.data == null)
                                                return [2 /*return*/, []];
                                            return [2 /*return*/, res.data];
                                    }
                                });
                            });
                        }
                        var VideoInfo = /** @class */ (function () {
                            function VideoInfo() {
                            }
                            return VideoInfo;
                        }());
                        VideoRank.VideoInfo = VideoInfo;
                        function GetByLike(number_of_top) {
                            return __awaiter(this, void 0, void 0, function () {
                                var access_token, alias_ids, rankDic, _i, _a, item, list, _b, _c, item;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0: return [4 /*yield*/, Develop.Yun.Login.GetAccessToken()];
                                        case 1:
                                            access_token = _d.sent();
                                            alias_ids = [];
                                            rankDic = {};
                                            _i = 0;
                                            return [4 /*yield*/, Get_top_video_ids_by_like(DP.TT.appId, number_of_top, access_token)];
                                        case 2:
                                            _a = _d.sent();
                                            _d.label = 3;
                                        case 3:
                                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                                            item = _a[_i];
                                            alias_ids.push(item.video_id);
                                            rankDic[item.video_id] = item.rank;
                                            _d.label = 4;
                                        case 4:
                                            _i++;
                                            return [3 /*break*/, 3];
                                        case 5:
                                            list = [];
                                            _b = 0;
                                            return [4 /*yield*/, Get_video_info(alias_ids)];
                                        case 6:
                                            _c = _d.sent();
                                            _d.label = 7;
                                        case 7:
                                            if (!(_b < _c.length)) return [3 /*break*/, 9];
                                            item = _c[_b];
                                            list.push({ videoID: item.alias_id, rank: rankDic[item.alias_id], digg_count: item.video_info.digg_count, cover_url: item.video_info.cover_url });
                                            _d.label = 8;
                                        case 8:
                                            _b++;
                                            return [3 /*break*/, 7];
                                        case 9:
                                            list.sort(function (a, b) { return a.rank - b.rank; });
                                            return [2 /*return*/, list];
                                    }
                                });
                            });
                        }
                        VideoRank.GetByLike = GetByLike;
                        function GetByTime(number_of_top) {
                            return __awaiter(this, void 0, void 0, function () {
                                var access_token, alias_ids, rankDic, _i, _a, item, list, _b, _c, item;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0: return [4 /*yield*/, Develop.Yun.Login.GetAccessToken()];
                                        case 1:
                                            access_token = _d.sent();
                                            alias_ids = [];
                                            rankDic = {};
                                            _i = 0;
                                            return [4 /*yield*/, Get_top_video_ids_by_time(DP.TT.appId, number_of_top, access_token)];
                                        case 2:
                                            _a = _d.sent();
                                            _d.label = 3;
                                        case 3:
                                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                                            item = _a[_i];
                                            alias_ids.push(item.video_id);
                                            rankDic[item.video_id] = item.rank;
                                            _d.label = 4;
                                        case 4:
                                            _i++;
                                            return [3 /*break*/, 3];
                                        case 5:
                                            list = [];
                                            _b = 0;
                                            return [4 /*yield*/, Get_video_info(alias_ids)];
                                        case 6:
                                            _c = _d.sent();
                                            _d.label = 7;
                                        case 7:
                                            if (!(_b < _c.length)) return [3 /*break*/, 9];
                                            item = _c[_b];
                                            list.push({ videoID: item.alias_id, rank: rankDic[item.alias_id], digg_count: item.video_info.digg_count, cover_url: item.video_info.cover_url });
                                            _d.label = 8;
                                        case 8:
                                            _b++;
                                            return [3 /*break*/, 7];
                                        case 9:
                                            list.sort(function (a, b) { return a.rank - b.rank; });
                                            return [2 /*return*/, list];
                                    }
                                });
                            });
                        }
                        VideoRank.GetByTime = GetByTime;
                    })(VideoRank = TT.VideoRank || (TT.VideoRank = {}));
                })(TT = Develop.TT || (Develop.TT = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var VIVO;
                (function (VIVO) {
                    var Account;
                    (function (Account) {
                        var loginWaiter;
                        var token;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(loginWaiter == null)) return [3 /*break*/, 3];
                                            loginWaiter = new TJ.Common.PromiseWrap();
                                            if (!(TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.VIVO_AppRt)) return [3 /*break*/, 2];
                                            param = new AppRt.Extern.VIVO.QG.LoginParam();
                                            param.success = function (res) {
                                                console.log("VIVO.QG.Login success = " + JSON.stringify(res));
                                                token = res.data.token;
                                                loginWaiter.Resolve();
                                            };
                                            param.fail = function (res) {
                                                console.log("VIVO.QG.Login fail = " + JSON.stringify(res));
                                                loginWaiter.Resolve();
                                            };
                                            AppRt.Extern.VIVO.QG.Login(param);
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            loginWaiter.Resolve();
                                            _a.label = 3;
                                        case 3: return [4 /*yield*/, loginWaiter.promise];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, { token: token }];
                                    }
                                });
                            });
                        }
                        Account.Login = Login;
                        var userInfo;
                        function YLogin() {
                            return __awaiter(this, void 0, void 0, function () {
                                var obj, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Login()];
                                        case 1:
                                            obj = _a.sent();
                                            return [4 /*yield*/, TJ.Develop.Yun.Login.CLogin.VIVOAppRT(obj)];
                                        case 2:
                                            res = _a.sent();
                                            userInfo = res.data;
                                            return [2 /*return*/, res];
                                    }
                                });
                            });
                        }
                        Account.YLogin = YLogin;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, userInfo];
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = VIVO.Account || (VIVO.Account = {}));
                })(VIVO = Develop.VIVO || (Develop.VIVO = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var WX;
                (function (WX) {
                    var Account;
                    (function (Account) {
                        var loginWaiter;
                        var code;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (loginWaiter == null) {
                                                loginWaiter = new TJ.Common.PromiseWrap();
                                                if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.WX_AppRt) {
                                                    param = new AppRt.Extern.WX.LoginParam();
                                                    param.success = function (res) {
                                                        code = res.code;
                                                    };
                                                    param.complete = function (res) {
                                                        console.log("WX.Login complete " + JSON.stringify(res));
                                                        loginWaiter.Resolve();
                                                    };
                                                    AppRt.Extern.WX.Login(param);
                                                }
                                                else {
                                                    loginWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { code: code }];
                                    }
                                });
                            });
                        }
                        Account.Login = Login;
                        function YLogin() {
                            return __awaiter(this, void 0, void 0, function () {
                                var obj, res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Login()];
                                        case 1:
                                            obj = _a.sent();
                                            return [4 /*yield*/, TJ.Develop.Yun.Login.CLogin.WXLogin(obj)];
                                        case 2:
                                            res = _a.sent();
                                            return [2 /*return*/, res];
                                    }
                                });
                            });
                        }
                        Account.YLogin = YLogin;
                        var userInfoWaiter;
                        var userInfo;
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param, btn_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (userInfoWaiter == null) {
                                                userInfoWaiter = new TJ.Common.PromiseWrap();
                                                if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.WX_AppRt) {
                                                    param = new AppRt.Extern.WX.CreateUserInfoButtonParam();
                                                    param.type = "image";
                                                    param.style.left = 0;
                                                    param.style.top = 0;
                                                    param.style.width = TJ.Engine.RuntimeInfo.windowSize.width;
                                                    param.style.height = TJ.Engine.RuntimeInfo.windowSize.height;
                                                    btn_2 = AppRt.Extern.WX.CreateUserInfoButton(param);
                                                    btn_2.OnTap(function (res) {
                                                        userInfo = res.userInfo;
                                                        // if (userInfo != null)
                                                        {
                                                            userInfoWaiter.Resolve();
                                                            btn_2.Destroy();
                                                        }
                                                    });
                                                }
                                                else {
                                                    userInfoWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, userInfoWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        }
                        Account.GetUserInfo = GetUserInfo;
                    })(Account = WX.Account || (WX.Account = {}));
                })(WX = Develop.WX || (Develop.WX = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var Yun;
                (function (Yun) {
                    var Login;
                    (function (Login) {
                        var apiUrl = "https://yxapi.tomatojoy.cn/login";
                        var ResultParam = /** @class */ (function () {
                            function ResultParam() {
                            }
                            return ResultParam;
                        }());
                        var Result = /** @class */ (function () {
                            function Result() {
                            }
                            return Result;
                        }());
                        function GetResult(www) {
                            if (www.error == null) {
                                var res = JSON.parse(www.text);
                                if (res.E == null) {
                                    var param = res.P;
                                    TJ.Common.SystemInfo.userGuid = param.userguid;
                                }
                                else {
                                    console.error("E = " + res.E);
                                }
                            }
                        }
                        function OPPOLogin(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Login.OPPOAppRT";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            // p.token = obj.token;
                                            p.userInfo = param.userInfo;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.OPPOLogin = OPPOLogin;
                        function VIVOLogin(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Login.VIVOAppRT";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            p.userInfo = param.userInfo;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.VIVOLogin = VIVOLogin;
                        function VIVOLogin2(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Login.VIVOAppRT2";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            p.token = param.token;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.VIVOLogin2 = VIVOLogin2;
                        function TTLogin(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(param.code != null)) return [3 /*break*/, 2];
                                            console.log("TT code = " + param.code);
                                            if (param.userInfo == null) {
                                                param.userInfo = {};
                                            }
                                            console.log("TT userInfo = " + JSON.stringify(param.userInfo));
                                            req = {};
                                            req.A = "Login.TTAppRT";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            p.code = param.code;
                                            p.userInfo = param.userInfo;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            console.log("no code");
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.TTLogin = TTLogin;
                        function WXLogin(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(param.code != null)) return [3 /*break*/, 2];
                                            console.log("WX code = " + param.code);
                                            if (param.userInfo == null) {
                                                param.userInfo = {};
                                            }
                                            console.log("WX userInfo = " + JSON.stringify(param.userInfo));
                                            req = {};
                                            req.A = "Login.WXLogin";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            p.code = param.code;
                                            p.userInfo = param.userInfo;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            console.log("no code");
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.WXLogin = WXLogin;
                        function QTTLogin(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Login.QTTAppRT";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            p.platform = param.platform;
                                            p.ticket = param.ticket;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.QTTLogin = QTTLogin;
                        function HWLogin(param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Login.HWLogin";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            p.userInfo = param.userInfo;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            GetResult(www);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.HWLogin = HWLogin;
                        function GetAccessToken() {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www, res, param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Public.GetAccessToken";
                                            p = {};
                                            p.appguid = TJ.API.AppInfo.AppGuid();
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            if (www.error == null) {
                                                res = JSON.parse(www.text);
                                                if (res.E == null) {
                                                    param = res.P;
                                                    return [2 /*return*/, param.access_token];
                                                }
                                                else {
                                                    console.error("E = " + res.E);
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        Login.GetAccessToken = GetAccessToken;
                    })(Login = Yun.Login || (Yun.Login = {}));
                })(Yun = Develop.Yun || (Develop.Yun = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var Develop;
            (function (Develop) {
                var Yun;
                (function (Yun) {
                    var Player;
                    (function (Player) {
                        var apiUrl = "https://yxapi.tomatojoy.cn/player";
                        var Result = /** @class */ (function () {
                            function Result() {
                            }
                            return Result;
                        }());
                        var ResultParam_GetUserInfo = /** @class */ (function () {
                            function ResultParam_GetUserInfo() {
                            }
                            return ResultParam_GetUserInfo;
                        }());
                        function GetUserInfo() {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www, res, p_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Player.GetUserInfo";
                                            p = {};
                                            p.userguid = TJ.Common.SystemInfo.userGuid;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            if (www.error == null) {
                                                res = JSON.parse(www.text);
                                                if (res.E == null) {
                                                    p_1 = res.P;
                                                    return [2 /*return*/, p_1.userInfo];
                                                }
                                                else {
                                                    console.log("E = " + res.E);
                                                }
                                            }
                                            return [2 /*return*/, null];
                                    }
                                });
                            });
                        }
                        Player.GetUserInfo = GetUserInfo;
                        var ResultParam_GetFriendAssist = /** @class */ (function () {
                            function ResultParam_GetFriendAssist() {
                            }
                            return ResultParam_GetFriendAssist;
                        }());
                        function GetFriendAssist() {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www, res, p_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Player.GetFriendAssist";
                                            p = {};
                                            p.userguid = TJ.Common.SystemInfo.userGuid;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            if (www.error == null) {
                                                res = JSON.parse(www.text);
                                                if (res.E == null) {
                                                    p_2 = res.P;
                                                    return [2 /*return*/, p_2];
                                                }
                                                else {
                                                    console.log("E = " + res.E);
                                                }
                                            }
                                            return [2 /*return*/, null];
                                    }
                                });
                            });
                        }
                        Player.GetFriendAssist = GetFriendAssist;
                        function ReportFriendAssist(originguid) {
                            return __awaiter(this, void 0, void 0, function () {
                                var req, p, www, res, p_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            req = {};
                                            req.A = "Player.ReportFriendAssist";
                                            p = {};
                                            p.userguid = TJ.Common.SystemInfo.userGuid;
                                            p.originguid = originguid;
                                            req.P = JSON.stringify(p);
                                            www = new TJ.Common.WWW(apiUrl, req);
                                            www.logText = true;
                                            return [4 /*yield*/, www.Send("post", "form")];
                                        case 1:
                                            _a.sent();
                                            if (www.error == null) {
                                                res = JSON.parse(www.text);
                                                if (res.E == null) {
                                                    p_3 = res.P;
                                                    return [2 /*return*/, p_3];
                                                }
                                                else {
                                                    console.log("E = " + res.E);
                                                }
                                            }
                                            return [2 /*return*/, null];
                                    }
                                });
                            });
                        }
                        Player.ReportFriendAssist = ReportFriendAssist;
                    })(Player = Yun.Player || (Yun.Player = {}));
                })(Yun = Develop.Yun || (Develop.Yun = {}));
            })(Develop = AppRt.Develop || (AppRt.Develop = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var API;
            (function (API) {
                var AdPoly;
                (function (AdPoly) {
                    var IAdPoly = /** @class */ (function (_super) {
                        __extends(IAdPoly, _super);
                        function IAdPoly() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        IAdPoly.prototype.ADReady = function (param, grade) { return false; };
                        IAdPoly.prototype.ShowAD = function (param, grade) { };
                        IAdPoly.prototype.RemoveAD = function (param, grade) { };
                        return IAdPoly;
                    }(TJ.Common.Component.Interface));
                    AdPoly.IAdPoly = IAdPoly;
                    var Grade;
                    (function (Grade) {
                        Grade[Grade["banner"] = 0] = "banner";
                        Grade[Grade["normal"] = 1] = "normal";
                        Grade[Grade["reward"] = 2] = "reward";
                    })(Grade = AdPoly.Grade || (AdPoly.Grade = {}));
                })(AdPoly = API.AdPoly || (API.AdPoly = {}));
            })(API = AppRt.API || (AppRt.API = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var _4399;
                (function (_4399) {
                    TJ.Common.PriorityInit.Add(0, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt._4399_AppRt:
                                TJ.Common.WWW.prototype.DoSend = function (url, method, data) {
                                    this._error = "4399不允许外部通讯";
                                    this._resolve();
                                    this.LogError();
                                };
                                break;
                        }
                    });
                })(_4399 = DevKit._4399 || (DevKit._4399 = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var HBS;
                (function (HBS) {
                    var loginWaiter;
                    var userInfo;
                    function GameLogin() {
                        return __awaiter(this, void 0, void 0, function () {
                            var param;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (loginWaiter == null) {
                                            loginWaiter = new TJ.Common.PromiseWrap();
                                            if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.HUAWEI_AppRt) {
                                                param = new AppRt.Extern.HBS.GameLoginParam();
                                                param.forceLogin = 1;
                                                param.appid = DP.HBS.appId;
                                                param.success = function (res) {
                                                    console.log("HBS.GameLogin success = " + JSON.stringify(res));
                                                    userInfo = res;
                                                };
                                                param.fail = function (data, code) {
                                                    console.log("HBS.GameLogin fail = " + code + " - " + data);
                                                };
                                                param.complete = function () {
                                                    loginWaiter.Resolve();
                                                };
                                                AppRt.Extern.HBS.GameLogin(param);
                                            }
                                            else {
                                                loginWaiter.Resolve();
                                            }
                                        }
                                        return [4 /*yield*/, loginWaiter.promise];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/, { userInfo: userInfo }];
                                }
                            });
                        });
                    }
                    HBS.GameLogin = GameLogin;
                })(HBS = DevKit.HBS || (DevKit.HBS = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        var loginWaiter;
                        var loginToken;
                        var data;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (loginWaiter == null) {
                                                loginWaiter = new TJ.Common.PromiseWrap();
                                                if (TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.OPPO_AppRt) {
                                                    param = new AppRt.Extern.OPPO.QG.LoginParam();
                                                    param.success = function (res) {
                                                        loginToken = res.data.token;
                                                        data = res.data;
                                                    };
                                                    param.complete = function (res) {
                                                        console.log("QG.Login complete = " + JSON.stringify(res));
                                                        loginWaiter.Resolve();
                                                    };
                                                    AppRt.Extern.OPPO.QG.Login(param);
                                                }
                                                else {
                                                    loginWaiter.Resolve();
                                                }
                                            }
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { token: loginToken, userInfo: data }];
                                    }
                                });
                            });
                        }
                        QG.Login = Login;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = DevKit.OPPO || (DevKit.OPPO = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        function InstallShortcut(callback, source) {
                            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.OPPO_AppRt) {
                                if (callback != null)
                                    callback(true);
                                return;
                            }
                            var invoke = false;
                            var param = new AppRt.Extern.OPPO.QG.CallbackParam();
                            param.success = function (res) {
                                invoke = true;
                            };
                            param.complete = function (res) {
                                window.setTimeout(function () {
                                    HasShortcutInstalled(function (has) {
                                        if (invoke) {
                                            {
                                                var p = new TJ.API.Analytics.Param();
                                                p.id = "OPPO.QG.InstallShortcut-" + source;
                                                TJ.API.Analytics.Event(p);
                                            }
                                            if (has) {
                                                var p = new TJ.API.Analytics.Param();
                                                p.id = "OPPO.QG.InstallShortcut-Success-" + source;
                                                TJ.API.Analytics.Event(p);
                                            }
                                        }
                                        if (callback != null)
                                            callback(has);
                                    });
                                }, 500);
                            };
                            AppRt.Extern.OPPO.QG.InstallShortcut(param);
                        }
                        QG.InstallShortcut = InstallShortcut;
                        function HasShortcutInstalled(callback) {
                            if (DP.Basic.channel != TJ.Define.Channel.AppRt.OPPO_AppRt) {
                                if (callback != null)
                                    callback(false);
                                return;
                            }
                            var has = false;
                            var param = new AppRt.Extern.OPPO.QG.HasShortcutInstalledParam();
                            param.success = function (res) {
                                has = res;
                            };
                            param.complete = function (res) {
                                if (has) {
                                    var p = new TJ.API.Analytics.Param();
                                    p.id = "OPPO.QG.HasShortcutInstalled";
                                    TJ.API.Analytics.Event(p);
                                }
                                if (callback != null)
                                    callback(has);
                            };
                            AppRt.Extern.OPPO.QG.HasShortcutInstalled(param);
                        }
                        QG.HasShortcutInstalled = HasShortcutInstalled;
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = DevKit.OPPO || (DevKit.OPPO = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var QQ;
                (function (QQ) {
                    var AppBox = /** @class */ (function () {
                        function AppBox(posId) {
                            var _this = this;
                            if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.SQ_AppRt)
                                return;
                            this.appBox = AppRt.Extern.QQ.CreateAppBox(posId);
                            this.appBox.OnClose(function (res) {
                                console.log("QQ.AppBox.OnClose " + JSON.stringify(res));
                                _this.appBox.Load();
                            });
                            this.appBox.Load();
                        }
                        AppBox.prototype.Show = function () {
                            if (this.appBox == null)
                                return;
                            this.appBox.Show();
                        };
                        return AppBox;
                    }());
                    QQ.AppBox = AppBox;
                })(QQ = DevKit.QQ || (DevKit.QQ = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var QTTGame;
                (function (QTTGame) {
                    var _this = this;
                    TJ.Common.PriorityInit.Add(1000, function () { return __awaiter(_this, void 0, void 0, function () {
                        var obj;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.QTT_AppRt)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, TJ.API.Account.getUserInfoPromiseWrap.promise];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, AppRt.Develop.Yun.Player.GetUserInfo()];
                                case 2:
                                    obj = _a.sent();
                                    open_id = obj.open_id;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    var open_id = "";
                    function ReportData_load() {
                        if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.QTT_AppRt)
                            return;
                        var param = new AppRt.Extern.QTTGame.ReportDataParam();
                        param.type = "load";
                        param.app_id = DP.QTTGame.appId;
                        param.game_name = DP.Basic.productName;
                        param.open_id = open_id;
                        AppRt.Extern.QTTGame.ReportData(param);
                        console.log("QTTGame.ReportData = " + JSON.stringify(param));
                    }
                    QTTGame.ReportData_load = ReportData_load;
                    function ReportData_start() {
                        if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.QTT_AppRt)
                            return;
                        var param = new AppRt.Extern.QTTGame.ReportDataParam();
                        param.type = "start";
                        param.open_id = open_id;
                        AppRt.Extern.QTTGame.ReportData(param);
                        console.log("QTTGame.ReportData = " + JSON.stringify(param));
                    }
                    QTTGame.ReportData_start = ReportData_start;
                })(QTTGame = DevKit.QTTGame || (DevKit.QTTGame = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var TT;
                (function (TT) {
                    var GameRecorderClip = /** @class */ (function () {
                        function GameRecorderClip() {
                            this.time = Date.now();
                        }
                        return GameRecorderClip;
                    }());
                    TT.GameRecorderClip = GameRecorderClip;
                    var GameRecorderVideo = /** @class */ (function () {
                        function GameRecorderVideo() {
                            var _this = this;
                            this.share = false;
                            this.clips = [];
                            if (this.grm == null)
                                return;
                            this.grm.OnStart(function (res) {
                                _this.clips = [];
                                console.log("TT.GameRecorderVideo OnStart " + JSON.stringify(res));
                            });
                            this.grm.OnStop(function (res) {
                                console.log("TT.GameRecorderVideo OnStop " + JSON.stringify(res));
                                _this.videoPath = res.videoPath;
                                if (_this.clips.length > 0) {
                                    var param = new AppRt.Extern.TT.ClipVideoParam();
                                    param.path = _this.videoPath;
                                    param.success = function (res) {
                                        console.log("TT.ClipVideo success " + JSON.stringify(res));
                                        _this.videoPath = res.videoPath;
                                    };
                                    param.fail = function (res) {
                                        console.log("TT.ClipVideo fail " + JSON.stringify(res));
                                    };
                                    param.complete = function (res) {
                                        console.log("TT.ClipVideo complete " + JSON.stringify(res));
                                        if (_this.share)
                                            _this.Share();
                                    };
                                    _this.grm.ClipVideo(param);
                                }
                                else {
                                    if (_this.share)
                                        _this.Share();
                                }
                            });
                        }
                        Object.defineProperty(GameRecorderVideo.prototype, "grm", {
                            get: function () {
                                if (TJ.API.AppInfo.Channel() != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                                    return null;
                                return AppRt.Extern.TT.GetGameRecorderManager();
                            },
                            enumerable: true,
                            configurable: true
                        });
                        GameRecorderVideo.prototype.Start = function (duration) {
                            if (this.grm == null)
                                return;
                            this.grm.Start(duration);
                        };
                        GameRecorderVideo.prototype.Stop = function (share) {
                            if (share === void 0) { share = false; }
                            if (this.grm == null)
                                return;
                            this.share = share;
                            this.grm.Stop();
                        };
                        GameRecorderVideo.prototype.RecordClip = function (beforeTime, afterTime) {
                            var clip = new GameRecorderClip();
                            this.clips.push(clip);
                            if (this.grm == null)
                                return clip;
                            var param = new AppRt.Extern.TT.RecordClipParam();
                            param.timeRange = [beforeTime, afterTime];
                            param.success = function (res) {
                                console.log("TT.RecordClip success " + JSON.stringify(res));
                                clip.index = res.index;
                            };
                            param.fail = function (res) {
                                console.log("TT.RecordClip fail " + JSON.stringify(res));
                            };
                            this.grm.RecordClip(param);
                            return clip;
                        };
                        GameRecorderVideo.prototype.Share = function (param) {
                            if (param === void 0) { param = null; }
                            if (this.grm == null)
                                return;
                            var videoguid = TJ.Common.Guid.New();
                            if (param == null)
                                param = new AppRt.Extern.TT.ShareAppMessageParam();
                            param.channel = "video";
                            param.query = "GameRecorderVideo=1&videoguid=" + videoguid;
                            param.extra.videoPath = this.videoPath;
                            param.extra.withVideoId = true;
                            var success = param.success;
                            var fail = param.fail;
                            var complete = param.complete;
                            param.success = function (res) {
                                console.log("TT.ShareAppMessage success " + JSON.stringify(res));
                                if (res.videoId != null) {
                                    TJ.Develop.Yun.DouYin.ReportVideoIdInfo({ videoId: res.videoId, videoguid: videoguid });
                                }
                                if (success != null)
                                    success(res);
                            };
                            param.fail = function (res) {
                                console.log("TT.ShareAppMessage fail " + JSON.stringify(res));
                                if (fail != null)
                                    fail(res);
                            };
                            param.complete = function (res) {
                                console.log("TT.ShareAppMessage complete " + JSON.stringify(res));
                                if (complete != null)
                                    complete(res);
                            };
                            AppRt.Extern.TT.ShareAppMessage(param);
                        };
                        return GameRecorderVideo;
                    }());
                    TT.GameRecorderVideo = GameRecorderVideo;
                    var MoreGamesButton = /** @class */ (function () {
                        function MoreGamesButton(apps, x, y, w, h, image) {
                            if (image === void 0) { image = null; }
                            console.log("MoreGamesButton " + x + " " + y + " " + w + " " + h);
                            this.CreateBtn(apps, x, y, w, h, image);
                            if (this.btn == null)
                                return;
                            this.btn.OnTap(MoreGamesButton.OnTap);
                            MoreGamesButton.buttons[this.btn.buttonId] = this;
                        }
                        MoreGamesButton.prototype.CreateBtn = function (apps, x, y, w, h, image) {
                            if (image === void 0) { image = null; }
                            if (DP.Basic.channel != TJ.Define.Channel.AppRt.ZJTD_AppRt)
                                return;
                            var size = TJ.Engine.RuntimeInfo.windowSize;
                            x = x - w / 2 + size.width / 2;
                            y = -y - h / 2 + size.height / 2;
                            var param = new AppRt.Extern.TT.CreateMoreGamesButtonParam();
                            param.type = "image";
                            // param.text = "这是更多游戏";
                            if (image == null) {
                                param.image = "http://image.tomatojoy.cn/wu1.png";
                            }
                            else {
                                param.image = image;
                            }
                            param.style.left = x;
                            param.style.top = y;
                            param.style.width = w;
                            param.style.height = h;
                            // param.style.backgroundColor = "#ff0000";
                            // param.style.borderColor = "#ff0000";
                            param.style.borderWidth = 0;
                            // param.style.borderRadius = 4;
                            // param.style.textAlign = "center";
                            // param.style.fontSize = 16;
                            // param.style.lineHeight = 40;
                            // param.style.textColor = "#ffffff";
                            param.appLaunchOptions = apps;
                            // param.onNavigateToMiniGame = (res) =>
                            // {
                            //     console.log("TT.CreateMoreGamesButton onNavigateToMiniGame = " + JSON.stringify(res));
                            //     console.log("TT.CreateMoreGamesButton onNavigateToMiniGame buttonId = " + this.btn.buttonId);
                            // };
                            this.btn = AppRt.Extern.TT.CreateMoreGamesButton(param);
                        };
                        MoreGamesButton.OnTap = function (res) {
                            var id = res.buttonId;
                            var self = MoreGamesButton.buttons[id];
                            if (self != null) {
                                if (self.onTap != null) {
                                    self.onTap(res);
                                }
                            }
                        };
                        MoreGamesButton.prototype.Show = function () {
                            if (this.btn == null)
                                return;
                            this.btn.Show();
                        };
                        MoreGamesButton.prototype.Hide = function () {
                            if (this.btn == null)
                                return;
                            this.btn.Hide();
                        };
                        MoreGamesButton.prototype.Destroy = function () {
                            if (this.btn == null)
                                return;
                            this.btn.OffTap(MoreGamesButton.OnTap);
                            this.btn.Destroy();
                        };
                        MoreGamesButton.buttons = {};
                        return MoreGamesButton;
                    }());
                    TT.MoreGamesButton = MoreGamesButton;
                    var loginWaiter;
                    var code;
                    var userInfo;
                    function Login() {
                        return __awaiter(this, void 0, void 0, function () {
                            var param, param2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(loginWaiter == null)) return [3 /*break*/, 3];
                                        loginWaiter = new TJ.Common.PromiseWrap();
                                        if (!(DP.Basic.channel == TJ.Define.Channel.AppRt.ZJTD_AppRt)) return [3 /*break*/, 2];
                                        param = new AppRt.Extern.TT.LoginParam();
                                        param.force = false;
                                        param.success = function (res) {
                                            code = res.code;
                                        };
                                        param.complete = function (res) {
                                            console.log("TT.Login complete " + JSON.stringify(res));
                                            loginWaiter.Resolve();
                                        };
                                        AppRt.Extern.TT.Login(param);
                                        return [4 /*yield*/, loginWaiter.promise];
                                    case 1:
                                        _a.sent();
                                        loginWaiter = new TJ.Common.PromiseWrap();
                                        param2 = new AppRt.Extern.TT.GetUserInfoParam();
                                        param2.success = function (res) {
                                            userInfo = res.userInfo;
                                        };
                                        param2.complete = function (res) {
                                            console.log("TT.GetUserInfo complete " + JSON.stringify(res));
                                            loginWaiter.Resolve();
                                        };
                                        AppRt.Extern.TT.GetUserInfo(param2);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        loginWaiter.Resolve();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, loginWaiter.promise];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, { code: code, userInfo: userInfo }];
                                }
                            });
                        });
                    }
                    TT.Login = Login;
                })(TT = DevKit.TT || (DevKit.TT = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var VIVO;
                (function (VIVO) {
                    var QG;
                    (function (QG) {
                        var loginWaiter;
                        // let profile: any;
                        // export async function GetProfile()
                        // {
                        //     if (loginWait == null)
                        //     {
                        //         loginWait = new Promise<void>((r) => { loginResolve = r; });
                        //         if (DP.Basic.channel == Define.Channel.AppRt.VIVO_AppRt)
                        //         {
                        //             let token;
                        //             let param = new Extern.VIVO.QG.AuthorizeParam();
                        //             param.success = (res) =>
                        //             {
                        //                 console.log("VIVO.QG.Authorize success = " + JSON.stringify(res));
                        //                 token = res.accessToken;
                        //             }
                        //             param.complete = (res) =>
                        //             {
                        //                 console.log("VIVO.QG.Authorize complete = " + JSON.stringify(res));
                        //                 loginResolve();
                        //             }
                        //             Extern.VIVO.QG.Authorize(param);
                        //             await loginWait;
                        //             loginWait = new Promise<void>((r) => { loginResolve = r; });
                        //             let param2 = new Extern.VIVO.QG.GetProfileParam();
                        //             param2.token = token;
                        //             param2.success = (res) =>
                        //             {
                        //                 console.log("VIVO.QG.GetProfile success = " + JSON.stringify(res));
                        //                 profile = res;
                        //             }
                        //             param2.complete = (res) =>
                        //             {
                        //                 console.log("VIVO.QG.GetProfile complete = " + JSON.stringify(res));
                        //                 loginResolve();
                        //             }
                        //             Extern.VIVO.QG.GetProfile(param2);
                        //         }
                        //         else
                        //         {
                        //             loginResolve();
                        //         }
                        //     }
                        //     await loginWait;
                        //     return { userInfo: profile };
                        // }
                        var token;
                        function Login() {
                            return __awaiter(this, void 0, void 0, function () {
                                var param;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(loginWaiter == null)) return [3 /*break*/, 3];
                                            loginWaiter = new TJ.Common.PromiseWrap();
                                            if (!(TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.VIVO_AppRt)) return [3 /*break*/, 2];
                                            param = new AppRt.Extern.VIVO.QG.LoginParam();
                                            param.success = function (res) {
                                                console.log("VIVO.QG.Login success = " + JSON.stringify(res));
                                                token = res.data.token;
                                                loginWaiter.Resolve();
                                            };
                                            param.fail = function (res) {
                                                console.log("VIVO.QG.Login fail = " + JSON.stringify(res));
                                                loginWaiter.Resolve();
                                            };
                                            AppRt.Extern.VIVO.QG.Login(param);
                                            return [4 /*yield*/, loginWaiter.promise];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            loginWaiter.Resolve();
                                            _a.label = 3;
                                        case 3: return [4 /*yield*/, loginWaiter.promise];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, { token: token }];
                                    }
                                });
                            });
                        }
                        QG.Login = Login;
                    })(QG = VIVO.QG || (VIVO.QG = {}));
                })(VIVO = DevKit.VIVO || (DevKit.VIVO = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var VIVO;
                (function (VIVO) {
                    TJ.Common.PriorityInit.Add(0, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.VIVO_AppRt:
                                TJ.Common.WWW.prototype.DoSend = function (url, method, data) {
                                    var _this = this;
                                    var param = new AppRt.Extern.VIVO.QG.RequestParam();
                                    param.url = url;
                                    param.method = method.toUpperCase();
                                    param.data = data;
                                    param.dataType = "json";
                                    param.success = function (res) {
                                        _this._text = JSON.stringify(res.data);
                                        _this._resolve();
                                        _this.LogText();
                                    };
                                    param.fail = function (error, code) {
                                        _this._error = code + " - " + JSON.stringify(error);
                                        _this._resolve();
                                        _this.LogError();
                                    };
                                    AppRt.Extern.VIVO.QG.Request(param);
                                };
                                break;
                        }
                    });
                })(VIVO = DevKit.VIVO || (DevKit.VIVO = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var DevKit;
            (function (DevKit) {
                var WX;
                (function (WX) {
                    var loginWaiter;
                    var code;
                    var userInfo;
                    function Login() {
                        return __awaiter(this, void 0, void 0, function () {
                            var param, param2, btn_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(loginWaiter == null)) return [3 /*break*/, 4];
                                        loginWaiter = new TJ.Common.PromiseWrap();
                                        if (!(TJ.API.AppInfo.Channel() == TJ.Define.Channel.AppRt.WX_AppRt)) return [3 /*break*/, 3];
                                        param = new AppRt.Extern.WX.LoginParam();
                                        param.success = function (res) {
                                            code = res.code;
                                        };
                                        param.complete = function (res) {
                                            console.log("WX.Login complete " + JSON.stringify(res));
                                            loginWaiter.Resolve();
                                        };
                                        AppRt.Extern.WX.Login(param);
                                        return [4 /*yield*/, loginWaiter.promise];
                                    case 1:
                                        _a.sent();
                                        loginWaiter = new TJ.Common.PromiseWrap();
                                        param2 = new AppRt.Extern.WX.CreateUserInfoButtonParam();
                                        param2.type = "image";
                                        param2.style.left = 0;
                                        param2.style.top = 0;
                                        param2.style.width = TJ.Engine.RuntimeInfo.windowSize.width;
                                        param2.style.height = TJ.Engine.RuntimeInfo.windowSize.height;
                                        btn_3 = AppRt.Extern.WX.CreateUserInfoButton(param2);
                                        btn_3.OnTap(function (res) {
                                            userInfo = res.userInfo;
                                            // if (userInfo != null)
                                            {
                                                loginWaiter.Resolve();
                                                btn_3.Destroy();
                                            }
                                        });
                                        return [4 /*yield*/, loginWaiter.promise];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        loginWaiter.Resolve();
                                        _a.label = 4;
                                    case 4: return [4 /*yield*/, loginWaiter.promise];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, { code: code, userInfo: userInfo }];
                                }
                            });
                        });
                    }
                    WX.Login = Login;
                })(WX = DevKit.WX || (DevKit.WX = {}));
            })(DevKit = AppRt.DevKit || (AppRt.DevKit = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
// namespace TJ.Platform.AppRt.DevKit.Yun
// {
//     export let autoLogin = true;
//     Common.PriorityInit.Add(100, () =>
//     {
//         if (Engine.RuntimeInfo.platform != Define.Platform.AppRt) return;
//         setTimeout(() =>
//         {
//             if (autoLogin)
//             {
//                 Login();
//             }
//             else
//             {
//                 loginPromiseWrap.Resolve();
//             }
//         }, 1000);
//     });
//     export let loginPromiseWrap = new Common.PromiseWrap();
//     async function Login()
//     {
//         if (Common.SystemInfo.userGuid == null)
//         {
//             let res = {};
//             switch (TJ.API.AppInfo.Channel())
//             {
//                 case Define.Channel.AppRt.OPPO_AppRt:
//                     {
//                         let obj = await AppRt.DevKit.OPPO.QG.Login();
//                         await Develop.Yun.Login.OPPOLogin(obj);
//                     }
//                     break;
//                 case Define.Channel.AppRt.VIVO_AppRt:
//                     {
//                         let obj = await AppRt.DevKit.VIVO.QG.Login();
//                         await Develop.Yun.Login.VIVOLogin2(obj);
//                         // let obj = await Develop.VIVO.Account.Login();
//                         // res = await TJ.Develop.Yun.Login.CLogin.VIVOAppRT(obj);
//                     }
//                     break;
//                 case Define.Channel.AppRt.ZJTD_AppRt:
//                     {
//                         let obj = await AppRt.DevKit.TT.Login();
//                         await Develop.Yun.Login.TTLogin(obj);
//                         // let obj = await Develop.TT.Account.Login();
//                         // res = await TJ.Develop.Yun.Login.CLogin.TTAppRT(obj);
//                     }
//                     break;
//                 case Define.Channel.AppRt.WX_AppRt:
//                     {
//                         let obj = await AppRt.DevKit.WX.Login();
//                         await Develop.Yun.Login.WXLogin(obj);
//                         // let obj = await Develop.WX.Account.Login();
//                         // res = await TJ.Develop.Yun.Login.CLogin.WXLogin(obj);
//                     }
//                     break;
//                 case Define.Channel.AppRt.SQ_AppRt:
//                     {
//                         let obj = await Develop.QQ.Account.Login();
//                         res = await TJ.Develop.Yun.Login.CLogin.QQAppRT(obj);
//                     }
//                     break;
//                 case Define.Channel.AppRt.QTT_AppRt:
//                     {
//                         let args = Common.Url.GetArgs();
//                         await Develop.Yun.Login.QTTLogin(args);
//                         // let obj = Common.Url.GetArgs();
//                         // res = await TJ.Develop.Yun.Login.CLogin.QTTAppRT(obj);
//                     }
//                     break;
//                 case Define.Channel.AppRt.HUAWEI_AppRt:
//                     {
//                         let obj = await AppRt.DevKit.HBS.GameLogin();
//                         await Develop.Yun.Login.HWLogin(obj);
//                     }
//                     break;
//             }
//             // Common.SystemInfo.userGuid = await TJ.Develop.Yun.Login.Public.GetUserguid(res);
//             // console.log("userGuid = " + Common.SystemInfo.userGuid);
//         }
//         loginPromiseWrap.Resolve();
//         TJ.Develop.ReYun.Register(SDK.ReYun.Manager.reyunData);
//         TJ.Develop.ReYun.Loggedin(SDK.ReYun.Manager.reyunData);
//     }
//     export async function SyncStorage()
//     {
//         await loginPromiseWrap.promise;
//         await TJ.Develop.Yun.Prefs.Player.Sync();
//     }
// }
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var _4399;
                (function (_4399) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt._4399_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt._4399_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern._4399.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern._4399.Exist())
                                return;
                            var script_sdk = document.createElement("script");
                            script_sdk.setAttribute("type", "text/javascript");
                            script_sdk.src = "http://h.api.4399.com/h5mini-2.0/h5api-interface.php";
                            document.body.appendChild(script_sdk);
                            document.title = TJ.API.AppInfo.ProductName();
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    _4399.Manager = Manager;
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            this.video = new Video();
                            this.video.Init();
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); param.cbi.Run(TJ.Define.Event.Close); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Video = /** @class */ (function () {
                        function Video() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Video.prototype.Init = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.Load(1000);
                        };
                        Video.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Video.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                AppRt.Extern._4399.CanPlayAd(function (res) {
                                    console.log("_4399.Video.CanPlayAd " + JSON.stringify(res));
                                    _this.loaded = res.canPlayAd;
                                    if (!_this.loaded) {
                                        _this.Load(5000);
                                    }
                                });
                            }, delay);
                        };
                        Video.prototype.Show = function (param) {
                            var _this = this;
                            AppRt.Extern._4399.PlayAd(function (res) {
                                console.log("_4399.Video.PlayAd " + JSON.stringify(res));
                                switch (res.code) {
                                    case 10000:
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                        break;
                                    case 10001:
                                        param.cbi.Run(TJ.Define.Event.Complete);
                                        _this.loaded = false;
                                        _this.Load(1000);
                                        break;
                                    default:
                                        _this.loaded = false;
                                        _this.Load(1000);
                                        break;
                                }
                            });
                        };
                        return Video;
                    }());
                })(_4399 = SDK._4399 || (SDK._4399 = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var ABTest;
                (function (ABTest) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.AppRt:
                                if (DP["ABTest"] != null) {
                                    TJ.Develop.ABTest.plans = DP["ABTest"]["plans"];
                                    TJ.Develop.ABTest.Init();
                                }
                                break;
                        }
                    });
                })(ABTest = SDK.ABTest || (SDK.ABTest = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var AdService;
                (function (AdService) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.AppRt:
                                TJ.Common.Component.Manager.AddComponent(OAdService).DoInit();
                                break;
                        }
                    });
                    var OAdService = /** @class */ (function (_super) {
                        __extends(OAdService, _super);
                        function OAdService() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAdService.prototype.ShowBanner = function (param) {
                            // if (this.lastBannerShowTime < Date.now() - 30 * 1000)
                            {
                                lastBannerShowTime = Date.now();
                                // this.RemoveBanner(param);
                                ShowAds(param, AppRt.API.AdPoly.Grade.banner);
                            }
                        };
                        OAdService.prototype.RemoveBanner = function (param) {
                            if (lastBannerIAds != null) {
                                lastBannerIAds.RemoveAD(param, AppRt.API.AdPoly.Grade.banner);
                                lastBannerIAds = null;
                            }
                        };
                        OAdService.prototype.NormalReady = function (param) {
                            return ReadyAds(param, AppRt.API.AdPoly.Grade.normal).length > 0;
                        };
                        OAdService.prototype.ShowNormal = function (param) {
                            ShowAds(param, AppRt.API.AdPoly.Grade.normal);
                        };
                        OAdService.prototype.RewardReady = function (param) {
                            return ReadyAds(param, AppRt.API.AdPoly.Grade.reward).length > 0;
                        };
                        OAdService.prototype.ShowReward = function (param) {
                            var _this = this;
                            var callback = param.cbi.Clone();
                            if (param.extraAd) {
                                param.cbi.Add(TJ.Define.Event.Close, function () { _this.ShowNormal(new TJ.API.AdService.Param()); });
                            }
                            param.cbi.Set(TJ.Define.Event.NoAds, function () {
                                callback.Run(TJ.Define.Event.NoAds);
                            });
                            ShowAds(param, AppRt.API.AdPoly.Grade.reward);
                        };
                        return OAdService;
                    }(TJ.API.AdService.IAdService));
                    var lastBannerIAds;
                    var lastBannerShowTime = 0;
                    function ReadyAds(param, grade) {
                        var ads = TJ.Common.Component.Manager.GetComponentsWithInit(AppRt.API.AdPoly.IAdPoly);
                        console.log("ads = " + ads.length);
                        var readies = [];
                        for (var _i = 0, ads_1 = ads; _i < ads_1.length; _i++) {
                            var item = ads_1[_i];
                            var ready = item.ADReady(param, grade);
                            console.log((typeof item) + " ready = " + ready);
                            if (ready) {
                                readies.push(item);
                            }
                        }
                        return readies;
                    }
                    function ShowAds(param, grade) {
                        var readies = ReadyAds(param, grade);
                        QueueShowAd(readies, param, grade);
                    }
                    function QueueShowAd(readies, param, grade) {
                        if (readies.length > 0) {
                            var c_1 = readies.shift();
                            var callback_1 = param.cbi.Clone();
                            param.cbi.Add(TJ.Define.Event.Expose, function () {
                                console.log(c_1, "曝光");
                            });
                            param.cbi.Set(TJ.Define.Event.NoAds, function () {
                                param.cbi = callback_1;
                                QueueShowAd(readies, param, grade);
                            });
                            console.log(c_1, "show ad");
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (lastBannerIAds != null) {
                                        if (lastBannerIAds == c_1)
                                            param.refresh = true;
                                        lastBannerIAds.RemoveAD(param, AppRt.API.AdPoly.Grade.banner);
                                    }
                                    lastBannerIAds = c_1;
                                    break;
                            }
                            c_1.ShowAD(param, grade);
                        }
                        else {
                            console.log((typeof AppRt.API.AdPoly.Grade[grade]) + " no ads");
                            param.cbi.Run(TJ.Define.Event.NoAds);
                        }
                    }
                })(AdService = SDK.AdService || (SDK.AdService = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var Adwending;
                (function (Adwending) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.SY_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.SY_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.Adwending.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.Adwending.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    Adwending.Manager = Manager;
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            this.video = new Video();
                            this.video.Init(DP.Adwending.username, DP.Adwending.gameid);
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); param.cbi.Run(TJ.Define.Event.Close); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Video = /** @class */ (function () {
                        function Video() {
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.username = args[0];
                            this.gameid = args[1];
                            AppRt.Extern.Adwending.Message(function (res) {
                                console.log("Adwending.Video.Message = " + JSON.stringify(res));
                                if (_this.param == null)
                                    return;
                                if (res) {
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                }
                                else {
                                    _this.param.cbi.Run(TJ.Define.Event.NoAds);
                                }
                                _this.param = null;
                            });
                        };
                        Video.prototype.Show = function (param) {
                            this.param = param;
                            var ap = new AppRt.Extern.Adwending.Parm();
                            ap.username = this.username;
                            ap.gameid = this.gameid;
                            ap.subtype = "X_INSPIRE";
                            ap.isheng = 0;
                            ap.reward = 0;
                            AppRt.Extern.Adwending.PlayVideo(ap);
                        };
                        return Video;
                    }());
                })(Adwending = SDK.Adwending || (SDK.Adwending = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var AppInfo;
                (function (AppInfo) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.AppRt:
                                TJ.Common.Component.Manager.AddComponent(OAppInfo).DoInit();
                                break;
                        }
                    });
                    var OAppInfo = /** @class */ (function (_super) {
                        __extends(OAppInfo, _super);
                        function OAppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAppInfo.prototype.AppGuid = function () {
                            return DP.Basic.appGuid;
                        };
                        OAppInfo.prototype.ProductName = function () {
                            return DP.Basic.productName;
                        };
                        OAppInfo.prototype.PackageName = function () {
                            return DP.Basic.packageName;
                        };
                        OAppInfo.prototype.VersionName = function () {
                            return DP.Basic.versionName;
                        };
                        OAppInfo.prototype.VersionCode = function () {
                            return DP.Basic.versionCode;
                        };
                        return OAppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                })(AppInfo = SDK.AppInfo || (SDK.AppInfo = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var HBS;
                (function (HBS) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.HUAWEI_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.HUAWEI_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.HBS.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.HBS.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Quit).DoInit();
                            {
                                var options = AppRt.Extern.HBS.GetLaunchOptionsSync();
                                AppRt.Develop.TA.LaunchOptions(options);
                                console.log("HBS.GetLaunchOptionsSync " + JSON.stringify(options));
                            }
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    HBS.Manager = Manager;
                    var Account = /** @class */ (function (_super) {
                        __extends(Account, _super);
                        function Account() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Account.prototype.Login = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userId;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.HBS.Account.Login()];
                                        case 1:
                                            userId = _a.sent();
                                            return [2 /*return*/, userId];
                                    }
                                });
                            });
                        };
                        Account.prototype.SetUserInfo = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.HBS.Account.GetUserInfo()];
                                        case 1:
                                            userInfo = _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        };
                        return Account;
                    }(TJ.API.Account.IAccount));
                    var Quit = /** @class */ (function (_super) {
                        __extends(Quit, _super);
                        function Quit() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Quit.prototype.Quit = function () {
                            var param = new AppRt.Extern.HBS.CallbackParam();
                            param.success = function (res) { console.log("HBS.ExitApplication success = " + JSON.stringify(res)); };
                            param.fail = function (res) { console.log("HBS.ExitApplication fail = " + JSON.stringify(res)); };
                            param.complete = function (res) { console.log("HBS.ExitApplication complete = " + JSON.stringify(res)); };
                            AppRt.Extern.HBS.ExitApplication(param);
                        };
                        return Quit;
                    }(TJ.API.AppCtl.IAppCtl));
                })(HBS = SDK.HBS || (SDK.HBS = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var HG;
                (function (HG) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.HG_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.HG_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.HG.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.HG.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            // Extern.HG.GameLoadResult({ code: 0 });
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    HG.Manager = Manager;
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            if (DP.HG.videoId != null) {
                                this.video = new Video();
                                this.video.Init(DP.HG.videoId);
                            }
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Video = /** @class */ (function () {
                        function Video() {
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.videoAd = AppRt.Extern.HG.CreateRewardedVideoAd({ adUnitId: this.posId });
                            this.videoAd.onError = function (res) {
                                console.log("HG.Video.OnError " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.NoAds);
                            };
                            this.videoAd.onClose = function (res) {
                                console.log("HG.Video.OnClose " + JSON.stringify(res));
                                if (res.isEnded) {
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                }
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            };
                        };
                        Video.prototype.Ready = function () {
                            return true;
                        };
                        Video.prototype.Show = function (param) {
                            var _this = this;
                            this.param = param;
                            this.videoAd.Show().then(function (res) {
                                console.log("HG.Video.Show then = " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.Expose);
                            })["catch"](function (res) {
                                console.log("HG.Video.Show catch = " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.NoAds);
                            });
                        };
                        return Video;
                    }());
                })(HG = SDK.HG || (SDK.HG = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var Kwai;
                (function (Kwai) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.Kwai_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.Kwai_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.Kwai.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.Kwai.Exist())
                                return;
                            AppRt.Extern.Kwai.Init({ appId: DP.Kwai.appId });
                            AppRt.Extern.Kwai.ReadyGo();
                            TJ.Common.Component.Manager.AddComponent(Quit).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    Kwai.Manager = Manager;
                    var Quit = /** @class */ (function (_super) {
                        __extends(Quit, _super);
                        function Quit() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Quit.prototype.Quit = function () {
                            AppRt.Extern.Kwai.WillClose();
                        };
                        return Quit;
                    }(TJ.API.AppCtl.IAppCtl));
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            if (DP.Kwai.videoId != null) {
                                this.video = new Video();
                                this.video.Init(DP.Kwai.videoId);
                            }
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.reward:
                                    var complete_1 = false;
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { complete_1 = true; param.cbi.Run(TJ.Define.Event.Reward); });
                                    param.cbi.Add(TJ.Define.Event.Close, function () { if (!complete_1)
                                        param.cbi.Run(TJ.Define.Event.NoReward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Video = /** @class */ (function () {
                        function Video() {
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.videoAd = AppRt.Extern.Kwai.CreateRewardedVideoAd({ adUnitId: this.posId });
                            if (this.videoAd == null)
                                return;
                            this.videoAd.OnReward(function (res) {
                                console.log("Kwai.Video.OnReward " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.Complete);
                            });
                            this.videoAd.OnClose(function (res) {
                                console.log("Kwai.Video.OnClose " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            });
                        };
                        Video.prototype.Ready = function () {
                            return true;
                        };
                        Video.prototype.Show = function (param) {
                            var _this = this;
                            this.param = param;
                            this.videoAd.Show({
                                success: function (res) {
                                    console.log("Kwai.Video.Show success = " + JSON.stringify(res));
                                    _this.param.cbi.Run(TJ.Define.Event.Expose);
                                },
                                fail: function (code, msg) {
                                    console.log("Kwai.Video.Show fail = " + code + " - " + msg);
                                    _this.param.cbi.Run(TJ.Define.Event.NoAds);
                                }
                            });
                        };
                        return Video;
                    }());
                })(Kwai = SDK.Kwai || (SDK.Kwai = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var MZ;
                (function (MZ) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.MZ_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.MZ_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.MZ.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.MZ.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Vibrate).DoInit();
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    MZ.Manager = Manager;
                    var Vibrate = /** @class */ (function (_super) {
                        __extends(Vibrate, _super);
                        function Vibrate() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Vibrate.prototype.Short = function () {
                            AppRt.Extern.MZ.VibrateShort(new AppRt.Extern.MZ.CallbackParam());
                        };
                        Vibrate.prototype.Long = function () {
                            AppRt.Extern.MZ.VibrateLong(new AppRt.Extern.MZ.CallbackParam());
                        };
                        Vibrate.prototype.Time = function (seconds) {
                            if (seconds < 0.1) {
                                this.Short();
                            }
                            else {
                                this.Long();
                            }
                        };
                        return Vibrate;
                    }(TJ.API.Vibrate.IVibrate));
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            if (DP.MZ.bannerId != null) {
                                this.banner = new Banner();
                                this.banner.Init(DP.MZ.bannerId);
                            }
                            if (DP.MZ.insertId != null) {
                                this.insert = new Insert();
                                this.insert.Init(DP.MZ.insertId);
                            }
                            if (DP.MZ.videoId != null) {
                                this.video = new Video();
                                this.video.Init(DP.MZ.videoId);
                            }
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (this.banner != null) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    if (this.insert != null && this.insert.Ready()) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Show(param);
                                    if (param.cbi != null) {
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    // param.cbi.Add(DevelopKit.EventType.曝光, () => { insertShowTime = DateTime.Now; });
                                    this.insert.Show(param);
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        Ads.prototype.RemoveAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Remove();
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Banner = /** @class */ (function () {
                        function Banner() {
                        }
                        Banner.prototype.Init = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                        };
                        Banner.prototype.Show = function (param) {
                            var _this = this;
                            var ws = TJ.Engine.RuntimeInfo.windowSize;
                            var style = new AppRt.Extern.MZ.BannerAdStyle();
                            style.width = ws.width;
                            // style.left = 0;
                            // style.top = 0;
                            style.height = style.width * .35;
                            style.left = (ws.width - style.width) / 2;
                            if ((param.place & 32) > 0) {
                                style.top = 0;
                            }
                            else {
                                style.top = ws.height - style.height;
                            }
                            this.bannerAd = AppRt.Extern.MZ.CreateBannerAd(this.posId, style);
                            this.bannerAd.OnLoad(function (res) {
                                console.log("MZ.Banner.OnLoad " + JSON.stringify(res));
                                _this.bannerAd.Show();
                            });
                            this.bannerAd.OnResize(function (res) {
                                console.log("MZ.Banner.OnResize " + JSON.stringify(res));
                                if (res.width > 0 && res.height > 0) {
                                    style.width = res.width;
                                    style.height = res.height;
                                    style.left = (ws.width - style.width) / 2;
                                    if ((param.place & 32) > 0) {
                                        style.top = 0;
                                    }
                                    else {
                                        style.top = ws.height - style.height;
                                    }
                                    if (_this.bannerAd.style.left != style.left) {
                                        _this.bannerAd.style.left = style.left;
                                    }
                                    if (_this.bannerAd.style.top != style.top) {
                                        _this.bannerAd.style.top = style.top;
                                    }
                                }
                            });
                            this.bannerAd.OnError(function (res) {
                                console.log("MZ.Banner.OnError " + JSON.stringify(res));
                            });
                        };
                        Banner.prototype.Remove = function () {
                            this.bannerAd.Destroy();
                        };
                        return Banner;
                    }());
                    var Insert = /** @class */ (function () {
                        function Insert() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Insert.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.insertAd = AppRt.Extern.MZ.CreateInsertAd(this.posId);
                            this.insertAd.OnLoad(function (res) {
                                console.log("MZ.Insert.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.insertAd.OnClose(function (res) {
                                console.log("MZ.Insert.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                _this.param.cbi.Run(TJ.Define.Event.Expose);
                            });
                            this.insertAd.OnError(function (res) {
                                console.log("MZ.Insert.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                            this.Load(1000);
                        };
                        Insert.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.insertAd.Load();
                            }, delay);
                        };
                        Insert.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Insert.prototype.Show = function (param) {
                            this.param = param;
                            this.insertAd.Show();
                        };
                        return Insert;
                    }());
                    var Video = /** @class */ (function () {
                        function Video() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.videoAd = AppRt.Extern.MZ.CreateRewardedVideoAd(this.posId);
                            this.videoAd.OnLoad(function (res) {
                                console.log("MZ.Video.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.videoAd.OnError(function (res) {
                                console.log("MZ.Video.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                            this.videoAd.OnClose(function (res) {
                                console.log("MZ.Video.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            });
                            this.videoAd.OnRewarded(function (res) {
                                console.log("MZ.Video.OnRewarded " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.Complete);
                            });
                            this.Load(1000);
                        };
                        Video.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.videoAd.Load();
                            }, delay);
                        };
                        Video.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Video.prototype.Show = function (param) {
                            this.param = param;
                            this.videoAd.Show();
                        };
                        return Video;
                    }());
                })(MZ = SDK.MZ || (SDK.MZ = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var OPPO;
                (function (OPPO) {
                    var QG;
                    (function (QG) {
                        TJ.Common.PriorityInit.Add(10, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                                return;
                            switch (DP.Basic.channel) {
                                case TJ.Define.Channel.AppRt.OPPO_AppRt:
                                    TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                    break;
                            }
                        });
                        TJ.Common.PriorityInit.Add(100, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                                return;
                            switch (DP.Basic.channel) {
                                case TJ.Define.Channel.AppRt.OPPO_AppRt:
                                    TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                    break;
                            }
                        });
                        var AppInfo = /** @class */ (function (_super) {
                            __extends(AppInfo, _super);
                            function AppInfo() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            AppInfo.prototype.Channel = function () {
                                if (AppRt.Extern.OPPO.QG.Exist()) {
                                    return DP.Basic.channel;
                                }
                                return null;
                            };
                            return AppInfo;
                        }(TJ.API.AppInfo.IAppInfo));
                        var Manager = /** @class */ (function (_super) {
                            __extends(Manager, _super);
                            function Manager() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Manager.prototype.OnInit = function () {
                                if (!AppRt.Extern.OPPO.QG.Exist())
                                    return;
                                TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                                TJ.Common.Component.Manager.AddComponent(Promo).DoInit();
                                TJ.Common.Component.Manager.AddComponent(Vibrate).DoInit();
                                {
                                    var param = new AppRt.Extern.OPPO.QG.InitAdServiceParam();
                                    param.appId = DP.OPPO.QG.appId;
                                    param.success = function (res) {
                                        if (res.code == 0) {
                                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                                        }
                                    };
                                    param.complete = function (res) {
                                        console.log("OPPO.QG.InitAdService " + JSON.stringify(res));
                                    };
                                    AppRt.Extern.OPPO.QG.InitAdService(param);
                                }
                                {
                                    var options = AppRt.Extern.OPPO.QG.GetLaunchOptionsSync();
                                    AppRt.Develop.TA.LaunchOptions(options);
                                    console.log("OPPO.QG.GetLaunchOptionsSync " + JSON.stringify(options));
                                }
                                GetNoAdTime();
                            };
                            return Manager;
                        }(TJ.Common.Component.Interface));
                        QG.Manager = Manager;
                        var Account = /** @class */ (function (_super) {
                            __extends(Account, _super);
                            function Account() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Account.prototype.Login = function (param) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var res, userId;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, AppRt.Develop.OPPO.Account.Login()];
                                            case 1:
                                                res = _a.sent();
                                                userId = res.data;
                                                return [2 /*return*/, userId];
                                        }
                                    });
                                });
                            };
                            Account.prototype.SetUserInfo = function (param) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var userInfo;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, AppRt.Develop.OPPO.Account.GetUserInfo()];
                                            case 1:
                                                userInfo = _a.sent();
                                                return [2 /*return*/, userInfo];
                                        }
                                    });
                                });
                            };
                            return Account;
                        }(TJ.API.Account.IAccount));
                        var Vibrate = /** @class */ (function (_super) {
                            __extends(Vibrate, _super);
                            function Vibrate() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Vibrate.prototype.Short = function () {
                                AppRt.Extern.OPPO.QG.VibrateShort(new AppRt.Extern.OPPO.QG.CallbackParam());
                            };
                            Vibrate.prototype.Long = function () {
                                AppRt.Extern.OPPO.QG.VibrateLong(new AppRt.Extern.OPPO.QG.CallbackParam());
                            };
                            Vibrate.prototype.Time = function (seconds) {
                                if (seconds < 0.1) {
                                    this.Short();
                                }
                                else {
                                    this.Long();
                                }
                            };
                            return Vibrate;
                        }(TJ.API.Vibrate.IVibrate));
                        var Promo = /** @class */ (function (_super) {
                            __extends(Promo, _super);
                            function Promo() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Promo.prototype.Pop = function (param) {
                                var p = new AppRt.Extern.OPPO.QG.NavigateToMiniGameParam();
                                p.pkgName = param.appPackage;
                                p.extraData = param.extraData;
                                p.success = function (res) {
                                    param.cbi.Run(TJ.Define.Event.Success);
                                };
                                p.complete = function (res) {
                                    console.log("OPPO.QG.NavigateToMiniGame complete", JSON.stringify(res));
                                };
                                AppRt.Extern.OPPO.QG.NavigateToMiniGame(p);
                            };
                            return Promo;
                        }(TJ.API.Promo.IPromo));
                        function GetNoAdTime() {
                            return __awaiter(this, void 0, void 0, function () {
                                var obj;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, TJ.Develop.Yun.Config.GameCfg()];
                                        case 1:
                                            obj = _a.sent();
                                            if (typeof obj.NoAdTime == 'number') {
                                                noAdTime = obj.NoAdTime;
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                        var noAdTime = 60;
                        function OnNoAd() {
                            if (TJ.Common.Date_.nowSeconds - TJ.Common.SystemInfo.startupTime > noAdTime) {
                                return false;
                            }
                            return true;
                        }
                        var Ads = /** @class */ (function (_super) {
                            __extends(Ads, _super);
                            function Ads() {
                                var _this = _super !== null && _super.apply(this, arguments) || this;
                                _this.insertType = 0;
                                return _this;
                            }
                            Ads.prototype.OnInit = function () {
                                if (DP.OPPO.QG.bannerId != null) {
                                    this.banner = new Banner();
                                    this.banner.Init(DP.OPPO.QG.bannerId);
                                }
                                if (DP.OPPO.QG.insertId != null) {
                                    this.insert = new Insert();
                                    this.insert.Init(DP.OPPO.QG.insertId);
                                }
                                if (DP.OPPO.QG.videoId != null) {
                                    this.video = new Video();
                                    this.video.Init(DP.OPPO.QG.videoId);
                                }
                                if (DP.OPPO.QG.nativeCustomInsert != null) {
                                    this.customInsert = new CustomInsert();
                                    this.customInsert.Init(DP.OPPO.QG.nativeCustomInsert);
                                }
                                if (DP.OPPO.QG.nativeId != null) {
                                    window.setTimeout(function () {
                                        TJ.Common.Component.Manager.AddComponent(NativeAd).DoInit();
                                    }, 1000);
                                }
                            };
                            Object.defineProperty(Ads, "insertRecordCount", {
                                get: function () {
                                    return GetRecord(this.insertRecordKey).count;
                                },
                                set: function (value) {
                                    var record = GetRecord(this.insertRecordKey);
                                    record.count = value;
                                    SetRecord(this.insertRecordKey, record);
                                },
                                enumerable: true,
                                configurable: true
                            });
                            Ads.prototype.ADReady = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.banner:
                                        if (this.banner != null) {
                                            if (OnNoAd()) {
                                                return false;
                                            }
                                            return true;
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.normal:
                                        if (Ads.lastInsertShowTime > Date.now() - 60 * 1000) {
                                            return false;
                                        }
                                        if (Ads.insertRecordCount >= 8) {
                                            return false;
                                        }
                                        if (this.customInsert != null && this.customInsert.Ready(param)) {
                                            this.insertType = 2;
                                            return true;
                                        }
                                        if (this.insert != null && this.insert.Ready()) {
                                            this.insertType = 1;
                                            return true;
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.reward:
                                        if (this.video != null && this.video.Ready()) {
                                            return true;
                                        }
                                        break;
                                }
                                return false;
                            };
                            Ads.prototype.ShowAD = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.banner:
                                        this.banner.Show(param);
                                        if (param.cbi != null) {
                                            param.cbi.Run(TJ.Define.Event.Expose);
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.normal:
                                        this.banner.Remove(new TJ.API.AdService.Param());
                                        switch (this.insertType) {
                                            case 1:
                                                this.insert.Show(param);
                                                break;
                                            case 2:
                                                this.customInsert.Show(param);
                                                break;
                                        }
                                        Ads.insertRecordCount++;
                                        Ads.lastInsertShowTime = Date.now();
                                        break;
                                    case AppRt.API.AdPoly.Grade.reward:
                                        param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                        this.video.Show(param);
                                        break;
                                }
                            };
                            Ads.prototype.RemoveAD = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.banner:
                                        this.banner.Remove(param);
                                        break;
                                }
                            };
                            Ads.lastInsertShowTime = 0;
                            Ads.insertRecordKey = "OPPO.QG.Insert.Record";
                            return Ads;
                        }(AppRt.API.AdPoly.IAdPoly));
                        var Banner = /** @class */ (function () {
                            function Banner() {
                            }
                            Object.defineProperty(Banner, "recordCount", {
                                get: function () {
                                    return GetRecord(this.recordKey).count;
                                },
                                set: function (value) {
                                    var record = GetRecord(this.recordKey);
                                    record.count = value;
                                    SetRecord(this.recordKey, record);
                                },
                                enumerable: true,
                                configurable: true
                            });
                            Banner.prototype.Init = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                            };
                            Banner.prototype.Show = function (param) {
                                if (param.refresh && Banner.showing)
                                    return;
                                console.log("Banner.recordCount = " + Banner.recordCount);
                                if (Banner.recordCount >= 5)
                                    return;
                                this.Remove(param);
                                this.bannerAd = AppRt.Extern.OPPO.QG.CreateBannerAd(this.posId);
                                // this.bannerAd.OnShow((res) =>
                                // {
                                //     console.log("QG.Banner.OnShow", JSON.stringify(res));
                                //     this.showing = true;
                                //     // if (!this.show) this.bannerAd.Hide();
                                // });
                                // this.bannerAd.OnHide((res) =>
                                // {
                                //     console.log("QG.Banner.OnHide", JSON.stringify(res));
                                //     this.showing = false;
                                //     // if (this.show) this.bannerAd.Show();
                                //     Banner.recordCount++;
                                // });
                                // this.bannerAd.OnError((res) =>
                                // {
                                //     console.log("QG.Banner.OnError", JSON.stringify(res));
                                // });
                                this.bannerAd.OnShow(this.OnShow);
                                this.bannerAd.OnHide(this.OnHide);
                                this.bannerAd.OnError(this.OnError);
                                this.bannerAd.Show();
                            };
                            Banner.prototype.Remove = function (param) {
                                if (!param.refresh) {
                                    if (this.bannerAd != null) {
                                        this.bannerAd.OffShow(this.OnShow);
                                        this.bannerAd.OffHide(this.OnHide);
                                        this.bannerAd.OffError(this.OnError);
                                        this.bannerAd.Destroy();
                                        this.bannerAd = null;
                                        Banner.showing = false;
                                    }
                                }
                                // if (!param.refresh) this.bannerAd.Hide();
                            };
                            Banner.prototype.OnShow = function (res) {
                                console.log("OPPO.QG.Banner.OnShow " + JSON.stringify(res));
                                Banner.showing = true;
                            };
                            Banner.prototype.OnHide = function (res) {
                                console.log("OPPO.QG.Banner.OnHide " + JSON.stringify(res));
                                Banner.showing = false;
                                Banner.recordCount++;
                            };
                            Banner.prototype.OnError = function (res) {
                                console.log("OPPO.QG.Banner.OnError " + JSON.stringify(res));
                            };
                            Banner.recordKey = "OPPO.QG.Banner.Record";
                            Banner.showing = false;
                            return Banner;
                        }());
                        var Insert = /** @class */ (function () {
                            function Insert() {
                                this.loaded = false;
                                this.loadHandle = 0;
                            }
                            Insert.prototype.Init = function () {
                                var _this = this;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.insertAd = AppRt.Extern.OPPO.QG.CreateInsertAd(this.posId);
                                this.insertAd.OnLoad(function (res) {
                                    console.log("OPPO.QG.Insert.OnLoad " + JSON.stringify(res));
                                    _this.loaded = true;
                                });
                                this.insertAd.OnShow(function (res) {
                                    console.log("OPPO.QG.Insert.OnShow " + JSON.stringify(res));
                                    _this.loaded = false;
                                    _this.Load(10000);
                                    _this.param.cbi.Run(TJ.Define.Event.Expose);
                                });
                                this.insertAd.OnError(function (res) {
                                    console.log("OPPO.QG.Insert.OnError " + JSON.stringify(res));
                                    _this.Load(5000);
                                });
                                this.Load(1000);
                            };
                            Insert.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    _this.insertAd.Load();
                                }, delay);
                            };
                            Insert.prototype.Ready = function () {
                                return this.loaded;
                            };
                            Insert.prototype.Show = function (param) {
                                this.param = param;
                                this.insertAd.Show();
                            };
                            return Insert;
                        }());
                        var Video = /** @class */ (function () {
                            function Video() {
                                this.loaded = false;
                                this.loadHandle = 0;
                            }
                            Video.prototype.Init = function () {
                                var _this = this;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.videoAd = AppRt.Extern.OPPO.QG.CreateRewardedVideoAd(this.posId);
                                this.videoAd.OnLoad(function (res) {
                                    console.log("OPPO.QG.Video.OnLoad " + JSON.stringify(res));
                                    _this.loaded = true;
                                });
                                this.videoAd.OnVideoStart(function (res) {
                                    console.log("OPPO.QG.Video.OnVideoStart " + JSON.stringify(res));
                                    _this.loaded = false;
                                    _this.param.cbi.Run(TJ.Define.Event.Expose);
                                });
                                this.videoAd.OnError(function (res) {
                                    console.log("OPPO.QG.Video.OnError " + JSON.stringify(res));
                                    _this.Load(5000);
                                });
                                this.videoAd.OnRewarded(function (res) {
                                    console.log("OPPO.QG.Video.OnRewarded " + JSON.stringify(res));
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                });
                                this.videoAd.OnClose(function (res) {
                                    console.log("OPPO.QG.Video.OnClose " + JSON.stringify(res));
                                    _this.Load(1000);
                                    _this.param.cbi.Run(TJ.Define.Event.Close);
                                });
                                this.Load(1000);
                            };
                            Video.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    _this.videoAd.Load();
                                }, delay);
                            };
                            Video.prototype.Ready = function () {
                                return this.loaded;
                            };
                            Video.prototype.Show = function (param) {
                                this.param = param;
                                this.videoAd.Show();
                            };
                            return Video;
                        }());
                        var CustomInsert = /** @class */ (function () {
                            function CustomInsert() {
                            }
                            CustomInsert.prototype.Init = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.nad = new NativeAdHelper(this.posId);
                            };
                            CustomInsert.prototype.Ready = function (param) {
                                return this.nad.Peek() != null && param.onNative != null;
                            };
                            CustomInsert.prototype.Show = function (param) {
                                var data = this.nad.Pop();
                                param.onNative(data);
                            };
                            return CustomInsert;
                        }());
                        var NativeAd = /** @class */ (function (_super) {
                            __extends(NativeAd, _super);
                            function NativeAd() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            NativeAd.prototype.OnInit = function () {
                                this.nad = new NativeAdHelper(DP.OPPO.QG.nativeId);
                            };
                            NativeAd.prototype.LoadNative = function (param) {
                                if (OnNoAd()) {
                                    return null;
                                }
                                return this.nad.Pop();
                            };
                            return NativeAd;
                        }(TJ.API.AdService.IAdService));
                        var NativeAdHelper = /** @class */ (function () {
                            function NativeAdHelper(posId) {
                                var _this = this;
                                this.list = [];
                                this.loadHandle = 0;
                                this.nativeAd = AppRt.Extern.OPPO.QG.CreateNativeAd(posId);
                                this.nativeAd.OnLoad(function (res) {
                                    var _loop_1 = function (data) {
                                        var item = new TJ.API.AdService.NativeItem();
                                        var adId = data.adId;
                                        item.OnShow = function () {
                                            _this.nativeAd.ReportAdShow(adId);
                                        };
                                        item.OnClick = function () {
                                            _this.nativeAd.ReportAdClick(adId);
                                        };
                                        item.title = data.title;
                                        item.desc = data.desc;
                                        item.logoUrl = data.logoUrl;
                                        if (data.iconUrlList != null && data.iconUrlList.length > 0) {
                                            item.iconUrl = data.iconUrlList[0];
                                        }
                                        if (data.imgUrlList != null && data.imgUrlList.length > 0) {
                                            item.imgUrl = data.imgUrlList[0];
                                        }
                                        _this.list.push(item);
                                    };
                                    for (var _i = 0, _a = res.adList; _i < _a.length; _i++) {
                                        var data = _a[_i];
                                        _loop_1(data);
                                    }
                                    _this.Load(5000);
                                });
                                this.nativeAd.OnError(function (res) {
                                    console.log("OPPO.QG.NativeAd.OnError " + JSON.stringify(res));
                                    _this.Load(5000);
                                });
                                this.Load(0);
                            }
                            NativeAdHelper.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    if (_this.list.length < 1) {
                                        _this.nativeAd.Load();
                                    }
                                }, delay);
                            };
                            NativeAdHelper.prototype.Peek = function () {
                                if (this.list.length > 0) {
                                    return this.list[0];
                                }
                                return null;
                            };
                            NativeAdHelper.prototype.Pop = function () {
                                var item = this.Peek();
                                if (item != null) {
                                    this.list.splice(0, 1);
                                    this.Load(5000);
                                }
                                return item;
                            };
                            return NativeAdHelper;
                        }());
                        function GetRecord(key) {
                            var value = TJ.Common.Prefs.System.Get(key);
                            var date = new Date();
                            var y = date.getFullYear();
                            var m = date.getMonth() + 1;
                            var d = date.getDate();
                            var today = y * 10000 + m * 100 + d;
                            if (value == null || value.date < today) {
                                value = { count: 0, date: today };
                            }
                            return value;
                        }
                        function SetRecord(key, value) {
                            TJ.Common.Prefs.System.Set(key, value);
                        }
                    })(QG = OPPO.QG || (OPPO.QG = {}));
                })(OPPO = SDK.OPPO || (SDK.OPPO = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var QQ;
                (function (QQ) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.SQ_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.SQ_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.QQ.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.QQ.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Vibrate).DoInit();
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    QQ.Manager = Manager;
                    var Account = /** @class */ (function (_super) {
                        __extends(Account, _super);
                        function Account() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Account.prototype.Login = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userId;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.QQ.Account.YLogin()];
                                        case 1:
                                            userId = _a.sent();
                                            return [2 /*return*/, userId];
                                    }
                                });
                            });
                        };
                        Account.prototype.SetUserInfo = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.QQ.Account.GetUserInfo()];
                                        case 1:
                                            userInfo = _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        };
                        return Account;
                    }(TJ.API.Account.IAccount));
                    var Vibrate = /** @class */ (function (_super) {
                        __extends(Vibrate, _super);
                        function Vibrate() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Vibrate.prototype.Short = function () {
                            AppRt.Extern.TT.VibrateShort(new AppRt.Extern.TT.CallbackParam());
                        };
                        Vibrate.prototype.Long = function () {
                            AppRt.Extern.TT.VibrateLong(new AppRt.Extern.TT.CallbackParam());
                        };
                        Vibrate.prototype.Time = function (seconds) {
                            if (seconds < 0.015) {
                                this.Short();
                            }
                            else {
                                this.Long();
                            }
                        };
                        return Vibrate;
                    }(TJ.API.Vibrate.IVibrate));
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            if (DP.QQ.bannerId != null) {
                                this.banner = new Banner();
                                this.banner.Init(DP.QQ.bannerId);
                            }
                            if (DP.QQ.insertId != null) {
                                this.insert = new Insert();
                                this.insert.Init(DP.QQ.insertId);
                            }
                            if (DP.QQ.videoId != null) {
                                this.video = new Video();
                                this.video.Init(DP.QQ.videoId);
                            }
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (this.banner != null) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    if (this.insert != null && this.insert.Ready()) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Show(param);
                                    if (param.cbi != null) {
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    this.insert.Show(param);
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        Ads.prototype.RemoveAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Remove();
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Banner = /** @class */ (function () {
                        function Banner() {
                        }
                        Banner.prototype.Init = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                        };
                        Banner.prototype.Show = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var ws, style;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    ws = TJ.Engine.RuntimeInfo.windowSize;
                                    style = new AppRt.Extern.QQ.BannerAdStyle();
                                    style.width = ws.width;
                                    // style.left = 0;
                                    // style.top = 0;
                                    style.height = style.width * .25;
                                    style.left = (ws.width - style.width) / 2;
                                    if ((param.place & 32) > 0) {
                                        style.top = 0;
                                    }
                                    else {
                                        style.top = ws.height - style.height;
                                    }
                                    this.bannerAd = AppRt.Extern.QQ.CreateBannerAd(this.posId, style);
                                    this.bannerAd.OnLoad(function (res) {
                                        console.log("QQ.Banner.OnLoad " + JSON.stringify(res));
                                        _this.bannerAd.Show();
                                    });
                                    this.bannerAd.OnResize(function (res) {
                                        console.log("QQ.Banner.OnResize " + JSON.stringify(res));
                                        if (res.width > 0 && res.height > 0) {
                                            style.width = res.width;
                                            style.height = res.height;
                                            style.left = (ws.width - style.width) / 2;
                                            if ((param.place & 32) > 0) {
                                                style.top = 0;
                                            }
                                            else {
                                                style.top = ws.height - style.height;
                                            }
                                            if (_this.bannerAd.style.left != style.left) {
                                                _this.bannerAd.style.left = style.left;
                                            }
                                            if (_this.bannerAd.style.top != style.top) {
                                                _this.bannerAd.style.top = style.top;
                                            }
                                        }
                                    });
                                    this.bannerAd.OnError(function (res) {
                                        console.log("QQ.Banner.OnError " + JSON.stringify(res));
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        };
                        Banner.prototype.Remove = function () {
                            this.bannerAd.Destroy();
                        };
                        return Banner;
                    }());
                    var Insert = /** @class */ (function () {
                        function Insert() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Insert.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.insertAd = AppRt.Extern.QQ.CreateInterstitialAd(this.posId);
                            if (this.insertAd == null)
                                return;
                            this.insertAd.OnLoad(function (res) {
                                console.log("QQ.Insert.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.insertAd.OnClose(function (res) {
                                console.log("QQ.Insert.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                _this.param.cbi.Run(TJ.Define.Event.Expose);
                            });
                            this.insertAd.OnError(function (res) {
                                console.log("QQ.Insert.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                            this.Load(1000);
                        };
                        Insert.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.insertAd.Load();
                            }, delay);
                        };
                        Insert.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Insert.prototype.Show = function (param) {
                            this.param = param;
                            this.insertAd.Show();
                        };
                        return Insert;
                    }());
                    var Video = /** @class */ (function () {
                        function Video() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.videoAd = AppRt.Extern.QQ.CreateRewardedVideoAd(this.posId);
                            this.videoAd.OnLoad(function (res) {
                                console.log("QQ.Video.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.videoAd.OnClose(function (res) {
                                console.log("QQ.Video.OnClose " + JSON.stringify(res));
                                _this.Load(1000);
                                if (res.isEnded) {
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                }
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            });
                            this.videoAd.OnError(function (res) {
                                console.log("QQ.Video.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                        };
                        Video.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.videoAd.Load();
                            }, delay);
                        };
                        Video.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Video.prototype.Show = function (param) {
                            this.param = param;
                            this.videoAd.Show();
                        };
                        return Video;
                    }());
                    // class AppBox
                    // {
                    //     posId: string;
                    //     public Init(...args: any[])
                    //     {
                    //         this.posId = args[0];
                    //         this.appBox = Extern.QQ.CreateAppBox(this.posId);
                    //         this.appBox.OnClose((res) =>
                    //         {
                    //             console.log("QQ.AppBox.OnClose " + JSON.stringify(res));
                    //             this.appBox.Load();
                    //         });
                    //         this.appBox.Load();
                    //     }
                    //     appBox: Extern.QQ.AppBox;
                    //     public Ready()
                    //     {
                    //         return true;
                    //     }
                    //     param: TJ.API.AdService.Param;
                    //     public Show(param: TJ.API.AdService.Param)
                    //     {
                    //         this.param = param;
                    //         this.appBox.Show();
                    //     }
                    // }
                })(QQ = SDK.QQ || (SDK.QQ = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var QTTGame;
                (function (QTTGame) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.QTT_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.QTT_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.QTTGame.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.QTTGame.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    QTTGame.Manager = Manager;
                    var Account = /** @class */ (function (_super) {
                        __extends(Account, _super);
                        function Account() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Account.prototype.Login = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var res, userId;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.QTT.Account.YLogin()];
                                        case 1:
                                            res = _a.sent();
                                            userId = res.data;
                                            return [2 /*return*/, userId];
                                    }
                                });
                            });
                        };
                        Account.prototype.SetUserInfo = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.QTT.Account.GetUserInfo()];
                                        case 1:
                                            userInfo = _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        };
                        return Account;
                    }(TJ.API.Account.IAccount));
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            this.banner = new Banner();
                            this.insert = new Insert();
                            this.video = new Video();
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (this.banner != null) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    if (this.insert != null && this.insert.Ready()) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Show(param);
                                    if (param.cbi != null) {
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    // param.cbi.Add(DevelopKit.EventType.曝光, () => { insertShowTime = DateTime.Now; });
                                    this.insert.Show(param);
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        Ads.prototype.RemoveAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Remove();
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Banner = /** @class */ (function () {
                        function Banner() {
                        }
                        Banner.prototype.Show = function (param) {
                            AppRt.Extern.QTTGame.ShowBanner();
                        };
                        Banner.prototype.Remove = function () {
                            AppRt.Extern.QTTGame.HideBanner();
                        };
                        return Banner;
                    }());
                    var Insert = /** @class */ (function () {
                        function Insert() {
                        }
                        Insert.prototype.Ready = function () {
                            return true;
                        };
                        Insert.prototype.Show = function (param) {
                            AppRt.Extern.QTTGame.ShowHDAD();
                        };
                        return Insert;
                    }());
                    var Video = /** @class */ (function () {
                        function Video() {
                        }
                        Video.prototype.Ready = function () {
                            return true;
                        };
                        Video.prototype.Show = function (param) {
                            AppRt.Extern.QTTGame.ShowVideo(function (code) {
                                console.log("code = " + code);
                            });
                        };
                        return Video;
                    }());
                })(QTTGame = SDK.QTTGame || (SDK.QTTGame = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var ReYun;
                (function (ReYun) {
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                    });
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Object.defineProperty(Manager, "reyunData", {
                            get: function () {
                                var data = new TJ.Develop.ReYun.Data();
                                data.appid = DP.ReYun.appId;
                                data.channelid = DP.Basic.channel;
                                data.who = TJ.Common.SystemInfo.clientGuid;
                                data.log = true;
                                return data;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Manager.prototype.OnInit = function () {
                            if (DP.ReYun.appId != null) {
                                TJ.Develop.ReYun.Install(Manager.reyunData);
                                TJ.Develop.ReYun.Startup(Manager.reyunData);
                                setInterval(function () { return TJ.Develop.ReYun.Heartbeat(Manager.reyunData); }, 1000 * 60 * 5);
                                TJ.Develop.ReYun.Event(Manager.reyunData, "TJ.Init");
                                var time_1 = 0;
                                var timeEvent_1 = [5, 10, 30, 60, 120];
                                for (var i = 1; i <= 12; i++) {
                                    timeEvent_1.push(60 * 5 * i);
                                }
                                setInterval(function () {
                                    time_1 += 1;
                                    if (timeEvent_1.length > 0) {
                                        if (time_1 >= timeEvent_1[0]) {
                                            TJ.Develop.ReYun.Event(Manager.reyunData, "TimeEvent-" + timeEvent_1.shift());
                                        }
                                    }
                                }, 1000);
                                TJ.Common.Component.Manager.AddComponent(Gsa).DoInit();
                            }
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    ReYun.Manager = Manager;
                    var Gsa = /** @class */ (function (_super) {
                        __extends(Gsa, _super);
                        function Gsa() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Gsa.prototype.OnInit = function () {
                        };
                        Gsa.prototype.Event = function (param) {
                            TJ.Develop.ReYun.Event(Manager.reyunData, param.id);
                        };
                        return Gsa;
                    }(TJ.API.Analytics.IAnalytics));
                })(ReYun = SDK.ReYun || (SDK.ReYun = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var TA;
                (function (TA) {
                    TJ.Common.PriorityInit.Add(100, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.AppRt:
                                TJ.Common.Component.Manager.AddComponent(OTA).DoInit();
                                break;
                        }
                    });
                    var OTA = /** @class */ (function (_super) {
                        __extends(OTA, _super);
                        function OTA() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OTA.prototype.OnInit = function () {
                            AppRt.Develop.TA.FirstStartup();
                            setInterval(function () {
                                AppRt.Develop.TA.Startup();
                            }, 1000 * 30);
                        };
                        OTA.prototype.Event = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event(param.id);
                        };
                        OTA.prototype.PromoEvent = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.PromoEvent(param.id, param.type, param.style, param.icon);
                        };
                        OTA.prototype.PromoEvents = function (params) {
                            var list = [];
                            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                                var p = params_1[_i];
                                list.push({ promo: p.id, type: p.type, style: p.style, icon: p.icon });
                            }
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.PromoEvents(list);
                        };
                        OTA.prototype.Event_LifeCycle_Load = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_LifeCycle_Load(param.id);
                        };
                        OTA.prototype.Event_LifeCycle_Start = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_LifeCycle_Start(param.id);
                        };
                        OTA.prototype.Event_LifeCycle_Destroy = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_LifeCycle_Destroy(param.id);
                        };
                        OTA.prototype.Event_LifeCycle_Enable = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_LifeCycle_Enable(param.id);
                        };
                        OTA.prototype.Event_LifeCycle_Disable = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_LifeCycle_Disable(param.id);
                        };
                        OTA.prototype.Event_Page_Enter = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Page_Enter(param.id, param.source);
                        };
                        OTA.prototype.Event_Page_Show = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Page_Show(param.id, param.source);
                        };
                        OTA.prototype.Event_Page_Leave = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Page_Leave(param.id, param.source);
                        };
                        OTA.prototype.Event_Button_Show = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Button_Show(param.id, param.source);
                        };
                        OTA.prototype.Event_Button_Click = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Button_Click(param.id, param.source);
                        };
                        OTA.prototype.Event_Level_Start = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Level_Start(param.id);
                        };
                        OTA.prototype.Event_Level_Finish = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Level_Finish(param.id);
                        };
                        OTA.prototype.Event_Level_Fail = function (param) {
                            AppRt.Develop.TA.Raw.log = TJ.API.TA.log;
                            AppRt.Develop.TA.Event_Level_Fail(param.id);
                        };
                        return OTA;
                    }(TJ.API.TA.ITA));
                    TA.OTA = OTA;
                })(TA = SDK.TA || (SDK.TA = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var TT;
                (function (TT) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.ZJTD_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.ZJTD_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.TT.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.TT.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Gsa).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Promo).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Vibrate).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            {
                                var options = AppRt.Extern.TT.GetLaunchOptionsSync();
                                AppRt.Develop.TA.LaunchOptions(options);
                                console.log("TT.GetLaunchOptionsSync " + JSON.stringify(options));
                            }
                            AppRt.Extern.TT.OnShareAppMessage(function (res) {
                                var param = new AppRt.Extern.TT.ShareAppMessageParam();
                                switch (res.channel) {
                                    case "video":
                                        var videoguid_1 = TJ.Common.Guid.New();
                                        param.extra.withVideoId = true;
                                        param.query = "GameRecorderVideo=2&videoguid=" + videoguid_1;
                                        param.success = function (res) {
                                            console.log("TT.OnShareAppMessage success " + JSON.stringify(res));
                                            if (res.videoId != null) {
                                                TJ.Develop.Yun.DouYin.ReportVideoIdInfo({ videoId: res.videoId, videoguid: videoguid_1 });
                                            }
                                        };
                                        param.fail = function (res) {
                                            console.log("TT.OnShareAppMessage fail " + JSON.stringify(res));
                                        };
                                        param.complete = function (res) {
                                            console.log("TT.OnShareAppMessage complete " + JSON.stringify(res));
                                        };
                                        break;
                                }
                                return param;
                            });
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    TT.Manager = Manager;
                    var Account = /** @class */ (function (_super) {
                        __extends(Account, _super);
                        function Account() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Account.prototype.Login = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userId;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.TT.Account.YLogin(param != null ? param.force : false)];
                                        case 1:
                                            userId = _a.sent();
                                            return [2 /*return*/, userId];
                                    }
                                });
                            });
                        };
                        Account.prototype.GetUserInfo = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.TT.Account.GetUserInfo()];
                                        case 1:
                                            userInfo = _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        };
                        return Account;
                    }(TJ.API.Account.IAccount));
                    var Promo = /** @class */ (function (_super) {
                        __extends(Promo, _super);
                        function Promo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Promo.prototype.Pop = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var p, _i, _a, item, _b, _c, item;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            p = new AppRt.Extern.TT.ShowMoreGamesModalParam();
                                            p.complete = function (res) {
                                                console.log("TT.ShowMoreGamesModal complete", JSON.stringify(res));
                                            };
                                            if (!(this.apps == null)) return [3 /*break*/, 4];
                                            this.apps = [];
                                            _i = 0;
                                            return [4 /*yield*/, TJ.Develop.Yun.Promo.Data.LoadList()];
                                        case 1:
                                            _a = _d.sent();
                                            _d.label = 2;
                                        case 2:
                                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                                            item = _a[_i];
                                            this.apps.push(item.appId);
                                            _d.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 2];
                                        case 4:
                                            for (_b = 0, _c = this.apps; _b < _c.length; _b++) {
                                                item = _c[_b];
                                                p.appLaunchOptions.push({ appId: item, extraData: param.extraData });
                                            }
                                            AppRt.Extern.TT.SetMoreGamesInfo(p);
                                            AppRt.Extern.TT.ShowMoreGamesModal(p);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        };
                        return Promo;
                    }(TJ.API.Promo.IPromo));
                    var Vibrate = /** @class */ (function (_super) {
                        __extends(Vibrate, _super);
                        function Vibrate() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Vibrate.prototype.Short = function () {
                            AppRt.Extern.TT.VibrateShort(new AppRt.Extern.TT.CallbackParam());
                        };
                        Vibrate.prototype.Long = function () {
                            AppRt.Extern.TT.VibrateLong(new AppRt.Extern.TT.CallbackParam());
                        };
                        Vibrate.prototype.Time = function (seconds) {
                            if (seconds < 0.1) {
                                this.Short();
                            }
                            else {
                                this.Long();
                            }
                        };
                        return Vibrate;
                    }(TJ.API.Vibrate.IVibrate));
                    var Gsa = /** @class */ (function (_super) {
                        __extends(Gsa, _super);
                        function Gsa() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Gsa.prototype.OnInit = function () {
                        };
                        Gsa.prototype.Event = function (param) {
                            AppRt.Extern.TT.ReportAnalytics(param.id, param.dic);
                        };
                        return Gsa;
                    }(TJ.API.Analytics.IAnalytics));
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            if (DP.TT.bannerId != null) {
                                this.banner = new Banner();
                                this.banner.Init(DP.TT.bannerId);
                            }
                            if (DP.TT.insertId != null) {
                                this.insert = new Insert();
                                this.insert.Init(DP.TT.insertId);
                            }
                            if (DP.TT.videoId != null) {
                                this.video = new Video();
                                this.video.Init(DP.TT.videoId);
                            }
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (this.banner != null) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    if (this.insert != null && this.insert.Ready()) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Show(param);
                                    if (param.cbi != null) {
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    this.insert.Show(param);
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        Ads.prototype.RemoveAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Remove();
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Banner = /** @class */ (function () {
                        function Banner() {
                        }
                        Banner.prototype.Init = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                        };
                        Banner.prototype.Show = function (param) {
                            var _this = this;
                            var ws = TJ.Engine.RuntimeInfo.windowSize;
                            var style = new AppRt.Extern.TT.BannerAdStyle();
                            style.width = ws.width;
                            // style.left = 0;
                            // style.top = 0;
                            style.height = style.width * .25;
                            style.left = (ws.width - style.width) / 2;
                            if ((param.place & 32) > 0) {
                                style.top = 0;
                            }
                            else {
                                style.top = ws.height - style.height;
                            }
                            this.bannerAd = AppRt.Extern.TT.CreateBannerAd(this.posId, style);
                            this.bannerAd.OnLoad(function (res) {
                                console.log("TT.Banner.OnLoad " + JSON.stringify(res));
                                _this.bannerAd.Show();
                            });
                            this.bannerAd.OnResize(function (res) {
                                console.log("TT.Banner.OnResize " + JSON.stringify(res));
                                if (res.width > 0 && res.height > 0) {
                                    style.width = res.width;
                                    style.height = res.height;
                                    style.left = (ws.width - style.width) / 2;
                                    if ((param.place & 32) > 0) {
                                        style.top = 0;
                                    }
                                    else {
                                        style.top = ws.height - style.height;
                                    }
                                    if (_this.bannerAd.style.left != style.left) {
                                        _this.bannerAd.style.left = style.left;
                                    }
                                    if (_this.bannerAd.style.top != style.top) {
                                        _this.bannerAd.style.top = style.top;
                                    }
                                }
                            });
                            this.bannerAd.OnError(function (res) {
                                console.log("TT.Banner.OnError " + JSON.stringify(res));
                            });
                        };
                        Banner.prototype.Remove = function () {
                            this.bannerAd.Destroy();
                        };
                        return Banner;
                    }());
                    var Insert = /** @class */ (function () {
                        function Insert() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Insert.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.insertAd = AppRt.Extern.TT.CreateInterstitialAd(this.posId);
                            if (this.insertAd == null)
                                return;
                            this.insertAd.OnLoad(function (res) {
                                console.log("TT.Insert.OnLoad " + JSON.stringify(res));
                                window.setTimeout(function () { _this.loaded = true; }, 1000 * 30);
                            });
                            this.insertAd.OnClose(function (res) {
                                console.log("TT.Insert.OnClose " + JSON.stringify(res));
                                _this.param.cbi.Run(TJ.Define.Event.Expose);
                                _this.loaded = false;
                                _this.insertAd.Destroy();
                                window.setTimeout(function () { _this.Init(_this.posId); }, 1000);
                            });
                            this.insertAd.OnError(function (res) {
                                console.log("TT.Insert.OnError " + JSON.stringify(res));
                                _this.Load(1000 * 10);
                            });
                        };
                        Insert.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.insertAd.Load();
                            }, delay);
                        };
                        Insert.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Insert.prototype.Show = function (param) {
                            this.param = param;
                            this.insertAd.Show();
                        };
                        return Insert;
                    }());
                    var Video = /** @class */ (function () {
                        function Video() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.videoAd = AppRt.Extern.TT.CreateRewardedVideoAd(this.posId);
                            if (this.videoAd == null)
                                return;
                            this.videoAd.OnLoad(function (res) {
                                console.log("TT.Video.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.videoAd.OnClose(function (res) {
                                console.log("TT.Video.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                if (res.isEnded) {
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                }
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            });
                            this.videoAd.OnError(function (res) {
                                console.log("TT.Video.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                        };
                        Video.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.videoAd.Load();
                            }, delay);
                        };
                        Video.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Video.prototype.Show = function (param) {
                            this.param = param;
                            this.videoAd.Show();
                        };
                        return Video;
                    }());
                })(TT = SDK.TT || (SDK.TT = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var UC;
                (function (UC) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.UC_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.UC_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.UC.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.UC.Exist())
                                return;
                            window.setTimeout(function () {
                                TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            }, 1000);
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    UC.Manager = Manager;
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            this.banner = new Banner();
                            this.banner.Init();
                            this.video = new Video();
                            this.video.Init();
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (this.banner != null) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Show(param);
                                    if (param.cbi != null) {
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        Ads.prototype.RemoveAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Remove();
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Banner = /** @class */ (function () {
                        function Banner() {
                        }
                        Banner.prototype.Init = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                        };
                        Banner.prototype.Show = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var ws, style;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    this.param = param;
                                    ws = TJ.Engine.RuntimeInfo.windowSize;
                                    style = new AppRt.Extern.UC.BannerAdStyle();
                                    style.width = ws.width;
                                    style.left = 0;
                                    style.right = 0;
                                    style.top = 0;
                                    style.bottom = 0;
                                    if (this.param != null && (this.param.place & 32) > 0) {
                                        style.gravity = 1;
                                    }
                                    else {
                                        style.gravity = 7;
                                    }
                                    this.bannerAd = AppRt.Extern.UC.CreateBannerAd(style);
                                    this.bannerAd.OnLoad(function (res) {
                                        console.log("UC.Banner.OnLoad " + JSON.stringify(res));
                                        _this.bannerAd.Show();
                                    });
                                    this.bannerAd.OnError(function (res) {
                                        console.log("UC.Banner.OnError " + JSON.stringify(res));
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        };
                        Banner.prototype.Remove = function () {
                            this.bannerAd.Hide();
                        };
                        return Banner;
                    }());
                    var Video = /** @class */ (function () {
                        function Video() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.videoAd = AppRt.Extern.UC.CreateRewardVideoAd();
                            this.videoAd.OnLoad(function (res) {
                                console.log("UC.Video.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.videoAd.OnClose(function (res) {
                                console.log("UC.Video.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                if (res.isEnded) {
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                }
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            });
                            this.videoAd.OnError(function (res) {
                                console.log("UC.Video.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                            // this.videoAd.OnShow((res) =>
                            // {
                            //     console.log("UC.Video.OnShow "+ JSON.stringify(res));
                            // });
                        };
                        Video.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.videoAd.Load();
                            }, delay);
                        };
                        Video.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Video.prototype.Show = function (param) {
                            this.param = param;
                            this.videoAd.Show();
                        };
                        return Video;
                    }());
                })(UC = SDK.UC || (SDK.UC = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var VIVO;
                (function (VIVO) {
                    var QG;
                    (function (QG) {
                        TJ.Common.PriorityInit.Add(10, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                                return;
                            switch (DP.Basic.channel) {
                                case TJ.Define.Channel.AppRt.VIVO_AppRt:
                                    TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                    break;
                            }
                        });
                        TJ.Common.PriorityInit.Add(100, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                                return;
                            switch (DP.Basic.channel) {
                                case TJ.Define.Channel.AppRt.VIVO_AppRt:
                                    TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                    break;
                            }
                        });
                        var AppInfo = /** @class */ (function (_super) {
                            __extends(AppInfo, _super);
                            function AppInfo() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            AppInfo.prototype.Channel = function () {
                                if (AppRt.Extern.VIVO.QG.Exist()) {
                                    return DP.Basic.channel;
                                }
                                return null;
                            };
                            return AppInfo;
                        }(TJ.API.AppInfo.IAppInfo));
                        var Manager = /** @class */ (function (_super) {
                            __extends(Manager, _super);
                            function Manager() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Manager.prototype.OnInit = function () {
                                if (!AppRt.Extern.VIVO.QG.Exist())
                                    return;
                                TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                                TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            };
                            return Manager;
                        }(TJ.Common.Component.Interface));
                        QG.Manager = Manager;
                        var Account = /** @class */ (function (_super) {
                            __extends(Account, _super);
                            function Account() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Account.prototype.Login = function (param) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var res, userId;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, AppRt.Develop.VIVO.Account.YLogin()];
                                            case 1:
                                                res = _a.sent();
                                                userId = res.data;
                                                return [2 /*return*/, userId];
                                        }
                                    });
                                });
                            };
                            Account.prototype.SetUserInfo = function (param) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var userInfo;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, AppRt.Develop.VIVO.Account.GetUserInfo()];
                                            case 1:
                                                userInfo = _a.sent();
                                                return [2 /*return*/, userInfo];
                                        }
                                    });
                                });
                            };
                            return Account;
                        }(TJ.API.Account.IAccount));
                        var Ads = /** @class */ (function (_super) {
                            __extends(Ads, _super);
                            function Ads() {
                                var _this = _super !== null && _super.apply(this, arguments) || this;
                                _this.insertType = 0;
                                return _this;
                            }
                            Ads.prototype.OnInit = function () {
                                if (DP.VIVO.QG.bannerId != null) {
                                    this.banner = new Banner();
                                    this.banner.Init(DP.VIVO.QG.bannerId);
                                }
                                if (DP.VIVO.QG.insertId != null) {
                                    this.insert = new Insert();
                                    this.insert.Init(DP.VIVO.QG.insertId);
                                }
                                if (DP.VIVO.QG.videoId != null) {
                                    this.video = new Video();
                                    this.video.Init(DP.VIVO.QG.videoId);
                                }
                                if (DP.VIVO.QG.nativeCustomInsert != null) {
                                    this.customInsert = new CustomInsert();
                                    this.customInsert.Init(DP.VIVO.QG.nativeCustomInsert);
                                }
                                if (DP.VIVO.QG.nativeId != null) {
                                    window.setTimeout(function () {
                                        TJ.Common.Component.Manager.AddComponent(NativeAd).DoInit();
                                    }, 1000);
                                }
                            };
                            Ads.prototype.ADReady = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.banner:
                                        if (this.banner != null) {
                                            return true;
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.normal:
                                        if (this.customInsert != null && this.customInsert.Ready(param)) {
                                            this.insertType = 2;
                                            return true;
                                        }
                                        if (this.insert != null && this.insert.Ready()) {
                                            this.insertType = 1;
                                            return true;
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.reward:
                                        if (this.video != null && this.video.Ready()) {
                                            return true;
                                        }
                                        break;
                                }
                                return false;
                            };
                            Ads.prototype.ShowAD = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.banner:
                                        this.banner.Show(param);
                                        if (param.cbi != null) {
                                            param.cbi.Run(TJ.Define.Event.Expose);
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.normal:
                                        switch (this.insertType) {
                                            case 1:
                                                this.insert.Show(param);
                                                break;
                                            case 2:
                                                this.customInsert.Show(param);
                                                break;
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.reward:
                                        param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                        this.video.Show(param);
                                        break;
                                }
                            };
                            Ads.prototype.RemoveAD = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.banner:
                                        this.banner.Remove();
                                        break;
                                }
                            };
                            return Ads;
                        }(AppRt.API.AdPoly.IAdPoly));
                        var Banner = /** @class */ (function () {
                            function Banner() {
                            }
                            Banner.prototype.Init = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                            };
                            Banner.prototype.Show = function (param) {
                                var _this = this;
                                this.bannerAd = AppRt.Extern.VIVO.QG.CreateBannerAd(this.posId);
                                this.bannerAd.OnLoad(function (res) {
                                    console.log("VIVO.QG.Banner.OnLoad " + JSON.stringify(res));
                                    _this.bannerAd.Show();
                                });
                                this.bannerAd.OnSize(function (res) {
                                    console.log("VIVO.QG.Banner.OnSize " + JSON.stringify(res));
                                });
                                this.bannerAd.OnClose(function (res) {
                                    console.log("VIVO.QG.Banner.OnClose " + JSON.stringify(res));
                                });
                                this.bannerAd.OnError(function (res) {
                                    console.log("VIVO.QG.Banner.OnError " + JSON.stringify(res));
                                });
                            };
                            Banner.prototype.Remove = function () {
                                this.bannerAd.Hide();
                            };
                            return Banner;
                        }());
                        var Insert = /** @class */ (function () {
                            function Insert() {
                                this.loaded = false;
                                this.loadHandle = 0;
                            }
                            Insert.prototype.Init = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.Load(1000);
                            };
                            Insert.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    _this.insertAd = AppRt.Extern.VIVO.QG.CreateInterstitialAd(_this.posId);
                                    _this.insertAd.OnLoad(function (res) {
                                        console.log("VIVO.QG.Insert.OnLoad " + JSON.stringify(res));
                                        _this.loaded = true;
                                    });
                                    _this.insertAd.OnClose(function (res) {
                                        console.log("VIVO.QG.Insert.OnClose " + JSON.stringify(res));
                                        _this.loaded = false;
                                        _this.Load(1000);
                                        _this.param.cbi.Run(TJ.Define.Event.Expose);
                                    });
                                    _this.insertAd.OnError(function (res) {
                                        console.log("VIVO.QG.Insert.OnError " + JSON.stringify(res));
                                        _this.Load(5000);
                                    });
                                }, delay);
                            };
                            Insert.prototype.Ready = function () {
                                return this.loaded;
                            };
                            Insert.prototype.Show = function (param) {
                                this.param = param;
                                this.insertAd.Show();
                            };
                            return Insert;
                        }());
                        var Video = /** @class */ (function () {
                            function Video() {
                                this.loaded = false;
                                this.loadHandle = 0;
                            }
                            Video.prototype.Init = function () {
                                var _this = this;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.videoAd = AppRt.Extern.VIVO.QG.CreateRewardedVideoAd(this.posId);
                                this.videoAd.OnLoad(function (res) {
                                    console.log("VIVO.QG.Video.OnLoad " + JSON.stringify(res));
                                    _this.loaded = true;
                                });
                                this.videoAd.OnClose(function (res) {
                                    console.log("VIVO.QG.Video.OnClose " + JSON.stringify(res));
                                    _this.loaded = false;
                                    _this.Load(60000);
                                    if (res.isEnded) {
                                        _this.param.cbi.Run(TJ.Define.Event.Complete);
                                    }
                                    _this.param.cbi.Run(TJ.Define.Event.Close);
                                });
                                this.videoAd.OnError(function (res) {
                                    console.log("VIVO.QG.Video.OnError " + JSON.stringify(res));
                                    _this.Load(60000);
                                });
                            };
                            Video.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    _this.videoAd.Load();
                                }, delay);
                            };
                            Video.prototype.Ready = function () {
                                return this.loaded;
                            };
                            Video.prototype.Show = function (param) {
                                this.param = param;
                                this.videoAd.Show();
                            };
                            return Video;
                        }());
                        var CustomInsert = /** @class */ (function () {
                            function CustomInsert() {
                            }
                            CustomInsert.prototype.Init = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.nad = new NativeAdHelper(this.posId);
                            };
                            CustomInsert.prototype.Ready = function (param) {
                                return this.nad.Peek() != null && param.onNative != null;
                            };
                            CustomInsert.prototype.Show = function (param) {
                                var data = this.nad.Pop();
                                param.onNative(data);
                            };
                            return CustomInsert;
                        }());
                        var NativeAd = /** @class */ (function (_super) {
                            __extends(NativeAd, _super);
                            function NativeAd() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            NativeAd.prototype.OnInit = function () {
                                this.nad = new NativeAdHelper(DP.VIVO.QG.nativeId);
                            };
                            NativeAd.prototype.LoadNative = function (param) {
                                return this.nad.Pop();
                            };
                            return NativeAd;
                        }(TJ.API.AdService.IAdService));
                        var NativeAdHelper = /** @class */ (function () {
                            function NativeAdHelper(posId) {
                                var _this = this;
                                this.list = [];
                                this.loadHandle = 0;
                                this.nativeAd = AppRt.Extern.VIVO.QG.CreateNativeAd(posId);
                                this.nativeAd.OnLoad(function (res) {
                                    var _loop_2 = function (data) {
                                        var item = new TJ.API.AdService.NativeItem();
                                        var adId = data.adId;
                                        item.OnShow = function () {
                                            _this.nativeAd.ReportAdShow(adId);
                                        };
                                        item.OnClick = function () {
                                            _this.nativeAd.ReportAdClick(adId);
                                        };
                                        item.title = data.title;
                                        item.desc = data.desc;
                                        item.logoUrl = data.logoUrl;
                                        item.iconUrl = data.icon;
                                        if (data.imgUrlList != null && data.imgUrlList.length > 0) {
                                            item.imgUrl = data.imgUrlList[0];
                                        }
                                        _this.list.push(item);
                                    };
                                    for (var _i = 0, _a = res.adList; _i < _a.length; _i++) {
                                        var data = _a[_i];
                                        _loop_2(data);
                                    }
                                    _this.Load(15000);
                                });
                                this.nativeAd.OnError(function (res) {
                                    console.log("VIVO.QG.NativeAd.OnError " + JSON.stringify(res));
                                    _this.Load(15000);
                                });
                                this.Load(0);
                            }
                            NativeAdHelper.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    if (_this.list.length < 1) {
                                        _this.nativeAd.Load();
                                    }
                                }, delay);
                            };
                            NativeAdHelper.prototype.Peek = function () {
                                if (this.list.length > 0) {
                                    return this.list[0];
                                }
                                return null;
                            };
                            NativeAdHelper.prototype.Pop = function () {
                                var item = this.Peek();
                                if (item != null) {
                                    this.list.splice(0, 1);
                                    this.Load(15000);
                                }
                                return item;
                            };
                            return NativeAdHelper;
                        }());
                    })(QG = VIVO.QG || (VIVO.QG = {}));
                })(VIVO = SDK.VIVO || (SDK.VIVO = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var WX;
                (function (WX) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.WX_AppRt:
                                TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                break;
                        }
                    });
                    TJ.Common.PriorityInit.Add(100, function () {
                        if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                            return;
                        switch (DP.Basic.channel) {
                            case TJ.Define.Channel.AppRt.WX_AppRt:
                                TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                break;
                        }
                    });
                    var AppInfo = /** @class */ (function (_super) {
                        __extends(AppInfo, _super);
                        function AppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        AppInfo.prototype.Channel = function () {
                            if (AppRt.Extern.WX.Exist()) {
                                return DP.Basic.channel;
                            }
                            return null;
                        };
                        return AppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                    var Manager = /** @class */ (function (_super) {
                        __extends(Manager, _super);
                        function Manager() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Manager.prototype.OnInit = function () {
                            if (!AppRt.Extern.WX.Exist())
                                return;
                            TJ.Common.Component.Manager.AddComponent(Account).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Promo).DoInit();
                            TJ.Common.Component.Manager.AddComponent(Vibrate).DoInit();
                            {
                                AppRt.Extern.WX.OnShow(function () { TJ.Common.SystemInfo.foreground = true; });
                                AppRt.Extern.WX.OnHide(function () { TJ.Common.SystemInfo.foreground = false; });
                            }
                            {
                                var options = AppRt.Extern.WX.GetLaunchOptionsSync();
                                AppRt.Develop.TA.LaunchOptions(options);
                                console.log("WX.GetLaunchOptionsSync " + JSON.stringify(options));
                            }
                        };
                        return Manager;
                    }(TJ.Common.Component.Interface));
                    WX.Manager = Manager;
                    var Account = /** @class */ (function (_super) {
                        __extends(Account, _super);
                        function Account() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Account.prototype.Login = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userId;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.WX.Account.YLogin()];
                                        case 1:
                                            userId = _a.sent();
                                            return [2 /*return*/, userId];
                                    }
                                });
                            });
                        };
                        Account.prototype.SetUserInfo = function (param) {
                            return __awaiter(this, void 0, void 0, function () {
                                var userInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, AppRt.Develop.WX.Account.GetUserInfo()];
                                        case 1:
                                            userInfo = _a.sent();
                                            return [2 /*return*/, userInfo];
                                    }
                                });
                            });
                        };
                        return Account;
                    }(TJ.API.Account.IAccount));
                    var Vibrate = /** @class */ (function (_super) {
                        __extends(Vibrate, _super);
                        function Vibrate() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Vibrate.prototype.Short = function () {
                            AppRt.Extern.WX.VibrateShort(new AppRt.Extern.WX.CallbackParam());
                        };
                        Vibrate.prototype.Long = function () {
                            AppRt.Extern.WX.VibrateLong(new AppRt.Extern.WX.CallbackParam());
                        };
                        Vibrate.prototype.Time = function (seconds) {
                            if (seconds < 0.1) {
                                this.Short();
                            }
                            else {
                                this.Long();
                            }
                        };
                        return Vibrate;
                    }(TJ.API.Vibrate.IVibrate));
                    var Promo = /** @class */ (function (_super) {
                        __extends(Promo, _super);
                        function Promo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Promo.prototype.Pop = function (param) {
                            var p = new AppRt.Extern.WX.NavigateToMiniProgramParam();
                            p.appId = param.appId;
                            p.path = param.path;
                            p.extraData = param.extraData;
                            p.success = function (res) {
                                param.cbi.Run(TJ.Define.Event.Success);
                            };
                            p.complete = function (res) {
                                console.log("WX.NavigateToMiniProgram complete", JSON.stringify(res));
                            };
                            console.log("WX.NavigateToMiniProgram = " + JSON.stringify(p));
                            AppRt.Extern.WX.NavigateToMiniProgram(p);
                        };
                        return Promo;
                    }(TJ.API.Promo.IPromo));
                    var Ads = /** @class */ (function (_super) {
                        __extends(Ads, _super);
                        function Ads() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        Ads.prototype.OnInit = function () {
                            if (DP.WX.bannerId != null) {
                                this.banner = new Banner();
                                this.banner.Init(DP.WX.bannerId);
                            }
                            if (DP.WX.insertId != null) {
                                this.insert = new Insert();
                                this.insert.Init(DP.WX.insertId);
                            }
                            if (DP.WX.videoId != null) {
                                this.video = new Video();
                                this.video.Init(DP.WX.videoId);
                            }
                        };
                        Ads.prototype.ADReady = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    if (this.banner != null) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    if (this.insert != null && this.insert.Ready()) {
                                        return true;
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    if (this.video != null && this.video.Ready()) {
                                        return true;
                                    }
                                    break;
                            }
                            return false;
                        };
                        Ads.prototype.ShowAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Show(param);
                                    if (param.cbi != null) {
                                        param.cbi.Run(TJ.Define.Event.Expose);
                                    }
                                    break;
                                case AppRt.API.AdPoly.Grade.normal:
                                    // param.cbi.Add(DevelopKit.EventType.曝光, () => { insertShowTime = DateTime.Now; });
                                    this.insert.Show(param);
                                    break;
                                case AppRt.API.AdPoly.Grade.reward:
                                    param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                    this.video.Show(param);
                                    break;
                            }
                        };
                        Ads.prototype.RemoveAD = function (param, grade) {
                            switch (grade) {
                                case AppRt.API.AdPoly.Grade.banner:
                                    this.banner.Remove();
                                    break;
                            }
                        };
                        return Ads;
                    }(AppRt.API.AdPoly.IAdPoly));
                    var Banner = /** @class */ (function () {
                        function Banner() {
                        }
                        Banner.prototype.Init = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                        };
                        Banner.prototype.Show = function (param) {
                            var _this = this;
                            var ws = TJ.Engine.RuntimeInfo.windowSize;
                            var style = new AppRt.Extern.WX.BannerAdStyle();
                            style.width = ws.width;
                            // style.left = 0;
                            // style.top = 0;
                            style.height = style.width * .35;
                            style.left = (ws.width - style.width) / 2;
                            if ((param.place & 32) > 0) {
                                style.top = 0;
                            }
                            else {
                                style.top = ws.height - style.height;
                            }
                            this.bannerAd = AppRt.Extern.WX.CreateBannerAd(this.posId, style, 30);
                            this.bannerAd.OnLoad(function (res) {
                                console.log("WX.Banner.OnLoad " + JSON.stringify(res));
                                _this.bannerAd.Show();
                            });
                            this.bannerAd.OnResize(function (res) {
                                console.log("WX.Banner.OnResize " + JSON.stringify(res));
                                if (res.width > 0 && res.height > 0) {
                                    style.width = res.width;
                                    style.height = res.height;
                                    style.left = (ws.width - style.width) / 2;
                                    if ((param.place & 32) > 0) {
                                        style.top = 0;
                                    }
                                    else {
                                        style.top = ws.height - style.height;
                                    }
                                    if (_this.bannerAd.style.left != style.left) {
                                        _this.bannerAd.style.left = style.left;
                                    }
                                    if (_this.bannerAd.style.top != style.top) {
                                        _this.bannerAd.style.top = style.top;
                                    }
                                }
                            });
                            this.bannerAd.OnError(function (res) {
                                console.log("WX.Banner.OnError " + JSON.stringify(res));
                            });
                        };
                        Banner.prototype.Remove = function () {
                            this.bannerAd.Destroy();
                        };
                        return Banner;
                    }());
                    var Insert = /** @class */ (function () {
                        function Insert() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Insert.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.insertAd = AppRt.Extern.WX.CreateInterstitialAd(this.posId);
                            this.insertAd.OnLoad(function (res) {
                                console.log("WX.Insert.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.insertAd.OnClose(function (res) {
                                console.log("WX.Insert.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                _this.param.cbi.Run(TJ.Define.Event.Expose);
                            });
                            this.insertAd.OnError(function (res) {
                                console.log("WX.Insert.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                            this.Load(1000);
                        };
                        Insert.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.insertAd.Load();
                            }, delay);
                        };
                        Insert.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Insert.prototype.Show = function (param) {
                            this.param = param;
                            this.insertAd.Show();
                        };
                        return Insert;
                    }());
                    var Video = /** @class */ (function () {
                        function Video() {
                            this.loaded = false;
                            this.loadHandle = 0;
                        }
                        Video.prototype.Init = function () {
                            var _this = this;
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            this.posId = args[0];
                            this.videoAd = AppRt.Extern.WX.CreateRewardedVideoAd(this.posId);
                            this.videoAd.OnLoad(function (res) {
                                console.log("WX.Video.OnLoad " + JSON.stringify(res));
                                _this.loaded = true;
                            });
                            this.videoAd.OnError(function (res) {
                                console.log("WX.Video.OnError " + JSON.stringify(res));
                                _this.Load(5000);
                            });
                            this.videoAd.OnClose(function (res) {
                                console.log("WX.Video.OnClose " + JSON.stringify(res));
                                _this.loaded = false;
                                _this.Load(1000);
                                if (res.isEnded) {
                                    _this.param.cbi.Run(TJ.Define.Event.Complete);
                                }
                                _this.param.cbi.Run(TJ.Define.Event.Close);
                            });
                            this.Load(1000);
                        };
                        Video.prototype.Load = function (delay) {
                            var _this = this;
                            clearTimeout(this.loadHandle);
                            this.loadHandle = window.setTimeout(function () {
                                _this.videoAd.Load();
                            }, delay);
                        };
                        Video.prototype.Ready = function () {
                            return this.loaded;
                        };
                        Video.prototype.Show = function (param) {
                            this.param = param;
                            this.videoAd.Show();
                        };
                        return Video;
                    }());
                })(WX = SDK.WX || (SDK.WX = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var AppRt;
        (function (AppRt) {
            var SDK;
            (function (SDK) {
                var XIAOMI;
                (function (XIAOMI) {
                    var QG;
                    (function (QG) {
                        TJ.Common.PriorityInit.Add(10, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                                return;
                            switch (DP.Basic.channel) {
                                case TJ.Define.Channel.AppRt.XIAOMI_AppRt:
                                    TJ.Common.Component.Manager.AddComponent(AppInfo).DoInit();
                                    break;
                            }
                        });
                        TJ.Common.PriorityInit.Add(100, function () {
                            if (TJ.Engine.RuntimeInfo.platform != TJ.Define.Platform.AppRt)
                                return;
                            switch (DP.Basic.channel) {
                                case TJ.Define.Channel.AppRt.XIAOMI_AppRt:
                                    TJ.Common.Component.Manager.AddComponent(Manager).DoInit();
                                    break;
                            }
                        });
                        var AppInfo = /** @class */ (function (_super) {
                            __extends(AppInfo, _super);
                            function AppInfo() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            AppInfo.prototype.Channel = function () {
                                if (AppRt.Extern.XIAOMI.QG.Exist()) {
                                    return DP.Basic.channel;
                                }
                                return null;
                            };
                            return AppInfo;
                        }(TJ.API.AppInfo.IAppInfo));
                        var Manager = /** @class */ (function (_super) {
                            __extends(Manager, _super);
                            function Manager() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Manager.prototype.OnInit = function () {
                                if (!AppRt.Extern.XIAOMI.QG.Exist())
                                    return;
                                TJ.Common.Component.Manager.AddComponent(Ads).DoInit();
                            };
                            return Manager;
                        }(TJ.Common.Component.Interface));
                        QG.Manager = Manager;
                        var Ads = /** @class */ (function (_super) {
                            __extends(Ads, _super);
                            function Ads() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Ads.prototype.OnInit = function () {
                                if (DP.XIAOMI.QG.insertId != null) {
                                    this.insert = new Insert();
                                    this.insert.Init(DP.XIAOMI.QG.insertId);
                                }
                                if (DP.XIAOMI.QG.videoId != null) {
                                    this.video = new Video();
                                    this.video.Init(DP.XIAOMI.QG.videoId);
                                }
                            };
                            Ads.prototype.ADReady = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.normal:
                                        if (this.insert != null) {
                                            return true;
                                        }
                                        break;
                                    case AppRt.API.AdPoly.Grade.reward:
                                        if (this.video != null && this.video.Ready()) {
                                            return true;
                                        }
                                        break;
                                }
                                return false;
                            };
                            Ads.prototype.ShowAD = function (param, grade) {
                                switch (grade) {
                                    case AppRt.API.AdPoly.Grade.normal:
                                        this.insert.Show(param);
                                        break;
                                    case AppRt.API.AdPoly.Grade.reward:
                                        param.cbi.Add(TJ.Define.Event.Complete, function () { param.cbi.Run(TJ.Define.Event.Reward); });
                                        this.video.Show(param);
                                        break;
                                }
                            };
                            return Ads;
                        }(AppRt.API.AdPoly.IAdPoly));
                        var Insert = /** @class */ (function () {
                            function Insert() {
                            }
                            Insert.prototype.Init = function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                            };
                            Insert.prototype.Show = function (param) {
                                var _this = this;
                                this.insertAd = AppRt.Extern.XIAOMI.QG.CreateInsertAd(this.posId);
                                this.insertAd.OnLoad(function (res) {
                                    console.log("XIAOMI.QG.Insert.OnLoad = " + JSON.stringify(res));
                                    _this.insertAd.Show();
                                });
                                this.insertAd.OnError(function (res) {
                                    console.log("XIAOMI.QG.Insert.OnError = " + JSON.stringify(res));
                                });
                                this.insertAd.OnClose(function (res) {
                                    console.log("XIAOMI.QG.Insert.OnClose = " + JSON.stringify(res));
                                });
                            };
                            return Insert;
                        }());
                        var Video = /** @class */ (function () {
                            function Video() {
                                this.loaded = false;
                                this.loadHandle = 0;
                            }
                            Video.prototype.Init = function () {
                                var _this = this;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.posId = args[0];
                                this.videoAd = AppRt.Extern.XIAOMI.QG.CreateRewardedVideoAd(this.posId);
                                this.videoAd.OnLoad(function (res) {
                                    console.log("XIAOMI.QG.Video.OnLoad = " + JSON.stringify(res));
                                    _this.loaded = true;
                                });
                                this.videoAd.OnError(function (res) {
                                    console.log("XIAOMI.QG.Video.OnError = " + JSON.stringify(res));
                                    _this.loaded = false;
                                    _this.Load(5000);
                                });
                                this.videoAd.OnClose(function (res) {
                                    console.log("XIAOMI.QG.Video.OnClose = " + JSON.stringify(res));
                                    _this.loaded = false;
                                    _this.Load(1000);
                                    if (res && res.isEnded) {
                                        _this.param.cbi.Run(TJ.Define.Event.Complete);
                                    }
                                    _this.param.cbi.Run(TJ.Define.Event.Close);
                                });
                                this.Load(1000);
                            };
                            Video.prototype.Load = function (delay) {
                                var _this = this;
                                clearTimeout(this.loadHandle);
                                this.loadHandle = window.setTimeout(function () {
                                    _this.videoAd.Load();
                                }, delay);
                            };
                            Video.prototype.Ready = function () {
                                return this.loaded;
                            };
                            Video.prototype.Show = function (param) {
                                this.param = param;
                                this.videoAd.Show();
                            };
                            return Video;
                        }());
                    })(QG = XIAOMI.QG || (XIAOMI.QG = {}));
                })(XIAOMI = SDK.XIAOMI || (SDK.XIAOMI = {}));
            })(SDK = AppRt.SDK || (AppRt.SDK = {}));
        })(AppRt = Platform.AppRt || (Platform.AppRt = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var Extern;
            (function (Extern) {
                var ADS;
                (function (ADS) {
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.iOS.ADS.ExApi." + fn + " -> " + ps);
                        };
                        ExApi.ShowBanner = function (json) {
                            this.Debug("ShowBanner", json);
                            this.sc.CallStatic("ShowBanner:", new TJ.Common.String_(json));
                        };
                        ExApi.RemoveBanner = function (json) {
                            this.Debug("RemoveBanner", json);
                            this.sc.CallStatic("RemoveBanner:", new TJ.Common.String_(json));
                        };
                        ExApi.NormalReady = function (json) {
                            this.Debug("NormalReady", json);
                            return this.sc.CallStatic(TJ.Common.Bool_, "NormalReady:", new TJ.Common.String_(json)).value;
                        };
                        ExApi.ShowNormal = function (json) {
                            this.Debug("ShowNormal", json);
                            this.sc.CallStatic("ShowNormal:", new TJ.Common.String_(json));
                        };
                        ExApi.RewardReady = function (json) {
                            this.Debug("RewardReady", json);
                            return this.sc.CallStatic(TJ.Common.Bool_, "RewardReady:", new TJ.Common.String_(json)).value;
                        };
                        ExApi.ShowReward = function (json) {
                            this.Debug("ShowReward", json);
                            this.sc.CallStatic("ShowReward:", new TJ.Common.String_(json));
                        };
                        ExApi.sc = new TJ.Common.iOS.SwiftClass("TJ_ADS_ExApi");
                        return ExApi;
                    }());
                    ADS.ExApi = ExApi;
                })(ADS = Extern.ADS || (Extern.ADS = {}));
            })(Extern = iOS.Extern || (iOS.Extern = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var Extern;
            (function (Extern) {
                var APP;
                (function (APP) {
                    var Api = /** @class */ (function () {
                        function Api() {
                        }
                        Api.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.iOS.APP.Api." + fn + " -> " + ps);
                        };
                        Api.AppGuid = function () {
                            this.Debug("AppGuid");
                            return this.sc.CallStatic(TJ.Common.String_, "AppGuid").value;
                        };
                        Api.UserAgreement = function () {
                            this.Debug("UserAgreement");
                            this.sc.CallStatic("UserAgreement");
                        };
                        Api.PrivacyPolicy = function () {
                            this.Debug("PrivacyPolicy");
                            this.sc.CallStatic("PrivacyPolicy");
                        };
                        Api.sc = new TJ.Common.iOS.SwiftClass("TJ_APP_Api");
                        return Api;
                    }());
                    APP.Api = Api;
                })(APP = Extern.APP || (Extern.APP = {}));
            })(Extern = iOS.Extern || (iOS.Extern = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var Extern;
            (function (Extern) {
                var GSA;
                (function (GSA) {
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.iOS.GSA.ExApi." + fn + " -> " + ps);
                        };
                        ExApi.Event = function (json) {
                            this.Debug("Event", json);
                            this.sc.CallStatic("Event:", new TJ.Common.String_(json));
                        };
                        ExApi.sc = new TJ.Common.iOS.SwiftClass("TJ_GSA_ExApi");
                        return ExApi;
                    }());
                    GSA.ExApi = ExApi;
                })(GSA = Extern.GSA || (Extern.GSA = {}));
            })(Extern = iOS.Extern || (iOS.Extern = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var Extern;
            (function (Extern) {
                var IAP;
                (function (IAP) {
                    var ExApi = /** @class */ (function () {
                        function ExApi() {
                        }
                        // static jc = new Common.Android.JavaClass("tj.IAP.ExApi");
                        ExApi.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.iOS.IAP.ExApi." + fn + " -> " + ps);
                        };
                        return ExApi;
                    }());
                    IAP.ExApi = ExApi;
                })(IAP = Extern.IAP || (Extern.IAP = {}));
            })(Extern = iOS.Extern || (iOS.Extern = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var Extern;
            (function (Extern) {
                var Tools;
                (function (Tools) {
                    var StoreKitHelper = /** @class */ (function () {
                        function StoreKitHelper() {
                        }
                        StoreKitHelper.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.iOS.Tools.StoreKitHelper." + fn + " -> " + ps);
                        };
                        StoreKitHelper.ReviewApp = function () {
                            this.Debug("ReviewApp");
                            this.sc.CallStatic("ReviewApp");
                        };
                        StoreKitHelper.PopApp = function (appId) {
                            this.Debug("PopApp");
                            this.sc.CallStatic("PopApp:", new TJ.Common.String_(appId));
                        };
                        StoreKitHelper.sc = new TJ.Common.iOS.SwiftClass("TJ_Tools_StoreKitHelper");
                        return StoreKitHelper;
                    }());
                    Tools.StoreKitHelper = StoreKitHelper;
                    var VibrateHelper = /** @class */ (function () {
                        function VibrateHelper() {
                        }
                        VibrateHelper.Debug = function (fn) {
                            var ps = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                ps[_i - 1] = arguments[_i];
                            }
                            console.log("call TJ.iOS.Tools.VibrateHelper." + fn + " -> " + ps);
                        };
                        VibrateHelper.Short = function () {
                            this.Debug("Short");
                            this.sc.CallStatic("Short");
                        };
                        VibrateHelper.Long = function () {
                            this.Debug("Long");
                            this.sc.CallStatic("Long");
                        };
                        VibrateHelper.sc = new TJ.Common.iOS.SwiftClass("TJ_Tools_VibrateHelper");
                        return VibrateHelper;
                    }());
                    Tools.VibrateHelper = VibrateHelper;
                })(Tools = Extern.Tools || (Extern.Tools = {}));
            })(Extern = iOS.Extern || (iOS.Extern = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var SDK;
            (function (SDK) {
                var AdService;
                (function (AdService) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.iOS:
                                TJ.Common.Component.Manager.AddComponent(OAdService).DoInit();
                                break;
                        }
                    });
                    var OAdService = /** @class */ (function (_super) {
                        __extends(OAdService, _super);
                        function OAdService() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAdService.prototype.ShowBanner = function (param) {
                            iOS.Extern.ADS.ExApi.ShowBanner(param.ToJson());
                        };
                        OAdService.prototype.RemoveBanner = function (param) {
                            iOS.Extern.ADS.ExApi.RemoveBanner(param.ToJson());
                        };
                        OAdService.prototype.NormalReady = function (param) {
                            return iOS.Extern.ADS.ExApi.NormalReady(param.ToJson());
                        };
                        OAdService.prototype.ShowNormal = function (param) {
                            iOS.Extern.ADS.ExApi.ShowNormal(param.ToJson());
                        };
                        OAdService.prototype.RewardReady = function (param) {
                            return iOS.Extern.ADS.ExApi.RewardReady(param.ToJson());
                        };
                        OAdService.prototype.ShowReward = function (param) {
                            iOS.Extern.ADS.ExApi.ShowReward(param.ToJson());
                        };
                        OAdService.prototype.Exist = function () {
                            return true;
                        };
                        return OAdService;
                    }(TJ.API.AdService.IAdService));
                })(AdService = SDK.AdService || (SDK.AdService = {}));
            })(SDK = iOS.SDK || (iOS.SDK = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var SDK;
            (function (SDK) {
                var Analytics;
                (function (Analytics) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.iOS:
                                TJ.Common.Component.Manager.AddComponent(OAnalytics).DoInit();
                                break;
                        }
                    });
                    var OAnalytics = /** @class */ (function (_super) {
                        __extends(OAnalytics, _super);
                        function OAnalytics() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAnalytics.prototype.Event = function (param) {
                            iOS.Extern.GSA.ExApi.Event(param.ToJson());
                        };
                        return OAnalytics;
                    }(TJ.API.Analytics.IAnalytics));
                })(Analytics = SDK.Analytics || (SDK.Analytics = {}));
            })(SDK = iOS.SDK || (iOS.SDK = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var SDK;
            (function (SDK) {
                var AppCtl;
                (function (AppCtl) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.iOS:
                                TJ.Common.Component.Manager.AddComponent(OAppCtl).DoInit();
                                break;
                        }
                    });
                    var OAppCtl = /** @class */ (function (_super) {
                        __extends(OAppCtl, _super);
                        function OAppCtl() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAppCtl.prototype.UserAgreement = function () {
                            iOS.Extern.APP.Api.UserAgreement();
                        };
                        OAppCtl.prototype.PrivacyPolicy = function () {
                            iOS.Extern.APP.Api.PrivacyPolicy();
                        };
                        OAppCtl.prototype.Review = function () {
                            iOS.Extern.Tools.StoreKitHelper.ReviewApp();
                        };
                        return OAppCtl;
                    }(TJ.API.AppCtl.IAppCtl));
                })(AppCtl = SDK.AppCtl || (SDK.AppCtl = {}));
            })(SDK = iOS.SDK || (iOS.SDK = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var SDK;
            (function (SDK) {
                var AppInfo;
                (function (AppInfo) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.iOS:
                                TJ.Common.Component.Manager.AddComponent(OAppInfo).DoInit();
                                break;
                        }
                    });
                    var OAppInfo = /** @class */ (function (_super) {
                        __extends(OAppInfo, _super);
                        function OAppInfo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OAppInfo.prototype.AppGuid = function () {
                            return iOS.Extern.APP.Api.AppGuid();
                        };
                        OAppInfo.prototype.Channel = function () {
                            return TJ.Define.Channel.iOS.AppStore_iOS;
                        };
                        return OAppInfo;
                    }(TJ.API.AppInfo.IAppInfo));
                })(AppInfo = SDK.AppInfo || (SDK.AppInfo = {}));
            })(SDK = iOS.SDK || (iOS.SDK = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var SDK;
            (function (SDK) {
                var Promo;
                (function (Promo) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.iOS:
                                TJ.Common.Component.Manager.AddComponent(OPromo).DoInit();
                                break;
                        }
                    });
                    var OPromo = /** @class */ (function (_super) {
                        __extends(OPromo, _super);
                        function OPromo() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OPromo.prototype.Pop = function (param) {
                            iOS.Extern.Tools.StoreKitHelper.PopApp(param.appId);
                        };
                        return OPromo;
                    }(TJ.API.Promo.IPromo));
                })(Promo = SDK.Promo || (SDK.Promo = {}));
            })(SDK = iOS.SDK || (iOS.SDK = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var Platform;
    (function (Platform) {
        var iOS;
        (function (iOS) {
            var SDK;
            (function (SDK) {
                var Vibrate;
                (function (Vibrate) {
                    TJ.Common.PriorityInit.Add(10, function () {
                        switch (TJ.Engine.RuntimeInfo.platform) {
                            case TJ.Define.Platform.iOS:
                                TJ.Common.Component.Manager.AddComponent(OVibrate).DoInit();
                                break;
                        }
                    });
                    var OVibrate = /** @class */ (function (_super) {
                        __extends(OVibrate, _super);
                        function OVibrate() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        OVibrate.prototype.Short = function () {
                            iOS.Extern.Tools.VibrateHelper.Short();
                        };
                        OVibrate.prototype.Long = function () {
                            iOS.Extern.Tools.VibrateHelper.Long();
                        };
                        return OVibrate;
                    }(TJ.API.Vibrate.IVibrate));
                })(Vibrate = SDK.Vibrate || (SDK.Vibrate = {}));
            })(SDK = iOS.SDK || (iOS.SDK = {}));
        })(iOS = Platform.iOS || (Platform.iOS = {}));
    })(Platform = TJ.Platform || (TJ.Platform = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var ADS;
    (function (ADS) {
        var Param = /** @class */ (function (_super) {
            __extends(Param, _super);
            function Param() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Param;
        }(TJ.API.AdService.Param));
        ADS.Param = Param;
        var Place;
        (function (Place) {
            Place[Place["LEFT"] = 3] = "LEFT";
            Place[Place["RIGHT"] = 5] = "RIGHT";
            Place[Place["CENTER"] = 17] = "CENTER";
            Place[Place["TOP"] = 48] = "TOP";
            Place[Place["BOTTOM"] = 80] = "BOTTOM";
        })(Place = ADS.Place || (ADS.Place = {}));
        var Api = /** @class */ (function () {
            function Api() {
            }
            Api.ShowBanner = function (param) {
                TJ.API.AdService.ShowBanner(param);
            };
            Api.RemoveBanner = function (param) {
                TJ.API.AdService.RemoveBanner(param);
            };
            Api.NormalReady = function (param) {
                return TJ.API.AdService.NormalReady(param);
            };
            Api.ShowNormal = function (param) {
                TJ.API.AdService.ShowNormal(param);
            };
            Api.RewardReady = function (param) {
                return TJ.API.AdService.RewardReady(param);
            };
            Api.ShowReward = function (param) {
                TJ.API.AdService.ShowReward(param);
            };
            Object.defineProperty(Api, "exist", {
                get: function () {
                    return TJ.API.AdService.Exist();
                },
                enumerable: true,
                configurable: true
            });
            return Api;
        }());
        ADS.Api = Api;
    })(ADS = TJ.ADS || (TJ.ADS = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var APP;
    (function (APP) {
        var Api = /** @class */ (function () {
            function Api() {
            }
            Api.Quit = function () {
                TJ.API.AppCtl.Quit();
            };
            Object.defineProperty(Api, "appGuid", {
                get: function () {
                    return TJ.API.AppInfo.AppGuid();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Api, "productName", {
                get: function () {
                    return TJ.API.AppInfo.ProductName();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Api, "packageName", {
                get: function () {
                    return TJ.API.AppInfo.PackageName();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Api, "versionName", {
                get: function () {
                    return TJ.API.AppInfo.VersionName();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Api, "versionCode", {
                get: function () {
                    return TJ.API.AppInfo.VersionCode();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Api, "channel", {
                get: function () {
                    return TJ.API.AppInfo.Channel();
                },
                enumerable: true,
                configurable: true
            });
            Api.UserAgreement = function () {
                TJ.API.AppCtl.UserAgreement();
            };
            Api.PrivacyPolicy = function () {
                TJ.API.AppCtl.PrivacyPolicy();
            };
            return Api;
        }());
        APP.Api = Api;
    })(APP = TJ.APP || (TJ.APP = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var GSA;
    (function (GSA) {
        var Param = /** @class */ (function (_super) {
            __extends(Param, _super);
            function Param() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Param;
        }(TJ.API.Analytics.Param));
        GSA.Param = Param;
        var Api = /** @class */ (function () {
            function Api() {
            }
            Api.Event = function (param) {
                TJ.API.Analytics.Event(param);
            };
            Api.EventBegin = function (param) {
                TJ.API.Analytics.EventBegin(param);
            };
            Api.EventEnd = function (param) {
                TJ.API.Analytics.EventEnd(param);
            };
            Api.PageBegin = function (param) {
                TJ.API.Analytics.PageBegin(param);
            };
            Api.PageEnd = function (param) {
                TJ.API.Analytics.PageEnd(param);
            };
            Api.LevelStart = function (param) {
                TJ.API.Analytics.LevelStart(param);
            };
            Api.LevelFinish = function (param) {
                TJ.API.Analytics.LevelFinish(param);
            };
            Api.LevelFail = function (param) {
                TJ.API.Analytics.LevelFail(param);
            };
            Api.Pay = function (param) {
                TJ.API.Analytics.Pay(param);
            };
            Api.Buy = function (param) {
                TJ.API.Analytics.Buy(param);
            };
            Api.Use = function (param) {
                TJ.API.Analytics.Use(param);
            };
            Api.Bonus = function (param) {
                TJ.API.Analytics.Bonus(param);
            };
            return Api;
        }());
        GSA.Api = Api;
    })(GSA = TJ.GSA || (TJ.GSA = {}));
})(TJ || (TJ = {}));
(function (TJ) {
    var IAP;
    (function (IAP) {
        var Param = /** @class */ (function (_super) {
            __extends(Param, _super);
            function Param() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Param;
        }(TJ.API.Billing.Param));
        IAP.Param = Param;
        var Api = /** @class */ (function () {
            function Api() {
            }
            Api.Purchase = function (param) {
                TJ.API.Billing.Purchase(param);
            };
            Api.QueryAll = function (param) {
                TJ.API.Billing.QueryAll(param);
            };
            Api.Consume = function (param) {
                TJ.API.Billing.Consume(param);
            };
            Object.defineProperty(Api, "exist", {
                get: function () {
                    return TJ.API.Billing.Exist();
                },
                enumerable: true,
                configurable: true
            });
            return Api;
        }());
        IAP.Api = Api;
    })(IAP = TJ.IAP || (TJ.IAP = {}));
})(TJ || (TJ = {}));
window["TJ"] = TJ;

