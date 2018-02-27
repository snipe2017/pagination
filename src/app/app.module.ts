import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { PageService } from './page.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
