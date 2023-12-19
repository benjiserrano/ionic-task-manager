import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';
import { DefaultTags, Tag } from 'src/app/models/Tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  nuevaTarea: Task = {
    id: 0, // Reemplazar más adelante por GUID
    title: '',
    description: '',
    status: 'pending',
    tags: []
  };

  tags = DefaultTags;

  constructor(public taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.taskService.addTask(this.nuevaTarea);
    this.router.navigate(['/'])
    this.resetTask()
  } 

  resetTask() {
    this.nuevaTarea = {
      id: 0,
      title: '',
      description: '',
      status: 'pending',
      tags: []
    };
  }

}
