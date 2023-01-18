import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { PresentationComponent } from './presentation/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
