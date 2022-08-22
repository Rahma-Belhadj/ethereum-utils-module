import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountComponent } from './account/account.component';
import { ShortAddressPipe } from './pipes/short-address.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ShortAddressPipe, AccountComponent],
  imports: [MatTooltipModule, CommonModule],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NgxEthereumModule {}
