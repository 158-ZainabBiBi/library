import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
                    CommonModule,
                ],
                providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
                exports: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent]
            },] }
];
LocationlibraryModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL2xvY2F0aW9ubGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBa0J4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQWF4RyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFmRixRQUFRLFNBQUM7Z0JBRVIsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLENBQUM7Z0JBQ3RILE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsWUFBWTtpQkFDYjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztnQkFDMUUsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsNkJBQTZCLENBQUM7YUFDbEgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7XG4gIER4TWVudU1vZHVsZSxcbiAgRHhSYW5nZVNlbGVjdG9yTW9kdWxlLFxuICBEeFBvcHVwTW9kdWxlLFxuICBEeENoYXJ0TW9kdWxlLFxuICBEeFBpZUNoYXJ0TW9kdWxlLFxuICBEeFZlY3Rvck1hcE1vZHVsZSxcbiAgRHhEYXRhR3JpZE1vZHVsZSxcbiAgRHhCdWxsZXRNb2R1bGUsXG4gIER4QnV0dG9uTW9kdWxlLFxuICBEeENoZWNrQm94TW9kdWxlLFxuICBEeFNlbGVjdEJveE1vZHVsZSxcbiAgRHhEcm9wRG93bkJ1dHRvbk1vZHVsZSxcbn0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyJztcbmltcG9ydCB7IEljb25QaWNrZXJNb2R1bGUgfSBmcm9tIFwibmd4LWljb24tcGlja2VyXCI7XG5cbmltcG9ydCB7IExvY2F0aW9ubGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb25saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2NhdGlvbnNlYXJjaGZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2NhdGlvbnNlYXJjaGZpbHRlci9sb2NhdGlvbnNlYXJjaGZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExvY2F0aW9ubGV2ZWx0eXBlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvY2F0aW9ubGV2ZWx0eXBlL2xvY2F0aW9ubGV2ZWx0eXBlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbTG9jYXRpb25saWJyYXJ5Q29tcG9uZW50LCBMb2NhdGlvbkNvbXBvbmVudCwgTG9jYXRpb25sZXZlbHR5cGVDb21wb25lbnQsIExvY2F0aW9uc2VhcmNoZmlsdGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3kgfV0sXG4gIGV4cG9ydHM6IFtMb2NhdGlvbmxpYnJhcnlDb21wb25lbnQsIExvY2F0aW9uQ29tcG9uZW50LCBMb2NhdGlvbmxldmVsdHlwZUNvbXBvbmVudCwgTG9jYXRpb25zZWFyY2hmaWx0ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9ubGlicmFyeU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbn1cbiJdfQ==