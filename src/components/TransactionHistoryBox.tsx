import Link from "next/link";
import React from "react";

const TransactionHistoryBox = () => {
  return (
    <div className="transaction-history-box">
      <header>
        <p className="font-semibold text-2xl ">Recent transactions</p>
        <Link
          href="/transactions"
          className="inline-block p-1 px-3 text-sm  border-2 border-bankGradient rounded-full text-bankGradient"
        >
          View All
        </Link>
      </header>
      <hr />
    </div>
  );
};

export default TransactionHistoryBox;
