import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserResolverService } from './resolvers/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    children: [],
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    children: [],
    resolve: {
      user: UserResolverService
    }
  },
  {
    path: 'edit',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: UserEditComponent,
    children: [],
  }
];

export const userCrudRoutedComponents = [
  UserEditComponent,
  UserListComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolverService]
})
export class UserCrudPageRoutingModule {
}
