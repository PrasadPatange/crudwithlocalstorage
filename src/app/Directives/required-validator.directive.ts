import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[RequiredValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: RequiredValidatorDirective,
    multi: true
  }]
})
export class RequiredValidatorDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (!control.value) {
      return { 'requiredField': true };
    }
    return null;
  }
}