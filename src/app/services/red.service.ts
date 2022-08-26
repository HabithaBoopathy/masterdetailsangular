import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../models/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  URL='http://localhost:8090/';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createRed(red: Red): Observable<boolean> {
    return this.http.post<boolean>(`${this.URL}red`, red);
  }
  getRed(): Observable<Red[]> {
    return this.http.get<Red[]>(`${this.URL}red`);
  }
}
