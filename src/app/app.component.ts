import { Component } from '@angular/core';
import { NoticesService } from '../notices/notices.service';


@Component({
  selector: 'app-root',
  providers: [NoticesService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
