/// <reference path="../../../../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var champions_component_1 = require('app/components/champions/champions.component');
var items_component_1 = require('app/components/items/items.component');
var ContainerComponent = (function () {
    function ContainerComponent(content, dynamicComponentLoader, elementRef) {
        var child;
        switch (content) {
            case 'champions':
                child = champions_component_1.ChampionsComponent;
                break;
            case 'items':
                child = items_component_1.ItemsComponent;
                break;
            default:
                console.error('Invalid content type.');
        }
        dynamicComponentLoader.loadIntoLocation(child, elementRef, 'content');
    }
    ContainerComponent = __decorate([
        angular2_1.Component({
            selector: 'container',
            properties: ['title', 'content']
        }),
        angular2_1.View({
            templateUrl: 'app/components/container/container.html',
            directives: [champions_component_1.ChampionsComponent, items_component_1.ItemsComponent]
        }),
        __param(0, angular2_1.Attribute('content')), 
        __metadata('design:paramtypes', [String, angular2_1.DynamicComponentLoader, angular2_1.ElementRef])
    ], ContainerComponent);
    return ContainerComponent;
})();
exports.ContainerComponent = ContainerComponent;
