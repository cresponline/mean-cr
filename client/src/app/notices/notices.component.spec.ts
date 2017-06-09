import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesComponent } from './notices.component';
import { NoticesService } from './notices.service';

describe('NoticesComponent', () => {
  let component: NoticesComponent;
  let fixture: ComponentFixture<NoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesComponent ],
      providers: [ NoticesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
