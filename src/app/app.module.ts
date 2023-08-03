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
import {PactometroService} from "./services/pactometro.service";
import { PactometroSubscribeComponent } from './components/pactometro-subscribe/pactometro-subscribe.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { Form01Component } from './components/form01/form01.component';
import { FormBasicoComponent } from './components/form-basico/form-basico.component';

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
    UsaServicio2Component,
    PactometroSubscribeComponent,
    EventosComponent,
    Form01Component,
    FormBasicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService, PactometroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
