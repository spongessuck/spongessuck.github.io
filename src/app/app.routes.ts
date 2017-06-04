import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'gm.calendar2',
    loadChildren: './gm-calendar2-demo/gm-calendar2-demo.module#GmCalendar2DemoModule'
  }
];
