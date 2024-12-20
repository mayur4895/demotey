// next-auth.d.ts

import { User as Auth0User } from "@auth0/nextjs-auth0";

declare module "@auth0/nextjs-auth0" {
  interface User extends Auth0User {
    role: string;
  }
}
