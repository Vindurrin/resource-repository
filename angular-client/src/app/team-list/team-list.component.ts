import { Observable } from "rxjs";
import { TeamService } from "../team.service";
import { Team } from "../team";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.css"]
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;
  teamRole: string;

  constructor(private teamService: TeamService) {}

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


}