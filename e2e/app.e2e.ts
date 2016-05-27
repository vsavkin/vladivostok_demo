import { TryNgrxRouterPage } from './app.po';

describe('try-ngrx-router App', function() {
  let page: TryNgrxRouterPage;

  beforeEach(() => {
    page = new TryNgrxRouterPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('try-ngrx-router works!');
  });
});
