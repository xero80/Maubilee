import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public id:string,
    public firstname:string,
    public lastname:string,
    public role:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUser()
  {
    console.log("test call");
    return this.httpClient.get<User[]>('http://localhost:8080/maubilee/user');
  }

  public createUser(user) 
  { 
    return this.httpClient.post<User>("http://localhost:8080/maubilee/user", user);
  }

}