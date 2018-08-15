import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Booking } from "./booking.model";
import { BookingDataService } from "./booking-data.service";
import { Observable } from "rxjs/Observable";


@Injectable()
export class BookingResolver implements Resolve<Booking> {
  constructor(private data: BookingDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Booking> {
    return this.data.getBooking(route.params['id']);
  }
}