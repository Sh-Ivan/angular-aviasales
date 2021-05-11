import { Component, OnInit, Input } from '@angular/core';
import { formatSegment, splitPrice } from '../../utils/formatters';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  @Input() ticket;

  constructor() {}

  ngOnInit(): void {
    this.price = splitPrice(this.ticket.price);
    this.ticket.segments.forEach((segment, index) => {
      this.segmentData[index] = formatSegment(segment);
    });
  }

  logoURL = '//pics.avs.io/99/36/';
  segmentData = [];
  price = '';
}
