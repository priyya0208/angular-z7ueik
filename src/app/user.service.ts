import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   private subject = new Subject<any>();
url = "https://reqres.in/api"
  constructor(private http: HttpClient) {  }
 
 getUser() {
    return this.http.get(`${this.url}/users`);
 }
 postUser(data) {
    return this.http.post(`${this.url}/register`,data);
 }

 sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}