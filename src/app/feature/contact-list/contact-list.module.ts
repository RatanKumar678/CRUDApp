import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './contact-list.component';
import { FormsModule } from '@angular/forms';
import { FilterDataPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [ContactListComponent, FilterDataPipe],
  imports: [
    CommonModule,
    ContactListRoutingModule,
    FormsModule
  ]
})
export class ContactListModule { }
 