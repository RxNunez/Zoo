import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'edit-species',
  template: `
    <div>
      <div *ngIf="childSelectedSpecies">
        <h3>{{childSelectedSpecies.description}}</h3>
        <p>Species Complete? {{childSelectedSpecies.done}}</p>
        <hr>
        <h3>Edit Species</h3>
        <label>Enter Species Description:</label>
        <input [(ngModel)]="childSelectedSpecies.description">
        <label>Enter Species Caretakers (2-8):</label>
        <br>
        <input type="radio" [(ngModel)]="childSelectedSpecies.caretakers" [value]="2">1 (Two Caretakers)<br>
        <input type="radio" [(ngModel)]="childSelectedSpecies.caretakers" [value]="4">2 (Four Caretakers)<br>
        <input type="radio" [(ngModel)]="childSelectedSpecies.caretakers" [value]="8">3 (Eight Caretakers)
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
