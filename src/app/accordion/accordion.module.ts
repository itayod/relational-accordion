import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionContentDirective} from './accordion-content.directive';
import {AccordionHeaderDirective} from './accordion-header.directive';
import {AccordionItemComponent} from './accordion-item/accordion-item.component';
import {AccordionComponent} from './accordion.component';
import { AccordionItem2Component } from './accordion-item2/accordion-item2.component';

export const declarations = [AccordionItemComponent, AccordionItem2Component, AccordionContentDirective, AccordionHeaderDirective, AccordionComponent];

@NgModule({
  declarations: [...declarations],
  exports: declarations,
  imports: [
    CommonModule
  ]
})
export class AccordionModule { }
