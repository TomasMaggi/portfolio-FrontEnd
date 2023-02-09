import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoadingService {
  private dataSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  data: Observable<boolean> = this.dataSource.asObservable();

  constructor() {}

  sendData(data: boolean) {
    this.dataSource.next(data);
  }
}
