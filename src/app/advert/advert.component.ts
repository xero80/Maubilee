import { Component, OnInit } from '@angular/core';
import { HttpeventService } from '../service/httpevent.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CreateeventComponent } from '../event/createevent/createevent.component';
import { UpdateeventComponent } from '../event/updateevent/updateevent.component';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  events: Observable<Event[]>;

  constructor(private HttpeventService:HttpeventService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.events = this.HttpeventService.getEvent();
  }

  deleteEvent(id: number) {
    this.HttpeventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEvent(id: number){
    this.router.navigate(['updateevent', id]);
    //this.dialog.open(UpdateeventComponent, id);
  }

  onCreateEvent(){
    this.dialog.open(CreateeventComponent);
  
  }

}