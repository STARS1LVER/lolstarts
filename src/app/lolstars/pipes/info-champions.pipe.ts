import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infoChampionsImage'
})

export class InfoChampionsPipe implements PipeTransform {
  transform(champions: string): string | void {

    const newImage: string = champions.split(".png")[0];

    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${newImage}_0.jpg`


  }
}
