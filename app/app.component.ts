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
          <button (click)="finishedEditing()">Done</button>
       </div>
      </div>
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

   masterSpecies: Species[] = [
   new Species("Arctic Fox", 2),
   new Species("Ocelot", 4),
   new Species("Northwest Black Tailed Deer", 8)
   ];

   editSpecies(clickedSpecies) {
   this.selectedSpecies = clickedSpecies;
   }

    finishedEditing() {
      this.selectedTask = null;
    }


  }
