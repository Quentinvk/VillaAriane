import { Booking } from '../booking.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() public booking : Booking;
  @Output() public delete = new EventEmitter<Booking>();

  public isCollapsed = true;

  constructor() {
    
   }


  ngOnInit() {
    
  }
  removeBooking() {
    this.delete.emit(this.booking);
  }
}
