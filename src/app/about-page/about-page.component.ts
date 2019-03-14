import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'si-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AboutPageComponent implements OnInit {
  message;
  body;
  user: any = {};
  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.message = this.route.snapshot.paramMap.get('message');
  }

  ngOnInit(): void {
    // pass the observable
    this.body = this.messageService.getAbout();
    // this.messageService.getAbout().subscribe(console.log);
    // we manually subscribe for the result
    // this.messageService.getAbout().subscribe( resp => {
    //   this.body = resp;
    //   this.body.push({
    //     name: 'dsada'
    //   });
    // });

  }

  cdDefault(): void {
    this.user.userName = 'Packt Publications';
    this.user.userId = 10;
  }
  cdPush(): void {
    this.user = { userName: 'Mike', userId: 20 };
  }
}

