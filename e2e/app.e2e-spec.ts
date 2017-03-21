import { Ng2ComboboxPage } from './app.po';

describe('ng2-combobox App', () => {
  let page: Ng2ComboboxPage;

  beforeEach(() => {
    page = new Ng2ComboboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
