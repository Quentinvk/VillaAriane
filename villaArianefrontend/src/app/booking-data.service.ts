import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking/booking.model';
import { Observable } from 'rxjs/Observable';
import { map } from '../../node_modules/rxjs/operators';





@Injectable()
export class BookingDataService {

  private readonly _appUrl = '/API/bookings/';  

  public _bookings;
  
  constructor(private http: HttpClient) {
      
   }
   get bookings(): Observable<Booking[]>  {

    return this.http.get(this._appUrl)
      .pipe(
        map((list: any[]) : Booking[] =>
        list.map(Booking.fromJSON)
      )
    );
   }


   addNewBooking(booking): Observable <Booking> {  
     return this.http.post(this._appUrl, booking)
       .pipe(map(
         (item : any) : Booking =>
         new Booking(item.userName, item.startNight, item.endNight, item.nrofPersons, item.wantsSheet)
       ))
   }

   getPrice(booking):number{
     return booking.getPrice();
   }

}
