import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];
  public isAuthenticated = true;

  constructor(private router: Router, private toast: ToastController) {
    this.getUsers();
  }

  getUsers() {
    // Obtener usuarios guardados del local storage
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  login(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      // Usuario encontrado, credenciales válidas
      this.isAuthenticated = true;
      localStorage.setItem('name', user.name);
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigateByUrl('/home')
      this.notification('Sesión iniciada correctamente', 'success', 'checkmark')
    } else {
      console.log('erroneo')
      this.notification('Credenciales no válidas', 'danger', 'close')
    }
  }

  registerUser(newUser: User) {
    // Verificar si el usuario ya existe por su email
    const userExists = this.users.some(user => user.email === newUser.email);

    if (!userExists) {
      newUser.id = this.generateUniqueId(); // Asignar un ID único (reemplazar por GUID)
      this.users.push(newUser); // Añadir nuevo usuario al array de usuarios
      localStorage.setItem('users', JSON.stringify(this.users)); // Guardar usuarios en JSON con local storage
      this.login(newUser.email, newUser.password); // Iniciar sesión automaticamente
    }

    return false; // Usuario ya registrado
  }

  logout(): void {
    // Cerrar sesión del usuario actual
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    this.router.navigateByUrl('/login');
  }

  isAuthenticatedUser(): boolean {
    // Comprobar si el usuario esta autenticado
    if(localStorage.getItem('isAuthenticated') === 'true') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;

    }

    return this.isAuthenticated;
  }

  private generateUniqueId(): number {
    // Generar ID único
    return this.users.length + 1;
  }

  async notification(message: string, color?: string, icon?: string) {
    await this.toast.create({
      message: message,
      duration: 2000,
      color: color,
      icon: icon
    }).then(res => res.present())

    
  }

}
