import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fox} from "../interfaces/fox.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPictures(): Observable<Fox> {
    return this.http.get<Fox>('https://randomfox.ca/floof/')
  }

}
