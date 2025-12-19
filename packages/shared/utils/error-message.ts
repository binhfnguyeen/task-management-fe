export interface ErrorResponse {
  response?: {
    data: {
      error: {
        message: string;
      };
    };
  };
}

export function getErrorMessage(
  error: ErrorResponse,
  errorMap?: Record<string, string>,
  fallback = "Something went wrong",
): string {
  const messageCode = error.response?.data.error.message;

  if (!messageCode) return fallback;

  if (errorMap) {
    return errorMap[messageCode] || fallback;
  }
  return messageCode;
}