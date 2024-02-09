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

  constructor(public taskService: TaskService) {
    
    
    setTimeout(() => {
      window.speechSynthesis.onvoiceschanged = function() {
        const voices = window.speechSynthesis.getVoices();
        const message = "Buenas noches Bénlli. Tienes 5 nuevos correos en la bandeja de entrada.";
        let utterance = new SpeechSynthesisUtterance(message);
        //Microsoft Alvaro Online (Natural) - Spanish (Spain)
        utterance.pitch = 0.1;
        utterance.voice = voices[2];
        window.speechSynthesis.speak(utterance);
      };
    }, 4000);
  }
  
  ngOnInit(): void {
    console.log(localStorage.getItem('isAuthenticated'))
    this.auth_name = localStorage.getItem('name');
    
    
  }

  
}
