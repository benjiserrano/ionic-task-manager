import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home {

  user_firstName = 'usuario';

  constructor(public taskService: TaskService) {}
  
  ngOnInit(): void {

  }
}
