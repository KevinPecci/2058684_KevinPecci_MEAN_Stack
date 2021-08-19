import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';


class Task{
  public ID:string;
  public taskName:string;
  public name:string;
  public date:Date;
  constructor(id:string,taskName:string,name:string,date:Date){
      this.ID = id;
      this.taskName = taskName;
      this.name = name;
      this.date = date;
  }
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskRef = new FormGroup({
    ID:new FormControl("",[Validators.required]),
    taskName:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    date:new FormControl("",[Validators.required])
  })

  constructor() { }

  tasks:Array<Task> = []
  displayedColumns = ['ID', 'taskName', 'name', 'date'];
  @ViewChild(MatTable) table!: MatTable<Task>;


  ngOnInit(): void {
  }

  addTask(){
    let input = this.taskRef.value
    let task = new Task(input.ID, input.taskName, input.name, input.date)
    this.tasks.push(task);
    this.table.renderRows();
  }
}
//http-server