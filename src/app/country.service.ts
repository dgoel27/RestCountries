import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'https://restcountries.eu/rest/v2/';

  constructor(private _http: HttpClient) {
    console.log('Country Service constructor called');
  }

  public getSingleRegionInformation(_region): any {

    let currentRegion = this._http.get(this.baseUrl + 'region/' + _region);
    console.log(currentRegion);
    return currentRegion;

  }

  public getSingleCountryInformation(_country): any {

    let country = this._http.get(this.baseUrl + 'name/' + _country + '?fullText=true');
    console.log(country);
    return country;

  }

  public getSingleCurrencyInformation(_currency): any {

    let currency = this._http.get(this.baseUrl + 'currency/' + _currency);
    console.log(currency);
    return currency;

  }
  
  public getSingleLanguageInformation(_lang): any {

    let language = this._http.get(this.baseUrl + 'lang/' + _lang);
    console.log(language);
    return language;

  }  

  //exception handling
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    } // end condition *if
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }  // END handleError

}
