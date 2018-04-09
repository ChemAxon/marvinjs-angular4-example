import { MjsExamplePage } from './app.po';

describe('mjs-example App', () => {
  let page: MjsExamplePage;

  beforeEach(() => {
    page = new MjsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
