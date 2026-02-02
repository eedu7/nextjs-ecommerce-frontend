import type { AnyFieldApi } from "@tanstack/react-form";
import { FieldError } from "@/components/ui/field";

export const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  const { isTouched, isValid, isValidating, errors } = field.state.meta;

  return (
    <div className="ml-1">
      <FieldError>
        {isTouched &&
          !isValid &&
          errors.map((error) => (
            <em className="inline-block" key={error.message}>
              {error.message}
            </em>
          ))}
      </FieldError>
      {isValidating && <span>Validating…</span>}
    </div>
  );
};
