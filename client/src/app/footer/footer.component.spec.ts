import { TestBed, async } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the footer', async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const footer = fixture.debugElement.componentInstance;
    expect(footer).toBeTruthy();
  }));

  it(`should have as copyright 'Salva Crespo 2017'`, async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const footer = fixture.debugElement.componentInstance;
    expect(footer.copyright).toEqual('Salva Crespo 2017');
  }));

  it(`should render copyright 'Salva Crespo 2017' in an a tag`, async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Salva Crespo 2017');
  }));
});
