import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeciesPageRoutingModule } from './species-routing.module';

import { SpeciesPage } from './species.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeciesPageRoutingModule
  ],
  declarations: [SpeciesPage]
})
export class SpeciesPageModule {}
