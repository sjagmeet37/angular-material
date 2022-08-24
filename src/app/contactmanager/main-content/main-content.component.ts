import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user : IUser | undefined;

  constructor(private route : ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
     this.route.params.subscribe(params =>{
        const id = params['id'];
        this.user = this.userService.getUserById(id);
        console.log(this.user);
     })
  }

}
