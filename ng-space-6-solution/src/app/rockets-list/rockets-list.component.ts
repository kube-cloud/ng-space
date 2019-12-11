import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rocket, PayloadWeight } from '../models/rocket.model';
import { Observable } from 'rxjs';
import { RocketsService } from '../services/rockets.service';
import { slideIn } from '../shared/custom.animations';

@Component({
  selector: 'ngs-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss'],
  animations: [slideIn]
})
export class RocketsListComponent implements OnInit {

  rockets$: Observable<Rocket[]>;
  selectedRocketId: string;

  constructor(private rocketsService: RocketsService) { }

  ngOnInit() {
    this.rockets$ = this.rocketsService.getRockets();
  }

  displayDetails(selectedId: string): void {
    if (this.selectedRocketId === selectedId) {
      this.selectedRocketId = null;
    } else {
      this.selectedRocketId = selectedId
    }

  }

  shouldDisplayDetails(rocketId: string): boolean {
    return this.selectedRocketId === rocketId;
  }

  log(): void {
    console.count('hello');
  }

}
