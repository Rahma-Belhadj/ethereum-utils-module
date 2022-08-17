import { ShortAddressPipe } from './short-address.pipe';

describe('ShortAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortAddressPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new ShortAddressPipe();
    expect(
      pipe.transform('0x7D4cC6cA482E0c522E0A223515F6234eD86E6A57')
    ).toEqual('0x7D4c...6A57');
  });
});
