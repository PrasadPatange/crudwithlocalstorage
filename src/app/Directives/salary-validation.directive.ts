import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[SalaryValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SalaryValidationDirective,
    multi: true
  }]
})
export class SalaryValidationDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    const Phone = new RegExp('^(?!0+(?:\.0+)?$)[0-9]+(?:\.[0-9]+)?$');
    if (!Phone.test(control.value) && control.value) {
      return { 'salaryValidation': true };
    }
    return null;
  }
}

// ^[1-9][0-9]*(\.[0-9])?
// (?![0.]+$)[0-9]+(?:\\.[0-9]+)?