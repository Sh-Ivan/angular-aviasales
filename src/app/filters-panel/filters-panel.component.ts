import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css']
})
export class FiltersPanelComponent implements OnInit {

  @Input() filters;
  constructor() { }

  ngOnInit(): void {

  }

  allFilters = {
        all: 'Все',
        direct: 'Без пересадок',
        one: '1 пересадка',
        two: '2 пересадки',
        three: '3 пересадки',
      }

}
