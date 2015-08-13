/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, NgFor, NgZone} from 'angular2/angular2';
import {ChampionService} from 'app/services/ChampionService';

@Component({
    selector: 'champions'
})
@View({
    templateUrl: 'app/components/champions/champions.html',
    directives: [NgFor]
})

export class ChampionsComponent {
    champions: Array<Object>;
    championSvc: ChampionService;
    zone: NgZone;

    constructor(championSvc: ChampionService, zone: NgZone) {
        this.championSvc = championSvc;
        this.zone = zone;

        this.championSvc.setChampions(this.onSetChampionsSuccess, this.onSetChampionsError);
    }

    onSetChampionsSuccess(data: Array<Object>): void {
        console.log('Retreived champion data: Data = ', data);
    }

    onSetChampionsError(error: string): void {
        console.error('Error retreiving champion data: Error = ', error);
    }
}
