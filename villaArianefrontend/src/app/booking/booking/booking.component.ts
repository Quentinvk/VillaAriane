import { Booking } from '../booking.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { NgbCalendar, NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  
})
export class BookingComponent implements OnInit {
  @Input() public _booking : Booking;
  @Output() public delete = new EventEmitter<Booking>();
  @Output() public edit = new EventEmitter<Booking>();

  model;
  model2;
  public isCollapsed = true;
  public isEdit = true;
  constructor(private fb : FormBuilder) { }

  private bookingForm: FormGroup;

  ngOnInit() {
    this.bookingForm =this.fb.group({
      userName: this.fb.control( this._booking.userName, [Validators.required, Validators.minLength(3)]), 
      startNight: this.fb.control(this._booking.startNight, Validators.required),
      endNight: this.fb.control(this._booking.endNight, Validators.required),
      nrOfPersons: this.fb.control(this._booking.nrOfPersons),
      wantsSheet: this.fb.control(this._booking.wantsSheet)
    })
  }

  removeBooking() {
    this.delete.emit(this.booking);
  }
  get booking(): Booking{
    return this._booking
  }

  onSubmit(){
    let startNight = new Date();
    startNight.setDate(this.bookingForm.value.startNight.day);
    startNight.setMonth(this.bookingForm.value.startNight.month);
    startNight.setFullYear(this.bookingForm.value.startNight.year);
    let endNight = new Date();
    endNight.setDate(this.bookingForm.value.endNight.day);
    endNight.setMonth(this.bookingForm.value.endNight.month);
    endNight.setFullYear(this.bookingForm.value.endNight.year);

      this._booking.setUserName(this.bookingForm.value.userName);
      this._booking.setStartNight(startNight );
      this._booking.setEndNight( endNight);
      this._booking.setWantsSheet( this.bookingForm.value.wantsSheet);
      this._booking.setNrOfPersons( this.bookingForm.value.nrOfPersons);

      console.log(this._booking);
    this.edit.emit(this._booking);
  }
}
