
export const QUESTIONS = [
  // SECTION A — DEMOGRAPHICS
  {
    name: "age",
    label: "What is your age?",
    type: "text",
  },

  {
    name: "ethnicity",
    label: "What is your ethnic background?",
    type: "select",
    options: [
      "African",
      "African-American",
      "Mixed African ancestry",
      "Other",
    ],
  },

  {
    name: "country",
    label: "What country do you live in?",
    type: "text",
  },

  // SECTION B — REPRODUCTIVE HISTORY

  {
    name: "menarcheAge",
    label:
      "At what age did you have your first period (menarche)?",
    type: "select",
    options: [
      "< 12",
      "12-13",
      "14+",
      "I don't remember",
    ],
  },

  {
    name: "hasChildren",
    label:
      "Have you given birth to any children?",
    type: "radio",
    options: ["Yes", "No"],
  },

  {
    name: "firstChildAge",
    label:
      "If yes, at what age did you have your first child?",
    type: "select",
    options: [
      "< 20",
      "20-24",
      "25-29",
      "30+",
      "N/A",
    ],

    // Optional metadata for conditional rendering
    dependsOn: "hasChildren",
    showWhen: "Yes",
  },

  {
    name: "numberOfChildren",
    label:
      "How many children have you given birth to?",
    type: "select",
    options: ["0", "1", "2", "3", "4+"],

    dependsOn: "hasChildren",
    showWhen: "Yes",
  },

  {
    name: "breastfed",
    label:
      "Did you breastfeed your children?",
    type: "radio",
    options: ["Yes", "No", "N/A"],

    dependsOn: "hasChildren",
    showWhen: "Yes",
  },

  {
    name: "menopause",
    label: "Have you reached menopause?",
    type: "radio",
    options: ["Yes", "No", "Not sure"],
  },

  {
    name: "menopauseAge",
    label:
      "If yes, at what age did menopause begin?",
    type: "select",
    options: ["< 45", "45-54", "55+", "N/A"],

    dependsOn: "menopause",
    showWhen: "Yes",
  },

  // SECTION C — FAMILY HISTORY

  {
    name: "familyBreastCancer",
    label:
      "Has your mother, sister, or daughter ever been diagnosed with breast cancer?",
    type: "radio",
    options: ["Yes", "No", "Not sure"],
  },

  {
    name: "firstDegreeRelativesCount",
    label:
      "How many first-degree relatives have had breast cancer?",
    type: "select",
    options: ["0", "1", "2+"],

    dependsOn: "familyBreastCancer",
    showWhen: "Yes",
  },

  {
    name: "youngestDiagnosisAge",
    label:
      "At what age was the youngest of them diagnosed?",
    type: "select",
    options: ["< 40", "40-50", "> 50", "N/A"],

    dependsOn: "familyBreastCancer",
    showWhen: "Yes",
  },

  {
    name: "familyOvarianCancer",
    label:
      "Has anyone in your family had ovarian cancer?",
    type: "radio",
    options: ["Yes", "No", "Not sure"],
  },

  {
    name: "familyBRCA",
    label:
      "Has anyone in your family tested positive for BRCA1 or BRCA2 gene mutation?",
    type: "radio",
    options: ["Yes", "No", "I don't know"],
  },

  // SECTION D — PERSONAL MEDICAL HISTORY

  {
    name: "hadBreastBiopsy",
    label: "Have you ever had a breast biopsy?",
    type: "radio",
    options: ["Yes", "No"],
  },

  {
    name: "breastBiopsyCount",
    label:
      "If yes, how many breast biopsies have you had?",
    type: "select",
    options: ["0", "1", "2+"],

    dependsOn: "hadBreastBiopsy",
    showWhen: "Yes",
  },

  {
    name: "atypicalHyperplasiaOrLCIS",
    label:
      "Have you been told you had atypical hyperplasia or LCIS?",
    type: "radio",
    options: ["Yes", "No", "I don't know"],
  },

  {
    name: "usedHRT",
    label:
      "Have you ever used hormone replacement therapy (HRT)?",
    type: "radio",
    options: ["Yes", "No"],
  },

  {
    name: "oralContraceptive5Years",
    label:
      "Have you used oral contraceptives for more than 5 years?",
    type: "radio",
    options: ["Yes", "No"],
  },

  // SECTION E — LIFESTYLE

  {
    name: "height",
    label: "What is your height?",
    type: "text",
    placeholder: "e.g. 170 cm",
  },

  {
    name: "weight",
    label: "What is your weight?",
    type: "text",
    placeholder: "e.g. 70 kg",
  },

  {
    name: "alcoholFrequency",
    label:
      "How often do you drink alcohol?",
    type: "select",
    options: [
      "Never",
      "Occasionally",
      "1-2 drinks/week",
      "3+ drinks/week",
    ],
  },

  {
    name: "smokingStatus",
    label:
      "Do you smoke or have you smoked regularly?",
    type: "select",
    options: [
      "Never",
      "Former smoker",
      "Current smoker",
    ],
  },

  {
    name: "exerciseFrequency",
    label:
      "How often do you exercise?",
    type: "select",
    options: [
      "Never",
      "1-2 days/week",
      "3-5 days/week",
      "Daily",
    ],
  },
];