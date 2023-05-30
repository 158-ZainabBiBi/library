import { Component } from '@angular/core';
import { setting } from 'projects/locationlibrary/src/lib/setting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  title = 'Order Management - ERP';

  changeIcon() {
    this.favIcon.href = setting.icon;
  }

  constructor() {
    this.changeIcon();
  }
}

