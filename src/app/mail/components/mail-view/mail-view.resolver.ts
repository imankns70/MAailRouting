import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable()
export class MailViewResolver implements Resolve<Mail> {
  constructor(private mailService: MailService) {}
  resolve(route: ActivatedRouteSnapshot) {
    debugger
    return this.mailService.getMessage(route.params.id);
  }
}