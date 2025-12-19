"use client";

import React from "react";
import { KanbanColumn } from "../../components/kanban-column";
import { useParams } from "next/navigation";

const MOCK_DATA = [
    {
        id: "col-1",
        title: "Cần làm",
        cards: [{ id: "c1", title: "Thiết kế UI cho Fun To Do M" }, { id: "c2", title: "Cấu hình API Gateway" }]
    },
    {
        id: "col-2",
        title: "Đang làm",
        cards: [{ id: "c3", title: "Tích hợp Server Action cho Cookie" }]
    },
    {
        id: "col-3",
        title: "Hoàn thành",
        cards: [{ id: "c4", title: "Setup Project Next.js" }, { id: "c5", title: "Cấu hình Docker Compose" }]
    }
];

export default function BoardDetailPage() {
    const params = useParams();
    const boardId = params.boardId;

    return (
        <div className="flex h-[calc(100vh-56px)] w-full flex-col bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#0065ff]">
            <div className="flex items-center justify-between px-4 py-3 bg-black/10 backdrop-blur-sm">
                <h1 className="text-lg font-bold text-white uppercase tracking-wider">
                    Đang xem bảng: <span className="text-orange-300">{boardId}</span>
                </h1>
            </div>

            <div className="flex flex-1 overflow-x-auto overflow-y-hidden p-4">
                <div className="flex h-full items-start gap-3">
                    {MOCK_DATA.map((column) => (
                        <KanbanColumn key={column.id} title={column.title} cards={column.cards} />
                    ))}

                    <div className="w-72 shrink-0">
                        <button className="flex w-full items-center gap-2 rounded-xl bg-white/20 p-3 text-sm font-bold text-white hover:bg-white/30 transition-colors">
                            + Thêm danh sách khác
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}