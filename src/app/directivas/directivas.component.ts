import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  booleano: boolean = true;

  listado: any[] = [
    {
      text: "Valor1",
      disabled: true,
    },
    {
      text: "Valor2",
      disabled: false,
    },
  ];

  currentItem: string = "stout";

  isSpecial: boolean = true;


}
