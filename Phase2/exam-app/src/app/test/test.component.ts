import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myForm:FormGroup;
  constructor(public form:FormBuilder) {    // build form dynamically creating DI
      this.myForm=form.group({});
   }

  selAns:Array<any> = []
  corAns:Array<any> = []
   // life cycle method this will call after constructor 
  ngOnInit(): void {
    this.allQuestion.forEach(q=> {
        this.myForm?.addControl(q.question,this.form.control(""));
                                //user:new FormControl();
                                //q.question
    })
  }

  submit(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    let answers = JSON.parse(this.myForm.value);
    this.allQuestion.forEach(q=> {
      console.log(answers.q)
  })

  }
  //console.log(this.myForm.value);
  //value = array of questions and sleceted answers
  allQuestion=[
    {question:"5+5",ans1:"10",ans2:"11",ans3:"12",ans4:"13",correctAns:"10"},
    {question:"5-5",ans1:"0",ans2:"1",ans3:"2",ans4:"3",correctAns:"0"}
  ]

}
