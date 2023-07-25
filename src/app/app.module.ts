import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserServices } from 'src/user-services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
