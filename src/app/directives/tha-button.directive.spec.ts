/* tslint:disable:no-unused-variable */

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ThaButtonDirective } from './tha-button.directive';

describe('Directive: ThaButton', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let buttons: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ThaButtonDirective, ButtonComponent],
    }).createComponent(ButtonComponent);

    fixture.detectChanges();
    buttons = fixture.debugElement.queryAll(By.directive(ThaButtonDirective));
  });

  it('should add .tha-button class to all buttons', () => {
    const buttonsWithClass = buttons.filter((button) =>
      button.nativeNode.classList.contains('tha-button')
    );

    expect(buttonsWithClass.length).toBe(2);
  });

  it('should add .tha-primary to 1st button', () => {
    const hasClass = buttons[0].nativeNode.classList.contains('tha-primary');

    expect(hasClass).toBeTrue();
  });

  it('should add .tha-secondary to 2nd button', () => {
    const hasClass = buttons[1].nativeNode.classList.contains('tha-secondary');

    expect(hasClass).toBeTrue();
  });
});

@Component({
  template: `
    <button tha-button>Confirmar</button>
    <button tha-button color="secondary">Confirmar</button>
  `,
})
class ButtonComponent {}
