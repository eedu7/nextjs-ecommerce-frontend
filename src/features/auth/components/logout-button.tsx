"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "../hooks/use-auth";

export const LogoutButton = () => {
  const { mutateAsync } = useLogout();

  return <Button onClick={() => mutateAsync()}>Logout</Button>;
};
