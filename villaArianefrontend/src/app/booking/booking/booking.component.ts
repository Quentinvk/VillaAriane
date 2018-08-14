import { Booking } from '../booking.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() public booking : Booking;
  @Output() public delete = new EventEmitter<Booking>();
  
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
    console.log("booking getting called");
  }

  removeBooking() {
    this.delete.emit(this.booking);
  }
}
