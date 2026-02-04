"use client";

import { useForm } from "@tanstack/react-form";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useRegister } from "../hooks/use-auth";
import { registerSchema } from "../schemas/auth.schemas";
import { FormInputField } from "./ui/form-input-field";

export const RegisterForm = () => {
  const { mutateAsync, isPending } = useRegister();
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onDynamic: registerSchema,
    },
    onSubmit: async ({ value }) => {
      mutateAsync({
        username: value.username,
        email: value.email,
        password: value.password,
      });
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
        name="username"
        children={(field) => <FormInputField field={field} label="Username" />}
      />
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
      <form.Field
        name="confirmPassword"
        children={(field) => (
          <FormInputField
            field={field}
            label="Confirm Password"
            type="password"
          />
        )}
      />
      <form.Subscribe
        children={() => (
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "..." : "Submit"}
          </Button>
        )}
      />
    </form>
  );
};
