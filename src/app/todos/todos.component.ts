import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  public cadena: string = "Valor inicial";
  public todo: any = {
    text: "Valor"
  }
  // listado de datos a presentar
  public todos: any[] = [];

  ngOnInit(): void {
    this.todos = [
      {text: "Valor1"},
      {text: "Valor2"},
    ]
  }

}
