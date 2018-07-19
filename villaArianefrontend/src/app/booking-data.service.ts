import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking/booking.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class BookingDataService {

  private readonly _appUrl = 'http://localhost:4200/API/bookings/';  

  public _bookings;
  
  constructor(private http: Http) {
      
   }
   get bookings(): Observable<Booking[]>  {
      return this.http.get(this._appUrl).map(response =>
        response.json().map(item =>
          new Booking(item.userName, item.startNight, item.endNight, item.nrofPersons, item.wantsSheet)));
   }

   addNewBooking(booking): Observable < Booking > {  
     return this.http.post(this._appUrl, booking)
       .map(res => res.json()).map(item =>
         new Booking(item.userName, item.startNight, item.endNight, item.nrofPersons, item.wantsSheet));
   }


   getPrice(booking):number{
     return booking.getPrice();
   }

}
