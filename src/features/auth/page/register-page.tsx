import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "../components/register-form";

export const RegisterPage = () => {
  return (
    <div>
      <Card className="shadow-xl border-none">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
