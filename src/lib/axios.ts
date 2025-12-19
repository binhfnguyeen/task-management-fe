import axios from "axios";

export const taskApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 10000,
});

export type ApiError = {
    message: string
}

type AxiosErrorPayload = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

export const extractApiError = (error: unknown): string => {
  const payload = error as AxiosErrorPayload;
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in payload &&
    typeof payload.response?.data?.message === "string"
  ) {
    return payload.response?.data?.message ?? "Đã xảy ra lỗi.";
  }

  return "Đã xảy ra lỗi. Vui lòng thử lại.";
};