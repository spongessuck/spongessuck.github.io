import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GmDayViewItem,
         eventItemsToDayViewItems } from 'gm.calendar2';

@Component({
  selector: 'app-calendar2-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  monthDate = new Date(new Date().setHours(12, 0, 0, 0));
  items: GmDayViewItem[] = eventItemsToDayViewItems([
    {
      title: 'Sample Event',
      date: this.monthDate,
      startTime: {
        hours: 12,
        minutes: 0
      },
      endTime: {
        hours: 13,
        minutes: 0
      }
    }
  ])
  mode: 'month' | 'day';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.mode = params['mode'] || 'month';
    });
  }

}
