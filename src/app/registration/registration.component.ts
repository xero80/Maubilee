import { Component, OnInit } from '@angular/core';
import { Regist } from '../models/regist';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registModal = new Regist();

  addUser(form){
    console.log(form.value);
  }
  constructor() { }

  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.registModal);
  }

  ngOnInit(): void {
  }

}