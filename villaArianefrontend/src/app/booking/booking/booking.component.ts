import { Booking } from '../booking.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() public _booking : Booking;
  @Output() public delete = new EventEmitter<Booking>();
  
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
    console.log(this._booking);
  }

  removeBooking() {
    this.delete.emit(this.booking);
  }
  get booking(): Booking{
    return this._booking
  }
}
