import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:5000/api/v1/auth/register';
  private _loginUser = 'http://localhost:5000/api/v1/auth/login';
  private _authtotrue = 'http://localhost:5000/api/v1/auth/makingauthtrue';

  constructor(private http: HttpClient, private _rooter: Router) {}
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUser, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._rooter.navigate(['/events']);
  }
  changingauthToTrue() {
    const body = { auth: true };
    return this.http.put<any>(this._authtotrue, body);
  }
}
