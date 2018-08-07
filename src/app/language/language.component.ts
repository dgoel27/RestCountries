import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  providers: [Location]
})
export class LanguageComponent implements OnInit, OnDestroy {

  public languages;
  public searchText;

  constructor(public _route: ActivatedRoute, public router: Router, public location: Location, public countryService: CountryService) {
    console.log('Language component constructor');
  }

  ngOnInit() {
    console.log('Language component initialized');
    let currentLanguage = this._route.snapshot.url.toString();
    console.log('currentLanguage : ' + currentLanguage);
    currentLanguage = currentLanguage.split(',')[1];
    console.log('currentLanguage : ' + currentLanguage);

    this.languages = this.countryService.getSingleLanguageInformation(currentLanguage).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.languages = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.languages);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }


  ngOnDestroy() {
    console.log('Language component destroyed');
  }

}
