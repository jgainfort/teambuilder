/// <reference path="../../../../../typings/tsd.d.ts" />
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
var angular2_1 = require('angular2/angular2');
var ItemService_1 = require('app/services/ItemService');
var Items = (function () {
    function Items(itemSvc, zone) {
        var _this = this;
        this.onSetItemsSuccess = function (data) {
            _this.zone.run(function () {
                _this.items = data;
            });
        };
        this.onSetItemsError = function (error) {
            console.error('Error retreiving items data: Error = ', error);
        };
        this.itemSvc = itemSvc;
        this.zone = zone;
        this.itemSvc.setItems(this.onSetItemsSuccess, this.onSetItemsError);
    }
    Items = __decorate([
        angular2_1.Component({
            selector: 'items',
            viewInjector: [ItemService_1.ItemService]
        }),
        angular2_1.View({
            templateUrl: 'app/components/items/items.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [ItemService_1.ItemService, angular2_1.NgZone])
    ], Items);
    return Items;
})();
exports.Items = Items;
