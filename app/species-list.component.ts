import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'species-list',
  template: `
  <ul>
     <li (click)="isDone(currentSpecies)" *ngFor="let currentSpecies of childSpeciesList">Species: {{currentSpecies.description}}, Name:  {{currentSpecies.name}}, Age:  {{currentSpecies.age}}, Diet:  {{currentSpecies.diet}}, Location:  {{currentSpecies.location}}, Sex:  {{currentSpecies.sex}}, Likes:  {{currentSpecies.likes}}, Dislikes:  {{currentSpecies.dislikes}}, Caretakers:  {{currentSpecies.caretakers}} <button (click)="editButtonHasBeenClicked(currentSpecies)">Edit!</button></li>
   </ul>
  `
})

export class SpeciesListComponent {
  @Input() childSpeciesList: Species[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(speciesToEdit: Species) {
    this.clickSender.emit(speciesToEdit);
  }

  isDone(clickedSpecies: Species) {
     if(clickedSpecies.done === true) {
       alert("This Species is done!");
     } else {
       alert("This Species is not done. Better research more!");
     }
   }

   caretakersColor(currentSpecies){
     if (currentSpecies.caretakers === 2){
       return "bg-danger";
     } else if (currentSpecies.caretakers === 4) {
       return  "bg-warning";
     } else {
       return "bg-info";
     }
   }
}
