import { Component } from '@angular/core';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthenticationService } from './user/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  
  title = 'Villa Ariane';
  model;
  ngOnInit() {
     
  }
  constructor(private authService: AuthenticationService) {}

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
  
  
   //comment to use for testing commit 

}
