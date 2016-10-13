import { Angular2QuandoPage } from './app.po';

describe('angular2-quando App', function() {
  let page: Angular2QuandoPage;

  beforeEach(() => {
    page = new Angular2QuandoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
