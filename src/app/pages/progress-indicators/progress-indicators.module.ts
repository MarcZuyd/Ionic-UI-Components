import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgressIndicatorsPage } from './progress-indicators.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressIndicatorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgressIndicatorsPage]
})
export class ProgressIndicatorsPageModule {}
