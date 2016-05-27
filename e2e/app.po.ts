export class TryNgrxRouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('try-ngrx-router-app h1')).getText();
  }
}
