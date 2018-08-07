import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [Location]
})
export class CurrencyComponent implements OnInit, OnDestroy {

  public currencies;
  public searchText;

  constructor(public _route: ActivatedRoute, public router: Router, public location: Location, public countryService: CountryService) {
    console.log('Currency component constructor');
  }

  ngOnInit() {
    console.log('Currency component initialized');
    let currentCurrency = this._route.snapshot.url.toString();
    console.log('currentCurrency : ' + currentCurrency);
    currentCurrency = currentCurrency.split(',')[1];
    console.log('currentcurrency : ' + currentCurrency);

    this.currencies = this.countryService.getSingleCurrencyInformation(currentCurrency).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.currencies = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.currencies);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }


  ngOnDestroy() {
    console.log('Currency component destroyed');
  }

}