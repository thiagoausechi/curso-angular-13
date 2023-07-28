import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
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

export const routes: Routes = [
  { path: '',         component: HomeComponent     },
  { path: 'about',    component: AboutComponent    },
  { path: 'user/:id', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
