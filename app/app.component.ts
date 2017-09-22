import { Component } from '@angular/core';
import { Species } from './species.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo Tracker for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>

      <species-list [childSpeciesList]="masterSpeciesList" (clickSender)="editSpecies($event)></species-list>
       <hr>
      <edit-species [childSelectedSpecies]="selectedSpecies" (doneButtonClickedSender)="finishedEditing()"></edit-species>
      <new-species (newSpeciesSender)="addSpecies($event)"></new-species>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo Tracker';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedSpecies = null;

   masterSpeciesList: Species[] = [
     new Species("Arctic Fox", 2),
     new Species("Ocelot", 4),
     new Species("Northwest Black Tailed Deer", 8)
   ];

   editSpecies(clickedSpecies) {
   this.selectedSpecies = clickedSpecies;
   }

    finishedEditing() {
      this.selectedSpecies = null;
    }

    addSpecies(newSpeciesFromChild: Task) {
    this.masterSpeciesList.push(newSpeciesFromChild);
  }

  }
