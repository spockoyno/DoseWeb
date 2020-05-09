import { ValidationErrors } from '@angular/forms';
import { FormControl } from './forms.utils';

import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

export { combineLatest as observableCombineLatest } from 'rxjs'

export function toValidationErrors(
  errorTitles: string[]
): ValidationErrors | null {
  if (errorTitles.length === 0) {
    return null
  }

  return errorTitles
}
export function processUndifined(
  isRequired: boolean,
  error: string = 'bad or missing value'
): ValidationErrors | null {
  const ans = isRequired ? [error] : []
  return toValidationErrors(ans)
}

export function formErrors(form: {
  errors: ValidationErrors | null
}): string[] {
  const errors = form.errors
  return errors === null ? [] : Object.values(errors)
}

//todo: move? Also, more generic signature? or just check errers
export function validationErrorsFromControl<T extends FormControl<any>>(
  control: T | undefined
): string[] {
  if (notDefined(control)) {
    return []
  }
  return control!.errors === null
    ? []
    : Object.values(control!.errors).filter(
        value => value.toString() !== 'true'
      )
}

//Todo: create a dedicated services readService from these functions. Move
// to a better place
export const filterUndefined = () => <T>(source: Observable<T>) =>
  source.pipe(
    filter(
      (value: T): value is T extends undefined | null ? never : T =>
        value !== undefined && value !== null
    )
  )


export function notDefined(v: any): boolean {
  return !isDefined(v);
}

export function isDefined(v: any): boolean {
  return v !== null && v !== undefined;
}

