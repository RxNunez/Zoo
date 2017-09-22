import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Tracker for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
       <li (click)="isDone(currentSpecies)" *ngFor="let currentSpecies of species">{{currentSpecies.description}} <button (click)="editSpecies()">Edit!</button></li></li>
     </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo Tracker';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
   day: number = this.currentTime.getDate();
   year: number = this.currentTime.getFullYear();
   Specie: Species[] = [
   new Species("Arctic Fox"),
   new Species("Ocelot"),
   new Species("Northwest Black Tailed Deer")
   ];

   editSpecies() {
   alert("You just requested to edit a Species!");
 }
 isDone(clickedSpecies: Species) {
    if(clickedSpecies.done === true) {
      alert("This Species is done!");
    } else {
      alert("This Species is not done. Better research more!");
    }
  }

  }
  export class Species {
  public done: boolean = false;
  constructor(public description: string) { }

}
