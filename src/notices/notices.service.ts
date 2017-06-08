import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Notice } from './notice';

@Injectable()
export class NoticesService {

  constructor() { }

  getNotices(): Notice[] {
    let notices: Notice[] = [
      {
        id: 1,
        date: new Date().getTime(),
        description: 'Lorem ipsum bla bla bla. Mas texto blabla bla',
        title: 'Título de prueba',
        category: 'Noticia de prueba'
      }
    ];
    return notices;
  }
}
