import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export class Event{
  constructor(
    public name:string,
    public region:string,
    public date:string,
    public price:string,
    public description:string,
    public type:string,
    public contact:string,
    public picture:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpeventService {

  constructor(private httpClient:HttpClient) {}

  getEvent(): Observable<any>
  {
    console.log("test call");
    return this.httpClient.get<Event[]>('http://localhost:8080/maubilee/event');
  }

  public createEvent(event: Object) : Observable<Object>
  { 
    return this.httpClient.post<Event>("http://localhost:8080/maubilee/event", event);
  }

  public deleteEvent(id:number): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/maubilee/event" + "/"+ id);
  }

  public updateEvent(id: number, value: any) {
    return this.httpClient.put("http://localhost:8080/maubilee/event" + "/"+ id, event);
  }

  getEventid(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/maubilee/event" + "/"+ id);
  }

}
