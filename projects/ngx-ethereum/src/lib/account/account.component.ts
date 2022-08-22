import { Component, Input, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'lib-ngx-ethereum',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  @Input()
  accountAddress: string = '';

  @ViewChild(MatTooltip)
  tooltip!: MatTooltip;

  public message = 'Copy the address';

  async onCopyToClipboard() {
    await navigator.clipboard.writeText(this.accountAddress).then(() => {
      this.tooltip.show();
      this.message = 'copied !';
      setTimeout(() => {
        this.message = 'Copy the address';
      }, 3000);
    });
  }
}
