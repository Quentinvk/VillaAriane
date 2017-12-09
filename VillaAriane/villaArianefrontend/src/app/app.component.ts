import { Booking } from './booking/booking.model';
import { Component } from '@angular/core';
import { BookingDataService } from './booking-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookingDataService]
})
export class AppComponent {
  title = 'Villa Ariane';

  private _bookings: Booking[];
  constructor(private _bookingDataService : BookingDataService ){
    this._bookings=this._bookingDataService.bookings;
    
  }
  newBookingAdded(booking){
    this._bookingDataService.addNewBooking(booking);
  }
  getPrice(booking) : number{
    return this._bookingDataService.getPrice(booking);
  }
}
