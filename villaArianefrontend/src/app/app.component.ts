import { Booking } from './booking/booking.model';
import { Component } from '@angular/core';
import { BookingDataService } from './booking-data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookingDataService]
})
export class AppComponent implements OnInit {
  
  title = 'Villa Ariane';

  private _bookings;

  ngOnInit() {
     this._bookings = this._bookingDataService._bookings;
  }
  constructor( private _bookingDataService : BookingDataService){
    
  }
  get bookings() {
    return this._bookings;
  }
  newBookingAdded(booking){
     this._bookingDataService.addNewBooking(booking).subscribe();
  }
   

}
