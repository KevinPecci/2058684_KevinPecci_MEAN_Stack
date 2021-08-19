import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }

  checkUserInfo():Observable<Login[]> {
    return this.http.get<Login[]>("/assets/login.json");
  }
}

//http-server