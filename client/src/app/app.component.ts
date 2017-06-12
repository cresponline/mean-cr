import { Component  } from '@angular/core';
import { NoticesService } from './notices/notices.service';


@Component({
  selector: 'app-root',
  providers: [NoticesService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loginVisible : boolean;

  constructor() {}

  ngOnInit(): void {
    this.loginVisible = false;
  }

  handleLogin ():void {
    this.loginVisible = !this.loginVisible;
    console.log('app', this.loginVisible);
  }
}
