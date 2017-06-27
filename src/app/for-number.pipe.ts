import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'forNumber'
})
export class ForNumberPipe implements PipeTransform {
  transform(value, args: string[]): any {
    //create an arrya of length value
    return Array(parseInt(value, 10))
      //fill it with 0s
      .fill(0)
      //them transform it into an array of indices
      .map((_, index) => index);
  }
}
