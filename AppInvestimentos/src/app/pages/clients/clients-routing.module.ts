import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';

const routes: Routes = [
  { path: '', component: ClientsListComponent },
  { path: 'new', component: ClientsNewComponent },
  { path: 'edit/:id', component: ClientsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
