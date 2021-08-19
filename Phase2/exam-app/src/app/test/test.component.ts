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

  msg = ""
  submitted = false;
  pass = ""
   // life cycle method this will call after constructor 
  ngOnInit(): void {
    this.allQuestion.forEach(q=> {
        this.myForm?.addControl(q.question,this.form.control(""));
                                //user:new FormControl();
                                //q.question
    })
  }

  submit(){
    this.submitted = true;
    console.log(this.myForm);
    console.log(this.myForm.value);
    let finalScore = this.finishExam(this.myForm);
    if(finalScore/this.allQuestion.length >= .6){
      this.pass = "passed"
    }
    else{
      this.pass = "failed"
    }
    this.msg = "You got "+finalScore+"/"+this.allQuestion.length+" questions correct. \n You have " + this.pass + " this exam."
  }

  finishExam(myForm:FormGroup): number {
    let numCor = 0;

    this.allQuestion.forEach(q=> {
      if(q.correctAns == myForm.value[q.question]){
        numCor++;
        q.feedMsg = "You chose the correct answer!";
        q.correct = "true";
      }
      else{
        q.feedMsg = "Incorrect, the correct answer was " + q.correctAns;
        q.correct = "false";
      }
    })
    return numCor;

  }
  //console.log(this.myForm.value);
  //value = array of questions and sleceted answers
  allQuestion=[
    {question:"5+5",ans1:"10",ans2:"11",ans3:"12",ans4:"13",correctAns:"10",feedMsg:"",correct:"false"},
    {question:"5-5",ans1:"0",ans2:"1",ans3:"2",ans4:"3",correctAns:"0",feedMsg:"",correct:"false"},
    {question:"6+3",ans1:"1",ans2:"9",ans3:"2",ans4:"3",correctAns:"9",feedMsg:"",correct:"false"},
    {question:"2+3",ans1:"7",ans2:"8",ans3:"9",ans4:"5",correctAns:"5",feedMsg:"",correct:"false"},
    {question:"What is the first letter of the alphabet",ans1:"A",ans2:"B",ans3:"C",ans4:"D",correctAns:"A",feedMsg:"",correct:"false"}
  ]

}
