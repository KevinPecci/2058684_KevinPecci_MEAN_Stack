import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number = 20;
  name:string = "Kevin";
  age:number = 22;
  result: boolean = true;
}
