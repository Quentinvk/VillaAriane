import { BookingDataService } from '../booking-data.service';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

   
   constructor( private fb : FormBuilder){

   }
  
   addBooking(newBookingUserName:HTMLInputElement,newBookingStartNight:HTMLInputElement,newBookingEndNight:HTMLInputElement,newBookingNrOfPersons:HTMLInputElement,newBookingWantsSheet:HTMLInputElement) : boolean{
     let booking = new Booking(newBookingUserName.value,newBookingStartNight.valueAsDate,newBookingEndNight.valueAsDate,newBookingNrOfPersons.valueAsNumber,newBookingWantsSheet.checked);
     this.newBooking.emit(booking);
     return false;
   }
    
   

  private booking: FormGroup;

  ngOnInit() {
      this.booking = this.fb.group({
        userName: this.fb.control(' ', [Validators.required, Validators.minLength(3)]), 
        startNight: this.fb.control( new Date() ,Validators.required),
        endNight: this.fb.control(new Date(), Validators.required),
        nrOfPersons: this.fb.control('1'),
        wantsSheet: this.fb.control('false')
      })
  }

  onSubmit(){
    this.newBooking.emit(new Booking(
      this.booking.value.userName, 
      this.booking.value.startNight, 
      this.booking.value.endNight, 
      this.booking.value.nrOfPersonsm, 
      this.booking.value.wantsSheet));
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
