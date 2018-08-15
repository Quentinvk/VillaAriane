import { BookingDataService } from '../booking-data.service';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, OnInit, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Booking } from '../booking.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';
import { NgbDateStruct, NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AddBookingComponent implements OnInit {
    @Output() public newBooking = new EventEmitter<Booking>();
    @Output() public closeCalendar = new EventEmitter();
    @Input() public fromDate: NgbDateStruct;
    @Input() public toDate: NgbDateStruct;
    @Input() public randomBoolean : Boolean;
    private errorMsg : string;
   private userName : string;

   closeResult: string;


   constructor( 
      private fb : FormBuilder,
      private data :BookingDataService, 
      private auth : AuthenticationService,
      private modalService: NgbModal,
      private router: Router
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
        startNight: this.fb.control(Validators.required),
        endNight: this.fb.control( Validators.required),
        nrOfPersons: this.fb.control('2'),
        wantsSheet: this.fb.control('true')
      })
      
  }
  
  onSubmit(){

    let startNight = new Date();
    startNight.setDate(this.fromDate.day);
    startNight.setMonth(this.fromDate.month-1);
    startNight.setFullYear(this.fromDate.year);
    let endNight = new Date();
    endNight.setDate(this.toDate.day);
    endNight.setMonth(this.toDate.month-1);
    endNight.setFullYear(this.toDate.year);
 
    const booking = new Booking(
      this.booking.value.userName, 
      startNight,
      endNight,
      this.booking.value.nrOfPersons, 
      this.booking.value.wantsSheet);
      console.log(booking);  
    this.newBooking.emit(booking);
    this.closeCalendar.emit();
    this.data.addNewBooking(booking).subscribe( () => {},
    (error: HttpErrorResponse) => {
      this.errorMsg = `Error ${error.status} while adding
        booking for ${booking.userName}: ${error.error}`;
    }

  )
  this.router.navigate(['/']);
  }

  confirm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
