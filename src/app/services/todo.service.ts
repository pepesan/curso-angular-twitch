import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public cadena: string;

  constructor() {
    console.log("Iniciando el TodoService");
    this.cadena = "Valor Inicial";
  }
}
