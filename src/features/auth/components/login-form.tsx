"use client";

import { useForm } from "@tanstack/react-form";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { loginSchema } from "../schemas/auth.schemas";
import { FormInputField } from "./ui/form-input-field";

export const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onBlur: loginSchema,
    },
    onSubmit: async ({ value }) => {
      console.table(value);
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-md">
      <form.Field
        name="email"
        children={(field) => (
          <FormInputField field={field} label="Email" type="email" />
        )}
      />
      <form.Field
        name="password"
        children={(field) => (
          <FormInputField field={field} label="Password" type="password" />
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit} className="w-full">
            {isSubmitting ? "..." : "Submit"}
          </Button>
        )}
      />
    </form>
  );
};
