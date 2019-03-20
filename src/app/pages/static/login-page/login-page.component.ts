import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormModel, DynamicFormService, DynamicInputModel } from '@ng-dynamic-forms/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core/services/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'si-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {
  formGroup: FormGroup;
  formModel: DynamicFormModel = [
    new DynamicInputModel({
      id: 'username',
      label: this.translate.instant('global.username'),
      placeholder: this.translate.instant('global.username'),
      validators: {
        required: null
      }
    }),
    new DynamicInputModel({
      id: 'password',
      inputType: 'password',
      label: this.translate.instant('global.password'),
      placeholder: this.translate.instant('global.password'),
      validators: {
        required: null
      }
    })
  ];
  constructor(
    private formService: DynamicFormService,
    private translate: TranslateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  doLogin() {
    this.authService.login(this.formGroup.value).subscribe(resp => {
      this.router.navigateByUrl('/');
    })
  }

}
