import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PanelRoutingModule } from './panel-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BankComponent } from './bank/bank.component';
import { PasswordComponent } from './password/password.component';
import { CreateComponent } from '../bank/create/create.component';
import { PendingInComponent } from './donations/pending-in/pending-in.component';
import { PendingOutComponent } from './donations/pending-out/pending-out.component';
import { ReceivedComponent } from './donations/received/received.component';
import { SentComponent } from './donations/sent/sent.component';
import { PotentialComponent } from './donations/potential/potential.component';
import { UpgradeMembershipComponent } from './Users/upgrade-membership/upgrade-membership.component';
import { UpdateProfileComponent } from './Users/update-profile/update-profile.component';
import { BankAccountsComponent } from './Users/bank-accounts/bank-accounts.component';
import { NotificationsComponent } from './settings/notifications/notifications.component';
import { TelegramComponent } from './settings/telegram/telegram.component';
import { SpiloverComponent } from './settings/spilover/spilover.component';
import { DirectComponent } from './downline/direct/direct.component';
import { TreeViewComponent } from './downline/tree-view/tree-view.component';
import { ReferralUrlComponent } from './marketing/referral-url/referral-url.component';
import { TelegramUrlComponent } from './marketing/telegram-url/telegram-url.component';
import { AdsGalleryComponent } from './marketing/ads-gallery/ads-gallery.component';
import { MyAdsComponent } from './marketing/my-ads/my-ads.component';
import { IntroductionComponent } from './support/introduction/introduction.component';
import { SlidesComponent } from './support/slides/slides.component';
import { FAQsComponent } from './support/faqs/faqs.component';
import { SupportComponent } from './support/support/support.component';
import { UpgratesComponent } from './support/upgrates/upgrates.component';

@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    BankComponent,
    PasswordComponent,
    CreateComponent,
    PendingInComponent,
    PendingOutComponent,
    ReceivedComponent,
    SentComponent,
    PotentialComponent,
    UpgradeMembershipComponent,
    UpdateProfileComponent,
    BankAccountsComponent,
    NotificationsComponent,
    TelegramComponent,
    SpiloverComponent,
    DirectComponent,
    TreeViewComponent,
    ReferralUrlComponent,
    TelegramUrlComponent,
    AdsGalleryComponent,
    MyAdsComponent,
    IntroductionComponent,
    SlidesComponent,
    FAQsComponent,
    SupportComponent,
    UpgratesComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
