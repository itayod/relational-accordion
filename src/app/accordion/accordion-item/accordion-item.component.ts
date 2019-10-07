import {Component, EventEmitter, forwardRef} from '@angular/core';
import {AccordionItem} from '../accordion.model';
import {ACCORDION_ITEM} from '../accordion.tokens';

@Component({
  selector : 'app-accordion-item',
  template : `
    <li
        class="accordion-item"
        [class.open]="isOpen"
        (click)="itemToggled.emit()"
    >
      <div class="item-header">
        Accordion Item 1.
      </div>
      <div class="item-content">
        Accordion Item 1 Content.
      </div>
    </li>
  `,
  styleUrls: ['./accordion-item.component.scss'],
  providers: [{provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionItemComponent)}]

})
export class AccordionItemComponent implements AccordionItem {

  public isOpen: boolean;
  public itemToggled = new EventEmitter<number>();

}
