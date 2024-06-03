import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Vinil } from '../vinilo-list/Vinil';

const URL = "https://665bad7d3e4ac90a04d7c23f.mockapi.io/vinils/vinil-info";

@Injectable({
  providedIn: 'root'
})
export class VinilDataService {

  constructor(private http: HttpClient) { }

  /*
  **Obtengo todos los vinilos desde la API
  */
  public getAll(): Observable<Vinil[]> {
    return this.http.get<Vinil[]>(URL).pipe(tap((vinils: Vinil[]) =>
    vinils.forEach(vinil =>{
      vinil.quantity = 0;
      vinil.initialStock = vinil.stock;
    })));
  }
}
