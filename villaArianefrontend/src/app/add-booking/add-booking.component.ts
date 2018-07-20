import { BookingDataService } from '../booking-data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Booking } from '../booking/booking.model';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
   @Output() public newBooking = new EventEmitter<Booking>();

   
   constructor( private data : BookingDataService){

   }
  
   addBooking(newBookingUserName:HTMLInputElement,newBookingStartNight:HTMLInputElement,newBookingEndNight:HTMLInputElement,newBookingNrOfPersons:HTMLInputElement,newBookingWantsSheet:HTMLInputElement) : boolean{
     let booking = new Booking(newBookingUserName.value,newBookingStartNight.valueAsDate,newBookingEndNight.valueAsDate,newBookingNrOfPersons.valueAsNumber,newBookingWantsSheet.checked);
     this.newBooking.emit(booking);
     return false;
   }
    
   

  // private booking: FormGroup;

  // constructor(private fb: FormBuilder, private _bookingDataService: BookingDataService, private _router: Router) { }

  // get firstName(): FormArray {
  //   return <FormArray>this.booking.get('firstName');
  // }
  

  ngOnInit() {
    
  }

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
