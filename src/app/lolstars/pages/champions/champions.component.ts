import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChampionsServiceService } from '../../services/champions-service.service';
import { Datum, Tag } from '../../interfaces/all-champions.interface';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
})
export class ChampionsComponent  implements OnInit {
  // Properties:
  public listAllChampions!: Datum[];
  public filteredChampions!: Datum [];
  public isAnimated: boolean = false;


  constructor(private championsService: ChampionsServiceService) {}


  ngOnInit(): void {
    this.getAllChampionsList()
  }

  /**
   * Este metodo nos permite traer los campeones y asignarlos a una
   * variable para renderizarlos
   * @param void
   * @returns void
   */
  public getAllChampionsList(): void {
    this.championsService.getAllChampions().subscribe({
      next: (response) => {
        // convertimos este objeto en un array con sus valores
        this.listAllChampions = Object.values(response);
        // Creamos una copia y se la asignamos a la variable filtered
        this.filteredChampions = [...this.listAllChampions]
        console.log(this.listAllChampions.length)

      },
      error: (error) => {
        console.log(`hay un error: ${error}`);
      },
    });
  }

  /**
   * Metodo para filtrar por tipo de campeon
   * @param tag tipo string
   * @returns void
   */
  public filterByTag( tag: string ): void {
    // llamamos la variable que tiene la copia y utlizamos la funcion filter el cual nos permite filtrar en este campo los campeones que tengan incluido el tag
    this.filteredChampions = this.listAllChampions.filter( champion => champion.tags.includes(tag as Tag) )
    this.isAnimated = true;
    setTimeout(() => {
      this.isAnimated = false;
    }, 500);
    console.log(this.filteredChampions)
  }
}
