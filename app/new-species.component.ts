import { Component, Output, EventEmitter } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'new-species',
  template: `
    <h1>New Species</h1>
    <div>
     <label>Enter Species Description:</label>
     <input #newDescription>
   </div>
   <div>
    <label>Species Caretakers:</label>
    <select #newCaretakers>
      <option [value]="1"> Low Caretakers </option>
      <option [value]="2"> Medium Caretakers </option>
      <option [value]="3"> High Caretakers </option>
    </select>
    <button (click)="submitForm(newDescription.value, newCaretakers.value); newDescription.value='';">Add</button>
    </div>
  `
})

export class NewSpeciesComponent {
@Output() newSpeciesSender = new EventEmitter();

  submitForm(description: string, caretakers: number) {
    var newSpeciesToAdd: Species = new Species(description, caretakers);
    this.newSpeciesSender.emit(newSpeciesToAdd);
  }

}
