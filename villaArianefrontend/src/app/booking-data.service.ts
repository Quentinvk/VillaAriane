import { Injectable } from '@angular/core';
import { Booking } from './booking/booking.model';

@Injectable()
export class BookingDataService {
public _bookings = new Array<Booking>();
  constructor() {
   }
   get bookings() : Booking[] {
      return this._bookings;
   }

   addNewBooking(booking){
     this._bookings.push(booking);
   }

   getPrice(booking):number{
     return booking.getPrice();
   }

}
