import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'si-root',
  template: '<si-loader></si-loader><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('it');
  }
}
