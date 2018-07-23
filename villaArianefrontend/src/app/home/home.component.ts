import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookingDataService } from '../booking-data.service';
import {Booking} from '../booking/booking.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public isCollapsed = true;
  show : string = "Show Calendar";
  currentOrientation = 'vertical';
  private _bookings : Booking[];

  constructor(private _bookingDataService : BookingDataService) { 
  }

  ngOnInit() {
    this._bookings = this._bookingDataService._bookings;
  }
  newBooking(booking){
    console.log("newBooking");
    this._bookingDataService.addNewBooking(booking);
 }
  changeButtonLabel(){
      if(this.isCollapsed===false){
        this.show= "Hide Calendar";
      }
      else
        this.show="Show Calendar";
  }
}
