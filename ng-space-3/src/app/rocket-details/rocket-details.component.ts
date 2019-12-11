import { Component, OnInit, Input } from '@angular/core';
import { PayloadWeight } from '../models/rocket.model';

@Component({
  selector: 'ngs-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.scss']
})
export class RocketDetailsComponent implements OnInit {
  @Input() payloads: PayloadWeight[]
  // TODO 5: I need that rocket_id but where can I get it from ?

  constructor() { }

  ngOnInit() {
  }

}
