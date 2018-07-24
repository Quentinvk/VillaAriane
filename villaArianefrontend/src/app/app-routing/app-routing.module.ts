import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { BookingsComponent } from '../booking/bookings/bookings.component';
import { AddBookingComponent } from '../booking/add-booking/add-booking.component';
import { HomeComponent } from '../booking/home/home.component';
import { CalendarComponent } from '../booking/calendar/calendar.component';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
