import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { ActivityComponent } from '@routes/activity/activity.component';
import { CommunityComponent } from '@routes/community/community.component';
import { HomeComponent } from '@routes/home/home.component';
import { ProfileComponent } from '@routes/profile/profile.component';
import { ProgressComponent } from '@routes/progress/progress.component';
import { LoginDetailComponent } from '@routes/sessions/login/login-detail/login-detail.component';
import { LoginComponent } from '@routes/sessions/login/login.component';
import { RegisterDetailComponent } from '@routes/sessions/register/register-detail/register-detail.component';
import { RegisterComponent } from '@routes/sessions/register/register.component';
import { SessionsComponent } from '@routes/sessions/sessions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full',
      },
      {
        path: 'activity',
        component: ActivityComponent,
        data: { title: 'Activity' }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'Progress' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Profile' }
      },
      {
        path: 'community',
        component: CommunityComponent,
        data: { title: 'Community' }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'sessions',
        pathMatch: 'full',
      },
      {
        path: 'sessions',
        component: SessionsComponent,
        data: { title: 'Sessions' }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' },
      },
      {
        path: 'login/detail',
        component: LoginDetailComponent,
        data: { title: 'Login - Detail' }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { titel: 'Register' }
      },
      {
        path: 'register/detail',
        component: RegisterDetailComponent,
        data: { title: 'Register - Detail'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/sessions'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
