import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectComponent } from './change-detect/change-detect.component';

const appRoutes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AboutPageComponent,
    HighlightDirective,
    RepeatDirective,
    ChangeDetectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
