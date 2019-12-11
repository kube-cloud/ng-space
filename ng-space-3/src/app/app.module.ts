import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RocketsListComponent } from './rockets-list/rockets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RocketDetailsComponent } from './rocket-details/rocket-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';

// TODO 1 : Add routing to application
// TODO 2 : Add rockets route
// TODO 4 : Add rockets/{id} route
// TODO 9 : Add notfound route
// TODO 9 : Redirect any unknow route to notfound

@NgModule({
  declarations: [
    AppComponent,
    RocketsListComponent,
    RocketDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
