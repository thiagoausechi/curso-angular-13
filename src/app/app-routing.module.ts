import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

// Won't require name if `hide = true`
type NamedRoute =
  | ({
      name: string;
      hide?: false;
    } & Route)
  | ({
      hide: true;
    } & Route);

export const routes: NamedRoute[] = [
  { path: '',         name: 'Home',  component: HomeComponent     },
  { path: 'about',    name: 'About', component: AboutComponent    },
  { path: 'user/:id', hide:  true,   component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
