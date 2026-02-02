import type { AnyFieldApi } from "@tanstack/react-form";
import type { ComponentPropsWithoutRef } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FieldInfo } from "./field-info";

type InputProps = ComponentPropsWithoutRef<typeof Input>;

interface Props extends Omit<InputProps, "name" | "value" | "onChange"> {
  field: AnyFieldApi;
  label: string;
}

export const FormInputField = ({ field, label, ...inputProps }: Props) => {
  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <div className="space-y-1">
        <Input
          id={field.name}
          name={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          {...inputProps}
        />
        <FieldInfo field={field} />
      </div>
    </Field>
  );
};
