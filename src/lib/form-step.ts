export const FORM_STEPS = [
  // Step 1 - Demographics
  ["age", "ethnicity", "country"],

  // Step 2 - Reproductive History
  [
    "menarcheAge",
    "hasChildren",
    "firstChildAge",
  ],

  // Step 3
  [
    "numberOfChildren",
    "breastfed",
    "menopause",
  ],

  // Step 4
  [
    "menopauseAge",
    "familyBreastCancer",
    "firstDegreeRelativesCount",
  ],

  // Step 5
  [
    "youngestDiagnosisAge",
    "familyOvarianCancer",
    "familyBRCA",
  ],

  // Step 6
  [
    "hadBreastBiopsy",
    "breastBiopsyCount",
    "atypicalHyperplasiaOrLCIS",
  ],

  // Step 7
  [
    "usedHRT",
    "oralContraceptive5Years",
    "height",
  ],

  // Step 8
  [
    "weight",
    "alcoholFrequency",
    "smokingStatus",
  ],

  // Step 9
  ["exerciseFrequency"],
] as const;