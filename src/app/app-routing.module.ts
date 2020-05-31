import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BusinessComponent } from './business/business.component';
import { AdvertComponent } from './advert/advert.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { CreateeventComponent } from './event/createevent/createevent.component';
import { UpdateeventComponent } from './event/updateevent/updateevent.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'business', component: BusinessComponent},
  { path: 'index', component: IndexComponent},
  { path: 'advert', component: AdvertComponent, canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGaurdService] },
  { path: 'advert', component: AdvertComponent,canActivate:[AuthGaurdService] },
  { path: 'createevent', component: CreateeventComponent,canActivate:[AuthGaurdService] },
  { path: 'updateevent/:id', component: UpdateeventComponent,canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
