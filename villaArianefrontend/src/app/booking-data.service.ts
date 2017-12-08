import { Injectable } from '@angular/core';
import { Booking } from './booking/booking.model';

@Injectable()
export class BookingDataService {
public _bookings = new Array<Booking>();
  constructor() {
    let bookingTest = new Booking("Jean", "Luc", new Date(2017-12-09) ,new Date(2017-12-10),2,true);
    this._bookings.push(bookingTest);
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
