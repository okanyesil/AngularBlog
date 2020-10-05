import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';

import {HttpClientModule} from '@angular/common/http';
import {MainModule} from './pages/main.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
