import {Component, OnInit} from '@angular/core';
import {HoldingsService} from '../holdings-service.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  amountNumberFormat = '1.0-0';
  holdings: any[];
  myNumber = 1234.123456;

  constructor(private holdingsService: HoldingsService) {
  }

  ngOnInit() {
    this.getHoldings();
  }

  getHoldings() {
    this.holdingsService.fetchHoldings()
      .subscribe(
        (holdings: any[]) => this.holdings = holdings,
        (error) => console.log(error)
      );
  }

}
