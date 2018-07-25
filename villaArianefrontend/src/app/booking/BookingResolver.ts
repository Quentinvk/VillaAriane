import { Injectable } from "../../../node_modules/@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
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