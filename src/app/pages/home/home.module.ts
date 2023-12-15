import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListComponent } from 'src/app/components/tareas/list/list.component';
import { ProgressComponent } from 'src/app/components/home/progress/progress.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [Home, ListComponent, ProgressComponent]
})
export class HomePageModule {}
