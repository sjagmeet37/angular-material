import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newuserdialog',
  templateUrl: './newuserdialog.component.html',
  styleUrls: ['./newuserdialog.component.css']
})
export class NewuserdialogComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<NewuserdialogComponent>,
    private userService: UserService,
    private router : Router) { }
  userName = new FormControl('', [Validators.required]);
  user : IUser | any;
  ngOnInit(): void {
    this.user = {
      name : "",
      bio : "",
      avatar : "",
      notes : []
    };
  }

  saveUser() : void {
    this.dialogRef.close(this.user);
    let id = this.userService.saveUser(this.user);
    this.router.navigate(['/contacts', id])
    console.log(this.user);

  }

  closeDialog() : void {
    this.dialogRef.close();
  }
  
  nameErrorMessage() : string | any {
    if (this.userName.hasError('required')) {
      return 'Name is a required field';
    }
  }

}
