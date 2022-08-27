import { AfterViewInit, Component,  Input,  OnInit, ViewChild } from '@angular/core';
import { INote } from '../../models/note';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatSort) sort: MatSort | any;
  @Input() notes : INote[] | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource : MatTableDataSource<INote> = new MatTableDataSource<INote>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource =  new MatTableDataSource<INote>(this.notes);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
