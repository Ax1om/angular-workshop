import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RESOURCE_PAGE_CONFIG } from './config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'si-crud-resource-page',
  templateUrl: './crud-resource-page.component.html',
  styleUrls: ['./crud-resource-page.component.scss']
})
export class CrudResourcePageComponent implements OnInit, OnDestroy {

  pageConfig = RESOURCE_PAGE_CONFIG;

  currentResource;
  resourceDataList;

  paramsSubscription;
  dataSubscription;

  constructor(private route: ActivatedRoute, private changeRef: ChangeDetectorRef) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.currentResource = params.resource;
    });
    this.dataSubscription = this.route.data.subscribe(data => {
      this.resourceDataList = [...data.resourceDataList]
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

}
