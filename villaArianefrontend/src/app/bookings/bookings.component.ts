import { Component, OnInit } from '@angular/core';
import { BookingDataService} from '../booking-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings$ : Object;

  constructor(private data : BookingDataService) { }

  ngOnInit() {
    this.data._bookings().subscribe(
      data => this.bookings$ = data
    )
  }

}
