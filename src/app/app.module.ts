import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/header/header.component';
import { FooterComponent } from './feature/footer/footer.component';
import { LoginComponent } from './feature/login/login.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';

import { ContactDetailService } from './feature/service/contactDetail.service';

import { AuthGuard } from './feature/guards/authguard.guard';
import { ContactCanDeactivateGuard } from './feature/guards/contactCanDeactivate.gard';

import { ContactListModule } from './feature/contact-list/contact-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ContactListModule,
    AppRoutingModule,
  ],
  providers: [ContactDetailService, AuthGuard, ContactCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
