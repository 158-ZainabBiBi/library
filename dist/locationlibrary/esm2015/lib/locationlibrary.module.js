import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { DxMenuModule, DxRangeSelectorModule, DxPopupModule, DxChartModule, DxPieChartModule, DxVectorMapModule, DxDataGridModule, DxBulletModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxDropDownButtonModule, } from 'devextreme-angular';
import { IconPickerModule } from "ngx-icon-picker";
import { LocationlibraryComponent } from './locationlibrary.component';
import { LocationsearchfilterComponent } from './components/locationsearchfilter/locationsearchfilter.component';
import { LocationComponent } from './components/location/location.component';
import { LocationleveltypeComponent } from './components/locationleveltype/locationleveltype.component';
export class LocationlibraryModule {
    constructor() { }
    ngOnInit() {
    }
}
LocationlibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent],
                imports: [
                    RouterModule,
                    HttpClientModule,
                    FormsModule,
                    NgSelectModule,
                    CommonModule,
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
                    IconPickerModule,
                ],
                exports: [LocationlibraryComponent]
            },] }
];
LocationlibraryModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL2xvY2F0aW9ubGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUNMLFlBQVksRUFDWixxQkFBcUIsRUFDckIsYUFBYSxFQUNiLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsc0JBQXNCLEdBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDakgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUEyQnhHLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQTdCRixRQUFRLFNBQUM7Z0JBRVIsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLENBQUM7Z0JBQ3RILE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxjQUFjO29CQUNkLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5pbXBvcnQge1xuICBEeE1lbnVNb2R1bGUsXG4gIER4UmFuZ2VTZWxlY3Rvck1vZHVsZSxcbiAgRHhQb3B1cE1vZHVsZSxcbiAgRHhDaGFydE1vZHVsZSxcbiAgRHhQaWVDaGFydE1vZHVsZSxcbiAgRHhWZWN0b3JNYXBNb2R1bGUsXG4gIER4RGF0YUdyaWRNb2R1bGUsXG4gIER4QnVsbGV0TW9kdWxlLFxuICBEeEJ1dHRvbk1vZHVsZSxcbiAgRHhDaGVja0JveE1vZHVsZSxcbiAgRHhTZWxlY3RCb3hNb2R1bGUsXG4gIER4RHJvcERvd25CdXR0b25Nb2R1bGUsXG59IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7XG5pbXBvcnQgeyBJY29uUGlja2VyTW9kdWxlIH0gZnJvbSBcIm5neC1pY29uLXBpY2tlclwiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbmxpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2xvY2F0aW9ubGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYXRpb25zZWFyY2hmaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9jYXRpb25zZWFyY2hmaWx0ZXIvbG9jYXRpb25zZWFyY2hmaWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2NhdGlvbmxldmVsdHlwZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2NhdGlvbmxldmVsdHlwZS9sb2NhdGlvbmxldmVsdHlwZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXG4gIGRlY2xhcmF0aW9uczogW0xvY2F0aW9ubGlicmFyeUNvbXBvbmVudCwgTG9jYXRpb25Db21wb25lbnQsIExvY2F0aW9ubGV2ZWx0eXBlQ29tcG9uZW50LCBMb2NhdGlvbnNlYXJjaGZpbHRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHhNZW51TW9kdWxlLFxuICAgIER4UmFuZ2VTZWxlY3Rvck1vZHVsZSxcbiAgICBEeFBvcHVwTW9kdWxlLFxuICAgIER4Q2hhcnRNb2R1bGUsXG4gICAgRHhQaWVDaGFydE1vZHVsZSxcbiAgICBEeFZlY3Rvck1hcE1vZHVsZSxcbiAgICBEeERhdGFHcmlkTW9kdWxlLFxuICAgIER4QnVsbGV0TW9kdWxlLFxuICAgIER4QnV0dG9uTW9kdWxlLFxuICAgIER4Q2hlY2tCb3hNb2R1bGUsXG4gICAgRHhTZWxlY3RCb3hNb2R1bGUsXG4gICAgRHhEcm9wRG93bkJ1dHRvbk1vZHVsZSxcbiAgICBJY29uUGlja2VyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTG9jYXRpb25saWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbmxpYnJhcnlNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG59XG5cblxuXG5cbiJdfQ==