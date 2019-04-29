import { Team } from '../team';
import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from "../team.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teams: Observable<Team[]>;

  constructor() { }

  ngOnInit() {

  }
}