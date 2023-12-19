import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Status, Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {
  
  constructor(public taskService: TaskService) { }

  ngOnInit() {}

  taskSwipeAction(event: any, task: Task) {
    // Deslizar izquierda - Marcar como completada
    if(event.detail.ratio <= -3.25) {
      this.taskService.changeStatus(task, 'completed');
    }

    // Deslizar derecha - Editar tarea
    if(event.detail.ratio >= 1.80) {
      this.taskService.openTask(task)
    }
  }

  toggleCheck(e: any, task: Task) {
    if(task.status.toString() == 'completed') {
      this.taskService.changeStatus(task, 'pending');
    } else {
      this.taskService.changeStatus(task, 'completed');
    }
  }

}
