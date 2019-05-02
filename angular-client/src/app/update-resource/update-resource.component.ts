import { Component, OnInit } from '@angular/core';
import { Resource } from './../resource';
import { ResourceService } from './../resource.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.css']
})
export class UpdateResourceComponent implements OnInit {

  resource: any = {};
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private resourceService: ResourceService) { }

  ngOnInit() {
    let edit_id = window.localStorage.getItem("edit_id");
    let edit_role = window.localStorage.getItem("edit_role");
    let edit_start = new Date(window.localStorage.getItem("edit_start"));
    let edit_end = new Date(window.localStorage.getItem("edit_end"));
    let edit_sudorole = window.localStorage.getItem("edit_sudorole");
    let edit_project = window.localStorage.getItem("edit_project");
    let edit_status = window.localStorage.getItem("edit_status");

    this.resource.id = edit_id;
    this.resource.role = edit_role;
    this.resource.start = edit_start;
    this.resource.end = edit_end;
    this.resource.sudorole = edit_sudorole;
    this.resource.project = edit_project;
    this.resource.status = edit_status;
  }

  update(){
    this.resourceService.updateResource(this.resource.id, this.resource).subscribe(data => console.log(data), error => console.log(error));
    alert("Resource Saved Successfully. Please allow a moment for the data to appear.");
    this.router.navigate(["/resources"]);
    this.resource = new Resource();
  }

  onSubmit(){   
    this.update();
  }

}
