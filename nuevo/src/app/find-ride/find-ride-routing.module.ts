import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindRidePage } from './find-ride.page';

const routes: Routes = [
  {
    path: '',
    component: FindRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRidePageRoutingModule {}
