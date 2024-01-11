import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './pages/champions/champions.component';
import { InfoChampionsComponent } from './pages/info-champions/info-champions.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { LolStarsRoutingModule } from './lolstars-routing.module';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';
import { ChampionsImagePipe } from './pipes/champions-image.pipe';
import { InfoChampionsPipe } from './pipes/info-champions.pipe';
import { DificultadChmapionPipe } from './pipes/dificultad-champions.pipe';





@NgModule({
  declarations: [
    ChampionsComponent,
    InfoChampionsComponent,
    LayoutPageComponent,
    ChampionCardComponent,
    ChampionsImagePipe,
    InfoChampionsPipe,
    DificultadChmapionPipe


  ],
  imports: [
    CommonModule,
    LolStarsRoutingModule,
  ]
})
export class LolstarsModule { }
