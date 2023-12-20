import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DefaultTags } from 'src/app/models/Tag';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  task: Task | undefined = {
    id: 0, // Reemplazar más adelante por GUID
    title: '',
    description: '',
    status: 'pending',
    tags: []
  };

  tags = DefaultTags;
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, public taskService: TaskService) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.params['id']);
    setTimeout(() => {
      this.task = this.taskService.getTask(id);
      this.loading = false;
    }, 350);
  }

  save() {
    if(this.task !== undefined) {
      this.taskService.editTask(this.task);
    }
  }

  delete() {
    if(this.task !== undefined) {
      this.taskService.deleteTask(this.task);
    }
  }

  checkTask() {
    if(this.task !== undefined) {
      this.taskService.changeStatus(this.task, 'completed');
    }
  }

}
