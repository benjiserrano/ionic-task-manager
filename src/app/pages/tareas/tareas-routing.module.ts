import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tareas } from './tareas.page';

const routes: Routes = [
  {
    path: '',
    component: Tareas,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasPageRoutingModule {}
