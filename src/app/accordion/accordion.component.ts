import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  public activeIndex: number;
  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  public openItem(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
  }
}
