import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../shared/clients.service';
import { Client } from '../shared/client.modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public listClients: Array<Client> = [];

  constructor(private clientsService: ClientsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.clientsService.listAllClients().subscribe(
      res => { this.listClients = res }
    )
  }

  public removeClient(clientId: number) {
    if (!window.confirm('Deseja realmente excluir o cliente?')) return;

    this.clientsService.delete(clientId).subscribe(
      res => {
        this.toastr.success('Cliente removido com sucesso!');
        this.listClients = this.listClients.filter(e => e.id !== clientId);
      },
      err => {
        this.toastr.error(err)
      }
    )
  }

  public updateList($event: Client) {
    this.listClients.push($event)
  }

}
