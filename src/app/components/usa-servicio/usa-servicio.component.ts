import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-usa-servicio',
  templateUrl: './usa-servicio.component.html',
  styleUrls: ['./usa-servicio.component.css']
})
export class UsaServicioComponent {

  cadenaComponente: string;
  numeroComponente: number;
  cadenaComponenteProcesada: string;

  constructor(private todoService: TodoService) {
    this.cadenaComponente = this.todoService.cadena;
    this.numeroComponente = this.todoService.numero;
    this.cadenaComponenteProcesada = this.todoService.getData();
  }

}
