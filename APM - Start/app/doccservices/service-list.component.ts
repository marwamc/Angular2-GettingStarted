import {Component, OnInit} from '@angular/core';

import { IDoccService } from './doccservice';
import { DoccServicesService } from './doccservices.service'

@Component({
    //selector: 'sm-services',
    moduleId: module.id,
    templateUrl: 'service-list.component.html',
    styleUrls: ['service-list.component.css']
})

export class ServiceListComponent implements OnInit{
    pageTitle: string = 'Services List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    message: string;
    errorMessage: string;

    doccservices: IDoccService[];

    constructor(private _doccServicesService : DoccServicesService){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('In OnInit');
        this._doccServicesService.getServices()
        .subscribe(doccServices => this.doccservices = doccServices,
        error => this.errorMessage = <any> error);
    }

     onRatingClicked(message:string): void {
        this.pageTitle = "Service List: " + message;
    }

}