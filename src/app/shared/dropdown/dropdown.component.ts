import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownValue} from '../models/dropdown';

@Component({
  selector: 'jc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() label: string;
  @Input() id: string;
  @Input() options: DropdownValue[] = [];

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.valueChange.emit(this.value);
  }

}
