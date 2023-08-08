import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from './types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getHelloWorld(getting: boolean): Observable<Message>{
    const uri = 'http://127.0.0.1:8000';
    if (getting){
      return this.http.get<Message>(uri);
    }
    return this.http.get<Message>('http://notworking.com');
  }
}
