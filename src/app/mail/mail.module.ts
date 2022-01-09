import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';

import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolver';
import { MailService } from './mail.service';
import { MailViewResolver } from './components/mail-view/mail-view.resolver';
import { AuthGuard } from '../auth/auth.guard';
import { AuthModule } from '../auth/auth.module';
import { MailViewGuard } from './components/mail-view/mail-view.guard';
export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    //canActivate:[AuthGuard], 
    //canActivateChild:[AuthGuard], 
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve
        }
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        canDeactivate:[MailViewGuard],
        outlet: 'pane',
        resolve: {
          message: MailViewResolver
        }
      }
    ]
  }
];
 
@NgModule({
  imports: [
    CommonModule,   
    AuthModule, 
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  providers: [
    MailService,
    MailFolderResolve,
    MailViewResolver,
    MailViewGuard
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}