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

  private _bookings : any;

  public errorMsg: string;

  constructor(private data : BookingDataService) { }

  ngOnInit() {
    
    this.data.bookings.subscribe(res => {
      console.log(res);
      this._bookings = res;
    }, err => {
      console.log(err);
    });
    // this._bookings = this.data.bookings;
     console.log("bookings getting filled")
    // this.data.bookings.subscribe(items => this._bookings=items);
  }

  get bookings(){
    return this._bookings;
  }

}
