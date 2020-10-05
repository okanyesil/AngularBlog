import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {ComponentsModule} from '../components/components.module';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {MainNavComponent} from '../nav/main-nav/main-nav.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    MainLayoutComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [AboutMeComponent, ContactComponent, HomeComponent]
})
export class MainModule { }
