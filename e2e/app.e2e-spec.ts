import { ShoppingCartNewPage } from './app.po';

describe('shopping-cart-new App', function() {
  let page: ShoppingCartNewPage;

  beforeEach(() => {
    page = new ShoppingCartNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sc works!');
  });
});
