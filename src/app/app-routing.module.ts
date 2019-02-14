import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineComponent } from './screens';

const routes: Routes = [
  { path: 'line', component: LineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
