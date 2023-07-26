import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserServices } from 'src/user-services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    RefreshButtonComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
