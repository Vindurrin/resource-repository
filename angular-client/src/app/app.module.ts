import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CreateResourceComponent } from './create-resource/create-resource.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';

import { ResourceService } from './resource.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateResourceComponent,
    ResourceDetailsComponent,
    ResourceListComponent,
    UpdateResourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }