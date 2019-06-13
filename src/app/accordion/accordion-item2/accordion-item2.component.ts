import {Component, OnInit, EventEmitter, Input, forwardRef} from '@angular/core';
import {AccordionItem} from '../accordion.model';
import {ACCORDION_ITEM} from '../accordion.tokens';

@Component({
  selector: 'app-accordion-item2',
  templateUrl: './accordion-item2.component.html',
  styleUrls: ['./accordion-item2.component.scss'],
  providers: [{provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionItem2Component)}]
})
export class AccordionItem2Component implements AccordionItem {

  public isOpen: boolean;
  public itemToggled = new EventEmitter<number>();

  @Input() content: string;

}
