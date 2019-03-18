import { Component, OnInit } from '@angular/core';
import { RESOURCE_PAGE_CONFIG } from './config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'si-crud-resource-page',
  templateUrl: './crud-resource-page.component.html',
  styleUrls: ['./crud-resource-page.component.scss']
})
export class CrudResourcePageComponent implements OnInit {

  pageConfig = RESOURCE_PAGE_CONFIG;

  currentResource = this.route.snapshot.paramMap.get('resource');
  resourceDataList = this.route.snapshot.data.resourceDataList;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
