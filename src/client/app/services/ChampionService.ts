import {SocketService} from 'app/services/SocketService';
import {ChampionTypes} from 'app/vo/ChampionTypesVO';
import {Regions} from 'app/vo/RegionsVO';
import {Utils} from 'app/utils/Utils';

export class ChampionService {
    socketSvc: SocketService;
    championTypes: ChampionTypes;
    regions: Regions;
    utils: Utils;
    champions: Array<Object>;

    constructor() {
        this.socketSvc = new SocketService();
        this.championTypes = new ChampionTypes();
        this.regions = new Regions();
        this.utils = new Utils();
    }

    setChampions(onSuccess: Function, onError: Function): void {
        this.socketSvc.emit(this.championTypes.GET_ALL_CHAMPIONS, { region: this.regions.NA }, (data: any) => {
            if (data.error) {
                onError(data.error);
            } else {
                this.champions = this.utils.convertToList(data.data);
                onSuccess(this.champions);
            }
        });
    }

    getChampions(): Array<Object> {
        return this.champions;
    }
}
