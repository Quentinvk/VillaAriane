import { Booking } from './booking.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() public booking : Booking;
    
  
  constructor() { }

  ngOnInit() {
  }

}
