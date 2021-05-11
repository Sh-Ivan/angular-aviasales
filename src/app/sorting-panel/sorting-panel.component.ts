import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.css'],
})
export class SortingPanelComponent implements OnInit {
  @Input() sorting: string;
  @Input() changeSorting;

  constructor() {}

  ngOnInit(): void {}

  sortNameMap = [
    ['cheapest', 'Самый дешевый'],
    ['fastest', 'Самый быстрый'],
    ['optimal', 'Оптимальный'],
  ];
}
