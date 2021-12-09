import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpComponent } from './help/help.component';
import { UserSearchModalComponent } from './user/search-modal/user-search-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SearchModalComponent } from './admin/search-modal/search-modal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchModalComponent,
    AddBookComponent,
    UserDashboardComponent,
    LoginComponent,
    NavBarComponent,
    UserSearchModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchModalComponent, HelpComponent, UserSearchModalComponent]
})
export class AppModule { }
