import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';
import { AuthGuard } from '../guards/authguard.guard';
import { ContactCanDeactivateGuard } from '../guards/contactCanDeactivate.gard';


const routes: Routes = [
  {
    path: '', component: ContactFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [ContactCanDeactivateGuard]
  },
  {
    path: 'edit/:id', component: ContactFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [ContactCanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
