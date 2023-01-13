import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[NameMinLengthValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameMinLengthDirective,
    multi: true
  }]
})
export class NameMinLengthDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length < 3) {
      return { 'minlengthvalidation': true };
    }
    return null;
  }
}
