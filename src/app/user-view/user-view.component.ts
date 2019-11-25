import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((data)=>{
          this.users = data.data;
          console.log(this.users);
    })    
  }
  updateRow(data) {
    currentUser = data;
  };
}