import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Mail } from './models/mail.interface';

const db$: Observable<Mail[]> = of([
  {
    "id": 1,
    "folder": "inbox",
    "from": "Jane Smith",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "timestamp": 1487848162905
  },
  {
    "id": 2,
    "folder": "inbox",
    "from": "John Doe",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "timestamp": 1487845787719
  },
  {
    "id": 3,
    "folder": "inbox",
    "from": "Joseph Hanes",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "timestamp": 1487845787719
  },
  {
    "id": 4,
    "folder": "trash",
    "from": "Laurence Murray",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
    "timestamp": 1487845787719
  }
]);
@Injectable()
export class MailService {
  constructor() { }
  getFolder(folder: string): Observable<Mail[]> {
    return db$.pipe(
      map((mails: Mail[]) => mails.filter(a => a.folder === folder))
    );
  }
} 