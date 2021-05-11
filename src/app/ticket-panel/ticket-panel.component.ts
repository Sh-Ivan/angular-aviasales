import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.css'],
})
export class TicketPanelComponent implements OnInit {
  @Input() tickets;
  @Input() isLoading: boolean;
  constructor() {}

  ngOnInit(): void {}

  numberTickets = 5;

  addNumberTickets = function () {
    this.numberTickets += 5;
    console.log(this.numberTickets);
  };
}
