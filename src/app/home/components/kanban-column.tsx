"use client";

import React from "react";
import { MoreHorizontal, Plus } from "lucide-react";

interface CardProps {
  id: string;
  title: string;
}

interface ColumnProps {
  title: string;
  cards: CardProps[];
}

export const KanbanColumn = ({ title, cards }: ColumnProps) => {
  return (
    <div className="w-72 shrink-0 rounded-xl bg-[#f1f2f4] pb-2 shadow-sm">
      <div className="flex items-center justify-between p-3">
        <h2 className="px-2 text-sm font-semibold text-[#172b4d]">{title}</h2>
        <button className="rounded-md p-1 hover:bg-black/5">
          <MoreHorizontal size={16} className="text-[#44546f]" />
        </button>
      </div>

      <div className="flex flex-col gap-2 px-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group cursor-pointer rounded-lg bg-white p-3 shadow-sm ring-1 ring-black/5 hover:ring-[#0065ff]"
          >
            <p className="text-sm text-[#172b4d]">{card.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 px-2">
        <button className="flex w-full items-center gap-2 rounded-lg p-2 text-sm font-medium text-[#44546f] hover:bg-black/5">
          <Plus size={16} />
          Thêm thẻ
        </button>
      </div>
    </div>
  );
};