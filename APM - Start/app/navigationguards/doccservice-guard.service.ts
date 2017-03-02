import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class DoccServiceDetailGuard implements CanActivate{

    constructor(private _router:Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        if(isNaN(id) || id<1){
            alert("Invalid Service ID");
            this._router.navigate(['/doccservices']);
            return false;
        };
        return true;
    }
}