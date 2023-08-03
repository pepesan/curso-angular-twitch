import { Component } from '@angular/core';
import {FormData} from "./form-data";

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.css']
})
export class FormBasicoComponent {

  public model: FormData;

  constructor() {
    this.model = new FormData("");
  }

  onSubmit() {
    console.log("Formulario Enviado");
    console.log(this.model);
  }
}
