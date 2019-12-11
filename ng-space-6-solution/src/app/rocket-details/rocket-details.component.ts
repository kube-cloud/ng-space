import { Component, OnInit, Input } from '@angular/core';
import { PayloadWeight } from '../models/rocket.model';

@Component({
  selector: 'ngs-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.scss']
})
export class RocketDetailsComponent implements OnInit {
  @Input() payloads: PayloadWeight[]
  @Input() id: string

  goToRocketUrl: string;

  constructor() { }

  ngOnInit() {
    this.goToRocketUrl = `./${this.id}`
  }
}
