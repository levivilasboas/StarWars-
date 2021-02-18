import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeoplesPage } from './peoples.page';

const routes: Routes = [
  {
    path: '',
    component: PeoplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeoplesPageRoutingModule {}
