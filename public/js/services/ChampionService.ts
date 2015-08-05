// Import
import {SocketService} from 'js/services/SocketService';
import {ChampionTypes} from 'js/vo/ChampionTypesVO';
import {Regions} from 'js/vo/RegionsVO';

export class ChampionService {
	socketSvc:SocketService;
	championTypes:ChampionTypes;
	regions:Regions;
	champions:Object;
	 
	constructor() {
		this.socketSvc = new SocketService();
		this.championTypes = new ChampionTypes();
		this.regions = new Regions();
	}
	 
	setChampions(scope:any, onSuccess:Function, onError:Function) {
		this.socketSvc.emit(this.championTypes.GET_ALL_CHAMPIONS, {region: this.regions.NA}, (data) => {
			if (data.error) {
				onError(scope, data.error);
			} else {
				this.champions = this.convertToList(data.data);
				onSuccess(scope, this.champions);
			}
		});
	}
	
	convertToList(data:Object) {
		var list:Array<Object> = [];
		for (var item in data) {
			list.push(data[item]);	
		}
		return list;
	}	
 }


