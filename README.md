# ServiceWorkerTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Extending the Angular Service Worker

This is an example of how to add your own functionality along side the generated angular service worker. This doesn't replace any of the existing service worker code, but instead you supply you own event listeners. This will let you, for instance, tap into notification clicks and messages and you can handle those events in custom ways that the generated service worker does not support (yet).

The basic idea is that you create your own service worker and register that one in your application. Also, make sure to include your service worker in `angular.json` in the assets array. Then in your service worker, use `importScripts('./ngsw-worker.js');`. Now you have the functionality of the angular service worker, as well as any custom code you can think of.