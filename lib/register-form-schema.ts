import * as z from "zod";

export const registerFormSchema = z.object({
  email: z.string().email().min(8, {
    message: "Email must be at least 8 characters",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});
