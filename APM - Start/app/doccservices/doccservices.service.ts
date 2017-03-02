import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IDoccService} from './doccservice';


@Injectable()
export class DoccServicesService{
    private _doccServiceUrl = "api/services/services.json";

    constructor(private _http:Http){ }

    getServices() : Observable<IDoccService[]> {
        return this._http.get(this._doccServiceUrl)
        .map((response:Response)=> <IDoccService[]> response.json())  // end return array
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);

    } //end getservices method

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
    }

} // end class DoccServicesService