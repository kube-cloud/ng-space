import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FetchMemories, FetchMemoriesSuccess, FetchMemoriesFailure } from './gallery.actions';
import { MemoriesService } from '../services/memories.service';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GalleryEffects {

  getMemories$ = createEffect(() => this.actions$.pipe(
    ofType(FetchMemories),
    switchMap(() => this.memoriesService.getMemories().pipe(
      map(result => FetchMemoriesSuccess(result)),
      catchError(_error => of(FetchMemoriesFailure()))
    ))
  ));

  constructor(private actions$: Actions, private memoriesService: MemoriesService) { }
}
