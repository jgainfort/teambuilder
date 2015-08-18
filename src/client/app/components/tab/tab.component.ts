/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, Inject} from 'angular2/angular2';
import {Tabs} from 'app/components/tabs/tabs.component';

@Component({
    selector: 'tab',
    properties: ['tabTitle: tab-title']
})
@View({
    templateUrl: 'app/components/tab/tab.html'
})
export class Tab {
    active: boolean;

    constructor(@Inject(Tabs) tabs: Tabs) {
        tabs.addTab(this);
    }
}
