import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions: Country[] = [];

  constructor(private countriesService: CountriesService){

  }

  serchByRegion(name: string): void{
    this.countriesService.searchRegion(name)
    .subscribe(data =>{
      this.regions = data
    })
  }


}
