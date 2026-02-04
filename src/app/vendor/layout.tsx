import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { VendorSidebar } from "@/features/vendor/components/vendor-sidebar";

interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  // TODO: Make sure only vendor, staff can access this
  return (
    <SidebarProvider>
      <VendorSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
