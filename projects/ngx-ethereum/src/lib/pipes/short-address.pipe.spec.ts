import { ShortAddressPipe } from './short-address.pipe';

describe('ShortAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortAddressPipe();
    expect(pipe).toBeTruthy();
  });

  it('reduce the size of the account address', () => {
    const pipe = new ShortAddressPipe();
    expect(
      pipe.transform('0x7D4cC6cA482E0c522E0A223515F6234eD86E6A57')
    ).toEqual('0x7D4c...6A57');
  });

  it('the pipe is no longer displayed if the address is null', () => {
    const pipe = new ShortAddressPipe();
    expect(pipe.transform(null)).toEqual('');
  });

  it('the pipe is no longer displayed if the address is undefined', () => {
    const pipe = new ShortAddressPipe();
    expect(pipe.transform(undefined)).toEqual('');
  });

  it('the pipe is no longer displayed if the ADDRESS_MAX_LENGTH is different from 42 digits', () => {
    const pipe = new ShortAddressPipe();
    expect(pipe.transform('0x7D4cC6cA482E0c522E0A223515F6234eD86E6A')).toEqual(
      ''
    );
  });

  it('the pipe is no longer displayed  when the address is empty', () => {
    const pipe = new ShortAddressPipe();
    expect(pipe.transform('')).toEqual('');
  });
});
