import { Component } from '@angular/core';
import {Myservice} from "../services/myservice.service";


@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  jsonData!: Map<string, Object>[];

  constructor(private myService: Myservice){

  }

  ngOnInit(){
    this.myService
      .getData()
      .subscribe((jsonData) => (this.jsonData = jsonData));
  }

  keys(json: Map<string, Object>) {
    return Object.keys(json);
  }

}
