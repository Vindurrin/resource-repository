import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResourceComponent } from './update-resource.component';

describe('UpdateResourceComponent', () => {
  let component: UpdateResourceComponent;
  let fixture: ComponentFixture<UpdateResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
