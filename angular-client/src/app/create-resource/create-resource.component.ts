import { ResourceService } from './../resource.service';
import { Resource } from './../resource';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent implements OnInit {

  resource: Resource = new Resource();

  constructor(private router:Router, private resourceService: ResourceService) { }

  ngOnInit() {
  }

  newResource(): void {
    this.resource = new Resource();
  }

  save() {
    this.resourceService.createResource(this.resource).subscribe(data => console.log(data), error => console.log(error));
    alert("Resource Saved Successfully. Please allow a moment for the data to appear.");
    this.router.navigate(["/resources"]);
    this.resource = new Resource();
  }

  onSubmit() {
    this.save();
  }
}