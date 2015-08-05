export class ChampionTypes {
	GET_ALL_CHAMPIONS:string;
	GET_ALL_CHAMPIONS_SUCCESS:string;
	GET_ALL_CHAMPIONS_ERROR:string;
	GET_CHAMPION_BY_ID:string;
	GET_CHAMPION_BY_ID_SUCCESS:string;
	GET_CHAMPION_BY_ID_ERROR:string;
	
	constructor() {
		this.GET_ALL_CHAMPIONS = 'teambuilder::getAllChampions';
		this.GET_ALL_CHAMPIONS_SUCCESS = 'teambuilder::getAllChampions::success';
		this.GET_ALL_CHAMPIONS_ERROR = 'teambuilder:getAllChampions::error';
		this.GET_CHAMPION_BY_ID = 'teambuilder::getChampionById';
		this.GET_CHAMPION_BY_ID_SUCCESS = 'teambuilder::getChampionById::success';
		this.GET_CHAMPION_BY_ID_ERROR = 'teambuilder::getChampionById::error';
	}
}