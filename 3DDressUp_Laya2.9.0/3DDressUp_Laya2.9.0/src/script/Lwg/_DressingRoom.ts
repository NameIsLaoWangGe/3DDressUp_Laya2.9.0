import { Admin, DataAdmin } from "./Lwg";
import { _MakeTailor } from "./_MakeTailor";
import { _Res } from "./_PreLoad";
import { _PropTry } from "./_PropTry";

export module _DressingRoom {
    export class _General extends DataAdmin._Table {
        private static ins: _General;
        static _ins() {
            if (!this.ins) {
                this.ins = new _General('ClothesGeneral', _Res._list.json.GeneralClothes.url, true);
            }
            return this.ins;
        }
        _classify = {
            Dress: 'Dress',
            Top: 'Top',
            Bottoms: 'Bottoms',
        }
    }

    class _Item extends Admin._ObjectBase {
        lwgButton(): void {
            this._btnUp(this._Owner, (e: Laya.Event) => {
                _MakeTailor._DIYClothes._ins()._setPitch(this._Owner['_dataSource'][_MakeTailor._DIYClothes._ins()._property.name]);
            }, null)
        }
    }

    export class DressingRoom extends Admin._SceneBase {
        lwgOnAwake(): void {
            _General._ins()._List = this._ListVar('List');

            let arr = _MakeTailor._DIYClothes._ins()._getNoPropertyArr(_MakeTailor._DIYClothes._ins()._otherPro.completeSkin, "");

            _MakeTailor._DIYClothes._ins()._List = this._ListVar('List');
            _MakeTailor._DIYClothes._ins()._List.selectEnable = true;
            _MakeTailor._DIYClothes._ins()._List.vScrollBarSkin = "";
            _MakeTailor._DIYClothes._ins()._List.array = arr;
            _MakeTailor._DIYClothes._ins()._List.renderHandler = new Laya.Handler(this, (Cell: Laya.Box, index: number) => {
                let data = Cell.dataSource;
                let Icon = Cell.getChildByName('Icon') as Laya.Image;
                Icon.skin = arr[_MakeTailor._DIYClothes._ins()._otherPro.completeSkin];
                let Board = Cell.getChildByName('Board') as Laya.Image;
                Board.skin = `Lwg/UI/ui_orthogon_green.png`;
                if (data[_MakeTailor._DIYClothes._ins()._property.pitch]) {
                    Board.skin = `Lwg/UI/ui_l_orthogon_green.png`;
                } else {
                    Board.skin = `Lwg/UI/ui_orthogon_grass.png`;
                }
                if (!Cell.getComponent(_Item)) {
                    Cell.addComponent(_Item)
                }
            });

            _MakeTailor._DIYClothes._ins()._Tap = this._ListVar('Tap');
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