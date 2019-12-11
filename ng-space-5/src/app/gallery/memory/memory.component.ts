import { Component, OnInit, Input } from '@angular/core';
import { Memory } from '../models/memory';

@Component({
  selector: 'ngs-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

  @Input() memory: Memory;

  constructor() { }

  ngOnInit() {
  }

}
