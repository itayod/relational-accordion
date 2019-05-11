import {Component} from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  title          = 'relational-accordion';
  accordionItems = [
    {header: 'itay', content: 'content'},
    {header: 'noaa', content: 'content'},
    {header: 'eliran', content: 'content'}
  ];
}
