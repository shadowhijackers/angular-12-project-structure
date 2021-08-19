import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostRoutingModule } from './new-post-routing.module';
import { NewPostComponent } from './new-post.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NewPostComponent
  ],
  imports: [
    CommonModule,
    NewPostRoutingModule,
    FormsModule
  ]
})
export class NewPostModule { }
