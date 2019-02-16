import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    console.log(11, 'started');
    console.log(email, password);
    console.log(5, environment);
    // console.log(14, this.http.post<any>(environment.backUrl + '/login', { email, password }).pipe());
    return this.http.post<any>(environment.backUrl + '/login', { email, password })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          console.log(14, user);
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        }),
    );
  }
      public AddProduct(params) {
    // console.log(14, this.http.post<any>(environment.backUrl + '/login', { email, password }).pipe());
    return this.http.post<any>('localhost:8000/products', { name:params.name, img:params.img, descr:params.descr, prize:params.prize })
      .pipe(
        map((user) => {
          return user;
        }),
    );
  }
  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
