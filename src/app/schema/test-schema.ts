import * as z from 'zod'

export const formSchema = z.object({
    age:z.string().min(1,'Input your age'),
    ethnicity:z.string().min(1,'Select an Option'),
    country:z.string().min(1,'Select an Option'),
   menarcheAge: z.enum([
      "< 12",
      "12-13",
      "14+",
      "I don't remember",
    ]),

    hasChildren: z.enum(["Yes", "No"]),

    firstChildAge: z
      .enum(["< 20", "20-24", "25-29", "30+", "N/A"]).optional(),

    numberOfChildren: z
      .enum(["0", "1", "2", "3", "4+"]).optional(),

    breastfed: z
      .enum(["Yes", "No", "N/A"]).optional(),

    menopause: z.enum([
      "Yes",
      "No",
      "Not sure",
    ]),

    menopauseAge: z
      .enum(["< 45", "45-54", "55+", "N/A"]).optional(),

    // Section C — Family History
    familyBreastCancer: z.enum([
      "Yes",
      "No",
      "Not sure",
    ]),

    firstDegreeRelativesCount: z
      .enum(["0", "1", "2+"]).optional(),

    youngestDiagnosisAge: z
      .enum(["< 40", "40-50", "> 50", "N/A"]).optional(),

    familyOvarianCancer: z.enum([
      "Yes",
      "No",
      "Not sure",
    ]),

    familyBRCA: z.enum([
      "Yes",
      "No",
      "I don't know",
    ]),

    // Section D — Personal Medical History
    hadBreastBiopsy: z.enum(["Yes", "No"]),

    breastBiopsyCount: z
      .enum(["0", "1", "2+"]).optional(),

    atypicalHyperplasiaOrLCIS: z.enum([
      "Yes",
      "No",
      "I don't know",
    ]),

    usedHRT: z.enum(["Yes", "No"]),

    oralContraceptive5Years: z.enum([
      "Yes",
      "No",
    ]),

    // Section E — Lifestyle
    height: z
      .string().min(1,'Input your height'),

    weight: z
    .string().min(1,'Input your width'),

    alcoholFrequency: z.enum([
      "Never",
      "Occasionally",
      "1-2 drinks/week",
      "3+ drinks/week",
    ]),

    smokingStatus: z.enum([
      "Never",
      "Former smoker",
      "Current smoker",
    ]),

    exerciseFrequency: z.enum([
      "Never",
      "1-2 days/week",
      "3-5 days/week",
      "Daily",
    ]),
  })
  .superRefine((data, ctx) => {
    // Children-related questions
    if (data.hasChildren === "Yes" ) {
      if (!data.firstChildAge) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["firstChildAge"],
          message: "Please specify age at first child",
        });
      }

      if (!data.numberOfChildren) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["numberOfChildren"],
          message: "Please specify number of children",
        });
      }

      if (!data.breastfed) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["breastfed"],
          message: "Please specify breastfeeding history",
        });
      }
    }

    // Menopause-related question
    if (data.menopause === "Yes" && !data.menopauseAge) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["menopauseAge"],
        message: "Please specify age at menopause",
      });
    }

    // Family breast cancer follow-up questions
    if (
      data.familyBreastCancer === "Yes"
    ) {
      if (!data.firstDegreeRelativesCount) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["firstDegreeRelativesCount"],
          message:
            "Please specify the number of relatives affected",
        });
      }

      if (!data.youngestDiagnosisAge) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["youngestDiagnosisAge"],
          message:
            "Please specify the age of the youngest diagnosis",
        });
      }
    }

    // Breast biopsy follow-up
    if (
      data.hadBreastBiopsy === "Yes" &&
      !data.breastBiopsyCount
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["breastBiopsyCount"],
        message:
          "Please specify the number of breast biopsies",
      });
    }



})