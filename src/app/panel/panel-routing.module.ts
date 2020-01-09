import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BankComponent } from './bank/bank.component';
import { CreateComponent } from '../bank/create/create.component';
import { PendingInComponent } from './donations/pending-in/pending-in.component';
import { PendingOutComponent } from './donations/pending-out/pending-out.component';
import { ReceivedComponent } from './donations/received/received.component';
import { SentComponent } from './donations/sent/sent.component';
import { PotentialComponent } from './donations/potential/potential.component';
import { UpgradeMembershipComponent } from './Users/upgrade-membership/upgrade-membership.component';
import { UpdateProfileComponent } from './Users/update-profile/update-profile.component';
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

const panelRoutes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'profile', component: ProfileComponent },
          { path: '', component: ProfileComponent },
          { path: 'create-bank', component: CreateComponent },
          { path: 'edit-bank/:id', component: CreateComponent },
          // donations
          { path: 'payment/pending', component: PendingInComponent },
          { path: 'payment/pendingout', component: PendingOutComponent },
          { path: 'payment/Received', component: ReceivedComponent },
          { path: 'payment/out', component: SentComponent },
          { path: 'payment/potential', component: PotentialComponent },
          // Users
          { path: 'upgrade', component: UpgradeMembershipComponent },
          { path: 'member/profile', component: UpdateProfileComponent },
          { path: 'bank', component: BankComponent },
          // settings
          { path: 'settings/notification', component: NotificationsComponent },
          { path: 'settings/telegram', component: TelegramComponent },
          { path: 'settings/spillover', component: SpiloverComponent },
          // downline
          { path: 'downline', component: DirectComponent },
          { path: 'downline/tree', component: TreeViewComponent },
          // marketing
          { path: 'marketing/referral', component: ReferralUrlComponent },
          { path: 'marketing/telegram', component: TelegramUrlComponent },
          { path: 'ad/all', component: AdsGalleryComponent },
          { path: 'ad/myad', component: MyAdsComponent },
          // Support
          { path: 'guide/introduction', component: IntroductionComponent },
          { path: 'guide/slides', component: SlidesComponent },
          { path: 'guide/faq', component: FAQsComponent },
          { path: 'member/support', component: SupportComponent },
          { path: 'guide/updates', component: UpgratesComponent },

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(panelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule { }
