import { Resource } from '../resource';
import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from "../resource.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  resources: Observable<Resource[]>;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    let role = window.localStorage.getItem('r_role');
    this.resources = this.resourceService.getResource(role);
  }
}