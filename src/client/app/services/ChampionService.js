var SocketService_1 = require('app/services/SocketService');
var ChampionTypesVO_1 = require('app/vo/ChampionTypesVO');
var RegionsVO_1 = require('app/vo/RegionsVO');
var Utils_1 = require('app/utils/Utils');
var ChampionService = (function () {
    function ChampionService() {
        this.socketSvc = new SocketService_1.SocketService();
        this.championTypes = new ChampionTypesVO_1.ChampionTypes();
        this.regions = new RegionsVO_1.Regions();
        this.utils = new Utils_1.Utils();
    }
    ChampionService.prototype.setChampions = function (onSuccess, onError) {
        var _this = this;
        this.socketSvc.emit(this.championTypes.GET_ALL_CHAMPIONS, { region: this.regions.NA }, function (data) {
            if (data.error) {
                onError(data.error);
            }
            else {
                _this.champions = _this.utils.convertToList(data.data);
                onSuccess(_this.champions);
            }
        });
    };
    return ChampionService;
})();
exports.ChampionService = ChampionService;
