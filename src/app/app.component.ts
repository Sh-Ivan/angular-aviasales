import { Component} from '@angular/core';
import filterTickets from '../utils/filterTickets';
import sortTickets from '../utils/sortTickets';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  state = {
    searchId: null,
    tickets: [
      {
        price: 12600,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'SPB',
            date: 12937,
            stops: ['EKT', 'TMN'],
            duration: 202,
          },
          {
            origin: 'MOW',
            destination: 'SPB',
            date: 12937,
            stops: ['EKT', 'TMN'],
            duration: 202,
          },
        ],
      },
      {
        price: 55000,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'SPB',
            date: 12937,
            stops: ['EKT', 'TMN'],
            duration: 102,
          },
          {
            origin: 'MOW',
            destination: 'SPB',
            date: 12937,
            stops: ['EKT', 'TMN'],
            duration: 102,
          },
        ],
      },
    ],
    
    isLoading: false,
    counterError: 0,
    url: 'https://front-test.beta.aviasales.ru',
  };

  filters = {
      all: false,
      direct: true,
      one: true,
      two: true,
      three: false,
    };
    sorting = 'cheapest';

    filteredTickets = [];
    sortedTickets = [];

  ngOnInit(): void {
   this.filteredTickets = filterTickets(this.state.tickets, this.filters);
    this.sortedTickets = sortTickets(this.filteredTickets, this.sorting); 
  }

  changeSorting = function (event: any) {
    this.sorting = event.target.name;
    this.sortedTickets = sortTickets(this.filteredTickets, this.sorting);
  };

  setFilters = function (filter) {
    if (filter === 'all') {
      if (this.filters.all) {
        this.filters = {
          all: false,
          direct: false,
          one: false,
          two: false,
          three: false,
        };
      } else {
        this.filters = {
          all: true,
          direct: true,
          one: true,
          two: true,
          three: true,
        };
      }
    } else {
      this.filters[filter] = !this.filters[filter];
      this.filters.all = false;
    }
    this.filteredTickets = filterTickets(this.state.tickets, this.filters);
    this.sortedTickets = sortTickets(this.filteredTickets, this.sorting);
  };
}

interface Ticket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}
