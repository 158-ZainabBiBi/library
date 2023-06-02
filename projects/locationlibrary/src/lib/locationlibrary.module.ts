import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  DxMenuModule,
  DxRangeSelectorModule,
  DxPopupModule,
  DxChartModule,
  DxPieChartModule,
  DxVectorMapModule,
  DxDataGridModule,
  DxBulletModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxDropDownButtonModule,
} from 'devextreme-angular';
import { IconPickerModule } from "ngx-icon-picker";

import { LocationlibraryComponent } from './locationlibrary.component';
import { LocationsearchfilterComponent } from './components/locationsearchfilter/locationsearchfilter.component';
import { LocationComponent } from './components/location/location.component';
import { LocationleveltypeComponent } from './components/locationleveltype/locationleveltype.component';

@NgModule({

  declarations: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  exports: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent]
})
export class LocationlibraryModule {
  constructor() { }

  ngOnInit(): void {
  }
}
