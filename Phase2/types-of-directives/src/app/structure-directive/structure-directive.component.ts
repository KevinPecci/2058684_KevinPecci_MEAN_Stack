import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  f1:boolean = true;
  stdNames:Array<string>=["Kevin", "Noah", "Brad", "Tyler"]
  employees:Array<Employee> = new Array();
  constructor() {
    let emp1 = new Employee(100,"Kevin", 12000);
    let emp2 = new Employee(100,"Noah", 14000);
    let emp3 = new Employee(100,"Brad", 16000);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  ngOnInit(): void {
  }

  changeValue(){
    this.f1 = false;
  }

  addName(nameRef:any){
    let name = nameRef.value;
    this.stdNames.push(name);
  }

}
