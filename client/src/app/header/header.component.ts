import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
   @Output() toggleLogin = new EventEmitter();

   ngOnInit() {}

  title = 'welcome to the darkZone!';
  clanIconUrl = '../assets/img/16000026.png';

  showLogin():void {
    console.log('showLogin header');
    this.toggleLogin.emit();
  }
}
