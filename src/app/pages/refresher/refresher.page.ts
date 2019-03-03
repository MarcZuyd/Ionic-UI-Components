import { Component } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage {
  begin = 'Begin async operation...';
  end = 'Async operation has ended';

  eventState = 'Refresher';

  constructor() {}

  doRefresh(event) {
    this.eventState = this.begin;
    console.log(this.begin);
    setTimeout(() => {
      this.eventState = this.end;
      console.log(this.end);
      event.target.complete();
    }, 2000);
  }


}
