import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { ContactmanagerAppComponent } from './contactmanager-app/contactmanager-app.component';


const routes : Routes = [
  {path : "", component:ContactmanagerAppComponent, 
    children :[
      {path : "", component : MainContentComponent}
    ]}
]

@NgModule({
  declarations: [
    SidenavComponent,
    MainContentComponent,
    ToolbarComponent,
    ContactmanagerAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class ContactmanagerModule { }