import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

type Response = {
  id: string;
  name: string;
  username: string;
  email: string;
};

type EmptyObj = {};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users/';
  private user$ = new BehaviorSubject<User>(null);

  private loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  async fetchUser() {
    this.loading.next(true);
    console.log('Fetching user');

    const randomID = Math.floor(Math.random() * 11) + 1;

    console.log('Fetching ID: ', randomID);

    const response = await this.http.get<Response | EmptyObj>(
      this.apiUrl + randomID
    );

    response.subscribe((data) => {
      console.log('Fetched data: ', data);

      if ('id' in data) this.setData(data as Response);
      else this.setData(null);

      console.log('Fetch ended.');
      this.loading.next(false);
    });
  }

  private setData(value: User): void {
    this.user$.next(value);
  }

  get getData(): Observable<User> {
    return this.user$.asObservable();
  }

  getUserByID(id: string): Observable<User | EmptyObj> {
    return this.http.get<User | EmptyObj>(this.apiUrl + id);
  }

  get isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
