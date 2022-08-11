# NgxEthereum

The goal of this library is to be published as npm packages and we can import it in multiple Apps, also it will enhance code reusability and avoid various bad practices or architectural mistakes that can make it difficult to decouple and reuse code in the future.

### Table of Contents

- [Descrition](#description)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [How To Use](#how-to-use)
- [Further Help](#further-help)

## Description

An Angular library is an Angular project that differs from an application in that it cannot run on its own. Also it must be imported and used in an application.
Libraries extend Angular's base functionality and can be used locally in your workspace, or it can be published as npm packages to share with other projects or other Angular developers.

## Technologies-used

[Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Setup

Run `ng new ethereum-utils-module --no-create-application` and `ng generate library ngx-ethereum` to generate a new library skeleton in a new workspace

The `ng generate` command creates the projects/ngx-ethereum folder in your workspace, which contains a component and a service inside an NgModule.

Run `ng generate component component-name --project ngx-ethereum` to generate a new component.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-ethereum`.

> Note: Don't forget to add `--project ngx-ethereum` or else it will be added to the default project in your `angular.json` file.

> Note: The `public-api.ts` will be used to export all the entities (like modules, components, services or directives) that belong to the particular sub-entry, it makes library code reusable.

> Run `ng build ngx-ethereum` to build the project. The build artifacts will be stored in the `dist/` directory.

## How-to-use

After building your library with `ng build ngx-ethereum`, go to the dist folder `cd dist/ngx-ethereum` and run `npm publish`.

Run `ng test ngx-ethereum` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help`,
or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) and (https://angular.io/guide/creating-libraries) pages.
