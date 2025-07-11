import React from "react";

function Hero() {
  return (
    <div className="container  ">
      <div className="row text-center mt-5 border-bottom mb-5">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mb-5 mt-2">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row ">
        <div className="col-4 p-5 text-center">
          <img src="images\pricing0.svg" />
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="images/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
