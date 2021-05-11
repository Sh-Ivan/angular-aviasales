import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  @Input() sorting: string;
  @Input() tickets;
  @Input() isLoading: boolean;
  @Input() changeSorting;

  constructor() {}

  ngOnInit(): void {}
}
