import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[EmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    const Email = new RegExp('[^ @]*@[^ @]*');
    if (!Email.test(control.value) && control.value) {
      return { 'emailValidation': true };
    }
    return null;
  }
}

// "[^ @]*@[^ @]*"