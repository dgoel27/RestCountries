import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css'],
  providers: [Location]  
})
export class CountryViewComponent implements OnInit, OnDestroy {

  public country;

  constructor(public _route: ActivatedRoute, public router: Router, public location: Location, public countryService: CountryService, private spinner: NgxSpinnerService) { 
    console.log('Country-view component constructor');
  }

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 500);

    console.log('Country-view component initialized');
    let currentCountry = this._route.snapshot.url.toString();
    console.log('currentCountry : '+ currentCountry);
    currentCountry = currentCountry.split(',')[1];
    console.log('currentCountry : '+ currentCountry);

    this.country = this.countryService.getSingleCountryInformation(currentCountry).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.country = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.country);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }
  

  ngOnDestroy() {
    console.log('Country-view component destroyed');
  }  

}
