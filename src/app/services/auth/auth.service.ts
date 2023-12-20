import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];
  public isAuthenticated = true;

  constructor(private router: Router) {
    this.getUsers();
  }

  getUsers() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      // Usuario encontrado, credenciales válidas
      this.isAuthenticated = true;
      localStorage.setItem('name', user.name);
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigateByUrl('/home')
    }

    return false; // Credenciales inválidas o usuario no encontrado
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

}
