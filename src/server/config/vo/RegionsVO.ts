/// <reference path="../../../../typings/tsd.d.ts" />

class Regions {
	NA:string;
	BR:string;
	EUNE:string;
	EUW:string;
	LAN:string;
	LAS:string;
	KR:string;
	OCE:string;
	RU:string;
	TR:string;
	
	constructor() {
		this.NA = 'na';
		this.BR = 'br';
		this.EUNE = 'eune';
		this.EUW = 'euw';
		this.LAN = 'lan';
		this.LAS = 'las';
		this.KR = 'kr';
		this.OCE = 'oce';
		this.RU = 'ru';
		this.TR = 'tr';
	}
}

export = Regions;