import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChurrascometroService {

  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private getPrecoCarneByName(nome: string): Observable<number> {
    return this.http.get<any[]>(`${this.API_URL}/carnes`).
      pipe(
        map(carnes => {
          const carne = carnes.find((carne: { nome: string }) => carne.nome === nome);

          if (carne) {
            return carne.preco_kg;
          }
        }),
        catchError(
          this.handlerError
        )
      );
  }

  private handlerError(error: HttpErrorResponse): Observable<any> {
    console.log('Ocorreu um erro: ' + error);
    return throwError(() => error);
  }

  getPrecoPicanha(): Observable<number> {
    return this.getPrecoCarneByName('picanha');
  }
}
