import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const _appUrl = "/API";

@Injectable()
export class BookingDataService {

  
  
  constructor(private http: HttpClient) {
      
   }
   
   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  //  get bookings(): Observable<any>  {
  //   return this.http.get(`${_appUrl}/bookings/`, httpOptions)
  //     .pipe(
  //       map(this.extractData ),
  //       catchError(this.handleError)
  //   );
    
  //  }

  get bookings(): Observable<Booking[]>{
    return this.http.get(`${_appUrl}/bookings/`)
      .pipe(map((list:any[]): Booking[] => list.map(Booking.fromJSON)));
  }


   addNewBooking(booking): Observable <any> {  
     return this.http.post(`${_appUrl}/bookings/`, booking, httpOptions)
       .pipe(catchError(this.handleError)
       );
   }
    
   updateBook(data): Observable<any> {
    return this.http.put(_appUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getBooking(id: string): Observable<any> {
    return this.http
      .get(`${_appUrl}/booking/${id}`)
      .pipe(map(Booking.fromJSON), 
      catchError(this.handleError)
    );
  }

   getPrice(booking):number{
     return booking.getPrice();
   }

   deleteBook(id: string): Observable<any> {
    const url = `${_appUrl}/booking/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
