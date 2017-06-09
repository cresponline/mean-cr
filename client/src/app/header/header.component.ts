import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'welcome to the darkZone!';
  clanIconUrl = '../assets/img/16000026.png';
}
