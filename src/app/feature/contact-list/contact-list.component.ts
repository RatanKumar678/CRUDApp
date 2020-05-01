import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetailService } from '../service/contactDetail.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  // will hold user details
  contactList: Contact[] = [];
  // To store user active index
  activeIndex = null;
  // To store search Term
  searchTerm: string;

  constructor(private route: Router, private contactDetailService: ContactDetailService, private activatedRoute: ActivatedRoute) { }

  /**
   * @method ngOnInit
   * To get init value for List component
   */
  ngOnInit() {
    this.contactList = this.contactDetailService.getContactList();
    this.getQueryParams();
    this.removeQueryParamsAfterGetting();
    this.removeActiveClass();
  }

  /**
   * @method getQueryParams
   * method to get Query param from URL
   */
  getQueryParams() {
    if (this.activatedRoute.snapshot.queryParamMap.get('updatedData')) {
      this.activeIndex = this.activatedRoute.snapshot.queryParamMap.get('updatedData');
    }
  }

  /**
   * @method removeQueryParamsAfterGetting
   * method to Reset URL
   */
  removeQueryParamsAfterGetting() {
    this.route.navigate([], {
      queryParams: {
        updatedData: null
      },
      queryParamsHandling: 'merge'
    });
  }

  /**
   * @method removeActiveClass
   * method to remove Class from list to inactive selected data
   */
  removeActiveClass() {
    setTimeout(() => {
      const elements = document.getElementsByClassName('list');
      if (elements) {
        for (let i = 0; i <= elements.length; i++) {
          if (elements[i] && elements[i].classList && elements[i].classList.contains('ActiveList')) {
            setTimeout(() => {
              elements[i].classList.remove('ActiveList');
            }, 1200);
          }
        }
      }
    });
  }

  /**
   * @method editContact
   * redirect to contact form with ID to update user info
   */
  editContact(index) {
    this.route.navigate(['/contact/edit', index]);
  }

  /**
   * @method removeContact
   * method to delete user contact from list
   */
  removeContact(index) {
    const status = confirm('Are you sure you want to delete contact?');
    if (status === true) {
      this.contactDetailService.removeContact(index);
    } else {
      return;
    }
    this.activeIndex = null;
  }

}
