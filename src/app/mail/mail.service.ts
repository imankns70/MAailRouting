import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor() {}
  getFolder(folder: string): Observable<Mail[]> {
    return of(null);
  }
}