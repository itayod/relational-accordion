import {Component, OnInit, Input, ContentChild, TemplateRef, AfterContentInit, ContentChildren} from '@angular/core';
import {AccordionContentDirective} from './accordion-content.directive';
import {AccordionHeaderDirective} from './accordion-header.directive';
import {AccordionItemComponent} from './accordion-item/accordion-item.component';
import {AccordionItem, AccordionWrapper} from './accordion.model';
import {ACCORDION_ITEM} from './accordion.tokens';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements  AfterContentInit, AccordionWrapper {

  private activeIndex: number;
  @ContentChildren(<any> ACCORDION_ITEM) items: AccordionItem[];

  public ngAfterContentInit(): void {
    this.items.forEach((item: AccordionItem, index) => {
      item.itemToggled.subscribe(() => this.itemToggledHandler(index));
    });
  }

  public itemToggledHandler(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
    this.items.forEach((item: AccordionItem, index) => {
      item.isOpen = index === this.activeIndex;
    });
  }
}
