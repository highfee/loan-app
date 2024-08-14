import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalancebox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            // user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={120050}
          />
        </header>
        {/* <RecentTransactions
      accounts={accountsData}
      transactions={account?.transactions}
      appwriteItemId={appwriteItemId}
      page={currentPage}
    /> */}
      </div>
      {/* <RightSidebar
    user={loggedIn}
    transactions={account?.transactions}
    banks={accountsData?.slice(0, 2)}
  /> */}
    </section>
  );
};

export default Home;
