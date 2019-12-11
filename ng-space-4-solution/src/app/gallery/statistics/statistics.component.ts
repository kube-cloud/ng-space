import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Memory } from '../models/memory';
import { MemoryType } from '../models/memory-type.enum';

@Component({
  selector: 'ngs-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnChanges {

  @Input() memories: Memory[];

  total: number = 0;
  proTotal: number = 0;
  fanTotal: number = 0;

  constructor() { }

  ngOnInit() {
    if (this.memories) {
      this.total = this.memories.length;
      this.proTotal = this.memories.filter(m => m.type === MemoryType.PRO).length;
      this.fanTotal = this.memories.filter(m => m.type === MemoryType.FAN).length;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.memories && changes.memories.currentValue && !changes.memories.firstChange) {
      const newMemories = changes.memories.currentValue as Memory[];
      this.total = newMemories.length;
      this.proTotal = newMemories.filter(m => m.type === MemoryType.PRO).length;
      this.fanTotal = newMemories.filter(m => m.type === MemoryType.FAN).length;
    }
  }

}
