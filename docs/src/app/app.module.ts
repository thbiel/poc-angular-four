import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HoldingsComponent} from './holdings/holdings.component';
import {HoldingsService} from './holdings-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HoldingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HoldingsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
