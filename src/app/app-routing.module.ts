import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'hakkimizda', component: AboutMeComponent},
      {path: 'iletisim', component: ContactComponent}
    ]},
  {path: 'admin', component: AdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
