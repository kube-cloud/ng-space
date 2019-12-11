import { Component, OnInit } from '@angular/core';
import { RocketsService } from '../services/rockets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from '../models/rocket.model';
import { Observable, forkJoin } from 'rxjs';
import { Launch } from '../models/launch.model';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngs-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {

  private readonly rocket_ids = ['falcon1', 'falcon9', 'falconheavy', 'bfr']

  rocket$: Observable<Rocket>
  launches$: Observable<Launch[]>

  constructor(private rocketsService: RocketsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // this.rocket$ = this.rocketsService.getRocket(this.activatedRoute.snapshot.paramMap.get('id'));

    this.rocket$ = this.activatedRoute.params.pipe(
      map(paramMap => paramMap['id']),
      switchMap(id => this.rocketsService.getRocket(id))
    );

    // this.launches$ = this.rocketsService.getRocketLaunches(this.activatedRoute.snapshot.paramMap.get('id'));

    this.launches$ = this.activatedRoute.params.pipe(
      map(paramMap => paramMap['id']),
      switchMap(id => this.rocketsService.getRocketLaunches(id))
    );

    // const crazyRxjs = this.activatedRoute.params.pipe(
    //   map(paramMap => paramMap['id']),
    //   switchMap(id => forkJoin(
    //     this.rocketsService.getRocket(id),
    //     this.rocketsService.getRocketLaunches(id)
    //   ))
    // )
  }

  navigate(value: number): void {
    const currentIndex = this.rocket_ids.indexOf(this.activatedRoute.snapshot.paramMap.get('id'));
    const newIndex = currentIndex + value;
    this.router.navigate(['rockets', this.rocket_ids[newIndex]]);
  }

}
