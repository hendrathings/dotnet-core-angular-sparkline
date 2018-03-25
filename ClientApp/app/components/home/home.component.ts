import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
// import * as $ from 'jquery'
// import 'jquery-sparkline';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {

        $('.inlinesparkline').sparkline();

        /* Sparklines can also take their values from the first argument
        passed to the sparkline() function */
        const myvalues = [10, 8, 5, 7, 4, 4, 1];
        $('.dynamicsparkline').sparkline(myvalues);

        /* The second argument gives options such as chart type */
        $('.dynamicbar').sparkline(myvalues, { type: 'bar', barColor: 'green' });

        /* Use 'html' instead of an array of values to pass options
        to a sparkline with data in the tag */
        $('.inlinebar').sparkline('html', { type: 'bar', barColor: 'red' });
    }
}
