import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountComponent } from './account/account.component';
import { NgxEthereumComponent } from './ngx-ethereum.component';
import { ShortAddressPipe } from './pipes/short-address.pipe';

@NgModule({
  declarations: [NgxEthereumComponent, ShortAddressPipe, AccountComponent],
  imports: [MatTooltipModule],
  exports: [NgxEthereumComponent],
})
export class NgxEthereumModule {}
