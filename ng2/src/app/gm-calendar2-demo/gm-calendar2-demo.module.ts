import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { GmCalendarModule } from 'gm.calendar2';
import { GmCalendar2DemoComponent } from './gm-calendar2-demo.component';

@NgModule({
  imports: [
    CommonModule,
    GmCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent
      }
    ])
  ],
  declarations: [DemoComponent, GmCalendar2DemoComponent],
  entryComponents: [GmCalendar2DemoComponent]
})
export class GmCalendar2DemoModule { }
