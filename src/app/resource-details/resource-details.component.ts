import { Resource } from '../resource';
import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../resource.service';
import { ResourceListComponent } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  @Input() resource: Resource;

  constructor(private resourceService: ResourceService, private listComponent: ResourceListComponent) { }

  ngOnInit() {
  }
}