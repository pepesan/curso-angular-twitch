import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-usa-servicio2',
  templateUrl: './usa-servicio2.component.html',
  styleUrls: ['./usa-servicio2.component.css']
})
export class UsaServicio2Component {

  public cadena: string;

  constructor(private  todoService: TodoService) {
    this.cadena = this.todoService.getData();
  }

}
