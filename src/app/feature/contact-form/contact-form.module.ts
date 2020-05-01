import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactFormRoutingModule } from './contact-form-routing.module';

import { ContactFormComponent } from './contact-form.component';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactFormModule { }
