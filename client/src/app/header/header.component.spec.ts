import { TestBed, async } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the header', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  }));

  it(`should have as title 'welcome to the darkZone!'`, async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header.title).toEqual('welcome to the darkZone!');
  }));

  it(`should render title 'welcome to the darkZone!' in an a tag`, async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('welcome to the darkZone!');
  }));
});
