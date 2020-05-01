import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ContactDetailService } from '../service/contactDetail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // contact from object
  contactFrom: FormGroup;
  // check from action update or aad new user
  submitTypeUpdate = false;
  // get user detail getting id from url
  id: number;
  
  constructor(private fb: FormBuilder, private contactDetailService: ContactDetailService, private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    // create user detail form
    this.creatFrom();
    // get id from url
    this.getUserId();
  }

  /**
   * @method getUserId
   * Method to get Id from URL paramMap
   */
  getUserId() {
    this.activatedRoute.paramMap.subscribe(data => {
      console.log(data.get('id'));
      if (data.get('id')) {
        this.submitTypeUpdate = true;
        this.id = +data.get('id');
        this.getDetail(this.id);
      }
    });
  }

  /**
   * @method creatFrom
   * Method to create user Detail from object
   */
  creatFrom() {
    this.contactFrom = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(4)]],
      lname: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.minLength(10), Validators.pattern('[0-9 ]*')]],
      status: [false]
    });
  }

  /**
   * @method getDetail
   * @param id
   * Method to to get user detail depends on id
   */
  getDetail(id: number) {
    const contactFromDetail = this.contactDetailService.getContactDetail(id);
    this.contactFrom.patchValue(contactFromDetail);
  }

  /**
   * getter to get form controls
   */
  get f() { return this.contactFrom.controls; }

  /**
   * @method onSubmit
   * method to update and add user detail
   */
  onSubmit() {
    // // stop here if form is invalid
    if (this.contactFrom.invalid) {
      return;
    }
    if (!this.submitTypeUpdate) {
      this.contactDetailService.addContact(this.contactFrom.value);
      this.contactFrom.reset();
      this.route.navigate(['/contact-list'], {
        queryParams: { updatedData: 0 }
      });
    } else {
      this.contactDetailService.updateContactList(this.id, this.contactFrom.value);
      this.route.navigate(['/contact-list'], {
        queryParams: { updatedData: this.id }
      });
    }
  }

}
