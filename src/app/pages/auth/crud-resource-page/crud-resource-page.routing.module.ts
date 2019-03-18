import { NgModule } from '@angular/core';
import { ResourceEditComponent } from './resource-edit/resource-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { CrudResourcePageComponent } from './crud-resource-page.component';
import { ResourceDataResolver } from './resolvers/resource-data.resolver';
import { SingleResourceResolver } from './resolvers/single-resource.resolver';

const routes: Routes = [
  {
    path: '',
    component: CrudResourcePageComponent,
    resolve: {
      resourceDataList: ResourceDataResolver
    },
    children: [],
  },
  {
    path: 'edit/:id',
    component: ResourceEditComponent,
    children: [],
    resolve: {
      resourceDataSingle: SingleResourceResolver
    }
  },
  {
    path: 'edit',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: ResourceEditComponent,
    children: [],
  }
];

export const resourcesCrudRoutedComponents = [
  CrudResourcePageComponent,
  ResourceEditComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResourceDataResolver, SingleResourceResolver]
})
export class CrudResourcePageRoutingModule { }
