import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDetailService } from '../service/contactDetail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // contact from object
  LoginFrom: FormGroup;
  constructor(private fb: FormBuilder, private service: ContactDetailService, private route: Router) { }

  ngOnInit() {
    // create user detail form
    this.creatFrom();
  }

  /**
   * @method creatFrom
   * Method to create user Detail from object
   */
  creatFrom() {
    this.LoginFrom = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^ratan@test.com$')]],
      password: ['', [Validators.required, Validators.pattern('^12345$')]]
    });
  }

  /**
   * getter to get form controls
   */
  get f() { return this.LoginFrom.controls; }

  /***
  *  @method onSubmit
 * method to update and add user detail
 */
  onSubmit() {
    // // stop here if form is invalid
    if (this.LoginFrom.invalid) {
      return;
    }
    const email = this.LoginFrom.get('email').value;
    const password = this.LoginFrom.get('password').value;
    if (this.service.checkEmailAndPassword(email, password)) {
      this.route.navigate(['/contact-list']);
    } else {
      return;
    }

  }


}
