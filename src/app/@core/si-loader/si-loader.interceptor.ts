import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SiLoaderService } from './si-loader.service';

@Injectable()
export class SiLoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: SiLoaderService) {
  }

  pendingRequest = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pendingRequest++;
    this.loaderService.loaderSubject$.next(this.pendingRequest);
    return next.handle(req).pipe(
      catchError(error => {
        return of(error);
      }),
      finalize(() => {
        this.pendingRequest--;
        this.loaderService.loaderSubject$.next(this.pendingRequest);
      })
    );
  }
}
