import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserService } from './user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, RegistrationComponent, UserViewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
