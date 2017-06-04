import { NgNewPage } from './app.po';

describe('ng-new App', () => {
  let page: NgNewPage;

  beforeEach(() => {
    page = new NgNewPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
