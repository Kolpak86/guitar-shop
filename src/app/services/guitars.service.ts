import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guitar } from '../models/guitar';

@Injectable({
  providedIn: 'root',
})
export class GuitarsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>('http://localhost:4000/guitars');
  }
}
