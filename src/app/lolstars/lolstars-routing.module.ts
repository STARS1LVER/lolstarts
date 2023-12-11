import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { InfoChampionsComponent } from './pages/info-champions/info-champions.component';


const routes: Routes = [
  { path: '', component: LayoutPageComponent,
  children: [
    {path: 'champions', component: ChampionsComponent},
    {path: 'info-champions/:id', component: InfoChampionsComponent},
    {path: '**', redirectTo: 'champions'}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes
    )],
  exports: [RouterModule],
  providers: [],
})
export class LolStarsRoutingModule {}
