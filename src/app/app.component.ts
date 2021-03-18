import { Component } from '@angular/core';
import { Observable,fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor() {

  }

  ngOnInit() { }


  defaultImage = "../assets/img/51090.jpg";

  imgArray: string[] = ["../assets/img/karaca1.PNG", "../assets/img/Karaca2.PNG"];



}
