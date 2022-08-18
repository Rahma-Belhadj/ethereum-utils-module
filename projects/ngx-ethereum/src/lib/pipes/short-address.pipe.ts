import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortAddress',
})
export class ShortAddressPipe implements PipeTransform {
  static readonly ADDRESS_MAX_LENGTH = 42;

  transform(value: string | null | undefined): string {
    if (value === null) {
      return '';
    }
    if (value === undefined) {
      return '';
    }
    if (value === '') {
      return '';
    }
    if (value.length !== ShortAddressPipe.ADDRESS_MAX_LENGTH) {
      // not a valid address
      return '';
    }
    return `${value.substring(0, 6)}...${value.slice(-4)}`;
  }
}
