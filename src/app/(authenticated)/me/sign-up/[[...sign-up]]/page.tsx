"use client";

import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { ErrorResponse, getErrorMessage } from "../../../../../../packages/shared/utils/error-message";
import { fetchSignUp, FormDataSignUp } from "@/lib/auth-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userMessageErrorMap } from "../../../../../../packages/shared/constants/user-message-error";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataSignUp>({
    mail: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const mutation = useMutation<void, ErrorResponse, FormDataSignUp>({
    mutationFn: async (values) => {
      await fetchSignUp({ ...values, mail: values.mail.trim().toLowerCase() });
    },
    onSuccess: () => {
      toast.success("Đăng ký thành công! Hãy đăng nhập ngay.");
      router.replace("/me/sign-in");
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
          <p className="text-[#5e6c84] font-semibold">Đăng ký tài khoản Trello</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Họ"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-1/2 rounded-[3px] border-2 border-[#dfe1e6] bg-[#fafbfc] px-3 py-2 focus:border-[#4c9aff] focus:bg-white outline-none text-[#172b4d]"
              required
            />
            <input
              type="text"
              placeholder="Tên"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-1/2 rounded-[3px] border-2 border-[#dfe1e6] bg-[#fafbfc] px-3 py-2 focus:border-[#4c9aff] focus:bg-white outline-none text-[#172b4d]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Nhập email..."
              value={formData.mail}
              onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
              className="w-full rounded-[3px] border-2 border-[#dfe1e6] bg-[#fafbfc] px-3 py-2 focus:border-[#4c9aff] focus:bg-white outline-none text-[#172b4d]"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Tạo mật khẩu..."
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-[3px] border-2 border-[#dfe1e6] bg-[#fafbfc] px-3 py-2 focus:border-[#4c9aff] focus:bg-white outline-none text-[#172b4d]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full rounded-[3px] bg-[#0065ff] py-2 font-bold text-white transition-all hover:bg-[#0747a6] active:bg-[#0052cc] disabled:bg-[#ebecf0]"
          >
            {mutation.isPending ? "Đang tạo tài khoản..." : "Đăng ký"}
          </button>
        </form>

        <div className="mt-6 border-t border-[#dfe1e6] pt-6 text-center text-sm text-[#5e6c84]">
          Bạn đã có tài khoản?{" "}
          <Link href="/me/sign-in" className="text-[#0052cc] hover:underline">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}