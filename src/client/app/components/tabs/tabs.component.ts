/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Tab} from 'app/components/tab/tab.component';

@Component({
    selector: 'tabs'
})
@View({
    templateUrl: 'app/components/tabs/tabs.html',
    directives: [NgFor]
})
export class Tabs {
    tabs: Array<Tab>;

    constructor() {
        this.tabs = [];
    }

    selectTab(tab: Tab): void {
        this.tabs.forEach((t: Tab) => {
           t.active = false;
        });
        tab.active = true;
    }

    addTab(tab: Tab): void {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}
