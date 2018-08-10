import { BookingDataService } from '../booking-data.service';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, OnInit, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Booking } from '../booking.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AddBookingComponent implements OnInit {
    @Output() public newBooking = new EventEmitter<Booking>();

    @Input() public fromDate: Date;
    @Input() public toDate: Date;
    @Input() public randomBoolean : Boolean;
    private errorMsg : string;
   private userName : string;
   constructor( 
      private fb : FormBuilder,
      private data :BookingDataService, 
      private auth : AuthenticationService
   ){
    this.auth.user$.subscribe(
      val => this.userName = val
    );
    }    
   

  private booking: FormGroup;

   ngOnInit() {
      console.log(this.fromDate);
      this.booking =this.fb.group({
        userName: this.fb.control( this.userName, [Validators.required, Validators.minLength(3)]), 
        startNight: this.fb.control( this.fromDate ,Validators.required),
        endNight: this.fb.control( this.toDate, Validators.required),
        nrOfPersons: this.fb.control('2'),
        wantsSheet: this.fb.control('false')
      })
      
  }

  

  onSubmit(){
    const booking = new Booking(
      this.booking.value.userName, 
      this.booking.value.startNight,   
      this.booking.value.endNight, 
      this.booking.value.nrOfPersonsm, 
      this.booking.value.wantsSheet);
    this.newBooking.emit(booking);
      
    this.data.addNewBooking(booking).subscribe( () => {},
    (error: HttpErrorResponse) => {
      this.errorMsg = `Error ${error.status} while adding
        booking for ${booking.userName}: ${error.error}`;
    }
  )
  }

}
