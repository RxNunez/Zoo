import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { SpeciesListComponent }  from './species-list.component';
import { EditSpeciesComponent } from './edit-species.component';


@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  SpeciesListComponent,
                  EditTaskComponent,
                                      ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
