import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Calendario } from './calendario.page';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalendarioPageRoutingModule
  ],
  declarations: [Calendario]
})
export class CalendarioPageModule {}
