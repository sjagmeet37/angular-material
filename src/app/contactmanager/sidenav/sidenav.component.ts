import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall : boolean = false;
  constructor(private breakpointObserver : BreakpointObserver,
    private userService : UserService) { }

  users : Observable<IUser[]> | undefined;

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: 720px)`])
    .subscribe((state : BreakpointState) => {
      this.isScreenSmall = state.matches;
    });

      this.users = this.userService.getUsers();
      this.userService.getAllUsers();
      this.users.subscribe(
        data => {
          console.log(data);
        }
      )
  }

}
