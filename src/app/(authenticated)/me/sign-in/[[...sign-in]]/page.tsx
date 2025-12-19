"use client";

import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { ErrorResponse, getErrorMessage } from "../../../../../../packages/shared/utils/error-message";
import { fetchSignIn, FormDataSignIn, SignInResponse } from "@/lib/auth-api";
import { toast } from "sonner";
import { userMessageErrorMap } from "../../../../../../packages/shared/constants/user-message-error";
import { setValueToCookie } from "../../../../../../packages/auth/server/server-action";
import Link from "next/link";

export default function SignInPage() {
  const [formData, setFormData] = useState<FormDataSignIn>({
    mail: "",
    password: "",
  });

  const mutation = useMutation<SignInResponse, ErrorResponse, FormDataSignIn>({
    mutationFn: async (values) => {
      const payload = {
        ...values,
        mail: values.mail.trim().toLowerCase(),
      };
      return await fetchSignIn(payload);
    },
    onSuccess: async (data) => {
      if (data?.access_token) {
        await setValueToCookie("access_token", data.access_token, { maxAge: data.expires_in });
        if (data.refresh_token) {
          await setValueToCookie("refresh_token", data.refresh_token, { maxAge: data.refresh_expires_in });
        }
        toast.success("Chào mừng bạn quay trở lại!");
        window.location.href = "/home";
      }
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, userMessageErrorMap));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9fafc] p-6">
      <div className="w-full max-w-[400px] rounded-sm bg-white p-8 shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-[#172b4d] mb-2 tracking-tight">Trello</h1>
          <p className="text-[#5e6c84] font-semibold">Đăng nhập để tiếp tục</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              value={formData.mail}
              placeholder="Nhập email..."
              onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
              className="w-full rounded-[3px] border-2 border-[#dfe1e6] bg-[#fafbfc] px-3 py-2 text-[#172b4d] transition-all focus:border-[#4c9aff] focus:bg-white outline-none"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={formData.password}
              placeholder="Nhập mật khẩu..."
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-[3px] border-2 border-[#dfe1e6] bg-[#fafbfc] px-3 py-2 text-[#172b4d] transition-all focus:border-[#4c9aff] focus:bg-white outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full rounded-[3px] bg-[#0065ff] py-2 font-bold text-white transition-all hover:bg-[#0747a6] active:bg-[#0052cc] disabled:bg-[#ebecf0] disabled:text-[#a5adba]"
          >
            {mutation.isPending ? "Đang xử lý..." : "Tiếp tục"}
          </button>
        </form>

        <div className="mt-6 border-t border-[#dfe1e6] pt-6 text-center">
          <Link href="/me/sign-up" className="text-sm text-[#0052cc] hover:underline">
            Tạo tài khoản mới
          </Link>
        </div>
      </div>
    </div>
  );
}