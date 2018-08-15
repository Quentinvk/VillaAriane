import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../booking.model';
import { ActivatedRoute } from '@angular/router';
import { BookingDataService } from '../booking-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  @Input() _booking : Booking;
  errorMsg: string;
  
  constructor(private route: ActivatedRoute, 
              private data: BookingDataService
  ) { }

  ngOnInit() {
    console.log(this._booking.startNight);
  }
  
  get booking() : Booking{
    return this._booking;
  }
}
