import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudioComponent } from './studio/studio.component';
import { WheaterComponent } from './wheater/wheater.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'bookings', component: BookingsComponent}, 
  { path: 'add-booking', component: AddBookingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    CarouselComponent,
    BookingComponent,
    GalleryComponent,
    StudioComponent,
    WheaterComponent,
    AddBookingComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
