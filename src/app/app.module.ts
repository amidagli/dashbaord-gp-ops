import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import 'hammerjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BusinessviewComponent } from './businessview/businessview.component';
import { OperationviewComponent } from './operationview/operationview.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusinessviewComponent,
    OperationviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }