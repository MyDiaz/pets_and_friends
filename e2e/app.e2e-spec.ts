import { AngularLoginPage } from './app.po';

describe('Angular login App', () => {
  let page: AngularLoginPage;

  beforeEach(() => {
    page = new AngularLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
