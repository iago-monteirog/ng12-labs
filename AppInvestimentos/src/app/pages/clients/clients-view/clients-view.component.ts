import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client.modal';
import { ClientsService } from '../shared/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.css']
})
export class ClientsViewComponent implements OnInit {

  public client: Client | null = null;

  constructor(private clientsService: ClientsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const clientiD: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.clientsService.listById(clientiD).subscribe(
      res => {
        this.client = res;
      }
    )
  }

}
