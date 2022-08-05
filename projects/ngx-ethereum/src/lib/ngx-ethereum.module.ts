import { NgModule } from '@angular/core';
import { NgxEthereumComponent } from './ngx-ethereum.component';
import { ShortAddressPipe } from './pipes/short-address.pipe';

@NgModule({
  declarations: [NgxEthereumComponent, ShortAddressPipe],
  imports: [],
  exports: [NgxEthereumComponent],
})
export class NgxEthereumModule {}
