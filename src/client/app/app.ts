/// <reference path="../../../typings/angular2/angular2.d.ts" />

import 'zone.js';
import 'reflect-metadata';

import {Component, View, bootstrap} from 'angular2/angular2';
import {ContainerComponent} from 'app/components/container/container.component';
import {ChampionsComponent} from 'app/components/champions/champions.component';
import {ItemsComponent} from 'app/components/items/items.component';

// annotation section
@Component({
    selector: 'lol-team-builder'
})
@View({
    templateUrl: 'app/lol-team-builder.html',
    directives: [ContainerComponent, ChampionsComponent, ItemsComponent]
})

class TeamBuilderApp {
}

bootstrap(TeamBuilderApp);
