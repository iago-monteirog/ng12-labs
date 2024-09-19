import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Investment } from "./investment.model";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class InvestmentService {
  constructor(private http: HttpClient) { }

  public listInvestmentByClientId(id: number): Observable<Investment[]> {
    const url = `${environment.baseUrlBackend}/clients/${id}/investments`;

    return this.http.get(url, { responseType: 'json' }).pipe(
      map(this.mapToInvestiments)
    )
  }

  private mapToInvestiments(data: any): Investment[] {
    const investmentList: Investment[] = [];

    data.forEach((element: any) => investmentList.push(Object.assign(new Investment, element)));

    return investmentList;
  }

  public calcTotalValueInvestments(investiments: Investment[]): number {
    let value = 0;

    return investiments.reduce((acc, curr) => {
      return acc + Number(curr.amount)
    }, value);
  }
}