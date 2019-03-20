import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from '@ui/components/layout/header/header.models';
import { StorageService } from '@core/services/core/storage.service';
import { AuthService } from '@core/services/core/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'si-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() items: IMenuItem[];
  showMenu = false;

  user = StorageService.getCurrentUser();
  langs: string[];
  currentLang: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.langs = this.translate.getLangs();
    this.currentLang = this.translate.currentLang;
  }

  onLangChange(lang) {
    console.log('lang', lang);
    this.translate.use(lang);
    StorageService.setCurrentLang(lang);
  }

  logout(){
    this.authService.logout().subscribe(resp => {
      this.router.navigateByUrl('/pages/static/login');
    })
  }

}
