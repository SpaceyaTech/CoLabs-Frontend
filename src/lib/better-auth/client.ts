import { viteEnvVariables } from "@/env";
import { createAuthClient } from "better-auth/client";
export const authClient = createAuthClient({
    baseURL:viteEnvVariables.VITE_API_URL
});
