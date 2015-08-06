// Import
import {SocketService} from 'js/services/SocketService';
import {ChampionTypes} from 'js/vo/ChampionTypesVO';
import {Regions} from 'js/vo/RegionsVO';
import {Utils} from 'js/utils/Utils';

export class ChampionService {
	socketSvc:SocketService;
	championTypes:ChampionTypes;
	regions:Regions;
	utils:Utils;
	champions:Object;
	 
	constructor() {
		this.socketSvc = new SocketService();
		this.championTypes = new ChampionTypes();
		this.regions = new Regions();
		this.utils = new Utils();
	}
	 
	setChampions(scope:any, onSuccess:Function, onError:Function) {
		this.socketSvc.emit(this.championTypes.GET_ALL_CHAMPIONS, {region: this.regions.NA}, (data) => {
			if (data.error) {
				onError(scope, data.error);
			} else {
				this.champions = this.utils.convertToList(data.data);
				onSuccess(scope, this.champions);
			}
		});
	}
 }


