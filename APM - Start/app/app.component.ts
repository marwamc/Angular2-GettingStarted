import { Component } from '@angular/core';


@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1> {{pageTitle}}</h1>
        <div> Docc Home Page </div>
    </div>`
})

export class AppComponent{
    pageTitle:string = "Docc Solutions";
}
