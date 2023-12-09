import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calendario } from './calendario.page';

const routes: Routes = [
  {
    path: '',
    component: Calendario,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioPageRoutingModule {}
