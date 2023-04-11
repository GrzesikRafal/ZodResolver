import { z } from "zod";

const FormTemplateDetailsSchema = z
  .object({
    value: z.string().nonempty("Wartość nie może być pusta"),
    label: z.string().nonempty("Etykieta nie może być pusta")
  })
  .refine((v) => v.value === null, "Musisz wybrać opcję");

export const step2Schema = z.object({
  mother: FormTemplateDetailsSchema
});
