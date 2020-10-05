import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuCategoryComponent} from './menu-category/menu-category.component';
import {RouterModule} from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';



@NgModule({
  declarations: [
    MenuCategoryComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuCategoryComponent
  ]
})
export class ComponentsModule { }
