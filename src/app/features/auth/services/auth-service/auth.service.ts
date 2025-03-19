import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';

@Injectable( )
export class AuthService { 

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }).pipe(  
      tap(response => {
        console.log('Login successful', response);
        this.isLoggedInSubject.next(true);  
      })
    );
  }

  logout(): void {
    this.isLoggedInSubject.next(false);  
  }

  getLoginStatus(): boolean {
    return this.isLoggedInSubject.value;
  }

}
