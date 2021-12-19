import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  selectedRoute: string = 'Recipes';

  constructor() {}

  onRouteChange(route: string) {
    this.selectedRoute = route;
  }
}
