import { Component, OnInit } from '@angular/core';
import { timer } from "rxjs";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public isRunning: boolean;
  public time: number;

  constructor() { }

  ngOnInit(): void {
    this.getTimer();
  }

  getTimer() {
    timer(0, 1000).subscribe(ellapsedCycles => {
      if(this.isRunning) {
        this.time--;
      }
    });
  }

  toggleTimer() {
    this.isRunning = !this.isRunning;
    console.log(this.time, 'time');
  }


}
