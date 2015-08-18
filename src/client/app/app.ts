/// <reference path="../../../typings/angular2/angular2.d.ts" />

import 'zone.js';
import 'reflect-metadata';

import {Component, View, bootstrap} from 'angular2/angular2';
import {Tabs} from 'app/components/tabs/tabs.component';
import {Tab} from 'app/components/tab/tab.component';
import {Champions} from 'app/components/champions/champions.component';
import {Items} from 'app/components/items/items.component';

// annotation section
@Component({
    selector: 'lol-team-builder'
})
@View({
    templateUrl: 'app/lol-team-builder.html',
    directives: [Tabs, Tab, Champions, Items]
})

class TeamBuilderApp {
}

bootstrap(TeamBuilderApp);
