import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Injectable()
export class ContactCanDeactivateGuard implements CanDeactivate<ContactFormComponent> {
    canDeactivate(
        component: ContactFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (component.contactFrom.dirty && !component.submitStatus) {
            return confirm('Are you sure you want to discard your changes?');
        } else {
            return true;
        }
    }
}
