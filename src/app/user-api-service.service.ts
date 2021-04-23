import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UsersInterface } from './users/Interfaces/GetUsersInterface';

@Injectable({
  providedIn: 'root'
})
export class UserApiServiceService {

  constructor(private http: HttpClient) { }


  public getUsers() {
    return this.http.get('https://reqres.in/api/users?page=2').subscribe();
  }

  public storeUser(data) {
    return this.http.post('https://reqres.in/api/users?page=2', data).subscribe();
  }
}
