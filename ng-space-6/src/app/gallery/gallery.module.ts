import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { MatListModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MemoryComponent } from './memory/memory.component';
import { CommonModule } from '@angular/common';
import { AddMemoryDialogComponent } from './add-memory-dialog/add-memory-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/gallery.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GalleryEffects } from './store/gallery.effects';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GalleryEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    RouterModule.forChild([{ path: 'gallery', component: GalleryComponent }])
  ],
  exports: [RouterModule],
  entryComponents: [AddMemoryDialogComponent],
  declarations: [GalleryComponent, MemoryComponent, AddMemoryDialogComponent, StatisticsComponent],
  providers: [],
})
export class GalleryModule { }
