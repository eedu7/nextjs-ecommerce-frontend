interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  // TODO: Make sure only vendor, staff can access this
  return children;
}
