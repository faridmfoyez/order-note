import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletListComponent } from './outlet-list/outlet-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OutletListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OutletListComponent,
      }
    ])
  ]
})
export class OutletsModule { }
