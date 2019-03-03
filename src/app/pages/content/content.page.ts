import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  eventState = 'Content';

  scrollCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  logScrollStart() {
    this.scrollCounter += 1;
  }

  logScrolling($event) {
    this.eventState = 'Scrolling...';
  }

  logScrollEnd() {
    this.eventState = 'Scroll has ended';
  }
}
