import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { THAButtonColors } from '../enums/tha-button-colors.enum';

@Directive({
  selector: '[tha-button]',
})
export class ThaButtonDirective {
  constructor(renderer: Renderer2, hostElement: ElementRef) {
    const color: THAButtonColors =
      hostElement.nativeElement.getAttribute('color') ||
      THAButtonColors.Primary;

    renderer.addClass(hostElement.nativeElement, 'tha-button');
    renderer.addClass(hostElement.nativeElement, `tha-${color}`);
  }
}
