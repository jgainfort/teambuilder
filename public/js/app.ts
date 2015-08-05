/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, coreDirectives, NgZone} from 'angular2/angular2';
import {ChampionService} from 'js/services/ChampionService';

// Annotation section
@Component({
	selector: 'lol-team-builder',
	viewInjector: [ChampionService],
})
@View({
	templateUrl: 'templates/lol-team-builder.tpl.html',
	directives: [coreDirectives]
})

class TeamBuilderComponent {
	championSvc:ChampionService;
	zone:NgZone;
	champions:Array<Object>;
		
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
		console.error('Error retreiving champions data: Error = ', error);
	}
}	

bootstrap(TeamBuilderComponent, [ChampionService]);