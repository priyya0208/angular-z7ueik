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
    this.subscription = this.userService.getMessage().subscribe(message => { this.message = message;console.log("Message:::::::::::::",this.message.text);
    this.firstname = this.message.text.first_name; 
    this.lastname = this.message.text.last_name;
    this.email = this.message.text.email;
    });
    
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