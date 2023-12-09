import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tareas } from './tareas.page';
import { TareasPageRoutingModule } from './tareas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TareasPageRoutingModule
  ],
  declarations: [Tareas]
})
export class TareasPageModule {}
