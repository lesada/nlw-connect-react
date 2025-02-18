import { z } from "zod";

export const subscriptionFormSchema = z.object({
  name: z.string().nonempty().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

export type TSubscriptionForm = z.infer<typeof subscriptionFormSchema>;
