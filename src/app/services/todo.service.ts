import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public cadena: string;
  public numero: number;

  constructor() {
    console.log("Iniciando el TodoService");
    this.cadena = "Valor Inicial";
    this.numero = 44;
  }

  getData(){
    return this.cadena.toUpperCase();
  }
}
