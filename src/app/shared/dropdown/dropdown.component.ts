import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropdownValue} from '../models/dropdown';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'jc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() ctrl: FormControl;
  @Input() label: string;
  @Input() id: string;
  @Input() options: DropdownValue[] = [];

  constructor() { }

  ngOnInit() {
  }
}
