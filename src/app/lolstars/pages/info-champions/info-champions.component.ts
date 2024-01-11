import { Component, OnInit } from '@angular/core';
import { ChampionsServiceService } from '../../services/champions-service.service';
import { InfoC } from '../../interfaces/info-champions.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-info-champions',
  templateUrl: './info-champions.component.html',
  styleUrls: ['./info-champions.component.css']
})
export class InfoChampionsComponent implements OnInit {

  // Properties:
  public infoChampion!: InfoC

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private championsService: ChampionsServiceService ){

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.championsService.getInfoDetailsChampions(id)),
    )
    .subscribe({
      next:( response: any ) => {
        if( !response ) return this.router.navigate(['lol/champions'])
        const championKey  = Object.keys(response)[0] //Obtenemos la key del champion, para obtener su informacion
        this.infoChampion = response[championKey]
        console.log(this.infoChampion.id)

        return
      },
      error: (error) => {
        console.log('Hay un error en la api ')
        console.log(error.status)
      }
    })


  }

  public showChampion(): void {
    console.log(this.infoChampion)
  }
}


