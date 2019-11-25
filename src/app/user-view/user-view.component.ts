import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
users: User[];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((data:User[])=>{
          this.users = data;
    })
  }

}