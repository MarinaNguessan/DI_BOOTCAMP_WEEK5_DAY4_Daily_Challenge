import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) {}

  getData(): Observable<Map<string, Object>[]> {
    return this.http.get<Map<string, Object>[]>("localhost:8080/api/data");
  }
}
