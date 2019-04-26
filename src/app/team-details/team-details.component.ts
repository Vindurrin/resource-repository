import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { TeamListComponent } from '../team-list/team-list.component';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input() team: Team;

  constructor(private teamService: TeamService, private listComponent: TeamListComponent) { }

  ngOnInit() {
  }

}
