import React from "react";
import AsyncSelect from "react-select/async";
import { Controller, FieldValues } from "react-hook-form";
import { AsyncControllerSelectProps } from "./utils/types";

export const AsyncControllerSelect = <TForm extends FieldValues>({
  name,
  control,
  loadOptions
}: AsyncControllerSelectProps<TForm>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <AsyncSelect
          {...field}
          cacheOptions
          defaultOptions
          loadOptions={loadOptions}
        />
      )}
    />
  );
};
