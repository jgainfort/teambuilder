/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, coreDirectives, NgZone} from 'angular2/angular2';
import {ContainerComponent} from 'app/components/container/container.component';
import {ChampionsComponent} from 'app/components/champions/champions.component';
import {ItemsComponent} from 'app/components/items/items.component';

// Annotation section
@Component({
	selector: 'lol-team-builder',
})
@View({
	templateUrl: 'app/lol-team-builder.html',
	directives: [ContainerComponent, ChampionsComponent, ItemsComponent]
})

class TeamBuilderComponent {
		
	constructor() {
		
	}
}	

bootstrap(TeamBuilderComponent);