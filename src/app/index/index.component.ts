import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { LoggerService } from '../logger.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( public timerService: TimerService, public loggerService: LoggerService) { 
    this.loggerService.add("IndexComponent Constructed")
  }

  ngOnInit() {
    this.loggerService.add("IndexComponent initialized");
    this.timerService.start(1000);
  }

}
