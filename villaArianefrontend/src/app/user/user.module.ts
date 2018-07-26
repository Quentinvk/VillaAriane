import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { AuthenticationService } from './authentication.service';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule, 
    MatCheckboxModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    
    AuthenticationService,
  ],
})
export class UserModule { }
