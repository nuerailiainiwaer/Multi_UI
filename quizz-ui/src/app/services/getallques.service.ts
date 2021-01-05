import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetallquesService {
  constructor(private http: HttpClient) {}
  getQuestions() {
    const privat_road4 = 'http://localhost:5000/api/v1/questions';
    return this.http.get<any>(privat_road4);
  }
}
