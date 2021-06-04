import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: '', loadChildren: './depan/depan.module#DepanPageModule' },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'tour', loadChildren: './locations/locations.module#LocationsPageModule' },
  { path: 'hotel', loadChildren: './our-vehicles/our-vehicles.module#OurVehiclesPageModule' },
  { path: 'hotel/:index', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'tour/cost-saver/:index', loadChildren: './locations/locations.module#LocationsPageModule' },
  { path: 'tour/cost-saver/:index/order', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'tour/domestic/:index', loadChildren: './detaillocations/detaillocations.module#DetaillocationsPageModule' },
  { path: 'tour/domestic/:index/order', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'tour/one-day-tour/:index', loadChildren: './locations/locations.module#LocationsPageModule' },
  { path: 'tour/one-day-tour/:index/order', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'tour/land-tour/:index', loadChildren: './locations/locations.module#LocationsPageModule' },
  { path: 'tour/land-tour/:index/order', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'blog', loadChildren: './specials/specials.module#SpecialsPageModule' },
  { path: 'blog/:index', loadChildren: './detailspecials/detailspecials.module#DetailspecialsPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'addcustomer/:id/:name/:desc', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'showcustomer/:id/:name/:desc', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'updatecustomer/:id/:name/:desc', loadChildren: './updatecustomer/updatecustomer.module#UpdatecustomerPageModule' },
  {
    path: 'visa-service',
    loadChildren: () => import('./document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'visa-service/:index',
    loadChildren: () => import('./tripdetail/tripdetail.module').then( m => m.TripdetailPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./au/au.module').then( m => m.AuPageModule)
  },

  {
    path: 'info/:index',
    loadChildren: () => import('./aupagedetail/aupagedetail.module').then( m => m.AupagedetailPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./maps-test/maps-test.module').then( m => m.MapsTestPageModule)
  },
  //{ path: 'depan', loadChildren: './depan/depan.module#DepanPageModule' },
  
];

@NgModule({
  imports: [
 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }),
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
