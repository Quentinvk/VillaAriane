import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { BookingDataService } from './booking-data.service';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudioComponent } from './studio/studio.component';
import { WheaterComponent } from './wheater/wheater.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bookings', component: BookingsComponent },
  { path: 'add-booking', component: AddBookingComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    BookingComponent,
    AddBookingComponent,
    BookingsComponent,
    CalendarComponent,
    CarouselComponent,
    GalleryComponent,
    StudioComponent,
    WheaterComponent,
  ],
  providers: [ BookingDataService ]
})
export class BookingModule { }