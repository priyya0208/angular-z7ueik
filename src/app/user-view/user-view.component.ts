import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").map((response)=>response.json()).subscribe((data) => console.log(data))
  }

}