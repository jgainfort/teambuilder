/// <reference path="../../../typings/tsd.d.ts" />

export class ItemTypes{
	GET_ALL_ITEMS:string;
	GET_ALL_ITEMS_SUCCESS:string;
	GET_ALL_ITEMS_ERROR:string;
	GET_ITEM_BY_ID:string;
	GET_ITEM_BY_ID_SUCCESS:string;
	GET_ITEM_BY_ID_ERROR:string;
	
	constructor() {
		this.GET_ALL_ITEMS = 'teambuilder::getAllItems';
		this.GET_ALL_ITEMS_SUCCESS = 'teambuilder::getAllItems::success';
		this.GET_ALL_ITEMS_ERROR = 'teambuilder:getAllItems::error';
		this.GET_ITEM_BY_ID = 'teambuilder::getItemById';
		this.GET_ITEM_BY_ID_SUCCESS = 'teambuilder::getItemById::success';
		this.GET_ITEM_BY_ID_ERROR = 'teambuilder::getItemById::error';
	}	
}