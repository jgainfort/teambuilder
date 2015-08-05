/// <reference path="../../typings/tsd.d.ts" />
var ChampionTypes = (function () {
    function ChampionTypes() {
        this.GET_ALL_CHAMPIONS = 'teambuilder::getAllChampions';
        this.GET_ALL_CHAMPIONS_SUCCESS = 'teambuilder::getAllChampions::success';
        this.GET_ALL_CHAMPIONS_ERROR = 'teambuilder:getAllChampions::error';
        this.GET_CHAMPION_BY_ID = 'teambuilder::getChampionById';
        this.GET_CHAMPION_BY_ID_SUCCESS = 'teambuilder::getChampionById::success';
        this.GET_CHAMPION_BY_ID_ERROR = 'teambuilder::getChampionById::error';
    }
    return ChampionTypes;
})();
module.exports = ChampionTypes;
