"use client";

import React from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

// Giả sử đây là danh sách board của bạn
const MY_BOARDS = [
  { id: "board_001", title: "Dự án Fun To Do M", color: "bg-blue-600" },
  { id: "board_002", title: "Kế hoạch Marketing", color: "bg-orange-500" },
  { id: "board_003", title: "Học tập React", color: "bg-green-600" },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-56px)] w-full bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0065ff]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <section>
          <div className="mb-4 flex items-center gap-2 text-[#44546f]">
            <Clock size={20} />
            <h2 className="text-base font-bold uppercase">
              Các bảng của bạn
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MY_BOARDS.map((board) => (
              <Link
                key={board.id}
                href={`/home/board/${board.id}`}
                className={`group relative h-28 rounded-md ${board.color}
                  p-3 transition-all hover:brightness-90 shadow-sm`}
              >
                <span className="font-bold text-white block">
                  {board.title}
                </span>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </Link>
            ))}

            <div className="flex h-28 cursor-pointer items-center justify-center
              rounded-md bg-[#f1f2f4] text-sm font-medium text-[#44546f]
              hover:bg-[#e6e9ef] transition-colors">
              Tạo bảng mới
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}