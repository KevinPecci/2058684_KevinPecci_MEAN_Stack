import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interp',
  templateUrl: './string-interp.component.html',
  styleUrls: ['./string-interp.component.css']
})
export class StringInterpComponent implements OnInit {

  fname:string = "Kevin";

  constructor() { }

  ngOnInit(): void {
  }
  dis(): string {
    return "Welcome " + this.fname;
  }

}
