import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";

export default function UserPage() {
  const { protect } = auth();

  protect();
  return (
    <div className="flex items-center justify-center p-4">
      <UserProfile appearance={{ baseTheme: dark }} path="/user" />
    </div>
  );
}
