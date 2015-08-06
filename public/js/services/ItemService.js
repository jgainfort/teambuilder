// Import
var SocketService_1 = require('js/services/SocketService');
var ItemTypesVO_1 = require('js/vo/ItemTypesVO');
var RegionsVO_1 = require('js/vo/RegionsVO');
var Utils_1 = require('js/utils/Utils');
var ItemService = (function () {
    function ItemService() {
        this.socketSvc = new SocketService_1.SocketService();
        this.itemTypes = new ItemTypesVO_1.ItemTypes();
        this.regions = new RegionsVO_1.Regions();
        this.utils = new Utils_1.Utils();
    }
    ItemService.prototype.setItems = function (scope, onItemsSuccess, onItemsError) {
        var _this = this;
        this.socketSvc.emit(this.itemTypes.GET_ALL_ITEMS, { region: this.regions.NA }, function (data) {
            if (data.error) {
                onItemsError(scope, data.error);
            }
            else {
                _this.items = _this.utils.convertToList(data.data);
                onItemsSuccess(scope, _this.items);
            }
        });
    };
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    return ItemService;
})();
exports.ItemService = ItemService;