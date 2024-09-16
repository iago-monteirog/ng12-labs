import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../shared/clients.service';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public listClients: Array<Client> = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.listAllClients().subscribe(
      res => {this.listClients = res}
    )
  }

  public removeClient(clientId: number) {
    console.log('Remover client de id: ' , clientId)
  }

}
