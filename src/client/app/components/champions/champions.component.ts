/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, NgFor, NgZone} from 'angular2/angular2';
import {ChampionService} from 'app/services/ChampionService';

@Component({
    selector: 'champions',
    viewInjector: [ChampionService]
})
@View({
    templateUrl: 'app/components/champions/champions.html',
    directives: [NgFor]
})

export class Champions {
    champions: Array<Object>;
    championSvc: ChampionService;
    zone: NgZone;

    constructor(championSvc: ChampionService, zone: NgZone) {
        this.championSvc = championSvc;
        this.zone = zone;

        this.championSvc.setChampions(this.onSetChampionsSuccess, this.onSetChampionsError);
    }

    onSetChampionsSuccess: Function = (data: Array<Object>) => {
        this.zone.run(() => {
            this.champions = data;
        });
    };

    onSetChampionsError: Function = (error: string) => {
        console.error('Error retreiving champion data: Error = ', error);
    };
}
