import { TeamService } from './../team.service';
import { Team } from './../team';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Resource } from "../resource";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team: Team = new Team();
  submitted = false;
  resourceList: Observable<Resource[]>;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  newTeam(): void {
    this.submitted = false;
    this.team = new Team();
  }

  save() {
    this.teamService.createTeam(this.team)
      .subscribe(data => console.log(data), error => console.log(error));
    this.team = new Team();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}