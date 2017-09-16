import { WorldwebPage } from './app.po';

describe('worldweb App', () => {
  let page: WorldwebPage;

  beforeEach(() => {
    page = new WorldwebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
