import { Component, OnInit } from '@angular/core';
import { BookingDataService} from '../booking-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  private _bookings;

  constructor(private data : BookingDataService) { }

  ngOnInit() {
    this._bookings = this.data._bookings;
  }

  get bookings() {
    return this.data.bookings;
  }

}
