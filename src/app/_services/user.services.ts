import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    public create(user: User) {
        console.log('created');
        return this.http.post(environment.backUrl + '/users', user);
    }

    public forgotPassword(user: User) {
        return this.http.post(environment.backUrl + '/forgot_password', user);
    }

    public forgot_password_confirm(user: User) {
        return this.http.post(environment.backUrl + '/forgot_password_confirmation',
            {
                code: user.confirmCode,
                password: user.password,
            });
    }

    public update(user: User) {
        console.log(20, user);
        console.log(21, localStorage);
        return this.http.put(`${environment.backUrl}/users/${localStorage.userId}`,
            {
                first_name: user.firstName,
                last_name: user.lastName,
            },
            {
                headers: { 'Authorization': 'JWT ' + localStorage.token }
            }
        );
    }

    public get(user: User) {
        console.log(24, { token: 'JWT ' + localStorage.token });
        return this.http.get(environment.backUrl + '/users/' + user.id, {
            headers: { 'Authorization': 'JWT ' + localStorage.token }
        });
    }

    public delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
