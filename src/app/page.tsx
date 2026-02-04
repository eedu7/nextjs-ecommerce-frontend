import { LogoutButton } from "@/features/auth/components/logout-button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center max-w-7xl w-full">
      <LogoutButton />
    </div>
  );
}
