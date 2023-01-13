import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[NameMaxLengthValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameMaxLengthDirective,
    multi: true
  }]
})
export class NameMaxLengthDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length > 10) {
      return { 'maxlengthvalidation': true };
    }
    return null;
  }
}