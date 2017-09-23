import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'species-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allSpecies">All Species</option>
      <option value="youngSpecies">Young Species</option>
      <option value="matureSpecies" selected="selected">Mature Species</option>
    </select>
    <ul>
      <li *ngFor="let currentSpecies of childSpeciesList | ages:filterByAges">Species: {{currentSpecies.description}}, Name:  {{currentSpecies.name}}, Age:  {{currentSpecies.age}}, Diet:  {{currentSpecies.diet}}, Location:  {{currentSpecies.location}}, Sex:  {{currentSpecies.sex}}, Likes:  {{currentSpecies.likes}}, Dislikes:  {{currentSpecies.dislikes}}, Caretakers:  {{currentSpecies.caretakers}}
      <button (click)="editButtonHasBeenClicked(currentSpecies)">Edit!</button></li>
     </ul>
  `
})

export class SpeciesListComponent {
  @Input() childSpeciesList: Species[];
  @Output() clickSender = new EventEmitter();
  filterByAges: string = "matureSpecies";

  editButtonHasBeenClicked(speciesToEdit: Species) {
    this.clickSender.emit(speciesToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAges = optionFromMenu;
  }
}
