import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { FaqComponent } from './page/faq/faq.component';
import { TermsComponent } from './page/terms/terms.component';
import { NosponsorComponent } from './page/nosponsor/nosponsor.component';
import { SignupComponent } from './page/signup/signup.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';;

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['panel']);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, ...canActivate(redirectLoggedInToItems()) },
  { path: 'login', component: LoginComponent},
  { path: 'signup/:ref', component: SignupComponent},
  { path: 'recovery', component: RecoveryComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'nosponsor', component: NosponsorComponent },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then(mod => mod.PanelModule),
  ...canActivate(redirectUnauthorizedToLogin())
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
