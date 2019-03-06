import { Component, OnInit, Input } from '@angular/core';
import { Hero, HEROES } from '../mock-heroes';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  selectedHero: Hero;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedHero = HEROES.find(hero => hero.id === id);
    console.log(this.selectedHero);
  }

}
