import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewuserdialogComponent } from '../newuserdialog/newuserdialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() onMenuButtonClicked = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddNewUserClicked() : void {
    console.log("clicked")
    let dialogRef = this.dialog.open(NewuserdialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("results");
    })
  }

}
