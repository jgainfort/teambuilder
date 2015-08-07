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

export class ChampionsComponent {
	champions:Array<Object>;
	championSvc:ChampionService;
	zone:NgZone;
	
	constructor(championSvc:ChampionService, zone:NgZone) {
		this.championSvc = championSvc;
		this.zone = zone;
	}
	
	onInit() {
		this.championSvc.setChampions(this, this.onSetChampionsSuccess, this.onSetChampionsError);
	}
	
	onSetChampionsSuccess(self:any, data:Array<Object>) {
		self.zone.run(() => {
			self.champions = data;
		});
	}
	
	onSetChampionsError(self:any, error:string) {
		console.error('Error retreiving champion data: Error = ', error);
	}
}
