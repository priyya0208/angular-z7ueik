import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { UserService } from '../user.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
@Output() updateRowData = new EventEmitter();
  constructor(private userService : UserService) { }
  
  ngOnInit() {
    this.userService.getUser().subscribe((data)=>{
          this.users = data.data;
          console.log(this.users);
    })    
  };
  updateRow(data) {
    this.updateRowData.emit(data);
    console.log(data);
  }
}