import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'si-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  @Input() title: string;
  @Output() onHello = new EventEmitter<string>();
  constructor(private messageService: MessageService) { }

  sayBye() {
    this.messageService.messageEvent$.emit(
      `${this.title} says goodbye`
    );
  }

  onClick() {
    this.onHello.emit(`Hello from ${this.title}`);
  }
}
