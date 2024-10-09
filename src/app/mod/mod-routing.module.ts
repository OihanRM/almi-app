import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModPage } from './mod.page';

const routes: Routes = [
  {
    path: '',
    component: ModPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModPageRoutingModule {}
