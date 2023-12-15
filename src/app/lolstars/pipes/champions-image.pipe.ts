import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'championsImage',

})

export class ChampionsImagePipe implements PipeTransform {
  transform( image: string ): string {

    const newImage: string = image.split(".png")[0];

    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${newImage}_0.jpg`


  }
}
