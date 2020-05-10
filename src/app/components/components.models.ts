export const NUMBER_INPUT_WIDTH = 6;

export const tooltip_DELAY = 800;

export interface NumberInputSpec {
  isInteger: boolean;
  min: number;
  max: number;
  isRequired: boolean;
  step: number | undefined;

  displayedMinimum?: number | undefined; // due to "bug" in HTML

}

export interface SliderInputModel  {

  initialValue: number;
  min: number;
  max: number;
  step: number;


}
