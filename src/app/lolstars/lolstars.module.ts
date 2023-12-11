import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './pages/champions/champions.component';
import { InfoChampionsComponent } from './pages/info-champions/info-champions.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { LolStarsRoutingModule } from './lolstars-routing.module';




@NgModule({
  declarations: [
    ChampionsComponent,
    InfoChampionsComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LolStarsRoutingModule
  ]
})
export class LolstarsModule { }
