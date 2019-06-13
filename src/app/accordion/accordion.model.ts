import {EventEmitter} from '@angular/core';

export interface AccordionWrapper {
  items: AccordionItem[];
}

export interface AccordionItem {
  itemToggled: EventEmitter<number>;
  isOpen: boolean;
}
