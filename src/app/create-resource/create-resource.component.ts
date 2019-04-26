import { ResourceService } from './../resource.service';
import { Resource } from './../resource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent implements OnInit {

  resource: Resource = new Resource();
  submitted = false;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  newResource(): void {
    this.submitted = false;
    this.resource = new Resource();
  }

  save() {
    this.resourceService.createResource(this.resource)
      .subscribe(data => console.log(data), error => console.log(error));
    this.resource = new Resource();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}