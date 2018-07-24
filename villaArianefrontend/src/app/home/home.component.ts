import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookingDataService } from '../booking/booking-data.service';
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
    this._bookingDataService.bookings.subscribe(items => this._bookings = items);
  }
  newBooking(booking: Booking){
    console.log("newBooking");
    this._bookings.push(booking);
    this._bookingDataService.addNewBooking(booking).subscribe();
 }
  changeButtonLabel(){
      if(this.isCollapsed===false){
        this.show= "Hide Calendar";
      }
      else
        this.show="Show Calendar";
  }
}
