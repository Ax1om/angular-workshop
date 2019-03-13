import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[siRepeat]'
})
export class RepeatDirective {

  @Input()
  set siRepeat(num) {
    this.viewContainerRef.clear();
    for (let i = 0; i < num; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        pippo: i
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
}
