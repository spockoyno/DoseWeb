import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { observableCombineLatest } from './ui.utils';
import { filter, map, startWith } from 'rxjs/operators';


// tslint:disable:no-any
// tslint:disable:no-invalid-this

// --------------------------------------------------------
// Declarations

declare module '@angular/forms' {
  interface AbstractControl {
    /**
     * Returns an observable containing only the valid values in the numbersForm,
     * including the initial value if it's valid.
     */
    validValueChanges: () => Observable<any>;

    /**
     * Returns an observable containing all the values of the numbersForm,
     * including the initial value.
     */
    allValueChanges: () => Observable<any>;

    /**
     * Returns an observable containing all the statuses of the numbersForm,
     * including the initial status.
     */
    allStatusChanges: () => Observable<any>;
  }
}

// --------------------------------------------------------
// Implementations

AbstractControl.prototype.validValueChanges = function(): Observable<any> {
  return observableCombineLatest([
    this.allValueChanges(),
    this.allStatusChanges()
  ]).pipe(
    filter(([, status]) => status === 'VALID'),
    map(([value]) => value)
  );
};

AbstractControl.prototype.allValueChanges = function(): Observable<any> {
  return this.valueChanges.pipe(startWith(this.value));
};

AbstractControl.prototype.allStatusChanges = function(): Observable<any> {
  return this.statusChanges.pipe(startWith(this.status));
};
