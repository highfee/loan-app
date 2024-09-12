"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  date: string;
  transaction: string;
  category: "loan" | "deposit" | "repayment" | "withdrawal";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "transaction",
    header: "Transaction",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];
