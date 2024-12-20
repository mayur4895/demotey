// app/page.tsx
import { Button, Typography } from "@mui/material";
import Header from "./components/Header";
import { getSession } from "@auth0/nextjs-auth0";

export default async function  Home() {
const {user}:any = await getSession();
  console.log(user);
  
  return (
    <>
    <Header/>
    </>
  );
}
