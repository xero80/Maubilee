import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpeventService } from '../../service/httpevent.service';
import { Event } from '../../models/event';
import { AdvertComponent } from '../../advert/advert.component';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {

  id: number;
  event: Event;

  Update(form){
    console.log(form.value);
  } 

  constructor(private route: ActivatedRoute,private router: Router,
    private HttpeventService:HttpeventService) { }

  ngOnInit(): void {
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.HttpeventService.getEventid(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }

  updateEvent(): void {
    this.HttpeventService.updateEvent(this.id, this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }

  onSubmit() {
    //this.updateEvent();    
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.event);
    this.updateEvent();
  }

  gotoList() {
    this.router.navigate(['/advert']);
  }
  list(){
    this.router.navigate(['advert']);
  }

  UpdateButton() {
    this.HttpeventService.updateEvent(this.id, this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }
}
