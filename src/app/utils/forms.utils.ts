import { Observable } from 'rxjs';
import {
  FormGroup as AngularFormGroup,
  FormArray as AngularFormArray,
  FormControl as AngularFormControl,
  AbstractControl as AngularAbstractControl,
  FormBuilder as AngularFormBuilder,
  ValidatorFn as AngularValidatorFn,
  AsyncValidatorFn as AngularAsyncValidatorFn,
  ValidationErrors,
  AbstractControlOptions as AngularAbstractControlOptions
} from '@angular/forms';

import './forms.extensions';
import { Injectable } from '@angular/core';

/**
 * The status of the control.
 */
export type Status = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';

//Todo add get leafControl: FormControl<T> method, to get single-value control. Maybe not possible.
//as can't add a generic function to a prototype.
//But maybe define a PenultimateFormGroup /FormArray , whose next fields  are leaves, ie, have FormControls.
//Or define a function.

/**
 * Typed {@link AngularAbstractControl}.
 */
export interface AbstractControl<T> extends AngularAbstractControl {
  readonly value: T;
  valueChanges: Observable<T>;
  readonly status: Status | string; // this `string` is needed to satisfy the compiler
  statusChanges: Observable<Status>;

  get<K extends keyof T>(
    path: K
  ): T[K] extends unknown[]
    ? FormArray<T[K][number]>
    : AbstractControl<T[K]> | null;


  get<K extends keyof T, K2 extends keyof NonNullable<T[K]>>(
    path: [K, K2]
  ): NonNullable<T[K]>[K2] extends unknown[]
    ? FormArray<NonNullable<T[K]>[K2][number]>
    : AbstractControl<NonNullable<T[K]>[K2]> | null;

