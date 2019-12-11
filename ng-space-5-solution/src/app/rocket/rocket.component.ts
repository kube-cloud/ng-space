import { Component, OnInit } from '@angular/core';
import { RocketsService } from '../services/rockets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from '../models/rocket.model';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { Launch } from '../models/launch.model';
import { map, switchMap, startWith, filter, debounceTime } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngs-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {

  private readonly rocket_ids = ['falcon1', 'falcon9', 'falconheavy', 'bfr']

  rocket$: Observable<Rocket>;
  launches$: Observable<Launch[]>;
  searchCtrl: FormControl;

  constructor(private rocketsService: RocketsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.searchCtrl = new FormControl(undefined, [Validators.pattern('^[0-9]{4}$'), Validators.min(2002)]);
    const searchChanges$ = this.searchCtrl.valueChanges.pipe(
      startWith(null),
      filter(() => this.searchCtrl.valid),
      debounceTime(200)
    );

    const routeIdChanges$ = this.activatedRoute.params.pipe(
      map(paramMap => paramMap['id'])
    );

    this.rocket$ = routeIdChanges$.pipe(
      switchMap(id => this.rocketsService.getRocket(id))
    );

    this.launches$ = combineLatest(routeIdChanges$, searchChanges$).pipe(
      switchMap(([id, year]) => this.rocketsService.getRocketLaunches(id, year))
    );
  }

  navigate(value: number): void {
    const currentIndex = this.rocket_ids.indexOf(this.activatedRoute.snapshot.paramMap.get('id'));
    const newIndex = currentIndex + value;
    this.router.navigate(['rockets', this.rocket_ids[newIndex]]);
  }

}
