import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer, ROOT_FEATURE_KEY } from './state/00-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers : metaReducers
    }) /*1 Pour Root reducer et 2 pour meta Reducer*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
