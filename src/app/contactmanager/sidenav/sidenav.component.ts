import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall : boolean = false;
  constructor(private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: 720px)`])
    .subscribe((state : BreakpointState) => {
      this.isScreenSmall = state.matches;
    });

  }

}
