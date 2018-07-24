import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './booking/carousel/carousel.component';
import { HomeComponent } from './booking/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GalleryComponent } from './booking/gallery/gallery.component';
import { StudioComponent } from './booking/studio/studio.component';
import { WheaterComponent } from './booking/wheater/wheater.component';
import { BookingModule } from './booking/booking.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    BookingModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
