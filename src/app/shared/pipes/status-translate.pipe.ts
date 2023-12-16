import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/models/Task';

@Pipe({
  name: 'statusTranslate'
})
export class StatusTranslatePipe implements PipeTransform {

  transform(status: unknown, ...args: unknown[]): unknown {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'in_progress':
        return 'En progreso';
      case 'completed':
        return 'Completada';
      case 'canceled':
        return 'Cancelada';
      default:
        return '';
    }
  }

}
