import { formatAmount } from "@/lib/utils";
import React from "react";
import Animatedcounter from "./Animatedcounter";
// import Doughnutchart from "./Doughnutchart";

const TotalBalancebox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: 1 </h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <Animatedcounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>

      <div className="text-bankGradient">
        <button>+ Top up</button>
      </div>
    </section>
  );
};

export default TotalBalancebox;
