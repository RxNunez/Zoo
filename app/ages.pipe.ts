import {Pipe, PipeTransform} from '@angular/core';
import {Species} from './species.model';

@Pipe({
name: "ages",
pure: false
})


export class AgesPipe implements PipeTransform {
transform(input: Species[], desiredAges) {
  var output: Species[] = [];

  if (desiredAges === "youngSpecies"){
    for (var i=0; i<input.length; i++) {
      if(input[i].age < 2){
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredAges === "matureSpecies"){
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
