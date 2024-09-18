import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../shared/clients.service';
import { Client } from '../shared/client.modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.css']
})
export class ClientsNewComponent implements OnInit {
  public formClient: FormGroup;

  @Output() newClient: EventEmitter<Client> = new EventEmitter();

  constructor(private fb: FormBuilder, private clientsService: ClientsService, private toastr: ToastrService) { 
    this.formClient = this.buildFormClient();
  }

  private buildFormClient(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formClient.get(controlName)?.invalid && this.formClient.get(controlName)?.touched)
  }

  public saveNewClient() {
    const newClient: Client = this.formClient.value as Client;
    this.formClient.reset();
    this.clientsService.saveNew(newClient).subscribe(
      res => {
        this.toastr.success("Novo cliente cadastrado com sucesso!")
        this.newClient.emit(res);
      },
      err => {
        console.error(err)
        this.toastr.error("Falha ao salvar novo cliente");
        
      }
    );
    console.log(this.formClient.value)
  }

  ngOnInit(): void {
  }

}
