import Header from "@/app/components/Header";
import Signup from "@/app/components/Signup";

export default function SignupPage() {
    return (
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/Loginpage"
            />
            <Signup />
        </>
    )
}