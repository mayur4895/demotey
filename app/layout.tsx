import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { UserProvider } from '@auth0/nextjs-auth0/client';
 
const font = Poppins({ weight:['300','400','500','600','700','800','900'],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracey",
  description: "developed by Alohatechnology",
};
 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
       
      <AppRouterCacheProvider> 
      <UserProvider> 
      <body className={font.className}>
 
      
           {children}
           </body>
     </UserProvider>
     
      </AppRouterCacheProvider>
    </html>
  );
}