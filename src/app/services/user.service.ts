import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$ = new BehaviorSubject<User>(null);

  constructor() {}

  setData(value: User): void {
    this.user$.next(value);
  }

  get getData(): Observable<User> {
    return this.user$.asObservable();
  }
}
