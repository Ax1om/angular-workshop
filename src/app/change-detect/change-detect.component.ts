import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'si-change-detect',
  templateUrl: './change-detect.component.html',
  styleUrls: ['./change-detect.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectComponent {

  @Input() user: any;
  constructor() { }
}
