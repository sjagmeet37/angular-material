import { Component,  Input,  OnInit } from '@angular/core';
import { INote } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes : INote[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
