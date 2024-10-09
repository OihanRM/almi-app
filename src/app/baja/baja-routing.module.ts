import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BajaPage } from './baja.page';

const routes: Routes = [
  {
    path: '',
    component: BajaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BajaPageRoutingModule {}
