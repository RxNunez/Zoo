import { Component, Output, EventEmitter } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'new-species',
  template: `
    <h1>New Species</h1>
    <div>
     <label>Enter Species Description:</label>
     <input #newDescription>
     <br>
     <label>Enter Species Name:</label>
     <input #newName>
     <br>
     <label>Enter Species Age:</label>
     <input #newAge>
     <br>
     <label>Enter Species Diet:</label>
     <input #newDiet>
     <br>
     <label>Enter Species Location:</label>
     <input #newLocation>
     <br>
     <label>Enter Species Sex:</label>
     <input #newSex>
     <br>
     <label>Enter Species Likes:</label>
     <input #newLikes>
     <br>
     <label>Enter Species Dislikes:</label>
     <input #newDislikes>
     <br>
   </div>
   <div>
    <label>Species Caretakers:</label>
    <select #newCaretakers>
      <option [value]="1"> Two Caretakers </option>
      <option [value]="2"> Four Caretakers </option>
      <option [value]="3"> Eight Caretakers </option>
    </select>
    <button (click)="submitForm(newDescription.value, newName.value, newAge.value, newDiet.value, newLocation.value, newSex.value, newLikes.value, newDislikes.value, newCaretakers.value); newDescription.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </div>
  `
})

export class NewSpeciesComponent {
@Output() newSpeciesSender = new EventEmitter();

  submitForm(description: string, name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string, caretakers: number) {
  var newSpeciesToAdd: Species = new Species(description, name, age, diet, location, sex, likes, dislikes, caretakers);
  this.newSpeciesSender.emit(newSpeciesToAdd);
  }

}
