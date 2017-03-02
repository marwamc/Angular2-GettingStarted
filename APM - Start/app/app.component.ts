import { Component } from '@angular/core';

import { DoccServicesService } from './doccservices/doccservices.service';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl: 'navbar.html',
    providers: [ DoccServicesService ]
})

export class AppComponent{
    pageTitle:string = "Docc Solutions";
}


//<h1> {{pageTitle}}</h1>
//        <sm-services> </sm-services>