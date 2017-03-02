import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IDoccService } from './doccservice';

@Component({
    //moduleId: module.id,
    templateUrl: 'app/doccservices/doccservices-detail.component.html'
})

export class DoccServiceDetailComponent implements OnInit{
    pageTitle: string = "Docc-service Detail";
    doccService: IDoccService;

    constructor(private _route: ActivatedRoute, private _router:Router){ }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/doccservices']);
    }
}