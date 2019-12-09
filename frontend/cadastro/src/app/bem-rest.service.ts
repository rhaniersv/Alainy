import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from './const';

@Injectable({
  providedIn: 'root'
})
export class BemRestService {

  constructor(private http: HttpClient) { }

  save(bem: any): Observable<any> {
    return this.http.post(endpoint + 'bem/save', bem);
  }

  list(): Observable<any> {
    return this.http.get(endpoint + 'bem/list');
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint + 'bem/delete/' + id);
  }


}
