import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  value = '';

  botonPulsado(event: MouseEvent) {
    console.log("Boton pulsado");
    console.log(event);
    console.log(event.target);
    console.log((event.currentTarget as HTMLButtonElement).id);
  }

  onEnter(value: string) {
    this.value = value;
  }
}
