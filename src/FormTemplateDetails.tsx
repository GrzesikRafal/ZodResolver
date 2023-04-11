import React from "react";
import { useFormContext } from "react-hook-form";
import { AsyncControllerSelect } from "./AsyncSelect";
import { useAsyncControllerSelect } from "../src/utils/useAsyncControllerSelect";
import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/react";
import { OptionType } from "./utils/types";

interface FormTemplateDetailsProps {
  name: string;
  options: OptionType[];
  placeholder?: string;
  label?: string;
}

export const FormTemplateDetails = ({
  name,
  options,
  placeholder,
  label
}: FormTemplateDetailsProps) => {
  const { control, formState } = useFormContext();
  const { promiseOptions } = useAsyncControllerSelect(options);

  const errors = formState.errors;

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <FormControl isInvalid={Boolean(errors[name])}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <AsyncControllerSelect
            control={control}
            name={name}
            loadOptions={promiseOptions}
            placeholder={placeholder}
          />
          {errors[name] && (
            <FormErrorMessage>
              {errors?.[name]?.message?.toString()}
            </FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
    </Grid>
  );
};
