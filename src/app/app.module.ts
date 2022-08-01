import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { HeaderComponent } from '@layout/header/header.component';
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { ActivityComponent } from '@routes/activity/activity.component';
import { NotifComponent } from '@routes/activity/notif/notif.component';
import { CommunityComponent } from '@routes/community/community.component';
import { HomeComponent } from '@routes/home/home.component';
import { ProfileComponent } from '@routes/profile/profile.component';
import { ProgressComponent } from '@routes/progress/progress.component';
import { LoginDetailComponent } from '@routes/sessions/login/login-detail/login-detail.component';
import { LoginComponent } from '@routes/sessions/login/login.component';
import { RegisterDetailComponent } from '@routes/sessions/register/register-detail/register-detail.component';
import { RegisterComponent } from '@routes/sessions/register/register.component';
import { SessionsComponent } from '@routes/sessions/sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    ActivityComponent,
    CommunityComponent,
    HomeComponent,
    ProfileComponent,
    ProgressComponent,
    SessionsComponent,
    LoginComponent,
    LoginDetailComponent,
    RegisterComponent,
    RegisterDetailComponent,
    NotifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    CoreModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
