import { Component, OnInit } from '@angular/core';
import { STEP_ITEMS } from '../../constants/multi-step-form';
import { HttpeventService } from '../../service/httpevent.service';
import { Event } from '../../models/event';
//import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {
  formContent: any;
  formData: any;
  activeStepIndex: number;

  event = new Event();

  constructor(private HttpeventService:HttpeventService,
    private router: Router){}
    //private notificationService: NotificationService,) { }

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
    this.HttpeventService.getEvent();
  }


  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));

    this.HttpeventService.createEvent(this.formData)
        .subscribe( data => {
          alert("Event created successfully.");
        });
    this.router.navigate(['advert']);
    //this.notificationService.success(':: Submitted successfully');
  }

}
