import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  copyright = 'Salva Crespo 2017';
  gitHubUrl = 'https://github.com/cresponline';
}
