import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplesPageRoutingModule } from './peoples-routing.module';

import { PeoplesPage } from './peoples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplesPageRoutingModule
  ],
  declarations: [PeoplesPage]
})
export class PeoplesPageModule {}
