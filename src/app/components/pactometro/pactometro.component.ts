import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Partido} from "../../dto/partido";
import {catchError, Observable} from "rxjs";

@Component({
  selector: 'app-pactometro',
  templateUrl: './pactometro.component.html',
  styleUrls: ['./pactometro.component.css']
})
export class PactometroComponent {

  url: string = "https://cursosdedesarrollo.com/pactometro/resultados.json";
  public listado: any;
  constructor(private httpClient: HttpClient) {
    this.listado = this.getData().toPromise();
  }

  getData(){
    return this.httpClient
      .get<Observable<Partido[]>>(this.url)
      .pipe(catchError(this.handleError('get', [])));
  }

  private handleError (operation = 'operation', result?: any) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return result;
    };
  }


}
