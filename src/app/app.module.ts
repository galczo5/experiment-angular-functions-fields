import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldsComponent } from './fields.component';
import { FunctionsComponent } from './functions.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    FunctionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
