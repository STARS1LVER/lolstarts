import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'championsImage',

})

export class ChampionsImagePipe implements PipeTransform {
  transform( image: string ): string {

    return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${image}`


  }
}
