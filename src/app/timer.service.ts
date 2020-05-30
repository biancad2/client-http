import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer: any;

  public counter = 0;

  constructor(private loggerService: LoggerService) {
    loggerService.add("TimerService constructed");
   }

  start(ms: number) {
    if (!this.timer) {
      this.loggerService.add("started");
      this.timer = setInterval(
        () => {
          this.counter++;
        }, ms
      );
    }
  }

  stop() {
    if (this.timer) {
      this.loggerService.add("TimerService stopped");
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  getCount() {
    return this.counter;
  }
}
