import { Component } from '@angular/core';
import { AUTH_PAGES_MENU } from './auth-pages.menu';
import { IMenuItem } from '@ui/components/layout/header/header.models';

@Component({
  selector: 'si-auth-pages',
  templateUrl: './auth-pages.component.html',
})
export class AuthPagesComponent {

  menuItems: IMenuItem[] = AUTH_PAGES_MENU;
}
