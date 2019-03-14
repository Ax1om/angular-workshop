import { Component, OnInit } from '@angular/core';
import { ITableConfig } from '../../@ui/components/si-table/si-table.models';
import { UserService } from '../../@core/services/data/user.service';

@Component({
  selector: 'si-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
