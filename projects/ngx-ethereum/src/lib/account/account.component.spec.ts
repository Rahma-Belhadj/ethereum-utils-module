import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortAddressPipe } from '../pipes/short-address.pipe';
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let span: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountComponent, ShortAddressPipe],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    span = fixture.nativeElement.querySelector('span');
  });

  it('create an instance', () => {
    const account = new AccountComponent();
    expect(account).toBeTruthy();
  });

  it('should check the message', () => {
    const account = new AccountComponent();
    fixture.detectChanges();
    expect(account.message).toEqual('Copy the address');
  });

  it('span should contains the  account address', () => {
    expect(span.textContent).toContain(component.accountAddress);
  });

  it('span should contains the  account address with a short size', () => {
    component.accountAddress = '0x7D4cC6cA482E0c522E0A223515F6234eD86E6A57';
    fixture.detectChanges();
    expect(span.textContent).toContain('0x7D4c...6A57');
  });
});
