import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from './const';

@Injectable({
  providedIn: 'root'
})
export class TipoRestService {

  constructor(private http: HttpClient) { }


  save(tipo: any): Observable<any> {
    return this.http.post(endpoint + 'tipo/save', tipo);
  }

  list(): Observable<any> {
    return this.http.get(endpoint + 'tipo/list');
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint + 'tipo/delete/' + id);
  }


}
