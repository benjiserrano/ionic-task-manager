import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent  implements OnInit {

  task_pending = 2;

  constructor() { }

  ngOnInit() {}

}
