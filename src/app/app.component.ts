import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = {
    searchId: null,
      tickets: [],
      filters: {
        all: false,
        direct: true,
        one: true,
        two: true,
        three: false,
      },
      sorting: 'cheapest',
      isLoading: true,
      counterError: 0,
      url: 'https://front-test.beta.aviasales.ru'
  }
}
