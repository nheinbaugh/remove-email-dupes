import { ChefStepsPage } from './app.po';

describe('chef-steps App', function() {
  let page: ChefStepsPage;

  beforeEach(() => {
    page = new ChefStepsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
