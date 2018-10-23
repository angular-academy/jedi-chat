import {Component, HostBinding, Input, OnInit, SimpleChanges, OnDestroy, OnChanges, DoCheck} from '@angular/core';
import {ChatMessage} from './chat-message';
import { MessageAgePipe } from './message-age.pipe';
import { MessageTimerService } from '../message-timer.service';

@Component({
  selector: 'jc-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input() message: ChatMessage;
  @Input() class: string;
  @HostBinding('class') styles: string;

  public currentTime: Date = new Date();

  private timerId = undefined;
  constructor(private messageAgePipe: MessageAgePipe,
    private messageTimerService: MessageTimerService) {

      // console.log(this.messageAgePipe.transform(new Date(2017), new Date()));
  }

  public ngOnInit() {
    this.styles = `${this.class} ${this.message.position} alert-${this.message.alert}`;
/*
    this.timerId = window.setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    */
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  public ngDoCheck() {
    // DoCheck: Lifecycle Hook für Änderungen, die angular nicht regulär mitbekommt
    console.log('message: do check called');
    if (this.currentTime !== this.messageTimerService.currentTime) {
      this.currentTime = this.messageTimerService.currentTime;
    }
  }

  public ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }
}
