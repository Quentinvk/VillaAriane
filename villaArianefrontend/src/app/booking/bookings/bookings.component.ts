import { Component, OnInit } from '@angular/core';
import { BookingDataService} from '../booking-data.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Booking } from '../booking.model';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  private _bookings : Booking[];

  public errorMsg: string;

  constructor(private data : BookingDataService) { }

  ngOnInit():void {
    
    this.data.bookings.subscribe(  
      res => (this._bookings = res ), 
      (error: HttpErrorResponse) => {
      this.errorMsg = `Error ${
        error.status
      } while trying to retrieve bookings: ${error.error}`;
    });
  }

  get bookings(){
    return this._bookings;
  }
  deleteBooking(booking: Booking) {
    
    this.data.deleteBook(booking.id).subscribe(
      item => (this._bookings = this._bookings.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing bookings for ${
          booking.userName
        }: ${error.error}`;
      }
    );
  }

  
  
}
