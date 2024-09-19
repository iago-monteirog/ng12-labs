import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../clients/shared/client.modal';
import { InvestmentService } from '../shared/investment.service';
import { Investment } from '../shared/investment.model';

@Component({
  selector: 'app-investiments-list-by-client',
  templateUrl: './investiments-list-by-client.component.html',
  styleUrls: ['./investiments-list-by-client.component.css']
})
export class InvestimentsListByClientComponent implements OnInit {

  @Input() client: Client | null = null;

  public investments: Investment[] = [];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.investmentService.listInvestmentByClientId(this.client?.id as number).subscribe(
      res => this.investments = res
    )
  }

  public somarTotalInvestments(): number {
    return this.investmentService.calcTotalValueInvestments(this.investments);
  }

}
