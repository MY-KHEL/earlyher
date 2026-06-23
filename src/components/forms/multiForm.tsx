"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { FORM_STEPS } from "@/lib/form-step";
import { QUESTIONS } from "@/lib/questions";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { formSchema } from "@/app/schema/test-schema";
import { useRouter } from "next/navigation";
// import { log } from "console";

type FormValues = z.infer<typeof formSchema>;

export function MultiStepForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const {
    step,
    next,
    previous,
    isFirst,
    isLast,
  } = useMultiStepForm(FORM_STEPS.length);

  const currentStepFields = FORM_STEPS[step];
 console.log(FORM_STEPS.length,step)

 const pageNumber = step + 1
 const totalNumber = FORM_STEPS.length 

 const progress =( pageNumber/totalNumber)*100
 
 console.log(progress);

 const router = useRouter()
 

  const handleNext = async () => {
    const valid = await form.trigger(
      [...currentStepFields] as (keyof FormValues)[]        
    );

    if (!valid) return;
    console.log('valid:', valid);
    
    next();
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
     localStorage.setItem(
      "formResult",
      JSON.stringify(data)
    );
    router.push('/demo/result')

  };

  return (
    <>
    <div className="w-[95dvw] mx-auto  mt-10 h-2 rounded-full bg-gray-400/30 relative mb-10">
    <div className={`absolute bg-[#3c8e65] rounded-l-full h-full` } style={{ width: `${progress}%` }}></div>
    </div>
    
    <form className="p-3 min-h-[40vh] flex-col flex  justify-center items-cente" onSubmit={form.handleSubmit(onSubmit,  (errors) => {
      console.log("FORM ERRORS:", errors);
    })}>
      <div className="space-y-8">
        {currentStepFields.map((fieldName) => {
          const question = QUESTIONS.find(
            (q) => q.name === fieldName
          );

          if (!question) return null;

          // Conditional rendering
          if (question.dependsOn) {
            const watchedValue = form.watch(
              question.dependsOn as keyof FormValues
            );

            if (watchedValue !== question.showWhen) {
              return null;
            }
          }

          return (
            <div
              key={question.name}
              className="space-y-3"
            >
              <label className="block font-medium text-2xl">
                {question.label}
              </label>

              {/* Number */}
              {question.type === "text" && (
                <input
                  type="text"
                  {...form.register(
                    question.name as keyof FormValues
                  )}
                  placeholder={question.placeholder}
                  className="w-full rounded-md border p-3"
                />
              )}

              {/* Select */}
              {question.type === "select" && (
                <select
                  {...form.register(
                    question.name as keyof FormValues
                  )}
                  className="w-full rounded-md border p-3"
                >
                  <option value="">
                    Select an option
                  </option>

                  {question.options?.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {/* Radio */}
              {question.type === "radio" && (
                <div className="space-y-2">
                  {question.options?.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        value={option}
                        {...form.register(
                          question.name as keyof FormValues
                        )}
                      />

                      {option}
                    </label>
                  ))}
                </div>
              )}

              {/* Error */}
              {form.formState.errors[
                question.name as keyof FormValues
              ] && (
                <p className="text-sm text-red-500">
                  {
                    form.formState.errors[
                      question.name as keyof FormValues
                    ]?.message as string
                  }
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col-reverse text-lg font-medium w-full  gap-4 mt-8">
        {!isFirst && (
          <button
            type="button"
            onClick={previous}
            className="text-black/60"
          >
            Previous
          </button>
        )}

        {isLast ? (
          <button type="submit" className="bg-[#3c8e65] p-3 rounded-full  text-white">
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#3c8e65] p-3 rounded-full  text-white"
          >
            Next
          </button>
        )}
      </div>
    </form>
    </>

  );
}