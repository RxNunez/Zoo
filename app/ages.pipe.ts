import {Pipe, PipeTransform} from '@angular/core';
import {Species} from './species.model';

@Pipe({
name: "ages",
pure: false
})


export class AgePipe implements PipeTransform {
transform(input: Species[], ageFilter) {
  var output: Species[] = [];

  if (ageFilter === "young"){
    for (var i=0; i<input.length; i++) {
      if(input[i].age < 2){
        output.push(input[i]);
      }
    }
    return output;
  } else if (ageFilter === "mature"){
    for (var i=0; i<input.length; i++) {
      if(input[i].age >= 2){
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
