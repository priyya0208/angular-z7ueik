import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../user.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    message: any;
    subscription: Subscription;

  constructor(public userService : UserService) { 
    
  };
  
  ngOnInit() {
    this.subscription = this.userService.getMessage().subscribe(message => { this.message = JSON.stringify(message);
    console.log("Message:::::::::::::",this.message.text) });
  }
  onClickSubmit(data) {
     this.userService.postUser(data)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
           
        },
        () => {
            console.log("The POST observable is now completed.");
        });
     
   };

  
}