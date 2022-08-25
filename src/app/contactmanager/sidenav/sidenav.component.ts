import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall : boolean = false;
  constructor(private breakpointObserver : BreakpointObserver,
  private userService : UserService,
  private router : Router,
  private route : ActivatedRoute) { }

  users : Observable<IUser[]> | undefined;

  @ViewChild(MatSidenav) sidenav : MatSidenav | undefined;

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: 720px)`])
    .subscribe((state : BreakpointState) => {
      this.isScreenSmall = state.matches;
    });

    this.route.params.subscribe(params =>{
      let id = params['id'];
      this.users = this.userService.users;
      this.userService.getAllUsers();
      
    });

    this.router.events.subscribe(() =>{
      if(this.isScreenSmall) {
        this.sidenav?.close();
      }
    });


  }

}
