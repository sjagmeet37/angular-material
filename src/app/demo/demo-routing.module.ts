import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
{  path : "button",  component : ButtonComponent },
{  path : "flexbox",  component : FlexboxComponent },
{  path : "**",  redirectTo : "button" }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
