import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { FaqComponent } from './page/faq/faq.component';
import { TermsComponent } from './page/terms/terms.component';
import { NosponsorComponent } from './page/nosponsor/nosponsor.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './page/signup/signup.component';
import { SignupSuccessComponent } from './components/signup-success/signup-success.component';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RecoveryComponent,
    FaqComponent,
    TermsComponent,
    NosponsorComponent,
    SignupComponent,
    SignupSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireAuthGuardModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
