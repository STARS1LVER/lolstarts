import { Component, OnInit } from '@angular/core';
import { ChampionsServiceService } from '../../services/champions-service.service';
import { InfoC } from '../../interfaces/info-champions.interface';

@Component({
  selector: 'app-info-champions',
  templateUrl: './info-champions.component.html',
  styleUrls: ['./info-champions.component.css']
})
export class InfoChampionsComponent implements OnInit {

  // Properties:
  public infoChampion!: InfoC

  constructor( private championsService: ChampionsServiceService ){

  }

  ngOnInit(): void {
    // TODO

  }

}
