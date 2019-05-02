import { TeamService } from './../team.service';
import { Team } from './../team';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Resource } from "../resource";
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team: Team = new Team();
  resourceList: Observable<Resource[]>;

  constructor(private router: Router, private teamService: TeamService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResourcesList().subscribe(res=>this.resourceList=res);
  }

  newTeam(): void {
    this.team = new Team();
  }

  save() {
    this.teamService.createTeam(this.team).subscribe(data => console.log(data), error => console.log(error));
    alert("Team Saved Successfully. Please allow a moment for the data to appear.");
    this.router.navigate(["/teams"]);
    this.team = new Team();
  }

  onSubmit() {
    this.save();
  }
}