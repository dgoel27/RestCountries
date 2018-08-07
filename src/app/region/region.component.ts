import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit,OnDestroy {

  constructor() {
    console.log('Region component constructor');
   }

  ngOnInit() {
    console.log('Region component initialized');
  }

  onDeactivate() {
    document.body.scrollTop = 0;
}

  ngOnDestroy() {
    console.log('Region component destroyed');
  }

}
