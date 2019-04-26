import { Observable } from "rxjs";
import { ResourceService } from "../resource.service";
import { Resource } from "../resource";
import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-resource-list",
  templateUrl: "./resource-list.component.html",
  styleUrls: ["./resource-list.component.css"]
})
export class ResourceListComponent implements OnInit {
  resources: Observable<Resource[]>;

  constructor(private router: Router, private resourceService: ResourceService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.resources = this.resourceService.getResourcesList();
  }

  deleteResource(id: number) {
    this.resourceService.deleteResource(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}