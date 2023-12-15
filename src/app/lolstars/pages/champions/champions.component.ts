import { Component, OnInit } from '@angular/core';
import { ChampionsServiceService } from '../../services/champions-service.service';
import { Datum } from '../../interfaces/all-champions.interface';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
})
export class ChampionsComponent  implements OnInit{
  // Properties:
  public listAllChampions!: Datum[];

  constructor(private championsService: ChampionsServiceService) {}


  ngOnInit(): void {
    this.getAllChampionsList()
  }

  public getAllChampionsList() {
    this.championsService.getAllChampions().subscribe({
      next: (response) => {
        this.listAllChampions = Object.values(response);
        console.log(this.listAllChampions.length)

      },
      error: (error) => {
        console.log(`hay un error: ${error}`);
      },
    });
  }
}
