import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'edit-species',
  template: `
    <div>
      <div *ngIf="selectedSpecies">
        <h3>{{selectedSpecies.description}}</h3>
        <p>Species Complete? {{selectedSpecies.done}}</p>
        <hr>
        <h3>Edit Species</h3>
        <label>Enter Species Description:</label>
        <input [(ngModel)]="selectedSpecies.description">
        <label>Enter Species Caretakers (2-8):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedSpecies.caretakers" [value]="2">1 (Low Caretakers)<br>
        <input type="radio" [(ngModel)]="selectedSpecies.caretakers" [value]="4">2 (Medium Caretakers)<br>
        <input type="radio" [(ngModel)]="selectedSpecies.caretakers" [value]="8">3 (High Caretakers)
        <button (click)="doneButtonClicked()">Done</button>
     </div>
    </div>
  `
})

export class EditSpeciesComponent {
  @Input() childSelectedSpecies: Species;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
   this.doneButtonClickedSender.emit();
 }

}
