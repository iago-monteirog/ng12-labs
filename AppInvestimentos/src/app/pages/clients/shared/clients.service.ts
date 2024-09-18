import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Client } from "./client.model";

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  constructor(private http: HttpClient) { }

  public listAllClients(): Observable<Client[]> {
    const url = `${environment.baseUrlBackend}/clients`;

    return this.http.get(url).pipe(
      map(this.mapToClients)
    )
  }

  public saveNew(newClient: Client): Observable<Client> {
    const url = `${environment.baseUrlBackend}/clients`;

    return this.http.post(url, newClient).pipe(
      map(this.mapToClient)
    )
  }

  private mapToClients(data: any): Array<Client> {
    const listClients: Client[] = [];

    data.forEach((element: any) => listClients.push(Object.assign(new Client, element)));

    return listClients;
  }

  private mapToClient(data: any): Client {
    
    return (Object.assign(new Client, data));

  }

}