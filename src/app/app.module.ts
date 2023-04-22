import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import {FormsModule} from "@angular/forms";
import { DirectivasComponent } from './components/directivas/directivas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { UsaPropiedadesComponent } from './components/usa-propiedades/usa-propiedades.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DirectivasComponent,
    PipesComponent,
    PropiedadesComponent,
    UsaPropiedadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
