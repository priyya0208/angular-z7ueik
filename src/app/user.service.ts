import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = "https://reqres.in/api"
  constructor(private http: HttpClient) {  }
 
 getUser() {
    return this.http.get(`${this.url}/users`);
 }
 postUser(data) {
    return this.http.post(`${this.url}/register`,data);
 }
}