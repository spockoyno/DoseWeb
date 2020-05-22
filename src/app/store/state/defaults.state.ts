import {AppModel, ClinicalModel, DoseModel, KappaModel, PreclinicalModel} from './app.model';
import {twoLogs_THETA} from '../../models/biphasic-hill.model';


export function initialAppState( ): AppModel {

  const doses: DoseModel = {
    small:  undefined,
    medium:  undefined,
    large:  undefined,
    xxl: undefined
  }
  const kappa: KappaModel = {
    kappaAssumed: 10,
    kappaMultipleDown: 1,
    kappaMultipleUp: 1,
  }
  const preclinical: PreclinicalModel = {


   doseInterval: {min: 0.1, step: 0.25, max: 10000 },
    biHillModel: twoLogs_THETA
  }

  const clinical: ClinicalModel = {

    dosesPreclinicalScale: doses,

    minimumResponseTarget: 100,
  kappaModel: kappa
  }

  return {preclinical: preclinical, clinical: clinical}; }




