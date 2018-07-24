import { Booking } from './booking/booking.model';
import { Component } from '@angular/core';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  
  title = 'Villa Ariane';

  ngOnInit() {
     
  }
  constructor( ){
    
  }
  
  
   

}
