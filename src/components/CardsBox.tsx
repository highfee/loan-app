import Image from "next/image";
import React from "react";

const CardsBox = () => {
  return (
    <div className="cards-box">
      <header className="cards-box-header">
        <p>My Cards</p>
        <button>+ New Card</button>
      </header>
      <hr />

      <section>
        <section className="cards-container">
          <div>
            <Image
              src="/icons/left.svg"
              alt="left icon"
              height={28}
              width={28}
            />
          </div>
          <div className="cards"></div>
          <div>
            <Image
              src="/icons/right.svg"
              alt="left icon"
              height={28}
              width={28}
            />
          </div>
        </section>

        {/* <div className="cards-nav-container">
          <span className="cards_nav active"></span>
          <span className="cards_nav "></span>
          <span className="cards_nav "></span>
        </div> */}
      </section>
    </div>
  );
};

export default CardsBox;
