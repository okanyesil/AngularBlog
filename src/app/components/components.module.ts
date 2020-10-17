import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuCategoryComponent} from './menu-category/menu-category.component';
import {RouterModule} from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    MenuCategoryComponent,
    PageTitleComponent
  ]
})
export class ComponentsModule { }
