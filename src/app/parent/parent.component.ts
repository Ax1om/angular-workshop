import { Component, OnInit, ViewChild, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'si-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {

  lastMessage: string;
  child2 = 'Child 2'
  @ViewChild('child1') child1: ChildComponent;
  @ViewChildren(ChildComponent) 
  children: QueryList<ChildComponent>; 
  byeMessage: string;
  constructor(private messageService: MessageService) {
      this.messageService.messageEvent$.subscribe( 
        (bye: string) => { this.byeMessage = bye; }
      );
  }

  onKeyUp(value: string) {
    this.child1.title = value;
  }

  changeAllTitles(value: string) {
    this.children.forEach(element => {
      element.title = value;
    });
  }

  onMessage(message: string) {
    this.lastMessage = message;
  }

  ngOnInit() {
    console.log('component int');
  }

  ngOnDestroy() {
    
  }
}


