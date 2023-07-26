import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

interface NamedRoute extends Route {
  name: string;
  hide?: boolean;
}

export const routes: NamedRoute[] = [
  { path: '',      name: 'Home',  component: AppComponent },
  { path: 'about', name: 'About', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
