import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ITableAction, ITableConfig, TableActionEnum } from './si-table.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudResourceService } from '@core/services/data';
import { remove } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'si-table',
  templateUrl: './si-table.component.html',
  styleUrls: ['./si-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiTableComponent implements OnInit {

  @Input()
  config: ITableConfig;

  @Input()
  data: any[];

  constructor(
    private router: Router,
    private resourceService: CrudResourceService,
    private route: ActivatedRoute,
    private changeRef: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit() {
  }
  onActionClick(action: ITableAction, row: any) {
    switch (action.action) {
      case TableActionEnum.GO_TO:
        if (!action.metadata.urlParser) {
          throw Error('Action GO_TO needs urlParse to be defined');
        }
        this.router.navigate(action.metadata.urlParser(row), { relativeTo: this.route });
        break;
      case TableActionEnum.REMOVE:
        if (confirm(this.translate.instant('component.si-table.confirm-delete'))) {
          this.resourceService.delete(this.config.resource, row.id).subscribe(() => {
            remove(this.data, r => r.id === row.id);
            this.changeRef.detectChanges();
          });
        }
        break;
    }
  }

}
