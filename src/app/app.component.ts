import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'si-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('it');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('it');
  }
}
