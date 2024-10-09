import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModPageRoutingModule } from './mod-routing.module';

import { ModPage } from './mod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModPageRoutingModule
  ],
  declarations: [ModPage]
})
export class ModPageModule {}