  setValue(
    value: T,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  patchValue(
    value: Partial<T>,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  reset(value: T, options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  allValueChanges(): Observable<T>;

  validValueChanges(): Observable<T>;
}

/**
 * Typed {@link AngularFormControl}.
 */
export interface FormControl<T> extends AngularFormControl, AbstractControl<T> {
  readonly value: T;
  valueChanges: Observable<T>;
  readonly status: Status;
  statusChanges: Observable<Status>;

  get<K extends keyof T>(
    path: K
  ): T[K] extends unknown[] ? FormArray<T[K][number]> : AbstractControl<T[K]>;

  get<K extends keyof T, K2 extends keyof NonNullable<T[K]>>(
    path: [K, K2]
  ): NonNullable<T[K]>[K2] extends unknown[]
    ? FormArray<NonNullable<T[K]>[K2][number]>
    : AbstractControl<NonNullable<T[K]>[K2]>;

  setValue(
    value: T,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  patchValue(
    value: Partial<T>,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  reset(value?: T, options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  allValueChanges(): Observable<T>;

  validValueChanges(): Observable<T>;

  allStatusChanges(): Observable<Status>;
}

/**
 * Typed {@link AngularFormGroup}.
 */
export interface FormGroup<T> extends AngularFormGroup, AbstractControl<T> {
  controls: { [P in keyof T]: AbstractControl<T[P]> };
  readonly value: T;
  valueChanges: Observable<T>;
  readonly status: Status;
  statusChanges: Observable<Status>;

  registerControl<K extends keyof T>(
    name: K,
    control: AbstractControl<T[K]>
  ): AbstractControl<T[K]>;

  registerControl<V>(
    name: string,
    control: AbstractControl<V>
  ): AbstractControl<V>;

  addControl<K extends keyof T>(name: K, control: AbstractControl<T[K]>): void;

  addControl(name: string, control: AbstractControl<unknown>): void;

  removeControl(name: keyof T): void;

  removeControl(name: string): void;

  setControl<K extends keyof T>(name: K, control: AbstractControl<T[K]>): void;

  setControl(name: string, control: AbstractControl<unknown>): void;

  contains(name: keyof T): boolean;

  contains(name: string): boolean;

  get<K extends keyof T>(
    path: K
  ): T[K] extends unknown[] ? FormArray<T[K][number]> : AbstractControl<T[K]>;

  get<K extends keyof T, K2 extends keyof NonNullable<T[K]>>(
    path: [K, K2]
  ): NonNullable<T[K]>[K2] extends unknown[]
    ? FormArray<NonNullable<T[K]>[K2][number]>
    : AbstractControl<NonNullable<T[K]>[K2]>;

  getRawValue(): T;

  setValue(
    value: T,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  patchValue(
    value: T,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  reset(value?: T, options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  allValueChanges(): Observable<T>;

  validValueChanges(): Observable<T>;

  allStatusChanges(): Observable<Status>;
}

/**
 * Typed {@link AngularFormArray}.
 */
export interface FormArray<T> extends AngularFormArray, AbstractControl<T[]> {
  controls: AbstractControl<T>[];
  readonly value: T[];
  valueChanges: Observable<T[]>;
  readonly status: Status;
  statusChanges: Observable<Status>;

  at(index: number): AbstractControl<T>;

  push(ctrl: AbstractControl<T>): void;

  insert(index: number, control: AbstractControl<T>): void;

  setControl(index: number, control: AbstractControl<T>): void;

  getRawValue(): T[];

  get(
    path: number
  ): T extends unknown[] ? FormArray<T[number]> : AbstractControl<T>;

  get<K extends keyof NonNullable<T>>(
    path: [number, K]
  ): NonNullable<T>[K] extends unknown[]
    ? FormArray<NonNullable<T>[K][number]>
    : AbstractControl<NonNullable<T>[K]>;

  setValue(
    value: T[],
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  patchValue(
    value: T[],
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  reset(
    value?: T[],
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;

  allValueChanges(): Observable<T[]>;

  validValueChanges(): Observable<T[]>;

  allStatusChanges(): Observable<Status>;
}

// --------------------------------------------------------
/**
 * Typed {@link AngularValidatorFn}.
 */
export interface ValidatorFn<T, E extends ValidationErrors = ValidationErrors>
  extends AngularValidatorFn {
  (control: AbstractControl<T>): E | null;
}

/**
 * Typed {@link AngularAsyncValidatorFn}.
 */
export interface AsyncValidatorFn<T,
  E extends ValidationErrors = ValidationErrors> extends AngularAsyncValidatorFn {
  (control: AbstractControl<T>): Observable<E | null>;
}

/**
 * Typed {@link AngularAbstractControlOptions}.
 */
export interface AbstractControlOptions<T>
  extends AngularAbstractControlOptions {
  validators?: ValidatorFn<T> | ValidatorFn<T>[] | null;

  asyncValidators?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null;
}

// --------------------------------------------------------
// Form builder

/**
 * Arguments which can be passed into a builder item.
 */
type BuilderArgs<T> =
  | T
  | undefined
  | [T | undefined]
  | [T | undefined, ValidatorFn<T>]
  | [T | undefined, ValidatorFn<T>[]]
  | AbstractControl<T>;

/**
 * Typed {@link AngularFormBuilder}.
 */
@Injectable({providedIn:'root'})
export class FormBuilder extends AngularFormBuilder {
  group<T>(
    controlsConfig: { [K in keyof T]: BuilderArgs<T[K]> },
    options?: AbstractControlOptions<T>
  ): FormGroup<T> {
    return super.group(controlsConfig, options) as FormGroup<T>;
  }

  array<T>(
    controlsConfig: BuilderArgs<T>[],
    validatorOrOpts?:
      | ValidatorFn<T>
      | ValidatorFn<T>[]
      | AbstractControlOptions<T>
      | null,
    asyncValidators?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[]
  ): FormArray<T> {
    return super.array(
      controlsConfig,
      validatorOrOpts,
      asyncValidators
    ) as FormArray<T>;
  }

  control<T>(
    state: T,
    validatorOrOpts?:
      | ValidatorFn<T>
      | ValidatorFn<T>[]
      | AbstractControlOptions<T>
      | null,
    asyncValidators?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[]
  ): FormControl<T> {
    return super.control(
      state,
      validatorOrOpts,
      asyncValidators
    ) as FormControl<T>;
  }
}
