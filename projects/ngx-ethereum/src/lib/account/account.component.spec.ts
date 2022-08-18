import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  it('create an instance', () => {
    const account = new AccountComponent();
    expect(account).toBeTruthy();
  });

  it('Check messages', () => {
    const account = new AccountComponent();
    expect(account.message).toEqual('Copy the address');
  });
});
