import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  @Input() sorting: string;
  @Input() tickets;
  @Input() isLoading: boolean;
  @Output() changeSorting = new EventEmitter;

  handleSorting = function(sort) {
    this.changeSorting.emit(sort);
  }

  constructor() {}

  ngOnInit(): void {}
}
