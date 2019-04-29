import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateResourceComponent } from './create-resource/create-resource.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

import { TeamListComponent } from './team-list/team-list.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'resource', pathMatch: 'full' },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resources/:role', component: ResourceDetailsComponent },
  { path: 'add', component: CreateResourceComponent },
  { path: 'resources/edit/:id', component: UpdateResourceComponent},

  { path: 'teams', component: TeamListComponent },
  { path: 'addTeam', component: CreateTeamComponent },
  { path: 'teams/edit/:id', component: UpdateTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }