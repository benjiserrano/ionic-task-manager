import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { WelcomeComponent } from 'src/app/components/home/welcome/welcome.component';
import { ListComponent } from 'src/app/components/tareas/list/list.component';
import { ProgressComponent } from 'src/app/components/home/progress/progress.component';
import { TagsBadgesComponent } from 'src/app/components/tareas/list/tags-badges/tags-badges.component';

import { StatusTranslatePipe } from 'src/app/shared/pipes/status-translate.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [Home, WelcomeComponent, ListComponent, ProgressComponent, StatusTranslatePipe, TagsBadgesComponent]
})
export class HomePageModule {}
