import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TodoComponent } from './components/todo/todo.component';
import { CrudService } from './services/crud.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    RefreshButtonComponent,
    ContactFormComponent,
    AboutComponent,
    HomeComponent,
    UserPageComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CrudService,
    LocalStorageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
