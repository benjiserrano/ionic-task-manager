import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPage } from './crear.page';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CrearPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPageRoutingModule {}
