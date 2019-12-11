import { Component, OnInit, OnDestroy } from '@angular/core';
import { Memory } from '../models/memory';
import { MemoriesService } from '../services/memories.service';
import { MatDialog } from '@angular/material';
import { AddMemoryDialogComponent } from '../add-memory-dialog/add-memory-dialog.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ngs-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  memories: Memory[] = [];
  selectedMemory: Memory;
  private readonly subscription: Subscription = new Subscription();

  constructor(private memoriesService: MemoriesService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.subscription.add(
      this.memoriesService.getMemories().subscribe(result => this.memories = result)
    );
  }

  onMemorySelected(memory: Memory): void {
    this.selectedMemory = memory;
  }

  openAddMemoryDialog(): void {
    this.subscription.add(this.dialog.open(AddMemoryDialogComponent, { height: '50%', width: '50%' })
      .afterClosed()
      .pipe(filter(memory => !!memory))
      .subscribe(memory => {
        memory.id = this.memories.length;
        this.memories.push(memory);
        this.selectedMemory = memory
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
