import { Component, OnInit } from '@angular/core';
import { Regist } from '../models/regist';
import { HttpClientService } from '../service/http-client.service';

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

  constructor(private httpClientService: HttpClientService) { }

  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.registModal);
  }

  ngOnInit(): void {
  }

  createUser(): void {
    this.httpClientService.createUser(this.registModal)
        .subscribe( data => {
          alert("User created successfully.");
        });

  }; 

}