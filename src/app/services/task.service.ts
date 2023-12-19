import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'assets/database/tasks.json'; // Ruta al archivo de tareas mockeadas
  tasks: Task[] = [];
  tasks_total: number = 0;
  tasks_completed: number = 0;

  constructor(private http: HttpClient, private router: Router) {
    this.getTasks().subscribe(data => {
      this.tasks = data;
      this.tasks_total = data.length;
      this.tasks_completed = data.filter(task => task.status === 'completed').length;
    });
  }

  getTasks(): Observable<Task[]> {
    // Obtener y formatear tareas del archivo tasks.json
    return this.http.get<Task[]>(this.tasksUrl);
  }

  updateTasks() {
    /***
    Añadir funciones necesarias cuando se realicen acciones sobre una tarea.
    Reemplazar más adelante por ngOnChange.
    ***/

    this.updateTasksCount();
  }

  updateTasksCount() {
    // Actualizar conteo del total de tareas y tareas completadas
    this.tasks_total = this.tasks.length;
    this.tasks_completed = this.tasks.filter(task => task.status === 'completed').length;
  }

  changeStatus(task: Task, status: string) {
    // Cambiar estado de la tarea al status deseado
    const index = this.tasks.indexOf(task);
    
    if (index !== -1) { // Comprobar si existe el indice
      this.tasks[index].status = status;
    }

    this.updateTasks();
  }

  openTask(task: Task) {
    // Navegar a página de edición de la tarea
    this.router.navigateByUrl('/tareas/editar/' + task.id)
  }

  getTask(id: number) {
    // Obtener tarea por su ID
    return this.tasks.find(task => task.id === id);
  }

  addTask(nuevaTarea: Task): void {
    // Asigna un ID único a la nueva tarea (reemplazar por GUID)
    nuevaTarea.id = this.tasks.length + 1;
    this.tasks = [...this.tasks, nuevaTarea];
    this.updateTasks();
  }

  editTask(task: Task) {
    // Encuentra la tarea en el servicio por su ID
    const tareaExistente = this.tasks.find(taskk => taskk.id === task.id);
    
    if (tareaExistente) {
      // Actualiza las propiedades de la tarea existente con los valores editados
      tareaExistente.title = task.title;
      tareaExistente.description = task.description;
      tareaExistente.tags = task.tags;
    }
    
    this.updateTasks();
    this.router.navigateByUrl('/home') // Volver al home
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    
    if (index !== -1) { // Comprobar si existe el indice
      this.tasks.splice(index, 1);
    }
    
    this.updateTasks();
  }
}
