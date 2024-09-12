import { Payment, columns } from "@/lib/data-table/columns";
import { DataTable } from "@/lib/data-table/data-table";
import Link from "next/link";
import React from "react";
import moment from "moment";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      date: moment().format("ddd, hA"),
      transaction: "",
      category: "loan",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      date: moment().format("ddd, hA"),
      transaction: "",
      category: "loan",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      date: moment().format("ddd, hA"),
      transaction: "",
      category: "loan",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      date: moment().format("ddd, hA"),
      transaction: "",
      category: "loan",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      date: moment().format("ddd, hA"),
      transaction: "",
      category: "loan",
    },
  ];
}

const TransactionHistoryBox = async () => {
  const data = await getData();
  return (
    <div className="transaction-history-box">
      <header>
        <p className="font-semibold text-2xl ">Recent transactions</p>
        <Link
          href="/transactions"
          className="inline-block p-1 px-3 text-sm  border-2 border-bankGradient rounded-full text-bankGradient font-semibold"
        >
          View All
        </Link>
      </header>
      <hr />

      <div className="transcation-table">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TransactionHistoryBox;
