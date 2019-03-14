import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dash',
  pure: false
})
export class DashPipe implements PipeTransform {
  transform(value: string, args = '-'): any {
    return value.replace(' ', '').split('').join(args);
  }
}
