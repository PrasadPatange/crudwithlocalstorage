import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[PhoneValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneValidationDirective,
    multi: true
  }]
})
export class PhoneValidationDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    const Phone = new RegExp('^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$');
    if (!Phone.test(control.value) && control.value) {
      return { 'phoneValidation': true };
    }
    return null;
  }
}

// ^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$