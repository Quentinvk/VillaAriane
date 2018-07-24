import { Booking } from '../booking.model';
import { BookingDataService } from '../booking-data.service';
import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar,NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddBookingComponent } from '../add-booking/add-booking.component';
import { EventEmitter } from '@angular/core/src/event_emitter';


const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
!one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
  ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
!one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
  ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [NgbDatepickerConfig, BookingDataService]
})
export class CalendarComponent implements OnInit {
  
  private _bookings : Booking[];
  hoveredDate: NgbDateStruct;
  
    fromDate: NgbDateStruct;
    toDate: NgbDateStruct;
    model;
    
    constructor(calendar: NgbCalendar, private config : NgbDatepickerConfig, private _bookingDataService: BookingDataService) {

      this.fromDate = calendar.getToday();
      this.toDate = calendar.getNext(calendar.getToday(), 'd', 3);

      config.minDate = {year: calendar.getToday().year, month: calendar.getToday().month-1,day:calendar.getToday().day}
      config.maxDate = {year: 2099, month: 12, day: 31};
      
      config.outsideDays = 'hidden';

      config.markDisabled = (date: NgbDateStruct) => {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
      };
      
    }
    newBooking(booking: Booking){
      console.log("newBooking");
      this._bookings.push(booking);
      this._bookingDataService.addNewBooking(booking).subscribe();
   }
    
  //   isDisabled = (date: NgbDateStruct, current: {month: number}) => {
  //     const d = new Date(date.year, date.month - 1, date.day);
  //     return this.isBookedDate(); // this is undefined
  // }
  //   isBookedDate() : Date[]{
  //     return null;
  //     // return this._bookingDataService.bookings.filter(obj => obj.date< caledar.getToday())
  //   }
    
    onDateChange(date: NgbDateStruct) {
      if (!this.fromDate && !this.toDate) {
        this.fromDate = date;
      } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
        this.toDate = date;
      } else {
        this.toDate = null;
        this.fromDate = date;
      }
    }
  
    isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
    isInside = date => after(date, this.fromDate) && before(date, this.toDate);
    isFrom = date => equals(date, this.fromDate);
    isTo = date => equals(date, this.toDate);

  ngOnInit() {
    this._bookingDataService.bookings.subscribe(items => this._bookings = items);
    this.config.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    };
  }
  
  bookNow(fromDate: Date, toDate : Date) : boolean {
     return true;
  }

  display(vid:AddBookingComponent){
        
  }

}
