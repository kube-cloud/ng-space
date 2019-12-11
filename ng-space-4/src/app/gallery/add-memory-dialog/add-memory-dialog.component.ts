import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngs-add-memory-dialog',
  templateUrl: './add-memory-dialog.component.html',
  styleUrls: ['./add-memory-dialog.component.scss']
})
export class AddMemoryDialogComponent implements OnInit {
  memoryForm: FormGroup;

  constructor() { }

  ngOnInit() { }

  addMemory(): void {
    // TODO 7: To be or not to be valid ?
  }

  closeDialog(): void {
    // TODO 7: Close my up !
  }

}
