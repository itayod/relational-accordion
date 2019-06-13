import {Component, OnInit, Input, EventEmitter, Output, ContentChild, TemplateRef, forwardRef} from '@angular/core';
import {AccordionContentDirective} from '../accordion-content.directive';
import {AccordionHeaderDirective} from '../accordion-header.directive';
import {AccordionItem} from '../accordion.model';
import {ACCORDION_ITEM} from '../accordion.tokens';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  providers: [{provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionItemComponent)}]

})
export class AccordionItemComponent implements AccordionItem {

  public isOpen: boolean;
  public itemToggled = new EventEmitter<number>();

  @ContentChild(AccordionHeaderDirective, {read: TemplateRef}) headerTemplate;
  @ContentChild(AccordionContentDirective, {read: TemplateRef}) contentTemplate;

}
