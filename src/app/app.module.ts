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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { SkillInsertComponent } from './skill-insert/skill-insert.component';
import { DashPipe } from './pipes/dash.pipe';

const appRoutes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'user-insert', component: UserInsertComponent },
  { path: 'skill-insert', component: SkillInsertComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AboutPageComponent,
    HighlightDirective,
    RepeatDirective,
    ChangeDetectComponent,
    UserInsertComponent,
    SkillInsertComponent,
    DashPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
