import { Component } from '@angular/core';
import {PactometroService} from "../../services/pactometro.service";
import {Observable} from "rxjs";
import {Partido} from "../../dto/partido";

@Component({
  selector: 'app-pactometro-subscribe',
  templateUrl: './pactometro-subscribe.component.html',
  styleUrls: ['./pactometro-subscribe.component.css']
})
export class PactometroSubscribeComponent {

  // solicito la llamada al API Rest
  public listadoObservable : Observable<Partido[]> = this.pactometroService.getData();
  // declaro el objeto visible en la plantilla
  public listadoVisible: Partido[] = [];
  // inyectar la dependencia del servicio
  constructor(private pactometroService: PactometroService) {
    // tratamiento de los datos de la petición
    // Al devolvernos un observable puedo subscribirme al posible resultado
    this.listadoObservable.subscribe(
      // recogemos los datos de la petición
      (data) => {
      console.log(data);
      console.log(data.length);
      // recorremos el array y lo metemos en el objeto visible
      data.forEach( (value : Partido) =>
        this.listadoVisible.push(value)
      );

      console.log(this.listadoVisible);
    });
  }

}
