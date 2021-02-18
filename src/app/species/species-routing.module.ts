import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeciesPage } from './species.page';

const routes: Routes = [
  {
    path: '',
    component: SpeciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesPageRoutingModule {}
