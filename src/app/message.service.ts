import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageEvent$ = new EventEmitter<string>();
  constructor(private http: HttpClient) { }

  getAbout() {
    // return of('This project is about Angular');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
