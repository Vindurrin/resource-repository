import { Observable } from "rxjs";
import { ResourceService } from "../resource.service";
import { Resource } from "../resource";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

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
    window.localStorage.setItem('r_role', this.resourceRole);
    this.resourceService.getResource(this.resourceRole)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl(`resources/${this.resourceRole}`);
        },
        error => console.log(error));
  }

  edit(id: number, role: string, start: string, end: string, sudorole: string, project: string, status: string){
    window.localStorage.setItem('edit_id', id.toString());
    window.localStorage.setItem('edit_role', role);
    window.localStorage.setItem('edit_start', start.toString());
    window.localStorage.setItem('edit_end', end.toString());
    window.localStorage.setItem('edit_sudorole', sudorole);
    window.localStorage.setItem('edit_project', project);
    window.localStorage.setItem('edit_status', status);
    this.router.navigateByUrl(`resources/edit/${id}`);
  }

}