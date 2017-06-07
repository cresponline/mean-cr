import { MeanCrPage } from './page-objects/app.po';

describe('mean-cr App', () => {
  let page: MeanCrPage;

  beforeEach(() => {
    page = new MeanCrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
