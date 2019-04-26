import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';
import { ResourceListComponent } from './resource-list/resource-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'resource', pathMatch: 'full' },
  { path: 'resources', component: ResourceListComponent },
  { path: 'add', component: CreateResourceComponent },
  { path: 'resources/edit/:id', component: UpdateResourceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }