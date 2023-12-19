import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tareas } from './tareas.page';

const routes: Routes = [
  {
    path: '',
    component: Tareas,
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasPageRoutingModule {}
