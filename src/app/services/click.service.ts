import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = 0;
  private sum = new Subject<number>();

  constructor(private logService: LogService) { }

  addClicks() {
    this.sumClicks++;
    this.sum.next(this.sumClicks);
    this.logService.logger('Clicked');
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
