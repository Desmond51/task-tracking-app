"use client"
import Image from "next/image";
import LoginPage from "./pages/login/page";
import SignupPage from "./pages/signup/Signup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <LoginPage /> */}
     <SignupPage />
    </main>
  );
}
