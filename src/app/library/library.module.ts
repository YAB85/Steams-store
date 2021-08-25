import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesModule } from '../games/games.module';
import { SharedModule } from '../shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryHomeComponent } from './library-home/library-home.component';


@NgModule({
  declarations: [
    LibraryHomeComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
    GamesModule
  ],
  exports: []
})
export class LibraryModule { }
