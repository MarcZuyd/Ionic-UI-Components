import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  items = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push( this.items.length + 1 );
    }
  }

  ngOnInit() {

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.push( this.items.length + 1);
      }

      console.log('Async operation has ended');
      infiniteScroll.target.complete();
    }, 500);
  }
}
