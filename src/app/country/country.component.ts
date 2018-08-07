import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})
export class CountryComponent implements OnInit, OnDestroy {

  public allCountries;
  public searchText;

  constructor(public _route: ActivatedRoute, public router: Router, public location: Location, public countryService: CountryService) {
    console.log('Countries component constructor');
  }

  ngOnInit() {
    console.log('Countries component initialized');
    let currentRegion = this._route.snapshot.url.toString();
    console.log('currentRegion : ' + currentRegion);
    currentRegion = currentRegion.split(',')[1];
    console.log('currentRegion : ' + currentRegion);

    this.allCountries = this.countryService.getSingleRegionInformation(currentRegion).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allCountries = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allCountries);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }


  ngOnDestroy() {
    console.log('Countries component destroyed');
  }

}
