import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from "./../models/user"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl : string = "";
  private dataStore : {
    users : IUser[]
  }

  private _users: BehaviorSubject<IUser[]>;
  

  constructor(private httpClient : HttpClient) { 
    this.dataStore = {users : [] };
    this._users = new BehaviorSubject<IUser[]>([]);
  }


  public getUsers() : Observable<IUser[]> {
      return this._users.asObservable();
  }

  public getAllUsers() : void {
    this.httpClient.get<IUser[]>(   "https://angular-material-api.azurewebsites.net/users").subscribe(
      data => {
        this.dataStore.users= data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }, 
      error => {

      }
    );
  }

}
