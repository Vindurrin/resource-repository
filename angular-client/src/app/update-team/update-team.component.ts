import { Component, OnInit } from '@angular/core';
import { Team } from './../team';
import { TeamService } from './../team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  team: any = {};
  submitted = false;

  constructor(private teamService: TeamService) { }

  ngOnInit() {

  }

  update(){
    this.teamService.updateTeam(this.team.id, this.team)
      .subscribe(data => console.log(data), error => console.log(error));
    this.team = new Team();
  }

  onSubmit(){   
    this.submitted = true;
    this.update();
  }

}
