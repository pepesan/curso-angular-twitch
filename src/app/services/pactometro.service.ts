import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Partido} from "../dto/partido";

@Injectable({
  providedIn: 'root'
})
export class PactometroService {

  url: string = "https://cursosdedesarrollo.com/pactometro/resultados.json";
  constructor(private httpClient: HttpClient) {
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
