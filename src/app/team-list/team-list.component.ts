import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.teams = this.teamService.getTeamsList();
  }

  deleteTeam(id: number) {
    this.teamService.deleteTeam(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}
