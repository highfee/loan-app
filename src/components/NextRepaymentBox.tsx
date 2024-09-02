import Animatedcounter from "./Animatedcounter";

const NextRepaymentBox = ({ nextRepaymentAmount }) => {
  return (
    <section className="total-balance">
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Next loan repayment </h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Due: October 3, 2024</p>

          <div className="total-balance-amount flex-center gap-2">
            <Animatedcounter amount={nextRepaymentAmount} />
          </div>
        </div>
      </div>

      <div>
        <button className="repay-button">Make payment</button>
      </div>
    </section>
  );
};

export default NextRepaymentBox;
