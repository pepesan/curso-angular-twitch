import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import {FormsModule} from "@angular/forms";
import { DirectivasComponent } from './components/directivas/directivas.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { UsaPropiedadesComponent } from './components/usa-propiedades/usa-propiedades.component';
import {TodoService} from "./services/todo.service";
import { UsaServicioComponent } from './components/usa-servicio/usa-servicio.component';
import { UsaServicio2Component } from './components/usa-servicio2/usa-servicio2.component';
import { PactometroComponent } from './components/pactometro/pactometro.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DirectivasComponent,
    PipesComponent,
    PropiedadesComponent,
    UsaPropiedadesComponent,
    UsaServicioComponent,
    PactometroComponent,
    UsaServicioComponent,
    UsaServicio2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
