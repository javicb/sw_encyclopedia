import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SwEncyclopediaModule } from './sw_encyclopedia/sw-encyclopedia.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    SwEncyclopediaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
