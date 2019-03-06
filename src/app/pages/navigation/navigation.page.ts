import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
