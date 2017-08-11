import { FriendsappPage } from './app.po';

describe('friendsapp App', () => {
  let page: FriendsappPage;

  beforeEach(() => {
    page = new FriendsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
