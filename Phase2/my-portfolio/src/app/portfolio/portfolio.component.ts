import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

//Contact class to put contact objects into an array for display in ngIf
class Contact{
  public cName:string;
  public phoneNo:number;
  constructor(name:string,phone:number){
      this.cName = name;
      this.phoneNo = phone;
  }
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  signupRef = new FormGroup({
    first:new FormControl("",[Validators.required]),
    last:new FormControl("",[Validators.required]),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  portfolioRef = new FormGroup({
    cName:new FormControl("",[Validators.required]),
    phoneNo:new FormControl("",[Validators.required])
  })
  msg:string=""
  first:string=""
  last:string=""
  user:string=""
  pass:string=""
  //controls for displaying different entry forms
  login:boolean=true
  signup:boolean=false
  portfolio:boolean=false

  contacts:Array<Contact> = []
  constructor() { }

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value
    //console.log(login);
    if(login.user==this.user && login.pass==this.pass){
        this.login = false;
        this.signup = false;
        this.portfolio = true;
    }else {
        this.msg  = "Wrong username/password"
    }
    this.loginRef.reset();
  }

  //Changes creditials to match what is input
  //this method only allows for one user
  addUser() {
    let signup = this.signupRef.value
    //console.log(login);
    this.first = signup.first;
    this.last = signup.last;
    this.user = signup.user;
    this.pass = signup.pass;
    this.signupRef.reset();
    signup = false;
  }

  addContact(){
    let con = this.portfolioRef.value
    let name = con.cName;
    let phone = con.phoneNo;
    let contact = new Contact(name,phone);
    this.contacts.push(contact);
  }

  signUpFlag(){
    if (this.signup == true){
      this.signup = false;
    }
    else{
      this.signup = true;
    }
  }

}
