import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FloatingActionButtonPage } from './floating-action-button.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingActionButtonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FloatingActionButtonPage]
})
export class FloatingActionButtonPageModule {}
