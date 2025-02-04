import { z } from "zod";

const viteEnvSchema = z.object({
    VITE_API_URL: z.string().url(),
})

export const {success,data,error} = viteEnvSchema.safeParse(import.meta.env);

if (error) {
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  throw new Error("Invalid env");
}

export const viteEnvVariables = data!
