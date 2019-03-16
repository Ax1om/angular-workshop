import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SiLoaderService {
  constructor() {}
  loaderSubject$ = new Subject<number>();
}
