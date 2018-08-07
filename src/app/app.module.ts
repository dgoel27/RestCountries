import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryService } from './country.service';
import { FilterPipe } from './pipe/filter.pipe';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryViewComponent,
    RegionComponent,
    FilterPipe,
    CurrencyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: RegionComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'region/:regionName', component: CountryComponent },
      { path: 'lang/:langCode', component: LanguageComponent },
      { path: 'currency/:curCode', component: CurrencyComponent },
      { path: 'country/:countryName', component: CountryViewComponent },
      { path: '*', component: RegionComponent },
      { path: '**', component: RegionComponent }      
    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
