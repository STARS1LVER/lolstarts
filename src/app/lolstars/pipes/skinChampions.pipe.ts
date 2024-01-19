import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skinImage'
})

export class SkinImagePipe implements PipeTransform {
  transform(name: string, number: number): any {

    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${number}.jpg`

  }
}
