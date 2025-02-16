import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) return null;
  const signInwithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };
  return (
    <Button
      onClick={signInwithGoogle}
      variant={"secondary"}
      className="w-full text-white border-zinc-200 h-11 cursor-pointer rounded-[0.5rem] flex justify-between items-center hover:bg-zinc-700"
    >
      Continue with <img src="/google.png" className="size-8" />
    </Button>
  );
};

export default SignInOAuthButton;
