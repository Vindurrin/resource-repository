import { Observable } from "rxjs";
import { ResourceService } from "../resource.service";
import { Resource } from "../resource";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ResourceDetailsComponent } from './../resource-details/resource-details.component';

@Component({
  selector: "app-resource-list",
  templateUrl: "./resource-list.component.html",
  styleUrls: ["./resource-list.component.css"]
})
export class ResourceListComponent implements OnInit {
  resources: Observable<Resource[]>;
  resourceRole: string;

  constructor(private resourceService: ResourceService, private router: Router) {}

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

  search(){
    console.log("searching");
    console.log("role: " + this.resourceRole);
    window.localStorage.setItem('role', this.resourceRole);
    this.resourceService.getResource(this.resourceRole)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl(`resources/${this.resourceRole}`);
        },
        error => console.log(error));
  }

}