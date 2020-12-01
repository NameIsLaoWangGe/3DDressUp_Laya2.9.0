import { Admin, DataAdmin } from "./Lwg";
import { _Res } from "./_PreLoad";
import { _PropTry } from "./_PropTry";

export module _DressingRoom {
    export class _General extends DataAdmin._Table {
        private static ins: _General;
        static _Ins() {
            if (!this.ins) {
                this.ins = new _General('ClothesGeneral', _Res._list.json.Clothes.url, true);
            }
            return this.ins;
        }
        _classify = {
            Dress: 'Dress',
            Top: 'Top',
            Bottoms: 'Bottoms',
        }
    }

    export class _DIY extends DataAdmin._Table {
        private static ins: _DIY;
        static _Ins() {
            if (!this.ins) {
                this.ins = new _DIY('ClothesDIY', _Res._list.json.Clothes.url, true);
            }
            return this.ins;
        }
    }

    class _Item extends Admin._ObjectBase {
        lwgButton(): void {
            this._btnUp(this._Owner, (e: Laya.Event) => {
                _DIY._Ins()._setPitch(this._Owner['_dataSource'][_DIY._Ins()._property.name]);
            }, null)
        }
    }

    export class DressingRoom extends Admin._SceneBase {
        lwgOnAwake(): void {
            _General._Ins()._List = this._ListVar('List');

            _DIY._Ins()._List = this._ListVar('List');
            _DIY._Ins()._List.selectEnable = true;
            _DIY._Ins()._List.vScrollBarSkin = "";
            _DIY._Ins()._List.array = _DIY._Ins()._arr;
            _DIY._Ins()._List.renderHandler = new Laya.Handler(this, (Cell: Laya.Box, index: number) => {
                let data = Cell.dataSource;
                let Icon = Cell.getChildByName('Icon') as Laya.Image;
                Icon.skin = `Game/UI/Clothes/Icon/${data['name']}.png`;
                let Board = Cell.getChildByName('Board') as Laya.Image;
                Board.skin = `Lwg/UI/ui_orthogon_green.png`;
                if (data[_DIY._Ins()._property.pitch]) {
                    Board.skin = `Lwg/UI/ui_l_orthogon_green.png`;
                } else {
                    Board.skin = `Lwg/UI/ui_orthogon_grass.png`;
                }
                if (!Cell.getComponent(_Item)) {
                    Cell.addComponent(_Item)
                }
            });

            _DIY._Ins()._Tap = this._ListVar('Tap');
        }

        lwgAdaptive(): void {
            this._ImgVar('Navigation').x = Laya.stage.width - this._ImgVar('Navigation').width;
        }
        
        lwgOnStart(): void {
        }

        lwgButton(): void {
            this._btnUp(this._ImgVar('BtnComplete'), () => {
                this._openScene('Start', true, true);
            })
        }
    }
}
export default _DressingRoom.DressingRoom;