import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "./validationSchema";
import { FormTemplateDetails } from "./FormTemplateDetails";
import { Box, Divider, Button } from "@chakra-ui/react";

const options = [
  { value: "mother1", label: "mother1" },
  { value: "mother112", label: "mother112" },
  { value: "mother13", label: "mother13" }
];

export const Form = () => {
  const resolver = zodResolver(step2Schema);
  const methods = useForm({ resolver });

  const onSubmit: SubmitHandler<any> = (data) => {
    const formData = methods.getValues();
    console.log("Wysłane dane:", formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box mt={5}>
          <FormTemplateDetails
            name="mother"
            options={options}
            label="Add mother"
          />
        </Box>
        <Divider m={5} ml={0} />

        <Button variant={"outline"} type="submit">
          submit
        </Button>
      </form>
    </FormProvider>
  );
};
