import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent  implements OnInit {

  today: Date = new Date();

  constructor(public taskService: TaskService) {}

  ngOnInit() {

  }

  getDayPercentage() {
    const horasTranscurridas = this.today.getHours();
    const horasTotalesEnUnDia = 24;

    // Calcula el porcentaje del día transcurrido.
    const porcentaje = (horasTranscurridas / horasTotalesEnUnDia) * 100;
  
    return porcentaje;
  }

  

}
