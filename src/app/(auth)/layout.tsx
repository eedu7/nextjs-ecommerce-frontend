import { requireUnAuth } from "@/lib/auth-utils";

interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  await requireUnAuth();
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
}
