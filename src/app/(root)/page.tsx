import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalancebox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

import NextRepaymentBox from "@/components/NextRepaymentBox";
import TransactionHistoryBox from "@/components/TransactionHistoryBox";
import CardsBox from "@/components/CardsBox";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname || "Guest"}
            // user="Guest"
            subtext="Access and manage your account and transactions efficiently"
          />
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <TotalBalancebox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={0}
            />
            <NextRepaymentBox nextRepaymentAmount={0} />
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-5">
          <TransactionHistoryBox />
          <CardsBox />
        </div>
      </div>
    </section>
  );
};

export default Home;
