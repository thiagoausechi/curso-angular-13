import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private user$ = new BehaviorSubject<User>(null);

  constructor() {}

  set setData(value: User) {
    this.user$.next(value);
  }

  get getData(): Observable<User> {
    return this.user$.asObservable();
  }
}
