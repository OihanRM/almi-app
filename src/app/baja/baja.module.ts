import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BajaPageRoutingModule } from './baja-routing.module';

import { BajaPage } from './baja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BajaPageRoutingModule
  ],
  declarations: [BajaPage]
})
export class BajaPageModule {}
