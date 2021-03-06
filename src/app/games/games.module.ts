import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { GamesHomeComponent } from './games-home/games-home.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    GamesHomeComponent,
    CardComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ],
  exports: [
    CardComponent
  ]
})
export class GamesModule { }
