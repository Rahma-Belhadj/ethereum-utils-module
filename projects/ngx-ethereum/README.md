# NgxEthereum

The goal of this library is to be published as npm packages and we can import it in multiple Apps, also it will enhance code reusability and avoid various bad practices or architectural mistakes that can make it difficult to decouple and reuse code in the future.

## Summary

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage Examples](#usage-examples)
- [Further Help](#further-help)

## General Information

Libraries extend Angular's base functionality and can be used locally in your workspace, or it can be published as npm packages to share with other projects or other Angular developers.

## Technologies Used

[Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Getting Started

These instructions will cover the basics of building an Angular component library and publishing it to the npm store.

### Setup

Run `ng new ethereum-utils-module --no-create-application` and `ng generate library ngx-ethereum` to generate a new library skeleton in a new workspace.

> Note: The `ng generate` command creates the projects/ngx-ethereum folder in your workspace, which contains a component and a service inside an NgModule.

Run `ng generate component component-name --project ngx-ethereum` to generate a new component.

> Note: Don't forget to add `--project ngx-ethereum` or else it will be added to the default project in your `angular.json` file.

> Note: The `public-api.ts` will be used to export all the entities (like modules, components, services or directives) that belong to the particular sub-entry, it makes library code reusable.

### Build

Run `ng build ngx-ethereum` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library, go to the dist folder `cd dist/ngx-ethereum` and run `npm publish`.

### Running unit tests

Run `ng test ngx-ethereum` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Usage Examples

This library exposes an account component which allows us to display
the account address and copy it.

Here we have a little code demonstration :

We set this code block in account.component.ts :

```
export class AccountComponent {
  @Input()
  accountAddress!: string;

  @ViewChild(MatTooltip)
  tooltip!: MatTooltip;

  message = 'Copy the address';

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

```

And we set this code block in account.component.html :

```
 <span
    [title]="accountAddress"
    #tooltip
    matTooltipPosition="below"
    [matTooltip]="message"
    (click)="onCopyToClipboard()">
    {{ accountAddress | shortAddress }}
  </span>
```

Also, this library exposes a short address pipe which allows us to reduce the size of the account address.

```
@Pipe({
  name: 'shortAddress',
})
export class ShortAddressPipe implements PipeTransform {
  static readonly ADDRESS_MAX_LENGTH = 42;

  transform(value: string): string {
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
```

## Further Help

To get more help on the Angular CLI use `ng help`,
or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) and (https://angular.io/guide/creating-libraries) pages.
