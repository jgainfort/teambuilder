/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'container',
	properties: ['title']
})
@View({
	templateUrl: 'app/components/container/container.html'
})

export class ContainerComponent {
	
	constructor() {
	
	}
}
