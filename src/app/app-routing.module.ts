import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

interface NamedRoute extends Route {
  name: string;
  hide?: boolean;
}

export const routes: NamedRoute[] = [
  { path: '',      name: 'Home',  component: HomeComponent  },
  { path: 'about', name: 'About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
