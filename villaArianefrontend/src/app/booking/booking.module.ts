import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookingDataService } from './booking-data.service';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudioComponent } from './studio/studio.component';
import { WheaterComponent } from './wheater/wheater.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingResolver} from './BookingResolver';
import { httpInterceptorProviders } from '../http-interceptors/index';
import { AuthenticationService } from '../user/authentication.service';


const routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bookings', component: BookingsComponent },
  { path: 'add-booking', component: AddBookingComponent },
  { path: ':id', component: BookingDetailComponent,
  resolve: { booking: BookingResolver} }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    
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
    BookingDetailComponent,
  ],
  providers: [ 
    httpInterceptorProviders,
    BookingDataService,
    BookingResolver ,
    AuthenticationService
  ]
})
export class BookingModule { }
