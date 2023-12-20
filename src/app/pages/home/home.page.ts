import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home {

  auth_name: string | null = 'usuario';

  constructor(public taskService: TaskService) {}
  
  ngOnInit(): void {
    console.log(localStorage.getItem('isAuthenticated'))
    this.auth_name = localStorage.getItem('name');
  }
}
