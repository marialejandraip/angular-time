import { Pipe, PipeTransform } from '@angular/core';

//Transforma los datos y los renderiza en patalla 
@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
