import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    DividerComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    SearchComponent
  ]
})
export class SharedModule { }
