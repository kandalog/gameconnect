import { z } from "zod";

export const formatZodErrors = (error: z.ZodError): Record<string, string> => {
  const issues = error.issues;
  return issues.reduce(
    (errors, issue) => {
      errors[issue.path.join(".")] = issue.message;
      return errors;
    },
    {} as Record<string, string>,
  );
};
