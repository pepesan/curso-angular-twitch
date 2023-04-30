import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Partido} from "../../dto/partido";
import {catchError, Observable} from "rxjs";
import {TodoService} from "../../services/todo.service";
import {PactometroService} from "../../services/pactometro.service";

@Component({
  selector: 'app-pactometro',
  templateUrl: './pactometro.component.html',
  styleUrls: ['./pactometro.component.css']
})
export class PactometroComponent {


  listado = this.pactometroService.getData().toPromise();
  constructor(private pactometroService: PactometroService) {
  }

}
