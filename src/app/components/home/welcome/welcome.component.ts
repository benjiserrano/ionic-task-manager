import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent  implements OnInit {

  text: string = 'Hola';

  constructor() {
   this.getGreeting()
  }

  ngOnInit() {}

  getGreeting() {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
      this.text = 'Buenos días';
    } else if (horaActual >= 12 && horaActual < 20) {
      this.text = 'Buenas tardes';
    } else {
      this.text = 'Buenas noches';
    }
  }

}
