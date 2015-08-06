/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, coreDirectives, NgZone} from 'angular2/angular2';
import {ChampionService} from 'js/services/ChampionService';
import {ItemService} from 'js/services/ItemService';

// Annotation section
@Component({
	selector: 'lol-team-builder',
	viewInjector: [ChampionService, ItemService],
})
@View({
	templateUrl: 'templates/lol-team-builder.tpl.html',
	directives: [coreDirectives]
})

class TeamBuilderComponent {
	championSvc:ChampionService;
	itemSvc:ItemService;
	zone:NgZone;
	champions:Array<Object>;
	items:Array<Object>;
		
	constructor(championSvc:ChampionService, itemSvc:ItemService, zone:NgZone) {
		this.championSvc = championSvc;
		this.itemSvc = itemSvc;
		this.zone = zone;
	}
	
	onInit() {
		this.championSvc.setChampions(this, this.onSetChampionsSuccess, this.onSetChampionsError);
		this.itemSvc.setItems(this, this.onItemsSuccess, this.onItemsError);
	}
	
	onSetChampionsSuccess(self:any, data:Array<Object>) {
		self.zone.run(() => {
			self.champions = data;
		});
	}
	
	onSetChampionsError(self:any, error:string) {
		console.error('Error retreiving champions data: Error = ', error);
	}
	
	onItemsSuccess(self:any, data:Array<Object>) {
		self.zone.run(() => {
			self.items = data;
		});
	}
	
	onItemsError(self:any, error:string) {
		console.error('Error retreving items data: Error = ', error);
	}
}	

bootstrap(TeamBuilderComponent, [ChampionService, ItemService]);