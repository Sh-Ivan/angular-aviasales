import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.css'],
})
export class SortingPanelComponent  {
  @Input() sorting: string;
  @Output() changeSorting = new EventEmitter;

  handleSorting = function(sort) {
    this.changeSorting.emit(sort);
  }

  constructor() {}



  sortNameMap = [
    ['cheapest', 'Самый дешевый'],
    ['fastest', 'Самый быстрый'],
    ['optimal', 'Оптимальный'],
  ];
}
