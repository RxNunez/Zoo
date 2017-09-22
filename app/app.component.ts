import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Tracker for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
       <li *ngFor="let currentSpecies of species">{{currentSpecies.description}}</li>
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
    description:
  }
  export class Species {
  public done: boolean = false;
  constructor(public description: string) { }

}
