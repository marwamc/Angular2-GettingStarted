import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ServiceListComponent } from './doccservices/service-list.component';
import { ServiceFilterPipe } from './doccservices/service-filter.pipe';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { DoccServiceDetailComponent } from './doccservices/doccservices-detail.component';
import { DoccServiceDetailGuard } from './navigationguards/doccservice-guard.service';


@NgModule({
  imports: [BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
              {path: "doccservices", component: ServiceListComponent},
              {path: "doccservice/:id", canActivate: [ DoccServiceDetailGuard ], 
              component: DoccServiceDetailComponent},
              {path: "welcome", component: WelcomeComponent},
              {path: "", redirectTo: "welcome", pathMatch: "full" },
              {path: "**", redirectTo: "welcome", pathMatch: "full" }
            ],{useHash: true})
  ],
  declarations: [ AppComponent,
                  ServiceListComponent,
                  ServiceFilterPipe,
                  StarComponent,
                  WelcomeComponent,
                  DoccServiceDetailComponent
  ],
  providers: [ DoccServiceDetailGuard ],
  bootstrap: [ AppComponent]
})

export class AppModule { }
