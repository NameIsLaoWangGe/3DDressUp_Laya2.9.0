import { Admin, DataAdmin } from "./Lwg";
import { _Res } from "./_PreLoad";

export module _DressingRoom {
    export class _Data extends DataAdmin._Table {
        private static instance: _Data;
        static _getIns() {
            if (!this.instance) {
                this.instance = new _Data('Clothes', _Res._list.json.Clothes.url, true, 'name', null,);
            }
            return this.instance;
        }
        _classify = {
            Dress: 'Dress',
            Top: 'Top',
            Bottoms: 'Bottoms',
        }
    }
    export class DressingRoom extends Admin._SceneBase {
        lwgOnAwake(): void {
            _Data._getIns()._List = this._ListVar('List');
            _Data._getIns()._List.selectEnable = true;
            _Data._getIns()._List.vScrollBarSkin = "";
            _Data._getIns()._List.array = _Data._getIns()._arr;
            console.log(_Data._getIns()._List.array);
            _Data._getIns()._List.renderHandler = new Laya.Handler(this, () => {

            });
            _Data._getIns()._Tap = this._ListVar('Tap');

        }
    }
}
export default _DressingRoom.DressingRoom;