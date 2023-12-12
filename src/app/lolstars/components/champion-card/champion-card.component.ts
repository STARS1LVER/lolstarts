import { Component, Input } from '@angular/core';
import { Datum } from '../../interfaces/all-champions.interface';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css']
})
export class ChampionCardComponent {

  @Input() public allChampionsList!: Datum

  ngOnInit(): void {
    if( !this.allChampionsList ) throw new Error('Property ChampionsList is required!!')
  }


}
