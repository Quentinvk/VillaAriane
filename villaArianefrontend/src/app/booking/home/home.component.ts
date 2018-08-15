import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookingDataService } from '../booking-data.service';
import {Booking} from '../booking.model';
import { AuthenticationService } from '../../user/authentication.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public isCollapsed = true;
  show : string = "Show availabilities";
  currentOrientation = 'vertical';

  constructor(private authService: AuthenticationService) {}

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  ngOnInit() {
    
  }
  
  changeButtonLabel(){
      if(this.isCollapsed===false){
        this.show= "Hide Calendar";
      }
      else
        this.show="Show Calendar";
  }

  closeCalendar(){
    this.isCollapsed=true;
  }
}
