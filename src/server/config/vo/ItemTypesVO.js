/// <reference path="../../../../typings/tsd.d.ts" />
var ItemTypes = (function () {
    function ItemTypes() {
        this.GET_ALL_ITEMS = 'teambuilder::getAllItems';
        this.GET_ALL_ITEMS_SUCCESS = 'teambuilder::getAllItems::success';
        this.GET_ALL_ITEMS_ERROR = 'teambuilder:getAllItems::error';
        this.GET_ITEM_BY_ID = 'teambuilder::getItemById';
        this.GET_ITEM_BY_ID_SUCCESS = 'teambuilder::getItemById::success';
        this.GET_ITEM_BY_ID_ERROR = 'teambuilder::getItemById::error';
    }
    return ItemTypes;
})();
module.exports = ItemTypes;
