import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-attribute-directive',
  templateUrl: './app-attribute-directive.component.html',
  styleUrls: ['./app-attribute-directive.component.css']
})
export class AppAttributeDirectiveComponent implements OnInit {
  styleVar={'color':'red'};
  constructor() { }

  ngOnInit(): void {
  }

}
