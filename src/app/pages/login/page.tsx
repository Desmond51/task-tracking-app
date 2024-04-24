"use client"
import Header from "@/app/components/Header"
import Login from "@/app/components/Login"

export default function LoginPage() {
    return (
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="signup/signup"
            />
            <Login />
        </>
    )
}