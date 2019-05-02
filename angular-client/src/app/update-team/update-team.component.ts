import { Component, OnInit } from '@angular/core';
import { Team } from './../team';
import { TeamService } from './../team.service';
import { Observable } from "rxjs";
import { Resource } from "../resource";
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  team: any = {};
  resourceList: Observable<Resource[]>;

  constructor(private router: Router, private teamService: TeamService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResourcesList().subscribe(res=>this.resourceList=res);

    let edit_id = window.localStorage.getItem("edit_id");
    let edit_name = window.localStorage.getItem("edit_name");
    let edit_status = window.localStorage.getItem("edit_status", );
    let edit_start = window.localStorage.getItem("edit_start", );
    let edit_end = window.localStorage.getItem("edit_end", );
    let edit_project = window.localStorage.getItem("edit_project", );

    this.team.id = edit_id;
    this.team.name = edit_name;
    this.team.status = edit_status;
    this.team.start = edit_start;
    this.team.end = edit_end;
    this.team.project = edit_project;
  }

  update(){
    this.teamService.updateTeam(this.team.id, this.team).subscribe(data => console.log(data), error => console.log(error));
    alert("Team Saved Successfully. Please allow a moment for the data to appear.");
    this.router.navigate(["/teams"]);
    this.team = new Team();
  }

  onSubmit(){
    this.update();
  }

}
