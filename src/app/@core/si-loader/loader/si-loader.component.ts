import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SiLoaderService } from '../si-loader.service';

@Component({
  selector: 'si-loader',
  templateUrl: './si-loader.component.html',
  styleUrls: ['./si-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiLoaderComponent implements OnInit, OnDestroy {

  numRequest$ = this.loaderService.loaderSubject$.asObservable();

  constructor(private loaderService: SiLoaderService) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
