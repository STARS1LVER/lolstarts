import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dificultadChampions'
})

export class DificultadChmapionPipe implements PipeTransform {
  transform(number: number): string {

    let dificultad: string = ''

    switch(number){
      case 1:
      case 2:
      case 3:
      case 4 :
        return dificultad = 'Facil'
        break;
      case 0:
      case 5:
      case 6:
      case 7:
        return dificultad = 'Moderada'
        break;
      case 8:
      case 9:
      case 10:
        return dificultad = 'Dificil'
        break;
    }

    return dificultad;
  }
}
