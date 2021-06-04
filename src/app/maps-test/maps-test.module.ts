import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsTestPageRoutingModule } from './maps-test-routing.module';

import { MapsTestPage } from './maps-test.page';

//import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsTestPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDejbkkfJKd3MCkknMe1H27zJJav5wdQ_Q',
      libraries: ['places'],
      apiVersion: '3.31',

    })
  ],
  declarations: [MapsTestPage]
})
export class MapsTestPageModule {}
