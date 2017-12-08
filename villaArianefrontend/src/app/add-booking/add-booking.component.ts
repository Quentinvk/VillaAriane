import { BookingDataService } from '../booking-data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Booking } from '../booking/booking.model';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
  providers:[BookingDataService]
})
export class AddBookingComponent implements OnInit {
  @Output() public newbooking = new EventEmitter<Booking>();
  private _bookings : Booking[];
  private booking: FormGroup;

  constructor(private fb: FormBuilder, private _bookingDataService: BookingDataService, private _router: Router) {
      this._bookings = this._bookingDataService.bookings;
   }
   ngOnInit() {
    
  }
  
  newBookingAdded(booking){
    this._bookingDataService.addNewBooking(booking);
  }
  
  // get firstName(): FormArray {
  //   return <FormArray>this.booking.get('firstName');
  // }
  

  
  // createIngredients(): FormGroup {
  //   return this.fb.group({
  //     amount: [''],
  //     unit: [''],
  //     ingredientname: ['', [Validators.required, Validators.minLength(3)]]
  //   });
  // }

  // onSubmit() {
  //   let fn=this.booking.value.firstName;
  //   let ln=this.booking.value.LastName;
  //   let sd=this.booking.value.startDate;
  //   let ed= this.booking.value.endDate;
  //   let nroP = this.booking.value.NrOfPersons;
  //   let ws = this.booking.value.wantsSheet;
  //   const booking = new Booking(fn,ln,sd,ed,nroP,ws);

   
    
  //   // this.newbooking.emit(booking);
  // }

}
