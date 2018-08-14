import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { AuthGuardService } from '../user/auth-guard.service';




const appRoutes: Routes = [
  {
    path: 'booking',
    canActivate: [ AuthGuardService ],
    loadChildren: 'app/booking/booking.module#BookingModule',
    data: { preload:true}
  },
  { path: '', redirectTo: 'booking/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, 
      {preloadingStrategy: SelectivePreloadStrategy, enableTracing:true} )
  ],
  providers: [SelectivePreloadStrategy],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
