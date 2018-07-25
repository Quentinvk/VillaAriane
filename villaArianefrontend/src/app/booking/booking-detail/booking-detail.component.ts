import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking.model';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BookingDataService } from '../booking-data.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  private _booking : Booking;
  
  constructor(private route: ActivatedRoute, 
              private data: BookingDataService
  ) { }

  ngOnInit() {
    //  this.route.paramMap.subscribe(pa => 
    //   this.data.getBooking(pa.get('id'))
    //   .subscribe(item => this._booking=item)  
    // );

    // use resolver (route.data)
    this.route.data.subscribe(item => this._booking= item['booking']);
  }

}
