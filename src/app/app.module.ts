import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes : Routes =[
  {
    path : "demo",
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path : "contacts",
    loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule)
  },
  {
    path : "**",
    redirectTo : "contacts"
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
