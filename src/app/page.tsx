"use client";
import Link from "next/link";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { LogoutButton } from "@/features/auth/components/logout-button";
import { useLogout } from "@/features/auth/hooks/use-auth";

interface NavigationItem {
  title: string;
  description: string;
  href: string;
}

const items: NavigationItem[] = [
  {
    title: "Home",
    description: "Go back to the main storefront",
    href: "/",
  },
  {
    title: "Login",
    description: "Sign in to your account",
    href: "/login",
  },
  {
    title: "Register",
    description: "Create a new customer or vendor account",
    href: "/register",
  },
  {
    title: "Vendor Dashboard",
    description: "Manage products, orders, and store settings",
    href: "/vendor",
  },
];

export default function Page() {
  const logout = useLogout();
  return (
    <div className="h-screen flex items-center justify-center flex-col  max-w-7xl w-full">
      <div className="space-y-4  max-w-lg w-full">
        {items.map(({ title, description, href }) => (
          <Link key={href} href={href}>
            <Item className="hover:bg-accent">
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </ItemContent>
            </Item>
          </Link>
        ))}

        <Item
          className="hover:bg-accent cursor-pointer"
          onClick={() => logout.mutate()}
        >
          <ItemContent>
            <ItemTitle>Sign out</ItemTitle>
            <ItemDescription>End your current session</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}
