import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { CupsTableComponent }  from './cups-table.component';
import { DashboardComponent }  from './dashboard.component';
import { CupsFormComponent }  from './cups-form.component';
import { CupService } from './cup.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: 'cups-table',
          component: CupsTableComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'cupsform',
          component: CupsFormComponent
        },
        {
          path: '',
          redirectTo: '/cupsform',
          pathMatch: 'full'
        },
      ])
    ],
  declarations: [
      AppComponent,
      DashboardComponent,
      CupsTableComponent,
      CupsFormComponent
    ],
  providers: [CupService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }