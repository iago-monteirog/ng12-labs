import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../shared/clients.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../shared/client.modal';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {
  public formClient: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private clientsService: ClientsService, private toastr: ToastrService, private fb: FormBuilder, private router: Router) { 
    this.formClient = this.buildFormClient();
  }


  ngOnInit(): void {
    const paramSnapshot = this.activatedRoute.snapshot.paramMap.get('id');

    const clientId = Number(paramSnapshot);

    this.clientsService.listById(clientId).subscribe(
      res => {
        this.formClient.patchValue(res)
      },
      err => {
        this.toastr.error(err)
      }
    )
  }

  private buildFormClient(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  public updateClient() {
    const client: Client = this.formClient.value as Client;

    this.clientsService.updateClient(client).subscribe(
      res => {
        this.toastr.success(`Cliente ${client.name} atualizado com sucesso.`);
        this.router.navigate(['clients'])
      },
      err => {
        this.toastr.error('Ocorreu um erro ao atualizar o cliente.')
      }
    )
  }

}
