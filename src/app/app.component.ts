import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ServiceWorkerTest';

  constructor(private swPush: SwPush) {}

  ngOnInit() {
    this.swPush.messages.subscribe(message => {
      console.log(message);
    })
  }
}
