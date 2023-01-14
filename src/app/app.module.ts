import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NameMinLengthDirective } from './Directives/name-min-length.directive';
import { NameMaxLengthDirective } from './Directives/name-max-length.directive';
import { EmailValidatorDirective } from './Directives/email-validator.directive';
import { RequiredValidatorDirective } from './Directives/required-validator.directive';
import { PhoneValidationDirective } from './Directives/phone-validation.directive';
import { SalaryValidationDirective } from './Directives/salary-validation.directive';
import { FilterDataPipe } from './Pipes/filter-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    NavbarComponent,
    NameMinLengthDirective,
    NameMaxLengthDirective,
    EmailValidatorDirective,
    RequiredValidatorDirective,
    PhoneValidationDirective,
    SalaryValidationDirective,
    FilterDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
