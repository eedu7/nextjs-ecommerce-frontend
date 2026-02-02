import z from "zod";

export const loginSchema = z.object({
  email: z.email({
    error: "Required",
  }),
  password: z.string({
    error: "Required",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    username: z
      .string({
        error: "Required",
      })
      .min(3, {
        error: "Username must be at least 3 characters long",
      })
      .max(30, {
        error: "Username must not exceed 30 characters",
      }),
    email: z.email(),
    password: z
      .string({
        error: "Required",
      })
      .min(8, { error: "Password must be at least 8 characters long" })
      .refine((password) => /[A-Z]/.test(password), {
        error: "Password must contain at least one uppercase letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        error: "Password must contain at least one lower letter",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        error: "Password must contain at least one special character",
      }),

    confirmPassword: z.string({
      error: "Required",
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      error: "Password does not match.",
      path: ["confirmPassword"],
    },
  );

export type RegisterSchema = z.infer<typeof registerSchema>;
