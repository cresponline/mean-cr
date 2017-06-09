import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NoticesComponent } from './notices.component';
import { NoticesService } from './notices.service';

@NgModule({
  declarations: [
    NoticesComponent,
    NoticesService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [NoticesComponent, NoticesService],
  providers: [],
  bootstrap: [NoticesComponent]
})
export class NoticesModule { }
