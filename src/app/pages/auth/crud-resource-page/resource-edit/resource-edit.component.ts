import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { RESOURCE_PAGE_CONFIG } from '../config';
import { TranslateService } from '@ngx-translate/core';
import { CrudResourceService } from '@core/services/data';

@Component({
  selector: 'si-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export class ResourceEditComponent implements OnInit {

  currentResource = this.route.snapshot.paramMap.get('resource');
  resourceDataSingle = this.route.snapshot.data.resourceDataSingle || {};
  formGroup: FormGroup;
  formModel = this.formService.fromJSON(RESOURCE_PAGE_CONFIG[this.currentResource].formConfig);

  constructor(
    private route: ActivatedRoute,
    private formService: DynamicFormService,
    private translateService: TranslateService,
    private resourceService: CrudResourceService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.formModel.map(fc => {
      if (fc.label) {
        fc.label = this.translateService.instant(fc.label);
      }
    });
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue(this.resourceDataSingle);
  }

  onSubmit() {
    const resourceDTO = this.formGroup.value;
    if (resourceDTO.birthday) {
      resourceDTO.birthday = new Date(resourceDTO.birthday).toISOString();
    }
    this.resourceService.save(this.currentResource, resourceDTO).subscribe(() => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

}
