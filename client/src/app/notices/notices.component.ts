import { Component, OnInit } from '@angular/core';

import { Notice } from './notice';
import { NoticesService } from './notices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})

export class NoticesComponent implements OnInit {
  notices: Notice[] = [];
  notice: Notice;

  constructor(
    private noticesService: NoticesService) {}

  ngOnInit(): void {
    this.notices = this.getNotices();
  }

  getNotices(): Notice[] {
    return this.noticesService
        .getNotices();
  }
}
