// Import
var SocketService_1 = require('js/services/SocketService');
var ChampionTypesVO_1 = require('js/vo/ChampionTypesVO');
var RegionsVO_1 = require('js/vo/RegionsVO');
var ChampionService = (function () {
    function ChampionService() {
        this.socketSvc = new SocketService_1.SocketService();
        this.championTypes = new ChampionTypesVO_1.ChampionTypes();
        this.regions = new RegionsVO_1.Regions();
    }
    ChampionService.prototype.setChampions = function (scope, onSuccess, onError) {
        var _this = this;
        this.socketSvc.emit(this.championTypes.GET_ALL_CHAMPIONS, { region: this.regions.NA }, function (data) {
            if (data.error) {
                onError(scope, data.error);
            }
            else {
                _this.champions = _this.convertToList(data.data);
                onSuccess(scope, _this.champions);
            }
        });
    };
    ChampionService.prototype.convertToList = function (data) {
        var list = [];
        for (var item in data) {
            list.push(data[item]);
        }
        return list;
    };
    return ChampionService;
})();
exports.ChampionService = ChampionService;
