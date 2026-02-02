import { Button } from "@/components/ui/button";

export const SocialLogin = () => {
  return (
    <div className="w-full flex justify-center items-center gap-x-4">
      <Button
        variant="outline"
        size="icon"
        className="text-rose-600 hover:text-rose-800"
        disabled
      >
        G
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="text-blue-600 hover:text-blue-800"
        disabled
      >
        F
      </Button>
    </div>
  );
};
