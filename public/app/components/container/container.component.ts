/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, Attribute, DynamicComponentLoader, ElementRef} from 'angular2/angular2';
import {ChampionsComponent} from 'app/components/champions/champions.component';
import {ItemsComponent} from 'app/components/items/items.component';

@Component({
	selector: 'container',
	properties: ['title', 'content']
})
@View({
	templateUrl: 'app/components/container/container.html',
	directives: [ChampionsComponent, ItemsComponent]
})

export class ContainerComponent {
	
	constructor(@Attribute('content') content:string, dynamicComponentLoader:DynamicComponentLoader, elementRef:ElementRef) {
		var child;
		switch(content) {
			case 'champions':
				child = ChampionsComponent;
				break;
			case 'items':
				child = ItemsComponent;
				break;
			default:
				console.error('Invalid content type.');
		}
		dynamicComponentLoader.loadIntoLocation(child, elementRef, 'content');
	}
}
