import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountComponent } from './account/account.component';
import { ShortAddressPipe } from './pipes/short-address.pipe';

@NgModule({
  declarations: [ShortAddressPipe, AccountComponent],
  imports: [MatTooltipModule],
  exports: [],
})
export class NgxEthereumModule {}
