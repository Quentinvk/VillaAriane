import { Component, OnInit } from '@angular/core';
import { BookingDataService} from '../booking-data.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  private _bookings;

  public errorMsg: string;

  constructor(private data : BookingDataService) { }

  ngOnInit() {
    // this._bookings = this.data.bookings;
    console.log("bookings getting filled")
    this.data.bookings.subscribe(
      bookings => (this._bookings = bookings),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve bookings: ${error.error}`;
      }
    );
  }

  get bookings(){
    return this._bookings;
  }

}
