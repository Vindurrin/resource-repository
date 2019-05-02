import { Observable } from "rxjs";
import { TeamService } from "../team.service";
import { Team } from "../team";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.css"]
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;
  teamRole: string;

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.teams = this.teamService.getTeamsList();
  }

  deleteTeam(id: number) {
    this.teamService.deleteTeam(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  edit(id: number, name: string, status: string, start: string, end: string, project: string){
    window.localStorage.setItem("edit_id", id.toString());
    window.localStorage.setItem("edit_name", name);
    window.localStorage.setItem("edit_status", status);
    window.localStorage.setItem("edit_start", start);
    window.localStorage.setItem("edit_end", end);
    window.localStorage.setItem("edit_project", project);
    this.router.navigateByUrl(`teams/edit/${id}`);
  }

}