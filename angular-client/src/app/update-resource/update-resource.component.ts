import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from './../resource';
import { ResourceService } from './../resource.service';

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.css']
})
export class UpdateResourceComponent implements OnInit {

  resource: any = {};
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private resourceService: ResourceService) { }

  ngOnInit() {

  }

  update(){
    this.resourceService.updateResource(this.resource.id, this.resource)
      .subscribe(data => console.log(data), error => console.log(error));
    this.resource = new Resource();
  }

  onSubmit(){   
    this.submitted = true;
    this.update();
  }

}
