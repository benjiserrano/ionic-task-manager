import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUser: User = {
    id: 0,
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registrarUsuario() {
    if (this.validarFormulario()) {
      this.authService.registerUser(this.newUser);
    }
  }

  validarFormulario(): boolean {
    if (this.newUser.name && this.newUser.email && this.newUser.password) {
      return true;
    } else {
      // Manejo de errores
      return false;
    }
  }

}
