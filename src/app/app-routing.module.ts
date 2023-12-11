import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lol',
    loadChildren: () => import('./lolstars/lolstars.module').then( modulo  => modulo.LolstarsModule )
  },
  {
    path: '**',
    redirectTo: 'lol'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
