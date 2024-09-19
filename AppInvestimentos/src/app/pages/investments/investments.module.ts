import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestimentsListByClientComponent } from './investiments-list-by-client/investiments-list-by-client.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InvestimentsListByClientComponent
  ],
  exports: [
    InvestimentsListByClientComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    HttpClientModule
  ]
})
export class InvestmentsModule { }
